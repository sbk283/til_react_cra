import styled from "@emotion/styled";

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: #333;
  white-space: nowrap;
  min-width: 70px;
`;

export const InputStyled = styled.input`
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
