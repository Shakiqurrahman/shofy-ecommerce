import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ShopContext } from "../../contexts/shop-context";
import "./Cart.css";

const Cart = () => {
  const { cart, setCart } = useContext(ShopContext);

  // increament quantity
  const incqty = (product) => {
    const exsist = cart.find((x) => {
      return x._id === product._id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm._id === product._id
          ? { ...exsist, qty: exsist.qty + 1 }
          : curElm;
      })
    );
  };

  //decreament quantity
  const decqty = (product) => {
    const exsist = cart.find((x) => {
      return x._id === product._id;
    });
    if (product.qty > 1) {
      setCart(
        cart.map((curElm) => {
          return curElm._id === product._id
            ? { ...exsist, qty: exsist.qty - 1 }
            : curElm;
        })
      );
    }
    else {
      setCart(
        cart.filter((x) => {
          return x._id !== product._id;
        })
      );
    }
  };

  //Remove Cart Product

  const removeProduct = (product) => {
    const exsist = cart.find((x) => {
      return x._id === product._id;
    });
    if (exsist.qty >= 0) {
      setCart(
        cart.filter((x) => {
          return x._id !== product._id;
        })
      );
    }
  };

  //total price
  const TotalPrice = cart.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  console.log(cart);

  return (
    <section className="cart-container">
      {cart.length === 0 && (
        <div className="empty-cart">
          <img src="/images/empty.png" alt="" />
          <h2>Cart is Empty!</h2>
          <Link className="empty-btn" to="/product">
            Continue Shopping
          </Link>
        </div>
      )}
      <div className="contant">
        {cart.map((curElm) => {
          return (
            <div className="cart-item" key={curElm._id}>
              <div className="img-box">
                <img src={curElm.productImg} alt={curElm.name} />
              </div>
              <div className="detail">
                <div className="info">
                  <h4>{curElm.category}</h4>
                  <h3>{curElm.name}</h3>
                  <p>Price: ${curElm.price}</p>
                  <div className="qty">
                    <button className="decqty" onClick={() => decqty(curElm)}>
                      -
                    </button>
                    <input type="text" disabled value={curElm.qty} />
                    <button className="incqty" onClick={() => incqty(curElm)}>
                      +
                    </button>
                  </div>
                  <h4>Sub Total : ${curElm.price * curElm.qty}</h4>
                </div>
                <div className="close">
                  <button onClick={() => removeProduct(curElm)}>
                    <AiOutlineClose /> Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {cart.length > 0 && (
        <div className="total-box">
          <h2 className="total-price">
            <span>Subtotal</span> <span>${TotalPrice}</span>
          </h2>
          <button className="checkout">Checkout</button>
        </div>
      )}
    </section>
  );
};

export default Cart;
