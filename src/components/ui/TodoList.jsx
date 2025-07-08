import styled from "@emotion/styled";
import React from "react";

function TodoList({ id, title, completed, userId }) {
  const TodoCard = styled.div`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
    border: 6px solid #ffb703;
    margin: 20px;
    padding: 20px;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      transform: scale(1.02);
      box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
    }
  `;
  const TodoTitle = styled.h2`
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const TodoCompleted = styled.div`
    font-size: 15px;
    color: #555;
    line-height: 1.6;
    margin-bottom: 10px;
  `;
  const TodoUser = styled.div`
    font-size: 13px;
    text-align: right;
    color: #999;
  `;

  return (
    <TodoCard>
      <TodoTitle>{title}</TodoTitle>
      <TodoCompleted>{completed ? "완료" : "미완료"}</TodoCompleted>
      <TodoUser>userId : {userId}</TodoUser>
      <div>Todo ID : {id}</div>
      <div></div>
    </TodoCard>
  );
}

export default TodoList;
