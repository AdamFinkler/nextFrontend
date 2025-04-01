import { ICardButton } from "./types";
import "./style.css";

const CardButton = ({ text, icon, onClickHandler }: ICardButton) => {
  return (
    <button
    className={`card-button ${text==="back to list" ? "close" : ""}`}
    onClick={onClickHandler}
  >
    <p className="button-text">{text}</p>
    {icon && <img src={icon} alt="image-icon" />}
  </button>
  );
};

export default CardButton;
