import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Cart from "./components/Cart/Cart";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import './App.css'
import { ShopContextProvider } from "./contexts/shop-context";

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
      <RouterProvider router={router}></RouterProvider>
    </ShopContextProvider>
  );
};

export default App;
