import React, { useContext } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../../contexts/shop-context";
import "./ProductDetails.css";
const ProductDetails = () => {
  const { id } = useParams();

  const { setClose, addToCart, products, cart } = useContext(ShopContext);

  const detail = products.find((p) => p.id === Number(id));

const exist = cart.find((x) => x.id === detail.id);


  return (
    <>
      <div className="product-detail">
        <div className="detail-container">
          <button onClick={() => setClose(false)} className="close-btn">
           <Link to='/'> <AiOutlineCloseCircle /></Link>
          </button>
          <div className="productbox">
            <div className="img-box">
              <img src={detail.productImg} alt={detail.productType} />
            </div>
            <div className="detail">
              <h4>{detail.productType}</h4>
              <h2>{detail.productTitle}</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
                pariatur quidem quis dolorum saepe doloribus dolor nihil
                provident? Commodi.
              </p>
              <h3>${detail.productPrice}</h3>
              <button onClick={() => addToCart(detail)}>{exist ? "Already Added"  : "Add To Cart"}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
