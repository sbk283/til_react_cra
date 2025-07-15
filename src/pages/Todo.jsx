import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

// 스타일 정의
// 별 깜빡이는 애니메이션
const twinkle = keyframes`
  0%, 100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.3);
  }
`;

// 별 스타일
const Star = styled.span`
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: ${twinkle} infinite ease-in-out;
`;

const Container = styled.div`
  max-width: 1000px;
  height: 1000px;
  margin: 30px auto;
  padding: 24px;

  background: linear-gradient(
    90deg,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet,
    black
  );
  background-size: 1000% 1000%;
  animation: rainbowFlow 15s ease infinite;

  border: 2px solid #ffa4ff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  color: white;
  font-size: 20px;
  text-align: center;

  @keyframes rainbowFlow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
// 별 20개 랜덤 생성
const generateStars = (count = 2000) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const top = Math.random() * 200;
    const left = Math.random() * 100;
    const size = Math.random() * 3 + 1;
    const duration = Math.random() * 4 + 2;
    const delay = Math.random() * 3;

    stars.push(
      <Star
        key={i}
        style={{
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          opacity: Math.random() * 0.5 + 0.2,
        }}
      />,
    );
  }
  return stars;
};

const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-bottom: 15px;
`;
const SubTitle = styled.h2`
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px;
`;
const Section = styled.div`
  margin-bottom: 10px;
`;
const Form = styled.form`
  position: relative;
`;
const InputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;
const Label = styled.label`
  font-weight: 500;
  font-size: 11px;
  white-space: nowrap;
`;
const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #fff0c0;
  border-radius: 8px;
  font-size: 12px;
  background-color: #fff0c0;
`;
const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid #fff0c0;
  border-radius: 8px;
  width: 100%;
  resize: vertical;
  background-color: #fff0c0;
`;
const Button = styled.button`
  padding: 5px;
  background-color: #c0fff6;
  color: #000;
  border: none;
  border-radius: 8px;
  font-size: 11px;
  cursor: pointer;
`;
const TodoItem = styled.div`
  background-color: #d2c4ff;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TodoContent = styled.div`
  font-size: 12px;
`;
const TodoButtonWrap = styled.div`
  display: flex;
  gap: 3px;
`;

// 메인 컴포넌트
function Todo() {
  const [todoList, setTodoList] = useState([]);
  const initTodo = { title: "", content: "" };
  const [todo, setTodo] = useState(initTodo);
  // 절대로 겹치지 않는 세상 유일한 값을 만들려면?
  // 1. UUID 사용하기
  // 2. Timestamp + Random 값 조합하기
  // 3. Date.now() + Math.random() 사용하기
  // 4. id를 자동으로 생성하는 라이브러리 사용하기 (예: nanoid)
  const [uid, setUid] = useState(1);

  const initEditTodo = { id: 0, title: "", content: "" };
  const [editTodo, setEditTodo] = useState(initEditTodo);
  const [isEditing, setIsEditing] = useState(false); // 수정 중 상태

  // 새 할일 작성 중
  const handleAddChange = e => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleAddSubmit = e => {
    e.preventDefault();
    if (!todo.title || !todo.content) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }
    setTodoList([...todoList, { ...todo, id: uid }]);
    setTodo(initTodo);
    setUid(prev => prev + 1); // uid 증가
  };

  // 할일 삭제
  const handleDeleteTodo = id => {
    const tempList = todoList.filter(item => item.id !== id);
    setTodoList(tempList);
    if (editTodo.id === id) {
      setEditTodo(initEditTodo);
      setIsEditing(false);
    }
  };

  // 수정할 할일 선택
  const handleTodoListSelect = id => {
    const tempTodo = todoList.find(item => item.id === id);
    setEditTodo({ ...tempTodo });
    setIsEditing(true);
  };

  // 수정된 할일 저장
  const handleEditSubmit = e => {
    e.preventDefault();
    if (!editTodo.title || !editTodo.content) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }
    const updatedList = todoList.map(item =>
      item.id === editTodo.id ? editTodo : item,
    );
    setTodoList(updatedList);
    setEditTodo(initEditTodo);
    setIsEditing(false);
  };

  // 수정 취소
  const handleCancelEdit = () => {
    setEditTodo(initEditTodo);
    setIsEditing(false);
  };
  useEffect(() => {
    // 초기값 불러오기
    const result = localStorage.getItem("todolist");
    if (!result) {
      localStorage.setItem("todolist", JSON.stringify([]));
      setTodoList([]);
      setUid(0);
    } else {
      try {
        const json = JSON.parse(result);
        //   혹시라도 데이터가 깨졌다면 그냥 초기화 시켜버리자.
        const checkArr = Array.isArray(json);
        if (checkArr) {
          setTodoList(json);
          setUid(json.length);
        } else {
          setTodoList([]);
          setUid(0);
        }
      } catch (e) {
        console.error("JSON 형식 아님:", e.message);
      }
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <Container>
      {generateStars()}
      <Title>Todo 등록</Title>

      <Section>
        <Form onSubmit={handleAddSubmit}>
          <InputWrap>
            <Label>제목</Label>
            <Input
              name="title"
              value={todo.title}
              onChange={handleAddChange}
              type="text"
              placeholder="제목을 입력하세요."
            />
          </InputWrap>
          <InputWrap>
            <Label>내용</Label>
            <TextArea
              value={todo.content}
              onChange={handleAddChange}
              name="content"
              placeholder="내용을 입력하세요."
            />
          </InputWrap>
          <div>
            <Button type="submit">등록</Button>
          </div>
        </Form>
      </Section>
      {isEditing && (
        <>
          <SubTitle>상세보기</SubTitle>
          <Section>
            <p style={{ color: "red", fontSize: "12px", marginBottom: "5px" }}>
              ✏️ 수정 중입니다...
            </p>
            <Form onSubmit={handleEditSubmit}>
              <InputWrap>
                <Label>선택한 제목</Label>
                <Input
                  name="title"
                  value={editTodo.title}
                  onChange={e =>
                    setEditTodo({
                      ...editTodo,
                      [e.target.name]: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="선택한 제목 없음"
                />
              </InputWrap>
              <InputWrap>
                <Label>선택한 내용</Label>
                <TextArea
                  name="content"
                  value={editTodo.content}
                  onChange={e =>
                    setEditTodo({
                      ...editTodo,
                      [e.target.name]: e.target.value,
                    })
                  }
                  placeholder="선택한 내용 없음"
                />
              </InputWrap>
              <div style={{ display: "flex", gap: "5px" }}>
                <Button type="submit">내용 수정</Button>
                <Button type="button" onClick={handleCancelEdit}>
                  취소
                </Button>
              </div>
            </Form>
          </Section>
        </>
      )}

      <SubTitle>할일목록</SubTitle>
      <Section>
        {todoList.length === 0 ? (
          <p>등록된 할 일이 없습니다.</p>
        ) : (
          todoList.map((item, index) => (
            <TodoItem key={item.id}>
              <TodoContent>
                <strong>{item.id}번 글</strong>
                <br />
                <br />
                title: {item.title}
                <br />
                <br />
                content: {item.content}
              </TodoContent>
              <TodoButtonWrap>
                <Button onClick={() => handleDeleteTodo(item.id)}>삭제</Button>
                <Button onClick={() => handleTodoListSelect(item.id)}>
                  수정
                </Button>
              </TodoButtonWrap>
            </TodoItem>
          ))
        )}
      </Section>
      <h1 style={{ fontSize: "250px" }}>🌜⭐️🌛</h1>
    </Container>
  );
}

export default Todo;
