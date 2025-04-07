import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IMovie } from "./types";

interface MoviesStore {
  movies: IMovie[];
  searchTerm: string;
  pageIndex: number;
  isSortedByRating: boolean;
  isShowingRecommended: boolean;
  filteredMovies: IMovie[];
  recommendedMovies: IMovie[];
  cashedMovieIds: string[];
  updateCashedMovieIds: (newId: string) => void;
  setCashedMovieIds: (movieIds: string[]) => void;
  setRecommendedMovies: (movies: IMovie[]) => void;
  setPageIndex: (pageIndex: number) => void;
  setMovies: (movies: IMovie[]) => void;
  setFilteredMovies: (movies: IMovie[]) => void;
  setSearchTerm: (term: string) => void;
  toggleIsSortedByRating: () => void;
  toggleIsShowingRecommended: () => void;
}

export const useMovieStore = create<MoviesStore>()(
  persist(
    (set, get) => ({
      movies: [],
      searchTerm: "",
      pageIndex: 0,
      isSortedByRating: false,
      isShowingRecommended: false,
      filteredMovies: [],
      recommendedMovies: [],
      cashedMovieIds: [],
      updateCashedMovieIds: (newId: string) => {
        const currentMovieIds = get().cashedMovieIds;
        const filteredIds = currentMovieIds.filter((id) => id !== newId);
        filteredIds.push(newId);
        if (filteredIds.length > 5) {
          filteredIds.shift();
        }
        set({ cashedMovieIds: filteredIds });
      },
      setCashedMovieIds: (newMovieIds: string[]) =>
        set({ cashedMovieIds: newMovieIds }),
      setRecommendedMovies: (newMovies: IMovie[]) =>
        set({ recommendedMovies: newMovies }),
      setPageIndex: (pageIndex: number) => set({ pageIndex }),
      setMovies: (newMovies: IMovie[]) => set({ movies: newMovies }),
      setFilteredMovies: (newMovies: IMovie[]) =>
        set({ filteredMovies: newMovies }),
      setSearchTerm: (term: string) => set({ searchTerm: term }),
      toggleIsSortedByRating: () =>
        set((state) => ({ isSortedByRating: !state.isSortedByRating })),
      toggleIsShowingRecommended: () =>
        set((state) => ({ isShowingRecommended: !state.isShowingRecommended })),
    }),
    {
      name: "cashedMovieIdsStore",
      partialize: (state) => ({ cashedMovieIds: state.cashedMovieIds }),
    }
  )
);


export const useMovieListState = () => {
  return {
    movies: useMovieStore((state) => state.movies),
    filteredMovies: useMovieStore((state) => state.filteredMovies),
    recommendedMovies: useMovieStore((state) => state.recommendedMovies),
    searchTerm: useMovieStore((state) => state.searchTerm),
    pageIndex: useMovieStore((state) => state.pageIndex),
    isSortedByRating: useMovieStore((state) => state.isSortedByRating),
    isShowingRecommended: useMovieStore((state) => state.isShowingRecommended),
    toggleIsShowingRecommended: useMovieStore((state) => state.toggleIsShowingRecommended),
  };
};
