import Card from "../card/Card";
import "./style.css";
import { ICardList } from "./types";

const CardList = ({ movies }: ICardList) => {

  return (
    <div className="cards-list-wrapper">
      {movies.map((movie) => (
        <Card
          key={movie.id}
          imageUrl={movie.image}
          rating={movie.rating ? Number(movie.rating) : 0}
          title={movie.title}
          released = {movie.released}
        />
      ))}
    </div>
  );
};

export default CardList;