import React from "react";
import "./Home.css";

import { BsArrowRight } from "react-icons/bs";
import { FiHeadphones, FiTruck } from "react-icons/fi";
import { TbDiscount2 } from "react-icons/tb";
import { TfiMoney } from "react-icons/tfi";
import { Link } from "react-router-dom";
import ProductType from "../../components/ProductType/ProductType";
import heroImg from "/images/hero-img-1.webp";
import FeatureProducts from "../../components/FeatureProducts/FeatureProducts";

const Home = () => {
  return (
    <>
      <section className="wrap">
        <div className="hero-section">
          <div className="content">
            <h1 className="hero-title">The best watch collection 2023</h1>
            <p className="discount-txt">
              Exclusive offer <span className="discount">-10%</span> off this
              week
            </p>
            <Link to="/product">
              <button className="shop-now-btn">
                Shop Now <BsArrowRight className="arrow-icon" />
              </button>
            </Link>
          </div>
          <div className="img">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </section>

      {/* --------------
        Product Type
    ------------------ */}

      <section className="product-type container">
        <ProductType />
      </section>

      {/* Service Section  */}
      <section className="service-section container">
        <div className="service-box">
          <div className="service-icon">
            <FiTruck />
          </div>
          <div className="service-details">
            <h5>Free Delivery</h5>
            <p>Orders From All Item</p>
          </div>
        </div>
        <div className="service-box">
          <div className="service-icon">
            <TfiMoney />
          </div>
          <div className="service-details">
            <h5>Return & Refund</h5>
            <p>Money Back Guarantee</p>
          </div>
        </div>
        <div className="service-box">
          <div className="service-icon">
            <TbDiscount2 />
          </div>
          <div className="service-details">
            <h5>Member Discount</h5>
            <p>On Every Over $140.00</p>
          </div>
        </div>
        <div className="service-box">
          <div className="service-icon">
            <FiHeadphones />
          </div>
          <div className="service-details">
            <h5>Support 24/7</h5>
            <p>Every Time Call Support</p>
          </div>
        </div>
      </section>

      {/* feature products  */}
      <section className="feature-section container">
        <svg
          className="shape"
          width="114"
          height="35"
          viewBox="0 0 114 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M112 23.275C1.84952 -10.6834 -7.36586 1.48086 7.50443 32.9053"
            stroke="currentColor"
            strokeWidth="4"
            strokeMiterlimit="3.8637"
            strokeLinecap="round"
          ></path>
        </svg>
        <h1 className="feature-title">Trending Products</h1>
        <div className="feature-products">
          <FeatureProducts />
        </div>
      </section>

      {/* banner section  */}
      <section className="container">
        <div className="banner">
        <div className="banner-details">
          <p>TABLET COLLECTION 2023</p>
          <h2>Samsung Galaxy Tab S6, Wifi Tablet</h2>
          <span className="old-price">$1240.00</span>
          <p className="price">$975.00</p>
          <button className="banner-btn">
            Shop Now
          </button>
        </div>
        <div className="shape">
        <div className="banner-img">
          <img src="/images/slider-img.png" alt="banner image" />
        </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Home;
