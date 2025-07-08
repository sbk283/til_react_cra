# React Event

- 사용자의 인터렉션(마우스 관련, 내용 입력 등등)
- `카멜케이스` 임을 기억하자.

# 리액트 Event

- 사용자의 인터렛션 (마우스 관련, 내용 입력 등등)
- `카멜케이스`임을 기억하자

## 1. 이벤트 종류

- `onClick` : 마우스 클릭
- `onChange` : form 태그의 내용이 바뀔때
- `onSubmit` : form 을 확인해서 전송할 때
- `onKeyDown` : keyboard 누를때
- `onKeyUp` : keyboard 뗄때
- `onMouseEnter` : 마우스 커서가 영역에 걸쳐질 때
- `onMouseLeave` : 마우스 커서가 영역에서 벗어날 때
- `onFocus` : form 요소에 포커스가 될때
- `onBlur` : form 요소에 포커스가 해제될 때
- `onInput` : form 요소에 입력할 때 마다
- `onDoubleClick` : 더블클릭할 때

## 2. 예제

- `매개변수 없는 이벤트` 와 `존재하는 경우` 구분하자.

### 2.1. onClick 이벤트

```jsx
import React from "react";

function Test() {
  const handleClick = () => {
    alert("클릭 이벤트 발생!");
  };
  const handleClickParam = a => {
    alert(`클릭 이벤트 발생! ${a}`);
  };
  return (
    <div>
      <button onClick={handleClick}>
        매개변수 없는 <br />
        클릭 이벤트
      </button>
      <button onClick={() => handleClickParam("안녕")}>
        매개변수 있는 <br />
        클릭 이벤트
      </button>
    </div>
  );
}

export default Test;
```

### 2.2. onChange 이벤트

- event.target : 현재는 input 태그를 가르킴
- event.target.value : 현재 input 태그의 값(내용을 말함)

```jsx
import React, { useState } from "react";

function Test() {
  const [txt, setTxt] = useState("");
  return (
    <div>
      <input type="text" onChange={event => setTxt(event.target.value)} />
      <p>입력된 값 : {txt}</p>
    </div>
  );
}

export default Test;
```

### 2.3. onSubmit 이벤트

- 아주 중요하다.

```jsx
import React from "react";

function Test() {
  // js 자리
  const handleSubmit = event => {
    // 반드시 체크하자.
    event.preventDefault(); // 새로고침하지마라.
    console.log(event.target);
    console.log(event.target.id);
    console.log(event.target.id.value);
    console.log(event.target.pw);
    console.log(event.target.pw.value);
    if (!event.target.id.value) {
      alert("아이디입력하세요.");
    }
    if (!event.target.pw.value) {
      alert("비밀번호입력하세요.");
    }
    alert("로그인 시도 중..");
  };
  // jsx 자리
  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <input type="text" name="id" />
        <input type="password" name="pw" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Test;
```

### 2.4. keyboard 이벤트

- onKeyDown 은 키보드 누르고 있으면 무한하게 발생한다. (조심해서 사용하기)
- onKeyUp 은 키보드 뗄때 발생한다.(주로 Enter키 눌렀다가 땠을 때)

```jsx
import React from "react";

function Test() {
  // js 자리

  const handleSearch = e => {
    // console.log(e.target);
    const txt = e.target.value;
    if (e.key === "Enter") {
      alert(`${txt} 검색합니다.`);
    }
  };
  // jsx 자리
  return (
    <div>
      <input type="text" name="id" onKeyUp={e => handleSearch(e)} />
    </div>
  );
}

export default Test;
```

### 2.5. Mouse 이벤트

- onMouseOver, onMouseOut : 사용하면 안된다

```jsx
import React from "react";

function Test() {
  // js
  const handleOver = () => {
    console.log("마우스오버");
  };
  const handleOut = () => {
    console.log("마우스아웃");
  };
  // jsx

  return (
    <div
      onMouseOver={handleOver}
      onMouseOut={handleOut}
      style={{ backgroundColor: "yellow" }}
    >
      <div
        style={{
          backgroundColor: "lightblue",
          border: "5px solid blue",
          margin: "20px",
        }}
      >
        박스1
      </div>
      <div
        style={{
          backgroundColor: "lightgreen",
          border: "5px solid green",
          margin: "20px",
        }}
      >
        박스2
      </div>
    </div>
  );
}

export default Test;
```

- `onMouseEnter, onMouseLeave : 사용하자`

```jsx
import React from "react";

function Test() {
  // js
  const handleEnter = () => {
    console.log("마우스엔터");
  };
  const handleLeave = () => {
    console.log("마우스리브");
  };
  // jsx

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ backgroundColor: "yellow" }}
    >
      <div
        style={{
          backgroundColor: "lightblue",
          border: "5px solid blue",
          margin: "20px",
        }}
      >
        박스1
      </div>
      <div
        style={{
          backgroundColor: "lightgreen",
          border: "5px solid green",
          margin: "20px",
        }}
      >
        박스2
      </div>
    </div>
  );
}

export default Test;
```

### 2.6. Focus 이벤트

- onFocus, onBlur : 포커스가 된 경우와 해제된 경우

```jsx
import React from "react";

function Test() {
  // js 자리
  const handleFocus = () => {
    console.log("포커스 되었네요");
  };
  const handleBlur = () => {
    console.log("포커스 해제 되었네요.");
  };
  // jsx 자리
  return (
    <div>
      <input type="text" onFocus={handleFocus} onBlur={handleBlur} />
    </div>
  );
}

export default Test;
```
