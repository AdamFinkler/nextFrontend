

import { useEffect, useRef, useState } from "react";
import { useMovieStore } from "../../store/movieStore";
import { fetchRecommendedMovies } from "../../requests/requests";
import { IMovie } from "../../store/types";

const UseFetchRecommendedMovies = () => {
  const cashedIds = useMovieStore((state) => state.cashedMovieIds);
  const setRecommendedMovies = useMovieStore((state) => state.setRecommendedMovies);
  const hasFetched = useRef(false);

  const [loadingRecommended, setLoadingRecommended] = useState<boolean>(false);
  const [errorRecommended, setErrorRecommended] = useState<string | null>(null);

  useEffect(() => {
    if (hasFetched.current || cashedIds.length === 0) return;

    const fetchData = async () => {
      setLoadingRecommended(true);
      try {
        const recommended: IMovie[] = await fetchRecommendedMovies(cashedIds);
        setRecommendedMovies(recommended);
        hasFetched.current = true;
      } catch (err) {
        console.error("Error fetching recommended movies:", err);
        setErrorRecommended(String(err));
      } finally {
        setLoadingRecommended(false);
      }
    };

    fetchData();
  }, [cashedIds, setRecommendedMovies]);

  return { loadingRecommended, errorRecommended };
};

export default UseFetchRecommendedMovies;
