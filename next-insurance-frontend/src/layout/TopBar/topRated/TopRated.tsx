import React from "react";
import { useMovieStore } from "../../../store/movieStore";
import "./styles.css";
import { ITopRated } from "./types";

const TopRated = ({handleCloseMenu}: ITopRated) => {
  const sortedByRating = useMovieStore((state) => state.sortedByRating);
  const toggleSortByRating = useMovieStore((state) => state.toggleSortByRating);

  const handleTopRatedClick = ()=>{
    toggleSortByRating();
    if(handleCloseMenu) handleCloseMenu();
    }
    
  return (
    <button className="top-rated-button" onClick={handleTopRatedClick}>
      {sortedByRating ? "Original Order" : "Top Rated"}
    </button>
  );
};
export default TopRated;
