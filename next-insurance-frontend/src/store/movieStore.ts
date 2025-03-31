import { create } from "zustand";
import { MovieDTO } from "./types";

interface MoviesStore {
  movies: MovieDTO[];
  setMovies: (movies: MovieDTO[]) => void;
}

export const useMovieStore = create<MoviesStore>()((set) => ({
  movies: [],
  setMovies: (newMovies: MovieDTO[]) => set({ movies: newMovies }),
}));
