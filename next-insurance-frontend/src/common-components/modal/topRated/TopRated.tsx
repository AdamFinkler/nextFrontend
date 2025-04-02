import React from "react";
import { useMovieStore } from "../../../store/movieStore";
import "./styles.css";

const TopRated = () => {
  const sortedByRating = useMovieStore((state) => state.sortedByRating);
  const toggleSortByRating = useMovieStore((state) => state.toggleSortByRating);

  return (
    <button className="top-rated-button" onClick={toggleSortByRating}>
      {sortedByRating ? "Original Order" : "Top Rated"}
    </button>
  );
};

export default TopRated;
