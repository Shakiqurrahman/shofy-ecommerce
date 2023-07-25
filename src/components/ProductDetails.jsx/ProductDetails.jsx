import React, { useContext } from "react";
import { ShopContext } from "../../contexts/shop-context";
import { AiOutlineCloseCircle } from "react-icons/ai";
import './ProductDetails.css'
const ProductDetails = () => {

    const {detail, setClose, addToCart } = useContext(ShopContext);
  return (
    <>
      <div className="product-detail">
        <div className="detail-container">
          <button onClick={() => setClose(false)} className="close-btn">
            <AiOutlineCloseCircle />
          </button>
          {detail.map((curElm, idx) => (
            <div key={idx} className="productbox">
              <div className="img-box">
                <img src={curElm.productImg} alt={curElm.productType}></img>
              </div>
              <div className="detail">
                <h4>{curElm.productType}</h4>
                <h2>{curElm.productTitle}</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Illo, pariatur quidem quis dolorum saepe doloribus dolor nihil
                  provident? Commodi.
                </p>
                <h3>${curElm.productPrice}</h3>
                <button  onClick={() => addToCart(curElm)}>Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
