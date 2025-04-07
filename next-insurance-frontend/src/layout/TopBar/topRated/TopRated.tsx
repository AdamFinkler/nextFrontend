import { useMovieStore } from "../../../store/movieStore";
import "./styles.css";
import { ITopRated } from "./types";

const TopRated = ({ handleCloseMenu }: ITopRated) => {
  const { isSortedByRating: isSortedByRating, toggleIsSortByRating } =
    useMovieStore((state) => state);

  const handleTopRatedClick = () => {
    toggleIsSortByRating();

    if (handleCloseMenu) handleCloseMenu();
  };

  return (
    <button className="top-rated-button" onClick={handleTopRatedClick}>
      {isSortedByRating ? "Original Order" : "Top Rated"}
    </button>
  );
};
export default TopRated;
