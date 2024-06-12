import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </>
  );
};

export default Layout;
