import { ICard } from "./types";
import { useState } from "react";
import "./style.css";
import starIcon from "../../assets/star.svg";
import arrowIcon from "../../assets/arrow.png";
import CardButton from "../cardButton/CardButton";
import Modal from "../modal/Modal";
import { hasRating } from "./utils";

const Card = ({
  imageUrl,
  title,
  released,
  rating,
  description,
  duration,
}: ICard) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setOpenModal = () => {
    setModalIsOpen(true);
  };

  const setCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="card-wrapper">
      <img src={imageUrl} alt={`card-image-${title}`} className="card-image" />

      <p className="card-title-and-release">{`${title} (${released})`}</p>

      {hasRating(rating) && (
        <div className="card-rating-wrapper">
          <img src={starIcon} alt="star-icon" className="card-star-icon" />
          <span className="card-rating-text">{rating}</span>
        </div>
      )}

      <CardButton text="Read more" icon={arrowIcon} onClickHandler={setOpenModal} />
      {modalIsOpen && (
        <Modal
          imageUrl={imageUrl}
          title={title}
          duration={duration}
          rating={rating}
          description={description}
          isOpen={modalIsOpen}
          setCloseModal={setCloseModal}
        />
      )}
    </div>
  );
};

export default Card;
