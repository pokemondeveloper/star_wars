import { AxiosResponse } from "axios";
import { API } from "../../service";
import { GetPeopleRequest, GetPeopleResponse } from "./types";
import { Person } from "../../types";

export const PEOPLE_API = {
  /**
   * Retrieves a list of people, given a page number.
   *
   * @param page The page number to retrieve.
   * @returns A promise resolving to the list of people for the given page.
   */
  getPeople: async (page: number) => {
    const response = await API.get<
      GetPeopleRequest,
      AxiosResponse<GetPeopleResponse>
    >(`/people?page=${page}`);
    return response.data;
  },

  /**
   * Retrieves a person, given their ID.
   *
   * @param id The ID of the person to retrieve.
   * @returns A promise resolving to the person with the given ID.
   */
  getPerson: async (id: number) => {
    const response = await API.get<void, AxiosResponse<Person>>(
      `/people/${id}`
    );
    return response.data;
  },
};
