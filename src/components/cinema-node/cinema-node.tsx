import { useEffect, useState } from "react";
import { Props } from "./types";
import { FILMS_API } from "../../api";
import { Film } from "../../types";
import { Card, CardBody } from "@nextui-org/react";
import { Image } from "../image";
import { getImage } from "../../helpers";
import { CardLoader } from "../card-loader";

/**
 * A single cinema card component.
 *
 * @param id - The ID of the film to fetch and display.
 *
 * @returns A JSX element representing the cinema card.
 *
 * @example
 * <CinemaNode id={1} />
 */
export const CinemaNode = ({ id }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [film, setFilm] = useState<Film>({} as Film);

  /**
   * Fetches a film data asynchronously.
   * Sets loading state to true, retrieves film data using FILMS_API.getFilm,
   * sets the film state with the response, and updates loading state to false.
   * Logs an error if there is an exception during the process.
   */
  const fetchFilm = async () => {
    try {
      setIsLoading(true);
      const response = await FILMS_API.getFilm(String(id));
      setFilm(response);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFilm();
  }, []);

  if (isLoading) {
    return <CardLoader />;
  }

  return (
    <Card
      className="shadow-none border cursor-pointer transition-colors duration-300 dark:bg-gray-800 bg-white dark:border-gray-700"
      isHoverable
    >
      <CardBody>
        <div className="w-full">
          <Image
            src={getImage(String(film?.id), "films")}
            alt={film?.title || ""}
            className="w-full h-[250px] object-cover rounded-lg"
          />
        </div>
        <div className="pt-2">
          <p className="text-xl dark:text-white text-gray-900">{film?.title}</p>
        </div>
        <div className="pt-2 flex flex-col gap-y-2">
          <p className="text-sm flex justify-between dark:text-gray-300 text-gray-600">
            <b className="dark:text-gray-300">Director:</b>{" "}
            <i className="dark:text-gray-400">{film?.director}</i>
          </p>
          <p className="text-sm flex justify-between border-b pb-1 dark:border-gray-600">
            <b className="dark:text-gray-300">Producer:</b>{" "}
            <i className="dark:text-gray-400">{film?.producer}</i>
          </p>
          <p className="text-sm flex justify-between border-b pb-1 dark:border-gray-600">
            <b className="dark:text-gray-300">Release Date:</b>{" "}
            <i className="dark:text-gray-400">
              {new Date(film?.release_date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </i>
          </p>
        </div>
        <div className="flex pt-4 items-end w-full justify-between">
          <p className="text-[12px] dark:text-gray-400 text-gray-600">
            {new Date(film?.created).toLocaleDateString("en-US", {
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
