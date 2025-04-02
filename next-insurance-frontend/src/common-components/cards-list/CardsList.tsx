import Card from "../card/Card";
import "./style.css";
import { useMovieStore } from "../../store/movieStore";
import ErrorHandler from "../errorHandler/ErrorHandler";
import { getPaginatedMovies } from "./utils";

const CardsList = () => {
  const movieArr = useMovieStore((state) => state.movies);
  const searchTerm = useMovieStore((state) => state.searchTerm);
  const pageIndex = useMovieStore((state) => state.pageIndex);

  const isSearchEmpty = !searchTerm.trim();
  const currentMovies = isSearchEmpty
    ? movieArr
    : movieArr.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

  const paginatedMovies = getPaginatedMovies(currentMovies, pageIndex);

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
    </div>
  );
};

export default CardsList;
