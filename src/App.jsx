import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import './App.css'
import { ShopContextProvider } from "./contexts/shop-context";
import Cart from "./pages/Cart/Cart";
import { ToastContainer } from "react-toastify";
import ProductDetails from "./components/ProductDetails.jsx/ProductDetails";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import MainPage from "./pages/Dashboard/MainPage/MainPage";
import Login from './pages/Login/Login.jsx'
import Signup from "./pages/SignUp/Signup.jsx";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
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
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />
      }
      
    ],
  },
  {
    path : "/admin/dashboard",
    element: <MainPage />
  },
  {
    path: '*',
    element: <ErrorPage /> 
  },
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
