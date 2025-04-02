import { MOVIES_PER_PAGE } from "../../consts/consts";
import { IMovie } from "../../store/types";

export const getPaginatedMovies = (
  movies: IMovie[],
  offset: number,
  pageSize: number = MOVIES_PER_PAGE
) => {
  const start = offset * pageSize;
  const end = start + pageSize;
  return movies.slice(start, end);
};
