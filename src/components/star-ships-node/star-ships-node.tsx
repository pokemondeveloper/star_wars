import { useEffect, useState } from "react";
import { Props } from "./types";
import { STAR_SHIPS_API } from "../../api";
import { StarShip } from "../../types";
import { CardLoader } from "../card-loader";
import { Card, CardBody } from "@nextui-org/react";
import { Image } from "../image";
import { getImage } from "../../helpers";

/**
 * A single starship card component.
 *
 * @param id - The ID of the starship to fetch and display.
 *
 * @returns A JSX element representing the starship card.
 *
 * @example
 * <StarShipNode id={1} />
 */
export const StarShipNode = ({ id }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [starShip, setStarShip] = useState<StarShip>({} as StarShip);

  const fetchStarShip = async () => {
    try {
      setIsLoading(true);
      const response = await STAR_SHIPS_API.getStarShip(String(id));
      console.log(response);
      setStarShip(response);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStarShip();
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
            src={getImage(String(starShip.id), "starships")}
            alt={starShip.name}
            className="w-full h-[250px] object-cover rounded-lg"
          />
        </div>
        <div className="pt-2">
          <p className="text-xl dark:text-white text-gray-900">
            {starShip.name}
          </p>
        </div>
        <div className="pt-2 flex flex-col gap-y-2">
          <p className="text-sm flex justify-between dark:text-gray-300 text-gray-600">
            <b className="dark:text-gray-300">Model:</b>{" "}
            <i className="dark:text-gray-400">{starShip.model}</i>
          </p>
          <p className="text-sm flex justify-between border-b pb-1 dark:border-gray-600">
            <b className="dark:text-gray-300">Manufacturer:</b>{" "}
            <i className="dark:text-gray-400">{starShip.manufacturer}</i>
          </p>
          <p className="text-sm flex justify-between border-b pb-1 dark:border-gray-600">
            <b className="dark:text-gray-300">Speed:</b>{" "}
            <i className="dark:text-gray-400">
              {starShip.max_atmosphering_speed}
            </i>
          </p>
          <p className="text-sm flex justify-between border-b pb-1 dark:border-gray-600">
            <b className="dark:text-gray-300">Crew:</b>{" "}
            <i className="dark:text-gray-400">{starShip.crew}</i>
          </p>
          <p className="text-sm flex justify-between border-b pb-1 dark:border-gray-600">
            <b className="dark:text-gray-300">Passengers:</b>{" "}
            <i className="dark:text-gray-400">{starShip.passengers}</i>
          </p>
        </div>
        <div className="flex pt-4 items-end w-full justify-between">
          <p className="text-[12px] dark:text-gray-400 text-gray-600">
            {new Date(starShip?.created).toLocaleDateString("en-US", {
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
