import { IMovie} from "../../store/types";

export interface ICardList{
  pageIndex:number;
  movies: IMovie[];
};