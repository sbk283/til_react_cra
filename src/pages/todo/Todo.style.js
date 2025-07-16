// 스타일 정의

import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1500px;
  height: 1300px;
  margin: 30px auto;
  padding: 24px;

  background: linear-gradient(
    135deg,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet,
    red,
    orange,
    yellow
  );
  background-size: 1600% 1600%;
  animation: gradientAnimation 8s linear infinite;
  mix-blend-mode: screen;

  border: 10px solid #ffa4ff;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 20px;
  text-align: center;

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 0%;
    }
    25% {
      background-position: 100% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    75% {
      background-position: 0% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-bottom: 15px;
`;
export const SubTitle = styled.h2`
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px;
`;
export const Section = styled.div`
  margin-bottom: 10px;
`;
export const Form = styled.form`
  position: relative;
`;
export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;
export const Label = styled.label`
  font-weight: 500;
  font-size: 11px;
  white-space: nowrap;
`;
export const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #fff0c0;
  border-radius: 8px;
  font-size: 20px;
  background-color: #fff0c0;
`;
export const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid #fff0c0;
  border-radius: 8px;
  width: 100%;
  resize: vertical;
  background-color: #fff0c0;
`;
export const Button = styled.button`
  padding: 5px;
  background-color: #c0fff6;
  color: #000;
  border: none;
  border-radius: 8px;
  font-size: 11px;
  cursor: pointer;
`;
export const TodoItem = styled.div`
  background-color: #d2c4ff;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TodoContent = styled.div`
  font-size: 12px;
`;
export const TodoButtonWrap = styled.div`
  display: flex;
  gap: 3px;
`;

export const TodoListMessage = styled.p`
  text-align: center;
  font-size: 200px;
  color: white;
  padding: 15px;
`;
