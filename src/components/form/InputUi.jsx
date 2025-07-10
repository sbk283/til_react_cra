import React from "react";
import styled from "@emotion/styled";

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: #333;
  white-space: nowrap;
  min-width: 70px;
`;

const InputStyled = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  font-size: 12px;
  &:focus {
    outline: none;
    border-color: hotpink;
  }
`;

function InputUi({ id, type, name, value, placeholder, label, onChange }) {
  return (
    <InputGroup>
      <Label htmlFor={id}>{label}</Label>
      <InputStyled
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputGroup>
  );
}

export default InputUi;
