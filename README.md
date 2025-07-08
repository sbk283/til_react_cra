# useState

- 리액트에서 변수를 만드는 법
- `변수의 값이 변하면 웹브라우저의 화면도 변한다.`

```jsx
const [변수명, set변수명] = useState(초기값);
```

## 1. 일반 js 라면

- 화면에 초기 값만 보이고, 변화가 없다.

```js
import React from "react";

function Test() {
  // js 자리
  let count = 0; // js 변수
  const add = () => {
    count = count + 1;
    console.log(count);
  };

  // jsx 자리
  return (
    <div>
      <button onClick={add}>함수실행</button>
      <p>count : {count} </p>
    </div>
  );
}

export default Test;
```

## 2. Racet 변수라면

```jsx
import React, { useState } from "react";

function Test() {
  // js
  const [count, setCount] = useState(0); // 변수 선언 js 변수
  const add = () => {
    setCount(count + 1); // 변수 값 변경
    console.log(count); // 변수 값 출력
  };
  // jsx

  return (
    <div>
      <button onClick={add}>클릭</button>
      <p>count : {count}</p>
    </div>
  );
}

export default Test;
```

```jsx
import React, { useState } from "react";

function Test() {
  const [userName, setUserName] = useState(""); // 이름 상태 추가
  const handleChange = e => {
    // setUserName(e.target.value); // 입력값을 상태로 업데이트
  };
  const handleKeyUp = e => {
    // Enter 키가 눌렸을 때만 상태 업데이트
    if (e.key === "Enter") {
      const txt = e.target.value;
      // 추후 yup 같은 라이브러리로 유효성 검사 추가 예정
      if (!txt) {
        alert("이름을 입력하세요");
        return;
      }
      setUserName(txt);
    } else if (e.key === "Escape") {
      // Escape 키가 눌렸을 때 상태 초기화
      setUserName("");
    }
  };
  // js 자리

  // jsx 자리
  return (
    <div>
      <h1>사용자 이름을 입력하면 글자로 출력하기</h1>
      <input
        type="text"
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        placeholder="이름을 입력하세요"
      />
      <h2>안녕하세요. {userName}님 반가워요^^</h2>
    </div>
  );
}

export default Test;
```

```jsx
import React, { useState } from "react";

function Test() {
  const [agree, setAgree] = useState(false);
  const handleChange = e => {
    console.log(e.target);
    console.log(e.target.checked);
    setAgree(e.target.checked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={agree} onChange={handleChange} />
        약관에 동의합니다.
      </label>
      <p>{agree ? "동의함" : "동의하지 않음"}</p>
    </div>
  );
}

export default Test;
```
