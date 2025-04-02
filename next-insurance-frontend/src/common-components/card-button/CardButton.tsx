import { ICardButton } from "./types";
import "./style.css";

const CardButton = ({
  text,
  icon,
  direction = "left",
  onClickHandler,
}: ICardButton) => {
  return (
    <button
      className={`card-button card-button-${direction}`}
      onClick={onClickHandler}
    >
      <p className="button-text">{text}</p>

      {icon && <img src={icon} alt="image-icon" />}
    </button>
  );
};

export default CardButton;
