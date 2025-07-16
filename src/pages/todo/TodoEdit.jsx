import React, { useEffect, useState } from "react";
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
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

function TodoEdit({ todoList, setTodoList }) {
  const [searchParams] = useSearchParams();
  const id = parseInt(searchParams.get("id"));
  const navigate = useNavigate();

  const target = todoList.find(item => item.id === id);
  const [todo, setTodo] = useState({
    title: target?.title || "",
    content: target?.content || "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setTodo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (window.confirm("정말 수정할까요?")) {
      const updated = todoList.map(item =>
        item.id === id ? { ...item, ...todo } : item,
      );
      setTodoList(updated);
      navigate(`/detail?id=${id}`);
    }
  };
  if (!target)
    return (
      <div style={{ color: "red", fontSize: "150px" }}>
        해당 할일을 찾을 수 없습니다. 🤪 해당 할일을 찾을 수 없습니다. 🤪 해당
        할일을 찾을 수 없습니다. 🤪 해당 할일을 찾을 수 없습니다. 🤪 해당 할일을
        찾을 수 없습니다. 🤪 해당 할일을 찾을 수 없습니다. 🤪 해당 할일을 찾을
        수 없습니다. 🤪 해당 할일을 찾을 수 없습니다. 🤪 해당 할일을 찾을 수
        없습니다. 🤪 해당 할일을 찾을 수 없습니다. 🤪 해당 할일을 찾을 수
        없습니다. 🤪 해당 할일을 찾을 수 없습니다. 🤪
      </div>
    );
  return (
    <Container>
      <TodoButtonWrap>
        <Link to={`/detail?id=${id}`}>
          <Button>이전</Button>
        </Link>
      </TodoButtonWrap>
      <Title>할일 수정하기</Title>
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
            <Button type="submit">수정</Button>
            <Link to={`/detail?id=${id}`}>
              <Button type="button">취소</Button>
            </Link>
          </TodoButtonWrap>
        </Form>
      </Section>
      <h1 style={{ fontSize: "200px", margin: "0", padding: "0" }}>🧠</h1>
      <h1 style={{ fontSize: "200px", margin: "0", padding: "20px" }}>
        👁️👃👁️
      </h1>
      <h1 style={{ fontSize: "200px", margin: "0", padding: "20px" }}>🫦</h1>
    </Container>
  );
}

export default TodoEdit;
