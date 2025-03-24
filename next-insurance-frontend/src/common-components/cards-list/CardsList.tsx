import Card from "../card/Card";
import "./style.css";
import { mockMovies } from "../../mock-data/mockMovies";



const CardsList = () => {

  
  return (
    <div className="cards-list-wrapper">
      {mockMovies.map((movie) => (
        <Card
          key={movie.id}
          imageUrl={movie.image}
          rating={movie.rating ? Number(movie.rating) : 0}
          title={`${movie.title} (${movie.released})`}
        />
      ))}
    </div>
  );
};

export default CardsList;
