import { useMovieStore } from "../../../store/movieStore";
import "./styles.css";
import { ITopRated } from "./types";

const TopRated = ({ handleCloseMenu }: ITopRated) => {
  const { sortedByRating, toggleSortByRating } = useMovieStore(
    (state) => state
  );

  const handleTopRatedClick = () => {
    toggleSortByRating();

    if (handleCloseMenu) handleCloseMenu();
  };

  return (
    <button className="top-rated-button" onClick={handleTopRatedClick}>
      {sortedByRating ? "Original Order" : "Top Rated"}
    </button>
  );
};
export default TopRated;
