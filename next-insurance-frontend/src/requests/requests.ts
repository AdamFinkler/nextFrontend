import { axiosClient } from "./axiosClient";
import { MOVIES_PER_PAGE } from "../consts/consts";
import { cleanMovies } from "../customHooks/useFetchMovies/utils";
import { IMovie } from "../store/types";

export const fetchMovies = async (
  offset = 0,
  limit = MOVIES_PER_PAGE * 3
): Promise<IMovie[]> => {
  try {
    const response = await axiosClient.get("/movies", {
      params: { offset, limit },
    });

    const cleanedMovies = cleanMovies(response.data);
    return cleanedMovies;
  } catch (e) {
    throw new Error("couldnt fetch movies from server");
    return [];
  }
};

export const fetchSearchedMovies = async (
  searchTerm: string
): Promise<IMovie[]> => {
  try {
    const response = await axiosClient.get("/movies/search", {
      params: { searchTerm },
    });
    const cleanedMovies = cleanMovies(response.data);

    return cleanedMovies;
  } catch (error) {
    console.error("Error fetching searched movies:", error);
    return [];
  }
};

export const fetchRecommendedMovies = async (
  ids: string[]
): Promise<IMovie[]> => {
  try {
    const response = await axiosClient.get("/movies/recommended", {
      params: { ids },
    });
    const cleanedMovies = cleanMovies(response.data);
    return cleanedMovies;
  } catch (error) {
    console.error("Error fetching recommended movies:", error);
    throw error;
  }
};
