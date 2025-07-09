import styled from "@emotion/styled";
import React from "react";
import InputField from "./InputField";

// 전역 자리

const FormContainer = styled.div`
  width: 100%;
  padding: 25px;
  max-width: 400px;
  margin: 30px auto;
  border-radius: 16px;
  background-color: #fafafa;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ErrorText = styled.div`
  color: #f00;
  margin-top: 10px;
  font-size: 12px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  max-width: 100px;
  border-radius: 8px;
  border: none;
  background-color: hotpink;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #ff69b4;
  }
`;

function LoginForm({ formData, errorMessage, handleChange, handleSubmit }) {
  // js

  // jsx
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <InputField
          label="아이디"
          type="text"
          id="user_id"
          value={formData.user_id}
          placeholder="아이디를 입력하세요."
          onChange={handleChange}
          name="user_id"
        />
        <InputField
          label="이메일"
          type="email"
          id="user_email"
          value={formData.user_email}
          placeholder="이메일을 입력하세요."
          onChange={handleChange}
          name="user_email"
        />
        <InputField
          label="비밀번호"
          type="password"
          id="user_pw"
          value={formData.user_pw}
          placeholder="비밀번호를 입력하세요."
          onChange={handleChange}
          name="user_pw"
        />
        <SubmitButton type="submit">로그인</SubmitButton>
      </form>
      <ErrorText>{errorMessage}</ErrorText>
    </FormContainer>
  );
}
export default LoginForm;
