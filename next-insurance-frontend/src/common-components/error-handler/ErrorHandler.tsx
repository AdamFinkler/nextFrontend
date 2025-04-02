import "./styles.css";
import { IErrorHandler } from "./types";

const ErrorHandler = ({
  message,
  buttonText,
  buttonHandler,
}: IErrorHandler) => {
  return (
    <div className="error-handler-wrapper">
      {message}

      <button className="retry-button" onClick={buttonHandler}>
        {buttonText}
      </button>
    </div>
  );
};

export default ErrorHandler;
