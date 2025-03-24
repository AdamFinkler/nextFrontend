import { ICard } from "./types";
import "./style.css";
import starIcon from "../../assets/star.svg";
import arrowIcon from "../../assets/arrow.png";
import Button from "../button/Button";

const Card = ({ imageUrl, title, rating }: ICard) => {
  return (
    <div className="card-wrapper">
      <img src={imageUrl} alt={`card-image-${title}`} className="card-image" />

      <p className="card-title">{title}</p>

      <div className="card-rating-wrapper">
        <img src={starIcon} alt="star-icon" className="card-star-icon" />
        <span className="card-rating-text">{rating}</span>
      </div>

      <Button text="Read more" icon={arrowIcon} onClickHandler={() => {}} />
    </div>
  );
};

export default Card;
