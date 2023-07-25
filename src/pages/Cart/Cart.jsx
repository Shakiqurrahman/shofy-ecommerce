import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ShopContext } from "../../contexts/shop-context";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
    // increament quantity
    const incqty = (product) => {
        const exsist = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((curElm) => {
            return curElm.id === product.id ? {...exsist, qty: exsist.qty + 1} : curElm
        }))
    }

    //decreament quantity
    const decqty = (product) => {
        const exsist = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((curElm) => {
            return curElm.id === product.id ? {...exsist, qty: exsist.qty - 1} : curElm
        }))
    }


  const { cart, setCart, addToCart } = useContext(ShopContext);
  return (
    <section className="cart-container">
      {cart.length === 0 && (
        <div className="empty-cart">
          <h2>Cart is Empty!</h2>
          <Link  className="empty-btn" to='/product'>Shop Now</Link>
        </div>
      )}
      <div className="contant">
        {cart.map((curElm) => {
          return (
            <div className="cart-item">
              <div className="img-box">
                <img src={curElm.productImg} alt={curElm.productTitle} />
              </div>
              <div className="detail">
                <h4>{curElm.productType}</h4>
                <h3>{curElm.productTitle}</h3>
                <p>Price: ${curElm.productPrice}</p>
                <div className="qty">
                    <button className="decqty" onClick={()=> decqty(curElm)}>-</button>
                    <input type="text" value={curElm.qty} />
                    <button className="incqty" onClick={()=> incqty(curElm)}>+</button>
                </div>
                <h4>Sub Total : ${curElm.productPrice * curElm.qty}</h4>
                <button>
                  <AiOutlineClose />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Cart;
