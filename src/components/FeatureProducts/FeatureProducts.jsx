import React, { useContext, useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ProductDetails from "../ProductDetails.jsx/ProductDetails";
import "./FeatureProducts.css";
import axios from "axios";
import { ShopContext } from "../../contexts/shop-context";

const FeatureProducts = () => {
  const navigate = useNavigate();

  const {  addToCart, featuredProducts } = useContext(ShopContext);

  return (
    <>
      {featuredProducts.map((product) => (
        <div className="product-card" key={product._id}>
          <div className="img-box">
            <img src={product.productImg} alt={product.name} />
            <div className="card-icon">
              <li onClick={() => addToCart(product)}>
                <FiShoppingCart />
              </li>
              <li onClick={() => navigate(`product-details/${product._id}`)}>
                <BsEye />
              </li>
              <li>
                <AiOutlineHeart />
              </li>
            </div>
          </div>
          <div
            className="details"
            onClick={() => navigate(`/product-details/${product._id}`)}
          >
            <p>{product?.category}</p>
            <h3 className="product-title">{product?.name}</h3>
            <h3 className="product-price">
              ${product?.price.toFixed(2)}
            </h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeatureProducts;
