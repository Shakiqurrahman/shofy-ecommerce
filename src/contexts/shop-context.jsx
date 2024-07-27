import React, { createContext, useEffect, useState } from "react";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://shofy-ecommerce-server.vercel.app/api/products");
        setProducts(response.data);
        setFilteredProducts(response.data);
        setFeaturedProducts(response.data.slice(0, 4));
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  const filterProductsHandler = (productCategory) => {
    const update = products.filter((data) => {
      return data.category === productCategory.toLowerCase();
    });
    setFilteredProducts(update);
  };

  const allProductsHandler = () => {
    setFilteredProducts(products);
  };

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exsist = cart.find((x) => {
      return x._id === product._id;
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

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  useEffect(() => {
    // Save cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const contextValue = {
    filteredProducts,
    allProductsHandler,
    filterProductsHandler,
    products,
    cart,
    setCart,
    addToCart,
    featuredProducts,
    isAuthenticated,
    setIsAuthenticated
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
