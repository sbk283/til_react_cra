import React from "react";
import "../css/Header.module.css"; // CSS 모듈 사용
function Header() {
  // js 코드자리
  const title = "웹 서비스 제목";
  const version = "1.0.0";

  function say() {
    return " 하하하";
  }
  // 아래는 html 코드자리
  return (
    <div>
      <div>{title}</div>
      <div>버전: {version}</div>
      <div>{say()}</div>
    </div>
  );
}

export default Header;
