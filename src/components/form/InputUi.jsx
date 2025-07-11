import React from "react";
import styled from "@emotion/styled";
import { InputGroup, Label, InputStyled } from "./InputUi.styles";

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
