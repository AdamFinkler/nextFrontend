import React, { useRef } from "react";
import { cleanString } from "../../customHooks/useFetchMovies/utils";
import { fetchSearchedMovies } from "../../requests/requests";
import { useMovieStore } from "../../store/movieStore";
import "./styles.css";

const Search = () => {
  const setPageIndex = useMovieStore((state) => state.setPageIndex);
  const setFilteredMovies = useMovieStore((state) => state.setFilteredMovies);
  const setSearchedTerm = useMovieStore((state) => state.setSearchTerm);
  const isShowingRecommended = useMovieStore(
    (state) => state.isShowingRecommended
  );
  const toggleIsShowingRecommended = useMovieStore(
    (state) => state.toggleIsShowingRecommended
  );
  const movieSearchRef = useRef<HTMLInputElement>(null);

  const handleSearchOnClick = async () => {
    if (isShowingRecommended) toggleIsShowingRecommended();
    if (!movieSearchRef.current?.value.trim()) {
      setSearchedTerm("");
      setFilteredMovies([]);
      return;
    }

    try {
      setPageIndex(0);
      const searchedMovies = await fetchSearchedMovies(
        cleanString(movieSearchRef.current.value)
      );

      setFilteredMovies(searchedMovies);
      setSearchedTerm(cleanString(movieSearchRef.current.value));
    } catch (e) {
      console.error("error while searching for a movie", e);
    }
    movieSearchRef.current.value = "";
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchOnClick();
    }
  };

  return (
    <div className="search-container">
      <img
        className="search-icon"
        src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
        alt="search icon"
        onClick={handleSearchOnClick}
      />

      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        ref={movieSearchRef}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default Search;
