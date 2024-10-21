import { API } from "../../service";

export const FILMS_API = {
  /**
   * Retrieves a film, given its ID.
   *
   * @param id The ID of the film to retrieve.
   * @returns A promise resolving to the film with the given ID.
   */
  getFilm: async (id: string) => {
    const response = await API.get(`/films/${id}`);
    return response.data;
  },
};
