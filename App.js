import React from "react";
import Footer from "./src/components/footer/Footer";
import Header from "./src/components/header/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
