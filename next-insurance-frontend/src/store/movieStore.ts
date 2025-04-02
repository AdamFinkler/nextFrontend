import { create } from "zustand";
import { IMovie } from "./types";

interface MoviesStore {
  movies: IMovie[];
  searchTerm: string;
  pageIndex: number;
  setPageIndex: (pageIndex: number) => void;
  setMovies: (movies: IMovie[]) => void;
  addMovies: (movies: IMovie[]) => void;
  setSearchTerm: (term: string) => void;
}

export const useMovieStore = create<MoviesStore>()((set) => ({
  movies: [],
  searchTerm: "",
  pageIndex: 0,
  setPageIndex: (pageIndex: number) => set({ pageIndex }),
  setMovies: (newMovies: IMovie[]) => set({ movies: newMovies }),
  addMovies: (newMovies: IMovie[]) =>
    set((state) => ({ movies: [...state.movies, ...newMovies] })),
  setSearchTerm: (term: string) => set({ searchTerm: term }),
}));