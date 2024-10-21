import { useEffect, useState } from "react";
import { PEOPLE_API } from "../../api";
import { Person } from "../../types";
import { Card, CardsLoader } from "../../components";
import { Pagination } from "@nextui-org/react";

/**
 * Renders a webpage displaying a list of Star Wars characters.
 * Fetches and displays the characters using pagination and loading states.
 */
export const Home = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Fetches a list of people based on the provided page number.
   *
   * @param page The page number to fetch people from.
   */
  const fetchPeople = async (page: number) => {
    setIsLoading(true);
    const people = await PEOPLE_API.getPeople(page);
    setIsLoading(false);
    setTotal(people.count);
    setPeople(people.results);
  };

  useEffect(() => {
    fetchPeople(page);
  }, [page]);

  return (
    <div>
      <div className="container px-4 md:px-2 xl:px-0 pb-10">
        {isLoading || !people.length ? (
          <CardsLoader />
        ) : (
          <div className="grid gap-4 pt-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {people?.map((person) => (
              <Card key={person.id} person={person} />
            ))}
          </div>
        )}
        <div className="py-4">
          <Pagination
            color="primary"
            total={Math.ceil(total / 10)}
            page={page}
            onChange={(newPage) => setPage(newPage)}
            showControls
          />
        </div>
      </div>
    </div>
  );
};
