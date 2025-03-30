import { ICard } from "./types";
import { useState } from "react";
import "./style.css";
import starIcon from "../../assets/star.svg";
import arrowIcon from "../../assets/arrow.png";
import Button from "../button/Button";
import Modal from "../modal/Modal";

const Card = ({ imageUrl, title, rating }: ICard) => {
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

      <p className="card-title">{title}</p>

      <div className="card-rating-wrapper">
        <img src={starIcon} alt="star-icon" className="card-star-icon" />
        <span className="card-rating-text">{rating}</span>
      </div>

      <Button text="Read more" icon={arrowIcon} onClickHandler={setOpenModal} />
      {modalIsOpen && (
        <Modal
          imageUrl={""}
          title={"title"}
          duration={"2:45"}
          rating={"3/8"}
          description={"bla bla bla bla bla"}
          isOpen={modalIsOpen}
          setCloseModal={setCloseModal}
        />
      )}
    </div>
  );
};

export default Card;
