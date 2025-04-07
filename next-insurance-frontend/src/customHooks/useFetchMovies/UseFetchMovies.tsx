import { useEffect, useState } from "react";
import { MOVIES_PER_PAGE } from "../../consts/consts";
import { fetchMovies } from "../../requests/requests";
import { useMovieStore } from "../../store/movieStore";
import { IMovie } from "../../store/types";
import { IuseFetchMovies } from "./types";

const UseFetchMovies = ({ pageIndex }: IuseFetchMovies) => {
  const movies = useMovieStore((state) => state.movies);
  const setMovies = useMovieStore((state) => state.setMovies);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const moviesNeeded = (pageIndex + 1) * MOVIES_PER_PAGE;

    if (movies.length <= moviesNeeded) {
      setLoading(true);

      const fetchData = async () => {
        try {
          const newMovies: IMovie[] = await fetchMovies(movies.length);

          setMovies([...movies, ...newMovies]);
        } catch (e) {
          setError(String(e));
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [pageIndex]);
  return { loading, error };
};

export default UseFetchMovies;
