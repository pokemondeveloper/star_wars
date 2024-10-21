/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Person } from "../../types";

export interface GetPeopleResponse {
  count: number;
  next: string;
  previous: number | null;
  results: Person[];
}

export interface GetPeopleRequest {}
