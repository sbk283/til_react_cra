import React from "react";
// css
import "../css/StartPage.css";
// components
import Header from "../components/Header";
import Slide from "../components/Slide";
import Footer from "../components/Footer";

function StartPage() {
  return (
    <>
      <div className="box">로고</div>
      {/* 헤더 컴포넌트 */}
      <Header></Header>
      {/* 슬라이드 컴포넌트 */}
      <Slide></Slide>
      {/* 하단 컴포넌트 */}
      <Footer></Footer>
    </>
  );
}

export default StartPage;
