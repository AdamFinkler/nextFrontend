import React, { useRef } from "react";
import "./styles.css";
import { useMovieStore } from "../../store/movieStore";
import { fetchSearchedMovies } from "../../requests/requests";
import { cleanString } from "../../customHooks/useFetchMovies/utils";

const Search = () => {
  const setPageIndex = useMovieStore((state) => state.setPageIndex);
  const movies = useMovieStore((state) => state.movies);
  const setMovies = useMovieStore((state) => state.setMovies);
  const setSearchedTerm = useMovieStore((state) => state.setSearchTerm);
  const movieSearchRef = useRef<HTMLInputElement>(null);

  const handleSearchOnClick = async () => {
    if (!movieSearchRef.current?.value.trim()) {
      setSearchedTerm("");
      return;
    }

    try {
      setPageIndex(0);
      const searchedMovies = await fetchSearchedMovies(
        movieSearchRef.current.value
      );
      const mergedMovies = [...movies, ...searchedMovies];

      const uniqueMovies = Array.from(
        new Map(mergedMovies.map((movie) => [movie.id, movie])).values()
      );
      setMovies(uniqueMovies);
      setSearchedTerm(cleanString(movieSearchRef.current.value));
    } catch (e) {
      console.error("error while searching for a movie", e);
    }
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
