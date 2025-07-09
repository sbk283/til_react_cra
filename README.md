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

## 3. 다양한 예제

```jsx
import React, { useState } from "react";

function Test() {
  // js 자리
  const [userName, setUserName] = useState(""); // 리액트 변수
  const handleChange = e => {
    //setUserName(e.target.value);
  };
  const handleKeyUp = e => {
    if (e.key === "Enter") {
      const txt = e.target.value;
      // 추후 yup 라이브러리 사용해 보자
      if (!txt) {
        alert("이름을 한자 이상 입력하셔야 합니다.");
        return;
      }
      setUserName(txt);
    }
  };
  // jsx 자리
  return (
    <div>
      <h1>사용자 이름을 입력하면 이름 출력하기</h1>
      <input
        type="text"
        onChange={e => handleChange(e)}
        onKeyUp={e => handleKeyUp(e)}
        placeholder="이름을 입력하세요."
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
  // js 자리
  const [agree, setAgree] = useState(false); // 리액트 변수
  const handleChange = e => {
    //console.log(e.target);
    //console.log(e.target.value);
    setAgree(e.target.checked);
  };
  // jsx 자리
  return (
    <div>
      <label>
        <input type="checkbox" onChange={e => handleChange(e)} />
        약관에 동의 합니다.
      </label>
      <p>{agree ? "동의합니다." : "동의가 필요합니다."}</p>
    </div>
  );
}

export default Test;
```

```jsx
import React, { useState } from "react";

function Test() {
  // js 자리
  const [todoList, setTodoList] = useState([]);
  const handleClick = () => {
    const temp = "할일이지요";
    setTodoList([...todoList, temp]);
  };
  // jsx 자리
  return (
    <div>
      <input type="text" />
      <button onClick={handleClick}>목록추가</button>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
```

```jsx
import React, { useState } from "react";

function Test() {
  // js 자리
  // 입력중인 할일
  const [todo, setTodo] = useState("");
  // 전체 목록
  const [todoList, setTodoList] = useState([]);

  const handleClick = () => {
    if (todo === "") {
      return;
    }
    setTodoList([...todoList, todo]);
    setTodo("");
  };

  const handleChange = e => {
    //console.log(e.target); // 태그가 들어옴
    setTodo(e.target.value);
  };
  const handleKeyUp = e => {
    if (e.key === "Enter") {
      if (todo === "") {
        return;
      }
      setTodoList([...todoList, todo]);
      setTodo("");
    }
  };
  // jsx 자리
  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={e => handleChange(e)}
        onKeyUp={e => handleKeyUp(e)}
      />
      <button onClick={handleClick}>목록추가</button>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
```

```jsx
import React, { useState } from "react";

function Test2() {
  //js
  const [dark, setDark] = useState(false);
  //jsx
  const handleClick = () => {
    setDark(!dark);
  };
  const AppStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    height: "100%",
    minHeight: "100vh",
    width: "100%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={AppStyle}>
      <button
        onClick={handleClick}
        style={dark ? { backgroundColor: "black", color: "white" } : {}}
      >
        {dark ? "라이트 모드로 변경" : "다크 모드로 변경"}
      </button>
      <h1>{dark ? "다크 모드입니다." : "라이트 모드입니다."}</h1>
    </div>
  );
}

export default Test2;
```

```jsx
import React, { useState } from "react";
import { Lia500Px } from "react-icons/lia";

function Test() {
  // js 자리
  const [cart, setCart] = useState([]);
  const handleCartAdd = good => {
    setCart([...cart, good]);
  };
  // jsx 자리
  return (
    <div>
      <h2>장바구니</h2>
      <button onClick={() => handleCartAdd("딸기")}>딸기</button>
      <button onClick={() => handleCartAdd("사과")}>사과</button>
      <button onClick={() => handleCartAdd("바나나")}>바나나</button>
      <div>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Test;
```

## 4. 실전 예제

### 4.1. 회원가입

```jsx
import React, { use, useState } from "react";

function Test2() {
  // js
  // 변수
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    userId: "",
    userEmail: "",
    userPassword: "",
  });
  // 이벤트 처리 함수
  const handleUserId = e => {
    setUserId(e.target.value);
  };
  const handleUserEmail = e => {
    setUserEmail(e.target.value);
  };
  const handleUserPassword = e => {
    setUserPassword(e.target.value);
  };
  const handleSubmit = e => {
    // 웹브라우저 새로고침 방지
    e.preventDefault();
    if (userId === "") {
      setErrorMessage("아이디를 입력하세요!");
      return;
    }
    if (userEmail === "") {
      setErrorMessage("이메일을 입력하세요!");
      return;
    }
    if (userPassword === "") {
      setErrorMessage("비밀번호를 입력하세요!");
      return;
    }
    console.log(`${userId} ${userEmail} ${userPassword}`);
    // 쿼리 스트링으로 보내기
    console.log(`/login/?id=${userId}&email=${userEmail}&pw=${userPassword}`);
    // 객체로 보내기
    setFormData({
      userId: userId,
      userEmail: userEmail,
      userPassword: userPassword,
    });
    setErrorMessage(""); // 에러 메시지 초기화
  };

  // 예를 들어, 서버에 로그인 요청을 보낼 수 있습니다.
  // jsx

  return (
    <div>
      <h1>회원 로그인</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userId}
            onChange={e => handleUserId(e)}
            placeholder="아이디를 입력하세요!"
          />
          <br />
          <input
            type="email"
            value={userEmail}
            onChange={e => handleUserEmail(e)}
            placeholder="이메일을 입력하세요!"
          />
          <br />
          <input
            type="password"
            value={userPassword}
            onChange={e => handleUserPassword(e)}
            placeholder="비밀번호를 입력하세요!"
          />
          <br />
          <button type="submit">로그인</button>
        </form>
        <div style={{ color: "red" }}>{errorMessage}</div>
      </div>
    </div>
  );
}

export default Test2;
```

- 각 입력 항목을 컴포넌트화 한다.
- 각 컴포넌트의 요소를 `emotion`으로 스타일링한다.
- 컴포넌트를 재활용하여 보자.
- src/components/form.
- Input.jsx 파일 생성

### 4.2. 기능 개선 이전 버전

```jsx
// src/pages/Test2.jsx
import React, { use, useState } from "react";
import LoginForm from "../components/form/LoginForm";

function Test2() {
  // js
  // 변수
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    userId: "",
    userEmail: "",
    userPassword: "",
  });
  // 이벤트 처리 함수
  const handleUserId = e => {
    setUserId(e.target.value);
  };
  const handleUserEmail = e => {
    setUserEmail(e.target.value);
  };
  const handleUserPassword = e => {
    setUserPassword(e.target.value);
  };
  const handleSubmit = e => {
    // 웹브라우저 새로고침 방지
    e.preventDefault();
    if (userId === "") {
      setErrorMessage("아이디를 입력하세요!");
      return;
    }
    if (userEmail === "") {
      setErrorMessage("이메일을 입력하세요!");
      return;
    }
    if (userPassword === "") {
      setErrorMessage("비밀번호를 입력하세요!");
      return;
    }
    console.log(`${userId} ${userEmail} ${userPassword}`);
    // 쿼리 스트링으로 보내기
    console.log(`/login/?id=${userId}&email=${userEmail}&pw=${userPassword}`);
    // 객체로 보내기
    setFormData({
      userId: userId,
      userEmail: userEmail,
      userPassword: userPassword,
    });
    setErrorMessage(""); // 에러 메시지 초기화
  };
  // 예를 들어, 서버에 로그인 요청을 보낼 수 있습니다.
  // jsx

  return (
    <div>
      <h1>회원 로그인</h1>
      <LoginForm
        userId={userId}
        setUserId={setUserId}
        userEmail={userEmail}
        setUserEmail={setUserEmail}
        userPassword={userPassword}
        setUserPassword={setUserPassword}
        formData={formData}
        setFormData={setFormData}
        errorMessage={errorMessage}
        handleUserId={handleUserId}
        handleUserEmail={handleUserEmail}
        handleUserPassword={handleUserPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Test2;
```

```jsx
// src/components/form/LoginForm.jsx
import styled from "@emotion/styled";
import React from "react";
import InputField from "./InputField";

function LoginForm({
  userId,
  setUserId,
  userEmail,
  setUserEmail,
  userPassword,
  setUserPassword,
  formData,
  setFormData,
  errorMessage,
  handleUserId,
  handleUserEmail,
  handleUserPassword,
  handleSubmit,
}) {
  // js
  const FormContainer = styled.div`
    width: 100%;
    padding: 25px;
    max-width: 400px;
    margin: 30px auto;
    border-radius: 16px;
    background-color: #fafafa;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  `;

  const ErrorText = styled.div`
    color: #f00;
    margin-top: 10px;
    font-size: 12px;
  `;

  const SubmitButton = styled.button`
    width: 100%;
    padding: 15px;
    max-width: 100px;
    border-radius: 8px;
    border: none;
    background-color: hotpink;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      background-color: #ff69b4;
    }
  `;
  // jsx

  return (
    <FormContainer>
      <form onSubmit={e => handleSubmit(e)}>
        <InputField
          label="아이디"
          type="text"
          value={userId}
          placeholder="아이디를 입력하세요."
          onChange={e => handleUserId(e)}
        />
        <InputField
          label="이메일"
          type="email"
          value={userEmail}
          placeholder="이메일을 입력하세요"
          onChange={e => handleUserEmail(e)}
        />
        <InputField
          label="비밀번호"
          type="password"
          value={userPassword}
          placeholder="비밀번호를 입력하세요."
          onChange={e => handleUserPassword(e)}
        />
        <SubmitButton type="submit">로그인</SubmitButton>
      </form>
      <ErrorText>{errorMessage}</ErrorText>
    </FormContainer>
  );
}

export default LoginForm;
```

```jsx
// src/components/form/InputField.jsx
import styled from "@emotion/styled";
import React from "react";

function InputField({ label, type, value, placeholder, onChange }) {
  const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 14px;
    &:focus {
      outline: none;
      border: 1px solid hotpink;
    }
    &::placeholder {
      color: #ffaaff;
    }
  `;

  const StyledLabel = styled.label`
    font-size: 11px;
    display: block;
    padding-left: 10px;
    color: #333;
    font-weight: 600;
    white-space: nowrap;
    min-width: 50px;
  `;

  const InputGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  `;

  return (
    <InputGroup>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e)}
      />
    </InputGroup>
  );
}

export default InputField;
```

### 4.3. 기능 개선 이후 버전

- useState가 너무 많다.( prop가 너무 많다.)

```js
 [...arr, 요소]

 {...obj, [속성명]: 속성값}

 const {name, value} = e.target;
 {...obj, [name]: value}
```

```jsx
// src/pages/Test2.jsx
import React, { use, useState } from "react";
import LoginForm from "../components/form/LoginForm";

function Test2() {
  // js
  // 변수
  const [errorMessage, setErrorMessage] = useState("");
  // 모든 데이터가 모여지는 변수
  const [formData, setFormData] = useState({
    user_id: "",
    user_email: "",
    user_pw: "",
  });
  // 이벤트 처리 함수
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = e => {
    // 웹브라우저 새로고침 방지
    e.preventDefault();
    if (formData.user_id === "") {
      setErrorMessage("아이디를 입력하세요!");
      return;
    }
    if (formData.user_email === "") {
      setErrorMessage("이메일을 입력하세요!");
      return;
    }
    if (formData.user_pw === "") {
      setErrorMessage("비밀번호를 입력하세요!");
      return;
    }
    console.log(
      `${formData.user_id} ${formData.user_email} ${formData.user_pw}`,
    );
    // 쿼리 스트링으로 보내기
    console.log(
      `/login/?id=${formData.user_id}&email=${formData.user_email}&pw=${formData.user_pw}`,
    );
    // 객체로 보내기
    const data = { ...formData };
    setErrorMessage(""); // 에러 메시지 초기화
  };
  // jsx

  return (
    <div>
      <h1>회원 로그인</h1>
      <LoginForm
        formData={formData}
        errorMessage={errorMessage}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Test2;
```

```jsx
// src/components/form/LoginForm.jsx
import styled from "@emotion/styled";
import React from "react";
import InputField from "./InputField";

// 전역 자리

const FormContainer = styled.div`
  width: 100%;
  padding: 25px;
  max-width: 400px;
  margin: 30px auto;
  border-radius: 16px;
  background-color: #fafafa;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ErrorText = styled.div`
  color: #f00;
  margin-top: 10px;
  font-size: 12px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  max-width: 100px;
  border-radius: 8px;
  border: none;
  background-color: hotpink;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #ff69b4;
  }
`;

function LoginForm({ formData, errorMessage, handleChange, handleSubmit }) {
  // js

  // jsx
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <InputField
          label="아이디"
          type="text"
          id="user_id"
          value={formData.user_id}
          placeholder="아이디를 입력하세요."
          onChange={handleChange}
          name="user_id"
        />
        <InputField
          label="이메일"
          type="email"
          id="user_email"
          value={formData.user_email}
          placeholder="이메일을 입력하세요."
          onChange={handleChange}
          name="user_email"
        />
        <InputField
          label="비밀번호"
          type="password"
          id="user_pw"
          value={formData.user_pw}
          placeholder="비밀번호를 입력하세요."
          onChange={handleChange}
          name="user_pw"
        />
        <SubmitButton type="submit">로그인</SubmitButton>
      </form>
      <ErrorText>{errorMessage}</ErrorText>
    </FormContainer>
  );
}
export default LoginForm;
```

```jsx
// src/components/form/InputField.jsx
import styled from "@emotion/styled";
import React from "react";

// 전역 자리

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
  &:focus {
    outline: none;
    border: 1px solid hotpink;
  }
  &::placeholder {
    color: #ffaaff;
  }
`;

const StyledLabel = styled.label`
  font-size: 11px;
  display: block;
  padding-left: 10px;
  color: #333;
  font-weight: 600;
  white-space: nowrap;
  min-width: 50px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

function InputField({ label, type, id, name, value, placeholder, onChange }) {
  return (
    <InputGroup>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        type={type}
        value={value}
        id={id}
        name={name} // 요게 중요!
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputGroup>
  );
}

export default InputField;
```
