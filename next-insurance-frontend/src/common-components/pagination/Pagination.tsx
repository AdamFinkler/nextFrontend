import arrowIcon from "../../assets/arrow.png";
import { useMovieStore } from "../../store/movieStore";
import "./styles.css";
import { getNumOfPages, getVisiblePages } from "./utils";

const Pagination = () => {
  const movieArr = useMovieStore((state) => state.movies);
  const searchTerm = useMovieStore((state) => state.searchTerm);
  const pageIndex = useMovieStore((state) => state.pageIndex);
  const setPageIndex = useMovieStore((state) => state.setPageIndex);

  const filteredMovies = movieArr.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const numOfPages = getNumOfPages(filteredMovies.length);
  const currentPageOneBased = pageIndex + 1;
  const visiblePages = getVisiblePages(currentPageOneBased, numOfPages);

  return (
    <div className="pagination-container">
      {numOfPages > 0 && (
        <>
          <button
            className="arrow-button arrow-back"
            disabled={pageIndex === 0}
            onClick={() => setPageIndex(pageIndex - 1)}
          >
            <img src={arrowIcon} alt="Previous" />
          </button>

          {visiblePages.map((pageNumber) => (
            <button
              key={pageNumber}
              className={`page-button ${
                pageIndex === pageNumber - 1 ? "active" : ""
              }`}
              onClick={() => setPageIndex(pageNumber - 1)}
            >
              {pageNumber}
            </button>
          ))}

          <button
            className="arrow-button"
            disabled={pageIndex + 1 === numOfPages}
            onClick={() => setPageIndex(pageIndex + 1)}
          >
            <img src={arrowIcon} alt="Next" />
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination;
