import React, { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../contexts/shop-context";
import "./Product.css";
import ProductDetails from "../../components/ProductDetails.jsx/ProductDetails";

const Shop = () => {
  const navigate = useNavigate();
  const { filteredProducts, addToCart, filterProductsHandler, allProductsHandler } = useContext(ShopContext);

  return (
    <>
      <div className="products">
        <h2># Products</h2>
        <p>
          <Link to="/">Home </Link>. Products
        </p>
        <div className="products-section">
          <div className="filter">
            <div className="categories">
              <h3>Categories</h3>
              <ul>
                <li onClick={() => allProductsHandler()}>All Products</li>
                <li onClick={() => filterProductsHandler("Mobile Phone")}>
                  Mobile Phone
                </li>
                <li onClick={() => filterProductsHandler("Tablet")}>Tablet</li>
                <li onClick={() => filterProductsHandler("Smart Watch")}>
                  Smart Watch
                </li>
                <li onClick={() => filterProductsHandler("Headphone")}>Headphone</li>
                <li onClick={() => filterProductsHandler("Camera")}>Camera</li>
                <li onClick={() => filterProductsHandler("Gaming")}>Gaming</li>
              </ul>
            </div>
          </div>
          <div className="product-box">
            {filteredProducts.map((product) => (
              <div className="product-card" key={product._id}>
                <div className="img-box">
                  <img src={product?.productImg} alt={product.name} />
                  <div className="card-icon">
                    <li onClick={() => addToCart(product)}>
                      <FiShoppingCart />
                    </li>
                    <li
                      onClick={() =>
                        navigate(`/product-details/${product._id}`)
                      }
                    >
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
                  <p className="product-category">{product?.category}</p>
                  <h3 className="product-title">{product?.name}</h3>
                  <h3 className="product-price">
                    ${parseFloat(product?.price.toFixed(2))}
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
