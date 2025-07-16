import React from "react";
import {
  Button,
  Container,
  Section,
  SubTitle,
  Title,
  TodoButtonWrap,
  TodoContent,
  TodoItem,
  TodoListMessage,
} from "./Todo.style";
import { Link } from "react-router-dom";

function Todo({ todoList = [], setTodoList }) {
  const handleDelete = id => {
    const target = todoList.find(item => item.id === id);
    if (window.confirm(`정말로 "${target.title}"을 삭제할까요?`)) {
      const newList = todoList.filter(item => item.id !== id);
      setTodoList(newList);
    }
  };

  return (
    <Container>
      <TodoButtonWrap>
        <Link to="/add">
          <Button>등록</Button>
        </Link>
      </TodoButtonWrap>
      <Title>할일 웹 서비스</Title>
      <SubTitle>할일 목록</SubTitle>
      <Section>
        {todoList.length === 0 ? (
          <TodoListMessage>등록된 할일이 없습니다.</TodoListMessage>
        ) : (
          todoList.map(item => (
            <TodoItem key={item.id}>
              <TodoContent>
                <strong>제목:</strong>&nbsp;
                <Link to={`/detail?id=${item.id}`}>{item.title}</Link>
              </TodoContent>
              <TodoButtonWrap>
                <Link to={`/edit?id=${item.id}`}>
                  <Button>수정</Button>
                </Link>
                <Button onClick={() => handleDelete(item.id)}>삭제</Button>
              </TodoButtonWrap>
            </TodoItem>
          ))
        )}
      </Section>
      <h1 style={{ fontSize: "300px" }}>🌜⭐️🌛</h1>
    </Container>
  );
}

export default Todo;
