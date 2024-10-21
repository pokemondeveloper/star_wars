import { Skeleton } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";

/**
 * A component that renders a grid of 10 cards with skeleton loaders.
 *
 * Each card has a skeleton loader for the image, name, and details.
 * The component is useful for showing a loading state when the data is
 * being fetched.
 *
 * @returns A JSX element representing the cards loader.
 */
export const CardsLoader = () => (
  <div className="gap-4 pt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
    {new Array(10).fill(" ").map((_, index) => (
      <Card key={index} className="shadow-none border cursor-pointer ">
        <CardBody>
          <div>
            <Skeleton className="w-full h-[250px] object-cover rounded-lg" />
          </div>
          <div className="pt-2">
            <Skeleton className="w-full h-[20px]" />
          </div>
          <div className="pt-2 flex flex-col gap-y-2">
            <Skeleton className="w-full h-[10px]" />
            <Skeleton className="w-full h-[10px]" />
            <Skeleton className="w-full h-[10px]" />
            <Skeleton className="w-full h-[10px]" />
            <Skeleton className="w-full h-[10px]" />
          </div>
          <div className="flex pt-4 items-end w-full justify-between">
            <Skeleton className="w-full h-[10px]" />

            <Skeleton className="w-full h-[10px]" />
          </div>
        </CardBody>
      </Card>
    ))}
  </div>
);
