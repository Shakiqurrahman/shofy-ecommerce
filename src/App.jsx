import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Cart from "./components/Cart/Cart";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import './App.css'

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
        path: "/shop",
        element: <Shop />,
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
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
