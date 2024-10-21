import { Card, CardBody, Image } from "@nextui-org/react";
import { Props } from "./types";
import { getImage } from "@/helpers";

/**
 * A single person details component.
 *
 * @param person - The person object containing data about that person.
 *
 * @returns A JSX element representing the person details.
 *
 * @example
 * <PersonDetails person={person} />
 */
export const PersonDetails = ({ person }: Props) => (
  <Card className="shadow-none border dark:border-gray-700">
    <CardBody className="flex">
      <div className="grid gap-x-4  gap-y-4 grid-cols-1 md:grid-cols-1 xl:grid-cols-5">
        <div className=" w-full md:col-span-1 xl:col-span-2">
          <Image
            alt={person.name}
            src={getImage(String(person?.id), "characters")}
            className="rounded-lg w-full h-[250px] xl:h-auto"
          />
        </div>
        <div className=" col-span-1 xl:col-span-3">
          <div className="pt-2">
            <h3 className="text-xl text-gray-900 dark:text-white">
              {person?.name}
            </h3>
          </div>
          <div className="pt-4 flex flex-col gap-y-4">
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
              <i className="text-gray-600 dark:text-gray-400">
                {person?.gender}
              </i>
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
        </div>
      </div>
    </CardBody>
  </Card>
);
