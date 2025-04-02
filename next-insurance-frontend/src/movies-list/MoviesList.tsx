import { useEffect, useMemo } from "react";
import Card from "../common-components/card/Card";
import ErrorHandler from "../common-components/error-handler/ErrorHandler";
import Loader from "../common-components/loader/Loader";
import Pagination from "../common-components/pagination/Pagination";
import useFetchMovies from "../customHooks/useFetchMovies/useFetchMovies";
import { useMovieStore } from "../store/movieStore";
import "./style.css";
import { getPaginatedMovies } from "./utils";

const MoviesList = () => {
  const { movies, searchTerm, pageIndex, sortedByRating } = useMovieStore(
    (state) => state
  );

  const { loading, error } = useFetchMovies({ pageIndex });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pageIndex]);

  const moviesToDisplay = useMemo(() => {
    return sortedByRating
      ? [...movies].sort((a, b) => Number(b.rating) - Number(a.rating))
      : !searchTerm.trim()
      ? movies
      : movies.filter((movie) =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
  }, [movies, searchTerm, sortedByRating]);

  const paginatedMovies = useMemo(
    () => getPaginatedMovies(moviesToDisplay, pageIndex),
    [moviesToDisplay, pageIndex]
  );

  const onClickTryAgain = () => window.location.reload();

  if (loading) return <Loader />;

  if (error)
    return (
      <ErrorHandler
        message={error}
        buttonText="refresh the page"
        buttonHandler={onClickTryAgain}
      />
    );

  if (!moviesToDisplay.length)
    return (
      <ErrorHandler
        message={`no results found for '${searchTerm}'`}
        buttonText="back to home page"
        buttonHandler={onClickTryAgain}
      />
    );

  return (
    <div className="cards-list-wrapper">
      {paginatedMovies.map((movie) => (
        <Card
          key={movie.id}
          imageUrl={movie.image}
          rating={movie.rating}
          title={movie.title}
          released={movie.released}
          description={movie.synopsis}
          duration={movie.runtime}
        />
      ))}

      <Pagination />
    </div>
  );
};

export default MoviesList;
