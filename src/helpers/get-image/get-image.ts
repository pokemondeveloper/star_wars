/*************  ✨ Codeium Command ⭐  *************/
/**
 * Gets the image URL for a given resource ID and resource type.
 *
 * @param url The ID of the resource to get the image for.
 * @param imgUrl The type of resource. Can be one of "characters", "planets", "starships", "vehicles", "species", or "films".
 * @returns The URL of the image.
 */
/******  0ec41fea-806e-411d-a50e-57b46997e28e  *******/ export const getImage =
  (
    url: string,
    imgUrl:
      | "characters"
      | "planets"
      | "starships"
      | "vehicles"
      | "species"
      | "films"
  ) => `https://starwars-visualguide.com/assets/img/${imgUrl}/${url}.jpg`;
