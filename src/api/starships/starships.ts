import { API } from "../../service";

export const STAR_SHIPS_API = {
  /**
   * Retrieves a starship, given its ID.
   *
   * @param id The ID of the starship to retrieve.
   * @returns A promise resolving to the starship with the given ID.
   */
  getStarShip: async (id: string) => {
    const response = await API.get(`/starships/${id}`);
    console.log(response);
    return response.data;
  },
};
