import CardsList from "../common-components/cards-list/CardsList";
import useFetchMovies from "../customHooks/useFetchMovies/useFetchMovies";
import { useMovieStore } from "../store/movieStore";
import "./style.css";
import Pagination from "../common-components/pagination/Pagination";
import { useEffect, useState } from "react";
import Loader from "../common-components/loader/Loader";
import { HOMEPAGE_TITLE } from "../consts/consts";
import ErrorHandler from "../common-components/errorHandler/ErrorHandler";

const Homepage = () => {
  const movies = useMovieStore((state) => state.movies);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const { loading, error } = useFetchMovies({ pageIndex });

  const handlePageIndex = (pageIndex: number) => {
    setPageIndex(pageIndex);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pageIndex]);

  return (
    <div className="homepage">
      {loading && <Loader />}
      {error && (
        <ErrorHandler
          message={error}
          buttonText="refresh the page"
          buttonHandler={() => window.location.reload()}
        />
      )}
      {!loading && !error && (
        <>
          <h1 className="homepage-title">{HOMEPAGE_TITLE}</h1>
          <CardsList pageIndex={pageIndex} movies={movies} />
          <Pagination pageIndex={pageIndex} handlePageIndex={handlePageIndex} />
        </>
      )}
    </div>
  );
};

export default Homepage;
