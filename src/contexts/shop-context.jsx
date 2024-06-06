import React, { createContext, useEffect, useState } from "react";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8101/api/products');
        setProducts(response.data);
        setFilteredProducts(response.data)
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };

    fetchProducts();
  }, [])


  const filterProductsHandler = (productCategory) => {
    const update = products.filter((data) => {
      return data.category === productCategory.toLowerCase();
    });
    setFilteredProducts(update);
  };

  const allProductsHandler = () => {
    setFilteredProducts(products);
  };
  

  const [detail, setDetail] = useState([]);

  const [close, setClose] = useState(false);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exsist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exsist) {
      toast.warn("This product is already added to the cart", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      toast.success("Product is added succesfully", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  };

  // const view = (product) => {
  //   setDetail([{ ...product }]);
  // setClose(true);
  // };

  const contextValue = {
    detail,
    // view,
    filteredProducts,
    allProductsHandler,
    filterProductsHandler,
    products,
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
