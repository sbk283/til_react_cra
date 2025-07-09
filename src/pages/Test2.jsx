import React, { use, useState } from "react";
import LoginForm from "../components/form/LoginForm";

function Test2() {
  // js
  // 변수
  const [errorMessage, setErrorMessage] = useState("");
  // 모든 데이터가 모여지는 변수
  const [formData, setFormData] = useState({
    user_id: "",
    user_email: "",
    user_pw: "",
  });
  // 이벤트 처리 함수
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = e => {
    // 웹브라우저 새로고침 방지
    e.preventDefault();
    if (formData.user_id === "") {
      setErrorMessage("아이디를 입력하세요!");
      return;
    }
    if (formData.user_email === "") {
      setErrorMessage("이메일을 입력하세요!");
      return;
    }
    if (formData.user_pw === "") {
      setErrorMessage("비밀번호를 입력하세요!");
      return;
    }
    console.log(
      `${formData.user_id} ${formData.user_email} ${formData.user_pw}`,
    );
    // 쿼리 스트링으로 보내기
    console.log(
      `/login/?id=${formData.user_id}&email=${formData.user_email}&pw=${formData.user_pw}`,
    );
    // 객체로 보내기
    const data = { ...formData };
    setErrorMessage(""); // 에러 메시지 초기화
  };
  // jsx

  return (
    <div>
      <h1>회원 로그인</h1>
      <LoginForm
        formData={formData}
        errorMessage={errorMessage}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Test2;
