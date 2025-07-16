import React, { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";

import TodoAdd from "./TodoAdd";
import TodoDetail from "./TodoDetail";
import TodoEdit from "./TodoEdit";
import Todo from "./Todo";

function Index() {
  const [todoList, setTodoList] = useState(() => {
    const saved = localStorage.getItem("todoList");
    return saved ? JSON.parse(saved) : [];
  });
  const [uid, setUid] = useState(() => {
    const saved = localStorage.getItem("uid");
    return saved ? parseInt(saved) : 1;
  });

  // 저장할 때 localStorage에 반영
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    localStorage.setItem("uid", uid.toString());
  }, [uid]);

  return (
    <div className="wrap">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Todo todoList={todoList} setTodoList={setTodoList} />}
          />
          <Route
            path="/add"
            element={
              <TodoAdd setTodoList={setTodoList} uid={uid} setUid={setUid} />
            }
          />
          <Route path="/detail" element={<TodoDetail todoList={todoList} />} />
          <Route
            path="/edit"
            element={<TodoEdit todoList={todoList} setTodoList={setTodoList} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default Index;
