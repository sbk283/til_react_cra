import { useContext } from "react";
import { TodayContext } from "../../contexts/TodayContext";

function TodoItem({ aaa }) {
  const { todos, dispatch } = useContext(TodayContext);
  return <div>{aaa.id.toString()} </div>;
}

export default TodoItem;
