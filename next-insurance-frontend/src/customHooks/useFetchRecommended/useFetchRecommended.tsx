import { useEffect, useRef } from "react";
import { useMovieStore } from "../../store/movieStore";
import { fetchRecommendedMovies } from "../../requests/requests";
import { IMovie } from "../../store/types";

const useFetchRecommendedMovies = () => {
  const cashedIds = useMovieStore((state) => state.cashedMovieIds);
  const setRecommendedMovies = useMovieStore(
    (state) => state.setRecommendedMovies
  );
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current || cashedIds.length === 0) return;

    const fetchData = async () => {
      try {
        const recommended: IMovie[] = await fetchRecommendedMovies(cashedIds);
        setRecommendedMovies(recommended);
        hasFetched.current = true;
      } catch (err) {
        console.error("Error fetching recommended movies:", err);
      }
    };

    fetchData();
  }, [cashedIds, setRecommendedMovies]);
};

export default useFetchRecommendedMovies;
