import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Input,
  InputWrap,
  Label,
  Section,
  TextArea,
  Title,
  TodoButtonWrap,
} from "./Todo.style";
import { Link, useNavigate } from "react-router-dom";

function TodoAdd({ setTodoList, uid, setUid }) {
  const [todo, setTodo] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setTodo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (window.confirm("할일을 등록할까요?")) {
      setTodoList(prev => [...prev, { ...todo, id: uid }]);
      setUid(uid + 1);
      navigate(`/detail?id=${uid}`);
    }
  };

  return (
    <Container>
      <TodoButtonWrap>
        <Link to="/">
          <Button>이전</Button>
        </Link>
      </TodoButtonWrap>
      <Title>새로운 할일 등록</Title>
      <Section>
        <Form onSubmit={handleSubmit}>
          <InputWrap>
            <Label>제목</Label>
            <Input
              type="text"
              name="title"
              value={todo.title}
              onChange={handleChange}
              required
            />
          </InputWrap>
          <InputWrap>
            <Label>내용</Label>
            <TextArea
              name="content"
              rows={4}
              value={todo.content}
              onChange={handleChange}
              required
            />
          </InputWrap>
          <TodoButtonWrap>
            <Button type="submit">등록</Button>
            <Link to="/">
              <Button type="button">취소</Button>
            </Link>
          </TodoButtonWrap>
        </Form>
      </Section>
      <h1 style={{ fontSize: "400px" }}>🐒🐒</h1>
    </Container>
  );
}

export default TodoAdd;
