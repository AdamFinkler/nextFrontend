import { useState } from "react";
import Modal from "react-modal";
import arrowIcon from "../../assets/arrow.png";
import "./style.css";
import Button from "../button/Button";

import { IModal } from "./types";

Modal.setAppElement("#root");

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
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setCloseModal}
        className="myModalContent"
        overlayClassName="myModalOverlay"
        contentLabel="Example Modal"
      >
        <div className="modal-content-container">
          <img
            className="modal-image"
            src="https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABd8H3yW84QBZ7bXkGlzSmeKjpS8gUEV7S_zPN4qVOX7mQ0SNpyHlOkh0WGGlrARjpOZPFlZXyU4t5E8phADO9rq80g.jpg?r=43c"
          />

          <div className="modal-details-container">
            <div className="modal-text-details-wrapper">
              <h2 className="title">title</h2>

              <p className="duration"> 2h 19min</p>

              <p className="rating"> 8.8/10</p>

              <p className="description">
                An insomniac office worker and a devilmay-care soapmaker form an
                underground fight club that evolves into something much, much
                more. An insomniac office worker and a devilmay-care soapmaker
                form an underground fight club that evolves into something much,
                much more. An insomniac office worker and a devilmay-care
                soapmaker form an underground fight club that evolves into
                something much, much more.
              </p>
            </div>

            <Button
              text={"back to list"}
              icon={arrowIcon}
              onClickHandler={setCloseModal}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MovieModal;
