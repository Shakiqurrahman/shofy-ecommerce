import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import ProductDetails from "./components/ProductDetails.jsx/ProductDetails";
import ProtectedRoute from "./components/ProtectedRoute.js";
import { ShopContextProvider } from "./contexts/shop-context";
import Layout from "./layout/Layout.jsx";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import MainPage from "./pages/Dashboard/MainPage/MainPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login.jsx";
import Product from "./pages/Product/Product";
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
                element: <Login  />,
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
                element: <Cart />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "/product-details/:id",
                element: <ProductDetails />,
            },
        ],
    },
    {
        path: "/admin/dashboard",
        element: (
            <ProtectedRoute
                element={<MainPage />}
            />
        ),
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
]);

const App = () => {
  
    return (
        <ShopContextProvider>
            <ToastContainer className="toast" />
            <RouterProvider router={router}></RouterProvider>
        </ShopContextProvider>
    );
};


export default App;
