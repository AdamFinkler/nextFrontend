import { useEffect } from "react";
import CardsList from "../common-components/cards-list/CardsList";
import ErrorHandler from "../common-components/errorHandler/ErrorHandler";
import Loader from "../common-components/loader/Loader";
import Pagination from "../common-components/pagination/Pagination";
import { HOMEPAGE_TITLE } from "../consts/consts";
import useFetchMovies from "../customHooks/useFetchMovies/useFetchMovies";
import "./style.css";
import { useMovieStore } from "../store/movieStore";

const Homepage = () => {
  const pageIndex = useMovieStore((state) => state.pageIndex);
  const { loading, error } = useFetchMovies({ pageIndex });

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
          <CardsList />
          <Pagination />
        </>
      )}
    </div>
  );
};

export default Homepage;
