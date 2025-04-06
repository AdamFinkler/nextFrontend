import { ICard } from "./types";
import { useState } from "react";
import "./style.css";
import starIcon from "../../assets/star.svg";
import arrowIcon from "../../assets/arrow.png";
import CardButton from "../card-button/CardButton";
import Modal from "../modal/Modal";
import { useMovieStore } from "../../store/movieStore";

const Card = ({
  id,
  imageUrl,
  title,
  released,
  rating,
  description,
  duration,
}: ICard) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const updateCash = useMovieStore((state) => state.updateCashedMovieIds);
  const cash = useMovieStore((state) => state.cashedMovieIds);
  const setOpenModal = () => {
    setIsModalOpen(true);
  };

  const setCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card-wrapper">
      <img src={imageUrl} alt={`card-image-${title}`} className="card-image" />

      <p className="card-title-and-release">{`${title} (${released})`}</p>

      {rating.length > 0 && (
        <div className="card-rating-wrapper">
          <img src={starIcon} alt="star-icon" className="card-star-icon" />
          <span className="card-rating-text">{rating}</span>
        </div>
      )}

      <CardButton
        text="Read more"
        icon={arrowIcon}
        onClickHandler={() => {
          setOpenModal();
          updateCash(id);
          console.log("cashed items are: ", cash);
        }}
        direction="right"
      />

      {isModalOpen && (
        <Modal
          imageUrl={imageUrl}
          title={title}
          duration={duration}
          rating={rating}
          description={description}
          isOpen={isModalOpen}
          setCloseModal={setCloseModal}
        />
      )}
    </div>
  );
};

export default Card;
