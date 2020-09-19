import React from "react";
import Home from "./Home";
import Products from "./Products";

const pathSelection = () => {
  const pathname = window.location.pathname;
  if (pathname === "/products") {
    console.log(pathname);
    return <Products />;
  } else {
    console.log(pathname);
    return <Home />;
  }
};

const MainContent = () => {
  return <>{pathSelection()}</>;
};

export default MainContent;
