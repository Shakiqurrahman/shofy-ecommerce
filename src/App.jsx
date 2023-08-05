import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import './App.css'
import { ShopContextProvider } from "./contexts/shop-context";
import Cart from "./pages/Cart/Cart";
import { ToastContainer } from "react-toastify";
import ProductDetails from "./components/ProductDetails.jsx/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />
      }
    ],
  },
  {
    path: '*',
    element: <ErrorPage /> 
  }
]);

const App = () => {
  return (
    <ShopContextProvider>
        <ToastContainer className='toast'/>
      <RouterProvider router={router}></RouterProvider>
    </ShopContextProvider>
  );
};

export default App;
