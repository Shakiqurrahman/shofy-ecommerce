import React, { useContext } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { ShopContext } from "../../contexts/shop-context";
import "./ProductDetails.css";
const ProductDetails = () => {
  const { id } = useParams();

  const { addToCart, products, cart } = useContext(ShopContext);

  const detail = products.find((p) => p._id === id);

  const exist = cart.find((x) => x._id === detail._id);

  const navigate = useNavigate();

  return (
    <section className="details-section">
      <div className="product-detail">
        <div className="detail-container">
          <button onClick={() => navigate(-1)} className="close-btn">
            <AiOutlineCloseCircle />
          </button>
          <div className="productbox">
            <div className="img-box">
              <img src={detail?.productImg} alt={detail?.name} />
            </div>
            <div className="detail">
              <h4>{detail?.category}</h4>
              <h2>{detail?.name}</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
                pariatur quidem quis dolorum saepe doloribus dolor nihil
                provident? Commodi.
              </p>
              <h3>${detail?.price}</h3>
              <button onClick={() => addToCart(detail)}>
                {exist ? "Already Added" : "Add To Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
