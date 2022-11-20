import "./error.style.css";
import { BsArrowLeft } from "react-icons/bs";
import errorImg from "./assets/page-not-found.png";

const Error = () => {
  return (
    <div className="error-page">
      <h1>We lost this page</h1>
      <p>
        We couldn't find what you are looking for. Let's find a better place for
        you to go.
      </p>
      <div className="error-buttons">
        <a className="link" href="/">
          <button className="btn-solid">Go to Certawi Home</button>
        </a>
        <a className="link">
          <button className="btn-outline">
            <BsArrowLeft className="arrow-left" />
            Go Back
          </button>
        </a>
      </div>
      <div className="error-image">
        <img src={errorImg} alt="error 404" />
      </div>
    </div>
  );
};

export default Error;
