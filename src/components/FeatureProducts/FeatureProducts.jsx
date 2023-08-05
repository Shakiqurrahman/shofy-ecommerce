import React, { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import "./FeatureProducts.css";
import ProductDetails from "../ProductDetails.jsx/ProductDetails";
import { ShopContext } from "../../contexts/shop-context";
import { useNavigate } from "react-router-dom";

const FeatureProducts = () => {
  const featureData = [
    {
      id: 1,
      productTitle:
        'Xiaomi Pad 5 Snapdragon 860 6GB RAM 256GB ROM 11" WQHD+ Global Version',
      productType: "Tablet",
      productPrice: 435,
      productImg: "./images/tablet4.jpg",
    },
    {
      id: 2,
      productTitle: "Xiaomi IMILAB W01 Fitness Smart Watch",
      productType: "Smart Watch",
      productPrice: 80,
      productImg: "./images/smart-watch3.jpg",
    },
    {
      id: 3,
      productTitle:
        'Xiaomi Pad 5 Snapdragon 860 6GB RAM 256GB ROM 11" WQHD+ Global Version',
      productType: "Mobile Phone",
      productPrice: 435,
      productImg: "./images/oneplus 10t.jpg",
    },
    {
      id: 4,
      productTitle: "Professional Camera 4K Digital Video Camera. ",
      productType: "Camera",
      productImg: "./images/tp4.jpg",
      productPrice: 1049,
    },
    {
      id: 5,
      productTitle: "Mini Portable PD 22.5W Fast Charging Powerbank.",
      productType: "Powerbank",
      productImg: "./images/tp5.jpg",
      productPrice: 49,
    },
    {
      id: 6,
      productTitle: "CPU Cooler 2 Heat Pipes 12nm 4 pin PWM RGB for intel.",
      productType: "Heat Pipe",
      productImg: "./images/tp6.png",
      productPrice: 130,
    },
    {
      id: 7,
      productTitle: "Playstation 4 2TB Slim Gaming Console.",
      productType: "Gaming",
      productImg: "./images/tp7.jpg",
      productPrice: 200,
    },
    {
      id: 8,
      productTitle: "Mini Portable Mobile Phone Powerbank for iphone.",
      productType: "Powerbank",
      productImg: "./images/tp8.jpg",
      productPrice: 90,
    },
  ];

  const navigate = useNavigate();

  const {view, close, addToCart} = useContext(ShopContext)
  return (
    <>
    { close ?
      <ProductDetails />
      : ""
    }
      {featureData.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="img-box">
            <img src={product.productImg} alt={product.productTitle} />
            <div className="card-icon">
              <li  onClick={() => addToCart(product)}>
                <FiShoppingCart />
              </li>
              <li onClick={() => navigate(`product-details/${product.id}`)}>
                <BsEye />
              </li>
              <li>
                <AiOutlineHeart />
              </li>
            </div>
          </div>
          <div className="details">
            <p>{product.productType}</p>
            <h3 className="product-title">{product.productTitle}</h3>
            <h3 className="product-price">
              ${product.productPrice.toFixed(2)}
            </h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeatureProducts;
