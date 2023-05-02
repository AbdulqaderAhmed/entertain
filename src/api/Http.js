import axios from "axios";

export const APIKEY = "84cddc5ddea43f84047af5a7f949aa28";

export const HTTP = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
