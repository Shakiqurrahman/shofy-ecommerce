import React from "react";
import "./Home.css";

import { BsArrowRight } from "react-icons/bs";
import heroImg from '/images/hero-img-1.webp'
import { Link } from "react-router-dom";
import ProductType from "../../components/ProductType/ProductType";

const Home = () => {
  return (
    <>
    <section className="wrap">
    <div className="hero-section">
      <div className="content">
        <h1 className="hero-title">
          The best watch collection 2023
        </h1>
        <p className="discount-txt">
          Exclusive offer <span className="discount">-10%</span> off this week
        </p>
        <Link to='/shop'>
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

    <section className="product-type">
    <ProductType />
    </section>
    </>
    


  );
};

export default Home;
