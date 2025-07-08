import React, { useState } from "react";

function Test() {
  // js 자리
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState("");
  const handleKeyUp = e => {
    setText(e.target.value);
    if (e.key === "Enter") {
      setTodoList([...todoList, e.target.value]);
      setText("");
    }
  };
  const handleChange = e => {
    setText(e.target.value);
  };
  // jsx 자리
  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        style={{
          width: "300px",
          height: "50px",
          margin: "10px",
          border: "2px solid hotpink",
          borderRadius: "10px",
          padding: "10px",
          fontSize: "20px",
          fontWeight: "bold",
          color: "darkblue",
          backgroundColor: "lightblue",
        }}
      />
      <button
        onClick={() => setTodoList([...todoList, text])}
        onKeyUp={handleKeyUp}
        style={{
          width: "100px",
          height: "50px",
          margin: "10px",
          border: "2px solid hotpink",
          borderRadius: "10px",
          padding: "10px",
          fontSize: "20px",
          fontWeight: "bold",
          color: "darkblue",
          backgroundColor: "lightblue",
          cursor: "pointer",
        }}
      >
        목록추가
      </button>
      <button
        onClick={() => setTodoList([])}
        style={{
          width: "100px",
          height: "50px",
          margin: "10px",
          border: "2px solid hotpink",
          borderRadius: "10px",
          padding: "10px",
          fontSize: "20px",
          fontWeight: "bold",
          color: "darkblue",
          backgroundColor: "lightblue",
          cursor: "pointer",
        }}
      >
        목록제거
      </button>
      <ul>
        {todoList.map((item, index) => (
          <li
            key={index}
            style={{
              border: "2px solid hotpink",
              margin: "10px",
              borderRadius: "10px",
              padding: "10px",
              backgroundColor: "lightblue",
              color: "darkblue",
              fontSize: "20px",
              fontWeight: "bold",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
