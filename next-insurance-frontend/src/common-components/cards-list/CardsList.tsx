import Card from "../card/Card";
import { MOVIES_PER_PAGE } from "../../consts/consts";
import "./style.css";
import { ICardList } from "./types";
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

const CardList = ({ movies, pageIndex }: ICardList) => {
  const paginatedMovies = getPaginatedMovies(movies, pageIndex);

  return (
    <div className="cards-list-wrapper">
      {paginatedMovies.map((movie) => (
        <Card
          key={movie.id}
          imageUrl={movie.image}
          rating={movie.rating}
          title={movie.title}
          released={movie.released}
          description={movie.synopsis}
          duration={movie.runtime}
        />
      ))}
    </div>
  );
};

export default CardList;
