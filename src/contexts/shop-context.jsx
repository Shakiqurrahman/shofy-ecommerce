import React, { createContext, useState } from "react";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import ProductsData from "../data/productsData";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [products, setProducts] = useState(ProductsData);

  const [detail, setDetail] = useState([]);

  const [close, setClose] = useState(false);

  const [cart, setCart] = useState([]);



  const addToCart = (product) => {
    const exsist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exsist) {
      toast.warn('This product is already added to the cart', {
        position: toast.POSITION.BOTTOM_LEFT
      })
      
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      toast.success('Product is added succesfully',{
        position: toast.POSITION.BOTTOM_LEFT
      })
    }
  };

  // const view = (product) => {
  //   setDetail([{ ...product }]);
    // setClose(true);
  // };

  const contextValue = {
    detail,
    // view,
    products,
    setProducts,
    ProductsData,
    close,
    setClose,
    cart,
    setCart,
    addToCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
