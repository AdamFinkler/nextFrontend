import { IMovie } from "../store/types";

export interface serverResponse {
    offset: number;
    limit: number;
    total: number;
    movies: IMovie[];
  }