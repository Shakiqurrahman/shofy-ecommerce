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
  const { products, setProducts, ProductsData, view, close, addToCart} = useContext(ShopContext);


  const filterProduct = (product) => {
    const update = ProductsData.filter((data) => {
      return data.productType === product;
    });
    setProducts(update);
  };

  const allProducts = () => {
    setProducts(ProductsData);
  };
  return (
    <>
    { close ?
      <ProductDetails />
      : ""
    }
      
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
                <li onClick={() => allProducts()}>All Products</li>
                <li onClick={() => filterProduct("Mobile Phone")}>
                  Mobile Phone
                </li>
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
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="img-box">
                  <img src={product.productImg} alt={product.productTitle} />
                  <div className="card-icon">
                    <li onClick={() => addToCart(product)}>
                      <FiShoppingCart />
                    </li>
                    <li onClick={() => navigate(`/product-details/${product.id}`)}>
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
                    ${parseFloat(product.productPrice.toFixed(2))}
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
