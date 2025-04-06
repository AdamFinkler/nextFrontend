import { useEffect, useState } from "react";
import { IMovie } from "../../store/types";
import { fetchMovies } from "../../requests/requests";
import { useMovieStore } from "../../store/movieStore";
import { IuseFetchMovies } from "./types";
import { MOVIES_PER_PAGE } from "../../consts/consts";
import { cleanString, cleanSynopsis } from "./utils";

const useFetchMovies = ({ pageIndex }: IuseFetchMovies) => {
  const movies = useMovieStore((state) => state.movies);
  const setMovies = useMovieStore((state) => state.setMovies);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const moviesNeeded = (pageIndex + 1) * MOVIES_PER_PAGE;

    if (movies.length <= moviesNeeded) {
      setLoading(true);

      const fetchData = async () => {
        console.log("fetching data");
        try {
          const moviesData: IMovie[] = await fetchMovies(movies.length);

          const cleanedMovies = moviesData.map((movie) => ({
            ...movie,
            title: cleanString(movie.title),
            synopsis: cleanSynopsis(movie.synopsis),
          }));
          setMovies([...movies, ...cleanedMovies]);
        } catch (err) {
          setError("couldnt fetch movies from server");
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [pageIndex]);
  return { loading, error };
};

export default useFetchMovies;
