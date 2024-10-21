import { Card as CardComponent, CardBody } from "@nextui-org/react";
import { Props } from "./types";

import { Link } from "react-router-dom";
import { getImage } from "../../helpers";
import { Image } from "../image";

/**
 * A single person card component.
 *
 * @param person - The person object containing data about that person.
 *
 * @returns A JSX element representing the person card.
 *
 * @example
 * <Card person={person} />
 */
export const Card = ({ person }: Props) => (
  <Link to={`/person/${person?.id}`}>
    <CardComponent
      className="shadow-none border border-gray-300 dark:border-gray-700 cursor-pointer transition-transform transform hover:scale-105"
      isHoverable
    >
      <CardBody>
        <div className="w-full">
          <Image
            src={getImage(String(person?.id), "characters")}
            alt={person?.name}
            className="w-full h-[250px] object-cover rounded-lg"
          />
        </div>
        <div className="pt-2">
          <h3 className="text-xl text-gray-900 dark:text-white">
            {person?.name}
          </h3>
        </div>
        <div className="pt-2 flex flex-col gap-y-2">
          <p className="text-sm flex justify-between">
            <b className="text-gray-800 dark:text-gray-200">Height:</b>{" "}
            <i className="text-gray-600 dark:text-gray-400">
              {person?.height} cm
            </i>
          </p>
          <p className="text-sm flex justify-between border-b border-gray-300 dark:border-gray-700 pb-1">
            <b className="text-gray-800 dark:text-gray-200">Hair Color:</b>{" "}
            <i className="text-gray-600 dark:text-gray-400">
              {person.hair_color}
            </i>
          </p>
          <p className="text-sm flex justify-between border-b border-gray-300 dark:border-gray-700 pb-1">
            <b className="text-gray-800 dark:text-gray-200">Skin Color:</b>{" "}
            <i className="text-gray-600 dark:text-gray-400">
              {person?.skin_color}
            </i>
          </p>
          <p className="text-sm flex justify-between border-b border-gray-300 dark:border-gray-700 pb-1">
            <b className="text-gray-800 dark:text-gray-200">Eye Color:</b>{" "}
            <i className="text-gray-600 dark:text-gray-400">
              {person?.eye_color}
            </i>
          </p>
          <p className="text-sm flex justify-between border-b border-gray-300 dark:border-gray-700 pb-1">
            <b className="text-gray-800 dark:text-gray-200">Gender:</b>{" "}
            <i className="text-gray-600 dark:text-gray-400">{person?.gender}</i>
          </p>
        </div>
        <div className="flex pt-4 items-end w-full justify-between">
          <p className="text-[12px] text-gray-600 dark:text-gray-400">
            {new Date(person?.created).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </CardBody>
    </CardComponent>
  </Link>
);
