import { Card, CardBody } from "@nextui-org/react";
import { Image } from "../image";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PEOPLE_API } from "../../api";
import { CardLoader } from "../card-loader";
import { getImage } from "../../helpers";
import { Person } from "../../types";

/**
 * A single person card component.
 *
 * @returns A JSX element representing the person card.
 *
 * @example
 * <PersonNode />
 */
export const PersonNode = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [person, setPerson] = useState({} as Person);

  /**
   * Fetches a person data asynchronously.
   * Sets loading state to true, retrieves person data using PEOPLE_API.getPerson,
   * sets the person state with the response, and updates loading state to false.
   * Logs an error if there is an exception during the process.
   */
  const fetchPerson = async () => {
    try {
      setIsLoading(true);
      const response = await PEOPLE_API.getPerson(Number(id));
      setPerson(response);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPerson();
  }, []);

  if (isLoading) {
    return <CardLoader />;
  }

  return (
    <Card className="shadow-none border cursor-pointer transition-colors duration-300 dark:bg-gray-800 bg-white dark:border-gray-700">
      <CardBody>
        <div className="w-full">
          <Image
            src={getImage(String(person.id), "characters")}
            alt={person.name}
            className="w-full h-[250px] object-cover rounded-lg"
          />
        </div>
        <div className="pt-2">
          <p className="text-xl dark:text-white text-gray-900">{person.name}</p>
        </div>
        <div className="pt-2 flex flex-col gap-y-2">
          <p className="text-sm flex justify-between dark:text-gray-300 text-gray-600">
            <b>Height:</b> <i>{person.height} cm</i>
          </p>
          <p className="text-sm flex justify-between border-b pb-1 dark:border-gray-600">
            <b className="dark:text-gray-300">Hair Color:</b>{" "}
            <i className="dark:text-gray-400">{person.hair_color}</i>
          </p>
          <p className="text-sm flex justify-between border-b pb-1 dark:border-gray-600">
            <b className="dark:text-gray-300">Skin Color:</b>{" "}
            <i className="dark:text-gray-400">{person.skin_color}</i>
          </p>
          <p className="text-sm flex justify-between border-b pb-1 dark:border-gray-600">
            <b className="dark:text-gray-300">Eye Color:</b>{" "}
            <i className="dark:text-gray-400">{person.eye_color}</i>
          </p>
          <p className="text-sm flex justify-between border-b pb-1 dark:border-gray-600">
            <b className="dark:text-gray-300">Gender:</b>{" "}
            <i className="dark:text-gray-400">{person.gender}</i>
          </p>
        </div>
        <div className="flex pt-4 items-end w-full justify-between">
          <p className="text-[12px] dark:text-gray-400 text-gray-600">
            {new Date(person?.created).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </CardBody>
    </Card>
  );
};
