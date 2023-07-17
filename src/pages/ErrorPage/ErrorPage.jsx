import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";
import { BsArrowRight } from "react-icons/bs";
import errorImg from "/images/error.webp"

const ErrorPage = () => {
  return (
    <div className="error-page">
        <img className="error-img" src={errorImg} alt="" />
      {/* <h2 className="error-title">404</h2> */}
      <p>This Page is not unavailable</p>
      <Link to="/">
        <button className="error-btn">For Shop <BsArrowRight className="arrow-icon"/></button>
      </Link>
    </div>
  );
};

export default ErrorPage;
