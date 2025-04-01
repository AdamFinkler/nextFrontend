
import arrowIcon from "../../assets/arrow.png";
import { useMovieStore } from "../../store/movieStore";
import "./styles.css";
import { IPagination } from "./types";
import { getNumOfPages, getVisiblePages } from "./utils";




  

const Pagination = ({ pageIndex, handlePageIndex }: IPagination) => {
  const movieArr = useMovieStore((state) => state.movies);
  const numOfPages = getNumOfPages(movieArr.length);

  const currentPageOneBased = pageIndex + 1;
  const visiblePages = getVisiblePages(currentPageOneBased, numOfPages);

  return (
    <div className="pagination-container">
      <button
        className="arrow-button arrow-back"
        disabled={pageIndex === 0}
        onClick={() => handlePageIndex(pageIndex - 1)}
      >
        <img src={arrowIcon} alt="Previous" />
      </button>

      {visiblePages.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`page-button ${
            pageIndex === pageNumber - 1 ? "active" : ""
          }`}
          onClick={() => handlePageIndex(pageNumber - 1)}
        >
          {pageNumber}
        </button>
      ))}

      <button
        className="arrow-button"
        disabled={pageIndex + 1 === numOfPages}
        onClick={() => handlePageIndex(pageIndex + 1)}
      >
        <img src={arrowIcon} alt="Next" />
      </button>
    </div>
  );
};

export default Pagination;