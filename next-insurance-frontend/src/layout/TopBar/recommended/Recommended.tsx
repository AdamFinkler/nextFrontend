import { useMovieStore } from "../../../store/movieStore";
import "./styles.css";
import { IRecommended } from "./types";

const Recommended = ({ handleCloseMenu }: IRecommended) => {
  const {
    isShowingRecommended,
    toggleIsShowingRecommended,
    setSearchTerm,
    setPageIndex,
  } = useMovieStore((state) => state);

  const handleRecommendedOnClick = () => {
    setPageIndex(0);
    setSearchTerm("");
    toggleIsShowingRecommended();
    if (handleCloseMenu) handleCloseMenu();
  };

  return (
    <button className="recommended-button" onClick={handleRecommendedOnClick}>
      {isShowingRecommended ? "Back To Homepage" : "Show Recommended"}
    </button>
  );
};

export default Recommended;
