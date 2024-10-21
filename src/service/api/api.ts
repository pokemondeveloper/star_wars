import axios from "axios";
import { SERVER_URL } from "../../constants";
/**
 * The API instance.
 *
 * The API instance is an instance of Axios that has been configured to make
 * requests to the Star Wars API.
 *
 * @constant
 * @type {AxiosInstance}
 */
export const API = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
