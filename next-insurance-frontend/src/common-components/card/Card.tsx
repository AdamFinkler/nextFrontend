import { ICard } from "./types";
import "./style.css";
import starIcon from "../../assets/star.svg";

const Card = ({ imageUrl, title, rating }: ICard) => {
  return (
    <div className="card-wrapper">
      <img src={imageUrl} alt={`card-image-${title}`} className="card-image" />

      <span className="card-title">{title}</span>

      <div className="card-rating-wrapper">
        <img src={starIcon} alt="star-icon" className="card-star-icon" />
        <span className="card-rating-text">{rating}</span>
      </div>

      <button>read more</button>
    </div>
  );
};

export default Card;
