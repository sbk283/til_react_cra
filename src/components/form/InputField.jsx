import styled from "@emotion/styled";
import React from "react";

// 전역 자리

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
  &:focus {
    outline: none;
    border: 1px solid hotpink;
  }
  &::placeholder {
    color: #ffaaff;
  }
`;

const StyledLabel = styled.label`
  font-size: 11px;
  display: block;
  padding-left: 10px;
  color: #333;
  font-weight: 600;
  white-space: nowrap;
  min-width: 50px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

function InputField({ label, type, id, name, value, placeholder, onChange }) {
  return (
    <InputGroup>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        type={type}
        value={value}
        id={id}
        name={name} // 요게 중요!
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputGroup>
  );
}

export default InputField;
