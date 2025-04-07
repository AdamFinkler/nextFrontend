import { useEffect, useMemo } from "react";
import Card from "../common-components/card/Card";
import ErrorHandler from "../common-components/error-handler/ErrorHandler";
import Loader from "../common-components/loader/Loader";
import { useMovieListState } from "../store/movieStore";
import "./style.css";
import { getPaginatedMovies } from "./utils";
import UseFetchRecommendedMovies from "../customHooks/useFetchRecommended/useFetchRecommended";
import UseFetchMovies from "../customHooks/useFetchMovies/UseFetchMovies";

const MoviesList = () => {

const {
  movies,
  filteredMovies,
  recommendedMovies,
  searchTerm,
  pageIndex,
  isSortedByRating,
  isShowingRecommended,
  toggleIsShowingRecommended,
} = useMovieListState();

  const { loading, error } = UseFetchMovies({ pageIndex });
  const { loadingRecommended, errorRecommended } = UseFetchRecommendedMovies();

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
  if (loading || (loadingRecommended && isShowingRecommended))
    return <Loader />;

  if (isShowingRecommended && !recommendedMovies.length)
    return (
      <ErrorHandler
        message={
          "Explore some movies to help us tailor recommendations for your next visit."
        }
        buttonText="back to homepage"
        buttonHandler={handleNoRecommended}
      />
    );

  if (errorRecommended && isShowingRecommended)
    return (
      <ErrorHandler
        message={errorRecommended}
        buttonText="back to homePage"
        buttonHandler={handleNoRecommended}
      />
    );

  if (error)
    return (
      <ErrorHandler
        message={error}
        buttonText="Try again"
        buttonHandler={handleTryAgain}
      />
    );

  if (!moviesToDisplay.length && searchTerm.trim().length)
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
