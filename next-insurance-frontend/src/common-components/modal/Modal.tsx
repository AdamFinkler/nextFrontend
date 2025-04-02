import Modal from "react-modal";
import arrowIcon from "../../assets/arrow.png";
import starIcon from "../../assets/star.svg";
import CardButton from "../card-button/CardButton";
import "./style.css";
import { IModal } from "./types";
import { formatDuration } from "./utils";

Modal.setAppElement("body");

const MovieModal = ({
  imageUrl,
  title,
  duration,
  rating,
  description,
  isOpen,
  setCloseModal,
}: IModal) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={setCloseModal}
      className="my-modal-content"
      overlayClassName="my-modal-overlay"
      contentLabel="Example Modal"
    >
      <div className="modal-content-container">
        <img className="modal-image" src={imageUrl} alt="modal-image" />

        <div className="modal-details-container">
          <div className="modal-text-details-wrapper">
            <h2 className="title">{title}</h2>

            <p className="duration">{formatDuration(duration)}</p>

            {rating.trim().length > 0 && (
              <div className="rating-container">
                <img className="modal-star-icon" src={starIcon} />
                <p className="rating"> {rating}</p>
              </div>
            )}

            <p className="description">{description}</p>
          </div>

          <CardButton
            text={"back to list"}
            icon={arrowIcon}
            onClickHandler={setCloseModal}
          />
        </div>
      </div>
    </Modal>
  );
};

export default MovieModal;
