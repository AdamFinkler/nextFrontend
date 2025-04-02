import { HOMEPAGE_TITLE } from "../consts/consts";
import MoviesList from "../movies-list/MoviesList";
import "./style.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <h1 className="homepage-title">{HOMEPAGE_TITLE}</h1>
      <MoviesList />
    </div>
  );
};

export default Homepage;
