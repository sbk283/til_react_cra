import React, { useState } from "react";
import TodoList from "./TodoList";
import styled from "@emotion/styled";
import StyledButton from "./Button";
import DefaultButton from "./Button";

function Todos() {
  // js
  const [todosArr, setTodosArr] = useState([]);
  async function getTodos() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const result = await res.json();
      setTodosArr(result);
    } catch (error) {
      console.log(error);
    }
  }
  function makeTodoList() {
    return todosArr.map(function (요소, 인덱스) {
      return (
        <TodoList
          key={인덱스}
          id={요소.id}
          title={요소.title}
          completed={요소.completed}
          userId={요소.userId}
        />
      );
    });
  }

  function resetList() {
    setTodosArr([]);
  }
  // jsx
  return (
    <div>
      <h1>
        Todos 목록
        <DefaultButton variant="get" onClick={getTodos}>
          목록가져오기
        </DefaultButton>
        <DefaultButton variant="reset" onClick={resetList}>
          목록초기화
        </DefaultButton>
      </h1>
      <div>{makeTodoList()}</div>
    </div>
  );
}

export default Todos;
