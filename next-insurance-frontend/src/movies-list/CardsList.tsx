import Card from "../common-components/card/Card";
import "./style.css";
import { useMovieStore } from "../store/movieStore";
import ErrorHandler from "../common-components/error-handler/ErrorHandler";
import { getPaginatedMovies } from "./utils";
import { useEffect } from "react";
import useFetchMovies from "../customHooks/useFetchMovies/useFetchMovies";
import Loader from "../common-components/loader/Loader";
import Pagination from "../common-components/pagination/Pagination";

const MoviesList = () => {
  const { movies, searchTerm, pageIndex, sortedByRating } = useMovieStore(
    (state) => state
  );

  const { loading, error } = useFetchMovies({ pageIndex });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pageIndex]);

  const isSearchEmpty = !searchTerm.trim();

  const filteredMovies = isSearchEmpty
    ? movies
    : movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

  const currentMovies = sortedByRating
    ? [...filteredMovies].sort((a, b) => Number(b.rating) - Number(a.rating))
    : filteredMovies;

  const paginatedMovies = getPaginatedMovies(currentMovies, pageIndex);

  if (loading) return <Loader />;

  if (error)
    return (
      <ErrorHandler
        message={error}
        buttonText="refresh the page"
        buttonHandler={() => window.location.reload()}
      />
    );

  return (
    <div className="cards-list-wrapper">
      {!currentMovies.length && (
        <ErrorHandler
          message={`no results found for '${searchTerm}'`}
          buttonText="back to home page"
          buttonHandler={() => window.location.reload()}
        />
      )}

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
