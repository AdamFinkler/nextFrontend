import React from "react";
import { useMovieStore } from "../../../store/movieStore";
import "./styles.css";
import { ITopRated } from "../topRated/types";

const Recommended = ({ handleCloseMenu }: ITopRated) => {
  const handleRecommendedClick = () => {
    if (handleCloseMenu) handleCloseMenu();
  };
  return (
    <button className="recommended-button" onClick={handleRecommendedClick}>
      Recommended
    </button>
  );
};

export default Recommended;
