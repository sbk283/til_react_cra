import React from "react";
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
import { Link, useParams, useSearchParams } from "react-router-dom";

function TodoDetail({ todoList }) {
  const [searchParams] = useSearchParams();
  const id = parseInt(searchParams.get("id"));
  const todo = todoList.find(item => item.id === id);

  if (!todo)
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
        <Link to="/">
          <Button>이전</Button>
        </Link>
      </TodoButtonWrap>
      <Title>할일 상세 내용</Title>
      <Section>
        <Form>
          <InputWrap>
            <Label>제목</Label>
            <Input type="text" value={todo.title} readOnly />
          </InputWrap>
          <InputWrap>
            <Label>내용</Label>
            <TextArea rows={4} value={todo.content} readOnly />
          </InputWrap>
          <TodoButtonWrap>
            <Link to={`/edit?id=${todo.id}`}>
              <Button>수정</Button>
            </Link>
          </TodoButtonWrap>
        </Form>
      </Section>
      <h1 style={{ fontSize: "300px" }}>🌚🌟🌝</h1>
    </Container>
  );
}

export default TodoDetail;
