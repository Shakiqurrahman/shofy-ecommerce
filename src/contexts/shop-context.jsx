import React, { createContext, useState } from "react";

import ProductsData from "../data/productsData";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [products, setProducts] = useState(ProductsData);

  const [detail, setDetail] = useState([]);

  const [close, setClose] = useState(false);

  const view = (product) => {
    setDetail([{ ...product }]);
    setClose(true);
  };

  const contextValue = { detail, view, products, setProducts, ProductsData, close, setClose };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
