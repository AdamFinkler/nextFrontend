import { useEffect, useState } from "react";
import { MovieDTO } from "../store/types";
import { fetchMovies } from "../requests/requests";
import { cleanSynopsis, cleanString } from "../utils/utils";
import { useMovieStore } from "../store/movieStore";

const useFetchMovies = () => {
  const setMovies = useMovieStore((state) => state.setMovies);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesData: MovieDTO[] = await fetchMovies();
        const cleanedMovies = moviesData.map((movie) => ({
          ...movie,
          title: cleanString(movie.title), 
          synopsis: cleanSynopsis(movie.synopsis),
        }));
        setMovies(cleanedMovies);
      } catch (err) {
        console.error(err);
        setError("Error fetching movies");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setMovies]);

  return { loading, error };
};

export default useFetchMovies;
