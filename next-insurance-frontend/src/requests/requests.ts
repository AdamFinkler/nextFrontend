import { axiosClient } from "./axiosClient";
import { MOVIES_PER_PAGE } from "../consts/consts";

export const fetchMovies = async (offset = 0, limit = MOVIES_PER_PAGE * 3) => {
  try {
    const response = await axiosClient.get("/movies", {
      params: { offset, limit },
    });
    const movies = response.data;
    return movies;
  } catch (e) {
    console.error("Error fetching movies:", e);
    return { results: [] };
  }
};

export const fetchSearchedMovies = async (searchTerm: string) => {
  try {
    const response = await axiosClient.get("/movies/search", {
      params: { searchTerm },
    });
    const movies = response.data;
    return movies
  } catch (error) {
    console.error("Error fetching searched movies:", error);
    return { results: [] };
  }
};

export const fetchRecommendedMovies = async (ids: string[]) => {
  try {
    const response = await axiosClient.get("/movies/recommended", {
      params: { ids },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching recommended movies:", error);
    throw error;
  }
};
