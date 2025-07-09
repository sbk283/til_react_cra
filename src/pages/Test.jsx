import React, { useState } from "react";

function Test() {
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState("");

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleKeyUp = e => {
    if (e.key === "Enter") {
      if (!text.trim()) {
        alert("게시글을 입력해주세요");
        return;
      }
      setTodoList([...todoList, text.trim()]);
      setText("");
    }
  };

  const handleAddClick = () => {
    if (!text.trim()) {
      alert("게시글을 입력해주세요");
      return;
    }
    setTodoList([...todoList, text.trim()]);
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        placeholder="게시글을 입력하세요"
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
        onClick={handleAddClick}
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
