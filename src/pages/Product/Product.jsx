import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import ProductsData from "../../data/productsData";
import "./Product.css";

const Shop = () => {
  const [product, setProduct] = useState(ProductsData);

  const filterProduct = (product) => {
    const update = ProductsData.filter((data) => {
      return data.productType === product;
    });
    setProduct(update);
  };

  const allProducts = () => {
    setProduct(ProductsData);
  };
  return (
    <>
      <div className="products">
        <h2># Products</h2>
        <p>Home . Products</p>
        <div className="products-section">
          <div className="filter">
            <div className="categories">
              <h3>Categories</h3>
              <ul>
                <li onClick={() => allProducts()}>All Products</li>
                <li onClick={() => filterProduct("Tablet")}>Tablet</li>
                <li onClick={() => filterProduct("Smart Watch")}>
                  Smart Watch
                </li>
                <li onClick={() => filterProduct("Headphone")}>Headphone</li>
                <li onClick={() => filterProduct("Camera")}>Camera</li>
                <li onClick={() => filterProduct("Gaming")}>Gaming</li>
              </ul>
            </div>
          </div>
          <div className="product-box">
            {product.map((product) => (
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
                  <h3 className="product-price">
                    ${product.productPrice.toFixed(2)}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
