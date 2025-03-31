import CardsList from "../common-components/cards-list/CardsList";
import useFetchMovies from "../customHooks/useFetchMovies";
import { useMovieStore } from "../store/movieStore";
import "./style.css";

const Homepage = () => {
  const movies = useMovieStore(state => state.movies);
  const { loading, error } = useFetchMovies();

  return (
    <div className="homepage">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <>
          <h1 className="homepage-title">
            EXPLORE YOUR NEXT MOVIES AND TV SHOWS
          </h1>
          <CardsList movies={movies} />
        </>
      )}
    </div>
  );
};

export default Homepage;