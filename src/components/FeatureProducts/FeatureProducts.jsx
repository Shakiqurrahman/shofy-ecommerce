import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import "./FeatureProducts.css";

const FeatureProducts = () => {
  const featureData = [
    {
      id: 1,
      productTitle: "Galaxy Tab S6 Lite 10.4-inch Android Tablet 128GB.",
      productType: "Tablet",
      productImg: "./images/tp1.jpg",
      productPrice: 723,
    },
    {
      id: 2,
      productTitle: "Tracker with IP67 Waterproof Smart Watch.",
      productType: "Smart Watch",
      productImg: "./images/tp2.jpg",
      productPrice: 168,
    },
    {
      id: 3,
      productTitle: "Noise Cancelling Wireless Headphone.",
      productType: "Headphone",
      productImg: "./images/tp3.jpg",
      productPrice: 49,
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
  return (
    <>
      {featureData.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="img-box">
            <img src={product.productImg} alt={product.productTitle} />
            <div className="card-icon">
              <li>
                <FiShoppingCart />
              </li>
              <li>
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
            <h3 className="product-price">${product.productPrice.toFixed(2)}</h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeatureProducts;
