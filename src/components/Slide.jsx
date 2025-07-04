import React from "react";
import "../css/Slide.css";
import styled from "@emotion/styled";
function Slide() {
  // js 자리
  const Button = styled.button`
    display: flex;
    margin: 10px;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    font-size: ${props => (props.size === "lg" ? "50px" : "25px")};
    color: #ff00ff;
    background-color: ${props =>
      props.variant === "primary" ? "#97c9ff" : "#ff7777"};
    &&:hover {
      background-color: ${props =>
        props.variant === "primary" ? "#0084ff" : "#ff0000"};
      color: ${props => (props.variant === "primary" ? "#ffffff" : "#000000")};
    }
  `;
  // jsx 자리
  return (
    <div style={{ padding: "30px" }}>
      <h1>CSS-in-JS 예제</h1>
      <Button
        variant="primary"
        size="lg"
        onClick={() => alert("짱 큰 버튼 클릭!")}
      >
        기본버튼 : Large 사이즈
      </Button>
      <Button variant="primary" onClick={() => alert("기본 버튼 클릭!")}>
        기본버튼
      </Button>
      <Button
        variant="danger"
        size="lg"
        onClick={() => alert("짱 큰 위험 버튼 클릭!")}
      >
        위험 : Large
      </Button>
      <Button variant="danger" onClick={() => alert("위험 버튼 클릭!")}>
        위험
      </Button>
    </div>
  );
}

export default Slide;
