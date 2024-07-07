import React, { useContext, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "/logo.svg";
import { ShopContext } from "../../contexts/shop-context";

const Header = () => {
  const {cart} = useContext(ShopContext);
  const [toggle, setToggle] = useState(false);

  const handleClose = () => {
    setToggle(!toggle);
  }

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Shofy Logo" />
        </Link>
      </div>
      <div className="nav">

        <nav className="navbar">
          <ul className={toggle ? 'nav-links mobile-nav' : 'nav-links'}>
            <li>
              <NavLink onClick={handleClose} to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink onClick={handleClose} to="/product">PRODUCT</NavLink>
            </li>
            <li>
              <NavLink onClick={handleClose} to="/about">ABOUT US</NavLink>
            </li>
            <li>
              <NavLink onClick={handleClose} to="/contact">CONTACT US</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="cart-icon">
        <Link className="link" to="/">
          <AiOutlineHeart />
        </Link>
        <Link className="link" to="/cart">
          <FiShoppingCart />
        </Link>
        <span className="cart-qty">{cart.length}</span>
        <Link to="/">
          <button className="login-btn">Login</button>
        </Link>

        {/* hamburger */}
        <div className="hamburger-menu" onClick={() => setToggle(!toggle)}>
          {toggle ? <GrClose className="close" />: <GiHamburgerMenu />}
        </div>
      </div>
    </div>
  );
};

export default Header;
