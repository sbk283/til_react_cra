import React from "react";
import ReactDOM from "react-dom/client";
// css
import "./index.css";
// components
import StartPage from "./pages/StartPage";
import Posts from "./components/ui/Posts";
import Albums from "./components/ui/Albums";
import Photos from "./components/ui/Photos";
import Todos from "./components/ui/Todos";
import Users from "./components/ui/Users";
import Comments from "./components/ui/Comments";
import Header from "./components/Header";
import Slide from "./components/Slide";
import Footer from "./components/Footer";
import Test from "./pages/Test";
import Hi from "./pages/Test";
import Test2 from "./pages/Test2";
import RegisterPage from "./pages/RegisterPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="wrap">
    <RegisterPage />
  </div>,
);
