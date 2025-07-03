import React from "react";
import ReactDOM from "react-dom/client";
// css
import "./index.css";
// components
import Slide from "./components/Slide";
import Header from "./components/Header";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="wrap">
    <Header></Header>
    <Slide></Slide>
    <Footer></Footer>
  </div>,
);
