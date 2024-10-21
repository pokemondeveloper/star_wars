import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Card } from "./card";

export const MOCK_PERSON = {
  birth_year: "19BBY",
  created: "2024-10-21T12:34:56Z",
  edited: "2024-10-22T09:15:30Z",
  eye_color: "blue",
  films: ["https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/2/"],
  gender: "male",
  hair_color: "blond",
  height: "172",
  homeworld: 1,
  id: 1,
  mass: "77",
  name: "Luke Skywalker",
  skin_color: "fair",
  species: [],
  starships: [
    "https://swapi.dev/api/starships/12/",
    "https://swapi.dev/api/starships/22/",
  ],
  url: "https://swapi.dev/api/people/1/",
  vehicles: [14, 30],
};

describe("Card", () => {
  test("renders the person's name", () => {
    render(
      <MemoryRouter>
        <Card person={MOCK_PERSON} />
      </MemoryRouter>
    );

    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
  });
});
