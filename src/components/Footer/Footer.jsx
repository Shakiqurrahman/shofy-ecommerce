import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { ImLinkedin2 } from "react-icons/im";
import { RiFacebookFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="about">
          <div className="logo">
            <img src="/images/logo.svg" alt="" />
          </div>
          <div className="details">
            <p>
              We are a team of designers and developers that create high quality
              Website - Ancor Point
            </p>
            <div className="icon">
              <Link target="_blank" to="https://www.facebook.com/shakqur.rahmankayum">
                <li>
                  <RiFacebookFill />
                </li>
              </Link>
              <Link target="_blank" to="https://www.instagram.com/retro_phile__/">
                <li>
                  <AiOutlineInstagram />
                </li>
              </Link>
              <Link target="_blank" to="https://www.linkedin.com/in/shakiqurrahman/">
                <li>
                  <ImLinkedin2 />
                </li>
              </Link>
              <Link target="_blank" to="https://youtube.com/@AncorPoint">
                <li>
                  <BsYoutube />
                </li>
              </Link>
            </div>
          </div>
        </div>
        <div className="account">
          <h3>My Account</h3>
          <ul>
            <li>Account</li>
            <li>Order</li>
            <li>Cart</li>
            <li>Shipping</li>
            <li>Return</li>
          </ul>
        </div>
        <div className="page">
          <h3>Pages</h3>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/product">
              <li>Product</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copyright">© 2023 All Rights Reserved | Template by <Link target='_blank' to='https://shakiqur-rahman.netlify.app/#'>Shakiqur Rahman</Link>.</p>
    </footer>
  );
};

export default Footer;
