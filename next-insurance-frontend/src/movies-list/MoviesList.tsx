import { useEffect, useMemo } from "react";
import Card from "../common-components/card/Card";
import ErrorHandler from "../common-components/error-handler/ErrorHandler";
import Loader from "../common-components/loader/Loader";
import useFetchMovies from "../customHooks/useFetchMovies/useFetchMovies";
import useFetchRecommendedMovies from "../customHooks/useFetchRecommended/useFetchRecommended";
import { useMovieStore } from "../store/movieStore";
import "./style.css";
import { getPaginatedMovies } from "./utils";

const MoviesList = () => {
  const {
    movies,
    filteredMovies,
    recommendedMovies,
    searchTerm,
    pageIndex,
    isSortedByRating: isSortedByRating,
    isShowingRecommended: isShowingRecommended,
    toggleIsShowingRecommended,
  } = useMovieStore((state) => state);
  const { loading, error } = useFetchMovies({ pageIndex });

  useFetchRecommendedMovies();

  const moviesToDisplay = useMemo(() => {
    let currentMovies;
    if (recommendedMovies.length && isShowingRecommended) {
      currentMovies = recommendedMovies;
    } else {
      currentMovies = searchTerm.trim() ? filteredMovies : movies;
    }
    if (isSortedByRating) {
      return [...currentMovies].sort(
        (a, b) => Number(b.rating) - Number(a.rating)
      );
    }

    return currentMovies;
  }, [
    searchTerm,
    filteredMovies,
    movies,
    isSortedByRating,
    recommendedMovies,
    isShowingRecommended,
  ]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [moviesToDisplay, pageIndex]);

  const paginatedMovies = useMemo(
    () => getPaginatedMovies(moviesToDisplay, pageIndex),
    [moviesToDisplay, pageIndex]
  );

  const handleTryAgain = () => window.location.reload();
  const handleNoRecommended = () => toggleIsShowingRecommended();
  if (loading) return <Loader />;

  if (isShowingRecommended && !recommendedMovies.length)
    return (
      <ErrorHandler
        message={
          "explore some movies so we know what to recommend you on your next visit"
        }
        buttonText="back to homepage"
        buttonHandler={handleNoRecommended}
      />
    );

  if (error)
    return (
      <ErrorHandler
        message={error}
        buttonText="refresh the page"
        buttonHandler={handleTryAgain}
      />
    );

  if (!moviesToDisplay.length)
    return (
      <ErrorHandler
        message={`no results found for '${searchTerm}'`}
        buttonText="back to home page"
        buttonHandler={handleTryAgain}
      />
    );

  return (
    <div className="cards-list-wrapper">
      {paginatedMovies.map((movie) => (
        <Card
          key={movie.id}
          id={movie.id}
          imageUrl={movie.image}
          rating={movie.rating}
          title={movie.title}
          released={movie.released}
          description={movie.synopsis}
          duration={movie.runtime}
        />
      ))}
    </div>
  );
};

export default MoviesList;
