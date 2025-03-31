import { axiosClient } from "./axiosClient";

export const fetchMovies = async () => {
  try {
    const response = await axiosClient.get("/movies");
    return response.data;
  } catch (e) {
    console.log("error fetching movies: ", e);
  }
};
