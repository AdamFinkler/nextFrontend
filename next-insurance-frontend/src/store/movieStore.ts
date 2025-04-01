import { create } from "zustand";
import { IMovie } from "./types";

interface MoviesStore {
  movies: IMovie[];
  setMovies: (movies: IMovie[]) => void;
}

export const useMovieStore = create<MoviesStore>()((set) => ({
  movies: [],
  setMovies: (newMovies: IMovie[]) => set({ movies: newMovies }),
}));
