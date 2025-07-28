import { useContext } from "react";
import { TodayContext } from "../../contexts/TodayContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos, dispatch } = useContext(TodayContext);
  return (
    <div>
      <h2>Todo List</h2>
      <div>
        {todos.map(item => (
          <TodoItem key={item.id} aaa={Text}></TodoItem>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
