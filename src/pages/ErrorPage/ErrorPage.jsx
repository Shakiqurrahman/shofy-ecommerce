import React, { useContext } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./ErrorPage.css";
import errorImg from "/images/error.jpeg";
const ErrorPage = () => {

  return (
    <div className="error-page">
      <img className="error-img" src={errorImg} alt="" />
      {/* <h2 className="error-title">404</h2> */}
      <p>This Page is not available</p>
      <Link to="/">
        <button className="error-btn">
          For Shop <BsArrowRight className="arrow-icon" />
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
