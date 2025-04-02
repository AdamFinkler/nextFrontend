import { create } from "zustand";
import { IMovie } from "./types";

interface MoviesStore {
  movies: IMovie[];
  searchTerm: string;
  pageIndex: number;
  sortedByRating: boolean;
  filteredMovies: IMovie[];
  setPageIndex: (pageIndex: number) => void;
  setMovies: (movies: IMovie[]) => void;
  setFilteredMovies: (movies: IMovie[]) => void;
  setSearchTerm: (term: string) => void;
  toggleSortByRating: () => void;
}

export const useMovieStore = create<MoviesStore>()((set) => ({
  movies: [],
  searchTerm: "",
  pageIndex: 0,
  sortedByRating: false,
  filteredMovies: [],
  setPageIndex: (pageIndex: number) => set({ pageIndex }),
  setMovies: (newMovies: IMovie[]) => set({ movies: newMovies }),
  setFilteredMovies: (newMovies: IMovie[]) =>
    set({ filteredMovies: newMovies }),
  setSearchTerm: (term: string) => set({ searchTerm: term }),
  toggleSortByRating: () =>
    set((state) => ({ sortedByRating: !state.sortedByRating })),
}));
