/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  MiniMap,
  Controls,
  Node,
  Edge,
  Background,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Link, useParams } from "react-router-dom";
import { PEOPLE_API, FILMS_API } from "../../api";
import {
  CinemaNode,
  StarShipNode,
  PageLoader,
  PersonDetails,
} from "../../components";
import { BreadcrumbItem, Breadcrumbs, Card, CardBody } from "@nextui-org/react";
import { Person as PersonType } from "@/types";

const defaultViewport = { x: 0, y: 400, zoom: 0 };

export const Person = () => {
  const { id } = useParams();
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [personDetails, setPersonDetails] = useState({} as PersonType);

  const fetchPerson = async () => {
    setIsLoading(true);
    const response = await PEOPLE_API.getPerson(Number(id));
    setPersonDetails(response);
    setIsLoading(false);
  };

  const fetchPersonDetails = async () => {
    try {
      setIsLoading(true);
      const person = await PEOPLE_API.getPerson(Number(id));

      if (!person || !person.id) {
        console.error("Person data not found");
        setIsLoading(false);
        return;
      }

      const personNode: Node = {
        id: `person-${personDetails?.id}`,
        data: {
          label: (
            <h1 className="text-3xl text-gray-800 dark:text-gray-800">
              {personDetails.name}
            </h1>
          ),
        },
        position: { x: 1200, y: 250 },
        style: { width: 400 },
      };

      const filmNodesPromises = personDetails?.films.map(
        async (filmId, index) => {
          try {
            const film = await FILMS_API.getFilm(filmId);

            if (!film || !film.id) {
              console.error(`Film data not found for id ${filmId}`);
              return { filmNode: null, starshipNodes: [], starshipEdges: [] };
            }

            const filmNode: Node = {
              id: `film-${film.id}`,
              data: {
                label: <CinemaNode id={film.id} />,
              },
              position: { x: 400 * index + 200, y: 400 },
              style: { width: 300 },
            };

            const starshipNodes: Node[] = film.starships
              .filter((starshipId: number) => !!starshipId)
              .map((starshipId: number, idx: number) => ({
                id: `film-${filmId}-starship-${starshipId}`,
                data: { label: <StarShipNode id={String(starshipId)} /> },
                position: {
                  x: 800 * index + 200,
                  y: 1000 + 750 * idx,
                },
                style: { width: 300 },
              }));

            const starshipEdges: Edge[] = film.starships.map(
              (starshipId: number) => ({
                id: `edge-film-${film.id}-starship-${starshipId}`,
                source: `film-${film.id}`,
                target: `film-${filmId}-starship-${starshipId}`,
                animated: true,
                style: { stroke: "blue" },
              })
            );

            return { filmNode, starshipNodes, starshipEdges };
          } catch (error) {
            console.error(`Failed to fetch film with id ${filmId}:`, error);
            return { filmNode: null, starshipNodes: [], starshipEdges: [] };
          }
        }
      );
      const filmNodesData = await Promise.all(filmNodesPromises);
      const filmNodes = filmNodesData
        .filter((data) => data && data.filmNode)
        .map((data) => data.filmNode);

      const filmEdges = person.films.map((filmId) => ({
        id: `edge-person-${person.id}-film-${filmId}`,
        source: `person-${person.id}`,
        target: `film-${filmId}`,
        animated: true,
        style: { stroke: "green" },
      }));

      setNodes([personNode, ...(filmNodes as Node[])]);
      setEdges([...filmEdges]);
    } catch (err) {
      console.error(`Error fetching person with id ${id}:`, err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPerson();
  }, []);

  useEffect(() => {
    if (personDetails.id) {
      fetchPersonDetails();
    }
  }, [personDetails]);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="w-full">
      <div className="container px-4 md:px-2 xl:px-0 pb-10 ">
        <Breadcrumbs>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>{personDetails.name}</BreadcrumbItem>
        </Breadcrumbs>
        <div className="pt-4">
          <PersonDetails person={personDetails} />
        </div>
        <div className="pt-4">
          <Card className="shadow-none border dark:border-gray-700">
            <CardBody>
              <div className="h-[60vh]">
                <ReactFlow
                  defaultViewport={defaultViewport}
                  nodes={nodes}
                  edges={edges}
                  onNodesChange={onNodesChange}
                  onEdgesChange={onEdgesChange}
                  attributionPosition="top-right"
                  fitView
                  className="overview"
                  proOptions={{
                    hideAttribution: true,
                  }}
                >
                  <MiniMap zoomable pannable />
                  <Controls />
                  <Background />
                </ReactFlow>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};
