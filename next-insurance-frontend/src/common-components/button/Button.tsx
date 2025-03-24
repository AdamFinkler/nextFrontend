import { IButton } from "./types";
import "./style.css";

const Button = ({ text, icon, onClickHandler }: IButton) => {
  return (
    <button className="primary-button" onClick={onClickHandler}>
      <p className="button-text">{text}</p>

      {icon && <img src={icon} alt="image-icon" />}
    </button>
  );
};

export default Button;
