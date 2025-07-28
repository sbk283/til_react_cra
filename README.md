# Context API

- 리액트는 각각 컴포넌트를 위한 state 가 있음.(useState)
- 리액트는 글로벌 state 가 있음.(Context)
- 리액트에서 전역 변수를 Context 라고 한다.
- 모든 각각의 컴포넌트는 전역 변수, 즉 Context 를 활용할 수 있다.

## 예시

- 로그인 인증 기능
- 테마(스킨) 기능

## 편리한 npm이 추천됨

- Redux tool Kit : 가장 난이도가 높다.
- Recoil : 가장 난이도가 낮다.
- Zustands : 난이도가 낮고, 적극 추천

## Props Drilling 의 문제 샘플

- 컴포넌트의 useState 에서 발생하는 State 관리 문법

### 1.1. 기본 구조

```ts
import React from "react";

// Header 컴포넌트
function Header() {
  return <header>헤더</header>;
}
// Footer 컴포넌트
function Footer() {
  return <footer>하단</footer>;
}
// Main 컴포넌트
function Main() {
  return (
    <main>
      <Character></Character>
      <Friend></Friend>
      <Point></Point>
      <Map></Map>
      <FAQ></FAQ>
    </main>
  );
}
// 캐릭터 관리
function Character() {
  return <div>캐릭터 컴포넌트</div>;
}
// 캐릭터 선택
function ChoiceCharacter() {
  return <div>캐릭터 선택 서비스</div>;
}
// 친구관리
function Friend() {
  return <div>친구관리 서비스</div>;
}
// 포인트 구매
function Point() {
  return <div>포인트구매서비스</div>;
}

// 주변 지도 서비스
function Map() {
  return <div>주변 지도 서비스</div>;
}

// 고객센터
function FAQ() {
  return <div>고객센터</div>;
}

function App() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;

```

### 1.2. useState 로 사용자 정보 전달

- 단계 1. 첫번째 props 전달

```ts
import React, { useState } from "react";

// Header 컴포넌트
function Header({ userInfo }) {
  return <header>헤더</header>;
}
// Footer 컴포넌트
function Footer({ userInfo }) {
  return <footer>하단</footer>;
}
// Main 컴포넌트
function Main({ userInfo }) {
  return (
    <main>
      <Character></Character>
      <Friend></Friend>
      <Point></Point>
      <Map></Map>
      <FAQ></FAQ>
    </main>
  );
}
// 캐릭터 관리
function Character() {
  return <div>캐릭터 컴포넌트</div>;
}
// 캐릭터 선택
function ChoiceCharacter() {
  return <div>캐릭터 선택 서비스</div>;
}
// 친구관리
function Friend() {
  return <div>친구관리 서비스</div>;
}
// 포인트 구매
function Point() {
  return <div>포인트구매서비스</div>;
}

// 주변 지도 서비스
function Map() {
  return <div>주변 지도 서비스</div>;
}

// 고객센터
function FAQ() {
  return <div>고객센터</div>;
}

function App() {
  // 사용자 정보를 위한 리액트변수
  const [userInfo, setUserInfo] = useState({
    userId: "",
    userName: "",
    userRole: "GUEST",
  });
  return (
    <div>
      <Header userInfo={userInfo}></Header>
      <Main userInfo={userInfo}></Main>
      <Footer userInfo={userInfo}></Footer>
    </div>
  );
}

export default App;
```

- 단계 2. 두번째 props 전달

```ts
import React, { useState } from "react";

// Header 컴포넌트
function Header({ userInfo, setUserInfo }) {
  const handleClickLogin = () => {
    const user = { userId: "iu", userName: "아이유", userRole: "MEMBER" };
    setUserInfo(user);
  };
  const handleClickLogout = () => {
    const user = { userId: "", userName: "", userRole: "GUEST" };
    setUserInfo(user);
  };
  return (
    <header>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>로고</p>
        <nav>
          {/* 사용자가 로그인에 따라 화면구성 */}
          {userInfo.userId === "" ? (
            <div>
              <button onClick={handleClickLogin}>로그인</button>
              <button>회원가입</button>
            </div>
          ) : (
            <div>
              <button onClick={handleClickLogout}>로그아웃</button>
              <button>{userInfo.userName}</button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
// Footer 컴포넌트
function Footer({ userInfo }) {
  return (
    <footer>
      {userInfo.userName === "" ? (
        <div>로그인하세요.</div>
      ) : (
        `${userInfo.userName}님 환영합니다.`
      )}
    </footer>
  );
}
// Main 컴포넌트
function Main({ userInfo }) {
  return (
    <main>
      {userInfo.userId === "" ? (
        <div>로그인을 해야하는 서비스입니다.</div>
      ) : (
        <div>
          <Character userInfo={userInfo}></Character>
          <Friend userInfo={userInfo}></Friend>
          <Point userInfo={userInfo}></Point>
          <Map userInfo={userInfo}></Map>
          <FAQ userInfo={userInfo}></FAQ>
        </div>
      )}
    </main>
  );
}
// 캐릭터 관리
function Character({ userInfo }) {
  return (
    <div>
      <h2>{userInfo.userName}의 캐릭터 관리</h2>
      <ChoiceCharacter userInfo={userInfo}></ChoiceCharacter>
    </div>
  );
}
// 캐릭터 선택
function ChoiceCharacter({ userInfo }) {
  return <div>{userInfo.userName}의 캐릭터 선택 서비스</div>;
}
// 친구관리
function Friend({ userInfo }) {
  return <div>{userInfo.userName}의 친구관리 서비스</div>;
}

// 포인트 구매
function Point({ userInfo }) {
  return <div>{userInfo.userName}의 포인트 구매 서비스</div>;
}

// 주변 지도 서비스
function Map({ userInfo }) {
  return <div>{userInfo.userName}의 주변 지도 서비스</div>;
}

// 고객센터
function FAQ({ userInfo }) {
  return <div>고객센터</div>;
}

function App() {
  // 사용자 정보를 위한 리액트변수
  const [userInfo, setUserInfo] = useState({
    userId: "",
    userName: "",
    userRole: "GUEST",
  });
  return (
    <div>
      <Header userInfo={userInfo} setUserInfo={setUserInfo}></Header>
      <Main userInfo={userInfo}></Main>
      <Footer userInfo={userInfo}></Footer>
    </div>
  );
}

export default App;
```

### 1.3. useState 로 전달한 경우 기준

- useState 변수는 3단계 이상 전달하지 않도록 하자.
- 공통으로 사용하는 변수, 즉 state 라면 context 를 활용하자.

## ConText 로 해결하기

### 1. 폴더 구조

- `/src/contexts` 라는 폴더로 관리
- `UserInfoContext.js` 파일 생성

```ts
import React, { createContext, useState } from "react";

// context : 리액트용 글로벌 변수
const UserInfoContext = createContext();

// Provider : 글로벌 변수를 관리하는 jsx

const UserInfoProvider = ({ children }) => {
  // js
  const [userInfo, setUserInfo] = useState({
    userId: "",
    userName: "",
    userRole: "GUEST",
  });
  // jsx
  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};
```

### 2. Context 활용

```ts
import { useContext } from "react";
import { UserInfoContext, UserInfoProvider } from "./contexts/UserInfoContext";

// Header 컴포넌트
function Header() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo, setUserInfo } = useContext(UserInfoContext);

  const handleClickLogin = () => {
    const user = { userId: "iu", userName: "아이유", userRole: "MEMBER" };
    setUserInfo(user);
  };
  const hanldeClickLogout = () => {
    const user = { userId: "", userName: "", userRole: "GUEST" };
    setUserInfo(user);
  };
  return (
    <header>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>로고</p>
        <nav>
          {/* 사용자가 로그인에 따라 화면구성 */}
          {userInfo.userId === "" ? (
            <div>
              <button onClick={handleClickLogin}>로그인</button>
              <button>회원가입</button>
            </div>
          ) : (
            <div>
              <button onClick={hanldeClickLogout}>로그아웃</button>
              <button>{userInfo.userName}님 회원정보수정</button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
// Footer 컴포넌트
function Footer() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  return (
    <footer>
      {userInfo.userId === "" ? (
        <div>현재 로그인 안되었어요.</div>
      ) : (
        <div>{userInfo.userName}님 로그인되었어요.</div>
      )}
    </footer>
  );
}
// Main 컴포넌트
function Main() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  return (
    <main>
      {userInfo.userId === "" ? (
        <div>로그인을 하셔야 서비스 이용가능합니다.</div>
      ) : (
        <div>
          <Character></Character>
          <Friend></Friend>
          <Point></Point>
          <Map></Map>
          <FAQ></FAQ>
        </div>
      )}
    </main>
  );
}
// 캐릭터 관리
function Character() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  return (
    <div>
      <h2>{userInfo.userName}님 캐릭터 관리</h2>
      <ChoiceCharacter userInfo={userInfo}></ChoiceCharacter>
    </div>
  );
}
// 캐릭터 선택
function ChoiceCharacter() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  return <div>{userInfo.userName}님 캐릭터 선택 서비스</div>;
}
// 친구관리
function Friend() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  return <div>{userInfo.userName}님 친구관리 서비스</div>;
}
// 포인트 구매
function Point() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  return <div>{userInfo.userName}님 포인트구매서비스</div>;
}

// 주변 지도 서비스
function Map() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  return <div>{userInfo.userName}님 주변 지도 서비스</div>;
}

// 고객센터
function FAQ() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  return <div>{userInfo.userName}님 고객센터</div>;
}

function App() {
  return (
    <div>
      <UserInfoProvider>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </UserInfoProvider>
    </div>
  );
}

export default App;
```

## 응용 Theme 만들어 적용하기

- `/src/contexts/UserThemeContext.jsx` 파일 생성

```ts
import { createContext, useState } from "react";

export const UserThemeContext = createContext();
export const UserThemeProvider = ({ children }) => {
  const [bg, setBg] = useState("#ffc0c0");

  return (
    <UserThemeContext.Provider value={{ bg, setBg }}>
      {children}
    </UserThemeContext.Provider>
  );
};

```

```ts
function Header() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo, setUserInfo } = useContext(UserInfoContext);
  const { bg } = useContext(UserThemeContext);

  const handleClickLogin = () => {
    const user = { userId: "iu", userName: "아이유", userRole: "MEMBER" };
    setUserInfo(user);
  };
  const hanldeClickLogout = () => {
    const user = { userId: "", userName: "", userRole: "GUEST" };
    setUserInfo(user);
  };
  return (
    <header style={{ backgroundColor: bg }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>로고</p>
        <nav>
          {/* 사용자가 로그인에 따라 화면구성 */}
          {userInfo.userId === "" ? (
            <div>
              <button onClick={handleClickLogin}>로그인</button>
              <button>회원가입</button>
            </div>
          ) : (
            <div>
              <button onClick={hanldeClickLogout}>로그아웃</button>
              <button>{userInfo.userName}님 회원정보수정</button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

function ChoiceCharacter() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  const { setBg } = useContext(UserThemeContext);
  const handleClick = _color => {
    setBg(_color);
  };
  return (
    <div>
      <h2>{userInfo.userName}님 캐릭터 선택 서비스</h2>
      <div>
        <button
          style={{ backgroundColor: "#ffc0c0" }}
          onClick={() => handleClick("#ffc0c0")}
        >
          테마1
        </button>
        <button
          style={{ backgroundColor: "#c0ffc0" }}
          onClick={() => handleClick("#c0ffc0")}
        >
          테마2
        </button>
        <button
          style={{ backgroundColor: "#c0c0ff" }}
          onClick={() => handleClick("#c0c0ff")}
        >
          테마3
        </button>
        <button
          style={{ backgroundColor: "#ffffc0" }}
          onClick={() => handleClick("#ffffc0")}
        >
          테마4
        </button>
        <button
          style={{ backgroundColor: "#ffc0ff" }}
          onClick={() => handleClick("#ffc0ff")}
        >
          테마5
        </button>
      </div>
    </div>
  );
}
```

## 응용 Bucket 만들어 적용하기

- `/src/contexts/UserBucketContext.jsx` 파일 생성

```ts
import { createContext, useState } from "react";

export const UserBucketContext = createContext();
export const UserBucketProvider = ({ children }) => {
  // js 자리
  // 사용자 버킷 정보를 위한 리액트변수
  const [bucketList, setBucketList] = useState([]);

  // jsx 자리
  return (
    <UserBucketContext.Provider value={{ bucketList, setBucketList }}>
      {children}
    </UserBucketContext.Provider>
  );
};
```

```ts
function Point() {
  // 글로벌 리액트 변수인 context 에 접근하였다.
  const { userInfo } = useContext(UserInfoContext);
  const { bucketList, setBucketList } = useContext(UserBucketContext);
  const handleAddBucket = () => {
    // 버킷리스트에 아이템 추가
    setBucketList([...bucketList, `아이템 ${bucketList.length + 1}`]);
  };
  return (
    <div>
      <button onClick={handleAddBucket}>버킷리스트에 아이템 추가</button>
    </div>
  );
}
```

# useReducer

- useState 는 간단한 state 를 관리, 업데이트
- useReducer 는 복잡한 state 를 복잡하게 관리, 업데이트
- useReducer 는 state 와 `state 업데이트를 분리` 하여 관리

```ts
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const minus = () => {
    setCount(count - 1);
  };
  const add = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>현재숫자: {count}</p>
      <button onClick={minus}>감소</button>
      <button onClick={add}>증가</button>
    </div>
  );
}

export default App;

```

- useReducer 로 변경

```jsx
import { useReducer, useState } from "react";

// state 를 관리하는 기능을 분리해서 공급
// state : 현재의 상태
// action : 어떤 액션, 즉 상황인지 정보를 가짐
// reducer : state 가 변하면 state 를 처리하는 함수
function reducer(state, action) {
  // action 은 객체로서 action.type 과 action.payload 가 있음
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const minus = () => {
    dispatch({ type: "decrement" });
  };
  const add = () => {
    dispatch({ type: "increment" });
  };
  return (
    <div>
      <p>현재숫자: {state.count}</p>
      <button onClick={minus}>감소</button>
      <button onClick={add}>증가</button>
    </div>
  );
}

export default App;
```

## 2. 다양한 예제

```jsx
import { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { key: new Date(), text: action.payload }];
    case "delete":
      return state.filter(item => item.key !== action.payload);
    case "clear":
      return [];
    case "desc": // 내림차순 (최근 것이 먼저 출력)
      return [...state].sort((a, b) => b.key - a.key);
    case "asc": // 올림차순 (오래된 것이 먼저 출력)
      return [...state].sort((a, b) => a.key - b.key);
  }
}
function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [txt, setTxt] = useState("");
  return (
    <div>
      <h1>
        간단한 Todo List{" "}
        <button onClick={() => dispatch({ type: "clear" })}>모두지우기</button>
        <button onClick={() => dispatch({ type: "desc" })}>최신 글 정렬</button>
        <button onClick={() => dispatch({ type: "asc" })}>
          오래된 글 정렬
        </button>
      </h1>
      <div>
        <input
          type="text"
          value={txt}
          onChange={e => setTxt(e.target.value)}
          placeholder="할일을 입력해주세요."
        />
        <button
          onClick={() => {
            dispatch({ type: "add", payload: txt });
            setTxt("");
          }}
        >
          할일 추가
        </button>
      </div>
      <div>
        {todos.map(item => (
          <div key={item.key}>
            {item.key.toString()} : {item.text}
            <button
              onClick={() => dispatch({ type: "delete", payload: item.key })}
            >
              삭제
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
```

## 3. 프로젝트 규모에 따른 Reducer 구조

- 소규모, 중규모, 대형프로젝트

## 3.1. 초기 코드

```jsx
import { useReducer } from "react";

// 1. 초기 상태
const initialState = { count: 0 };
// 2. 리듀서 함수
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "minus":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}
// 3. 리듀서 활용 컴포넌트
function Count() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>카운터 컴포넌트</h2>
      <p>현재 카운트 : {state.count}</p>
      <button onClick={() => dispatch({ type: "add" })}>더하기</button>
      <button onClick={() => dispatch({ type: "minus" })}>빼기</button>
      <button onClick={() => dispatch({ type: "reset" })}>초기화</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>useReducer 예제</h1>
      <Count />
    </div>
  );
}

export default App;
```

## 3.2. 소규모 프로젝트라면?

- /src/components/counter 폴더 생성
- counterReducer.js 생성

```jsx
// 1. 초기 상태
export const initialState = { count: 0 };
// 2. 리듀서 함수
export function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "minus":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}
```

- Counter.jsx 생성

```jsx
import { useReducer } from "react";
import { initialState, reducer } from "./CounterReducer";

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>카운터 컴포넌트</h2>
      <p>현재 카운트 : {state.count}</p>
      <button onClick={() => dispatch({ type: "add" })}>더하기</button>
      <button onClick={() => dispatch({ type: "minus" })}>빼기</button>
      <button onClick={() => dispatch({ type: "reset" })}>초기화</button>
    </div>
  );
}

export default Counter;
```

## 3.3. 중규모 프로젝트라면?

- /src/components/counter_mid 폴더 생성
- CounterMid.jsx

```jsx
import { useReducer } from "react";
import { reducer } from "../../store/reducers/counterMidReducer";
import { initialState } from "../../store/reducers/counterMidInit";

// 3. 리듀서 활용 컴포넌트
function CounterMid() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>카운터 컴포넌트</h2>
      <p>현재 카운트 : {state.count}</p>
      <button onClick={() => dispatch({ type: "add" })}>더하기</button>
      <button onClick={() => dispatch({ type: "minus" })}>빼기</button>
      <button onClick={() => dispatch({ type: "reset" })}>초기화</button>
    </div>
  );
}

export default CounterMid;
```

- /src/store/reducers 폴더 생성
- counterMidReducer.js

```js
// 2. 리듀서 함수
export function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "minus":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}
```

- /src/store/initialstates 폴더 생성
- counterMidInit.js

```js
// 1. 초기 상태
const initialState = { count: 0 };
```

## 3.4. 대규모 프로젝트(모듈기반)라면?

- /src/modules 폴더 생성
- /src/modules/counter 폴더 생성
- countInitialState.js 파일 생성

```js
// 1. 초기 상태
export const initialState = { count: 0 };
```

- countTypes.js 파일 생성

```js
export const ADD = "add";
export const MINUS = "minus";
export const RESET = "reset";
```

- countReducer.js 파일 생성

```js
import { ADD, MINUS, RESET } from "./countTypes";

// 2. 리듀서 함수
export function countReducer(state, action) {
  switch (action.type) {
    case ADD:
      return { count: state.count + 1 };
    case MINUS:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
}
```

- countActions.js 파일 생성

```js
import { ADD, MINUS, RESET } from "./countTypes";

export const add = () => ({ type: ADD });
export const minus = () => ({ type: MINUS });
export const reset = () => ({ type: RESET });
```

- /src/components/Counter.jsx 파일 생성

```jsx
import { useReducer } from "react";
import { countReducer } from "../modules/counter/countReducer";
import { initialState } from "../modules/counter/countInitialState";
import { add, minus, reset } from "../modules/counter/countActions";

function Counter() {
  const [state, dispatch] = useReducer(countReducer, initialState);
  return (
    <div>
      <h2>카운터 컴포넌트</h2>
      <p>현재 카운트 : {state.count}</p>
      <button onClick={() => dispatch(add())}>더하기</button>
      <button onClick={() => dispatch(minus())}>빼기</button>
      <button onClick={() => dispatch(reset())}>초기화</button>
    </div>
  );
}

export default Counter;
```

# useReducer + Context

## 1. 앱의 배경색 변경하기

- useState 버전

```ts
import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");
  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <h1>배경 색상변경하기</h1>
      <button onClick={() => setColor("yellow")}>노란색</button>
      <button onClick={() => setColor("skyblue")}>하늘색</button>
      <button onClick={() => setColor("white")}>초기화</button>
    </div>
  );
}

export default App;
```

- useReduce 버전 마이그레이션

```jsx
import { useReducer, useState } from "react";
// 1. 초기값 설정
const initialState = "white";

// 2. 리듀서 함수 만들기
function reducer(state, action) {
  switch (action.type) {
    case "YELLOW":
      return "yellow";
    case "SKYBLUE":
      return "skyblue";
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

function App() {
  // const [color, setColor] = useState("white");
  const [color, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <h1>배경 색상변경하기</h1>
      <button onClick={() => dispatch({ type: "YELLOW" })}>노란색</button>
      <button onClick={() => dispatch({ type: "SKYBLUE" })}>하늘색</button>
      <button onClick={() => dispatch({ type: "RESET" })}>초기화</button>
    </div>
  );
}

export default App;
```

- Context API 도입 (리액트 전역변수-전역상태)
  - /src/contexts 폴더 생성
  - ColorContext.jsx 파일생성
- 단계 1.

```jsx
import { createContext } from "react";

const ColorContext = createContext();
const ColorContextProvider = ({ children }) => {
  return (
    <ColorContext.Provider value={"white"}>{children}</ColorContext.Provider>
  );
};
```

- 단계 2.

```jsx
import { createContext } from "react";

export const ColorContext = createContext();
export const ColorContextProvider = ({ children }) => {
  return (
    <ColorContext.Provider value={"white"}>{children}</ColorContext.Provider>
  );
};
```

- 단계 3 (userReduce 코드 작성)

```jsx
import { createContext, useReducer } from "react";

// 1. 초기값 설정
const initialState = "white";

// 2. 리듀서 함수 만들기
function reducer(state, action) {
  switch (action.type) {
    case "YELLOW":
      return "yellow";
    case "SKYBLUE":
      return "skyblue";
    case "RESET":
      return initialState;
    default:
      return state;
  }
}
export const ColorContext = createContext();
export const ColorContextProvider = ({ children }) => {
  // 3번 state 생성
  const [color, dispatch] = useReducer(reducer, initialState);
  return (
    <ColorContext.Provider value={{ color, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
};
```

- 4단계 (활용하기)

```jsx
import { useContext } from "react";
import { ColorContext, ColorContextProvider } from "./contexts/ColorContext";

function ColorComponent() {
  const { color, dispatch } = useContext(ColorContext);
  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <h1>배경 색상변경하기</h1>
      <button onClick={() => dispatch({ type: "YELLOW" })}>노란색</button>
      <button onClick={() => dispatch({ type: "SKYBLUE" })}>하늘색</button>
      <button onClick={() => dispatch({ type: "RESET" })}>초기화</button>
    </div>
  );
}

function App() {
  return (
    <ColorContextProvider>
      <ColorComponent />
    </ColorContextProvider>
  );
}

export default App;
```

## 2. 테마 적용하기 및 로컬스토리지에 저장해서 관리하기

- useState 로 진행해 보기

```css
/* index.css */
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline-style: none;
}
a {
  text-decoration: none;
  color: #000;
}
ul,
ol {
  list-style: none;
}
html {
}
body {
  font-family: "ddag";
}
.app-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition:
    background 0.3s ease,
    color 0.3s ease;
}
.dark {
  background-color: #121212;
  color: #fff;
}
.light {
  background-color: #fff;
  color: #000;
}
button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
```

```jsx
import { useState } from "react";
import "./index.css";
function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className={`app-container ${theme}`}>
      <h1>{theme === "light" ? "😎 라이트모드" : "🐱‍🏍 다크모드"}</h1>
      <button
        onClick={() => {
          theme === "light" ? setTheme("dark") : setTheme("light");
        }}
      >
        모드전환
      </button>
    </div>
  );
}

export default App;
```

- useReducer 버전

```jsx
import { useReducer } from "react";
import "./index.css";

// 1 번 초기값
const initialState = "light";

// 2 번 리듀서함수
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return state === "light" ? "dark" : "light";
    default:
      return state;
  }
}

function App() {
  // 3번
  const [theme, dispatch] = useReducer(reducer, initialState);
  return (
    <div className={`app-container ${theme}`}>
      <h1>{theme === "light" ? "😎 라이트모드" : "🐱‍🏍 다크모드"}</h1>
      <button onClick={() => dispatch({ type: "TOGGLE" })}>모드전환</button>
    </div>
  );
}

export default App;
```

- Context API 마이그레이션
  - /src/contexts 폴더
  - ThemeContext.jsx 파일
- 단계 1.

```jsx
import { createContext } from "react";

export const ThemeContext = createContext();
export const ThemeContextProvider = ({ children }) => {
  return <ThemeContext.Provider value={0}>{children}</ThemeContext.Provider>;
};
```

- 단계 2. useReducer 적용

```jsx
import { createContext, useReducer } from "react";
// 1 번 초기값
const initialState = "light";
// 2 번 리듀서함수
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return state === "light" ? "dark" : "light";
    default:
      return state;
  }
}
export const ThemeContext = createContext();
export const ThemeContextProvider = ({ children }) => {
  // 3번
  const [theme, dispatch] = useReducer(reducer, initialState);
  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

- 3단계 Context 활용

```jsx
import { useContext } from "react";
import { ThemeContext, ThemeContextProvider } from "./contexts/ThemeContext";
import "./index.css";

function Main() {
  const { theme, dispatch } = useContext(ThemeContext);
  return (
    <div className={`app-container ${theme}`}>
      <h1>{theme === "light" ? "😎 라이트모드" : "🐱‍🏍 다크모드"}</h1>
      <button onClick={() => dispatch({ type: "TOGGLE" })}>모드전환</button>
    </div>
  );
}

function App() {
  return (
    <ThemeContextProvider>
      <Main />
    </ThemeContextProvider>
  );
}

export default App;
```

- 로컬스토리지 적용해 보기
  - 전역으로 보관하고 있는 `theme 를 저장`해야함.
  - /src/contexts/ThemeContext.jsx 대상

```jsx
import { createContext, useEffect, useReducer } from "react";
// 1 번 초기값
const initialState = "light";
// 2 번 리듀서함수
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      const nowTheme = state === "light" ? "dark" : "light";
      // 글자보관
      localStorage.setItem("theme", nowTheme);
      return nowTheme;
    case "INIT":
      return action.payload || "light";
    default:
      return state;
  }
}
export const ThemeContext = createContext();
export const ThemeContextProvider = ({ children }) => {
  // js 자리
  // 3번
  const [theme, dispatch] = useReducer(reducer, initialState);

  // 최초로 lcoaclStorage 에서 값 일어들임
  useEffect(() => {
    const result = localStorage.getItem("theme");
    dispatch({ type: "INIT", payload: result });
  }, []);
  // jsx 자리
  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

## 3. 감정 이모지 선택기 만들기

- useState 버전

```jsx
import { useState } from "react";

function App() {
  const [emotion, setEmotion] = useState("happy");
  const message = {
    happy: "지금 나는 😊 행복해요!",
    sad: "지금 나는 😢 슬퍼요...",
    angry: "지금 나는 🤬 화났어요!",
  };
  return (
    <div>
      <h1>오늘의 기분 등록하기</h1>
      <h2>{message[emotion]}</h2>
      <div>
        <button onClick={() => setEmotion("happy")}>😊</button>
        <button onClick={() => setEmotion("sad")}>😢</button>
        <button onClick={() => setEmotion("angry")}>🤬</button>
      </div>
    </div>
  );
}

export default App;
```

- useReduce 버전

```jsx
import { act, useReducer, useState } from "react";
// 1. 초기값
const initialState = "happy";
// 2. 리듀서함수
function reducer(state, action) {
  switch (action.type) {
    case "HAPPY":
      return "happy";
    case "SAD":
      return "sad";
    case "ANGRY":
      return "angry";
    default:
      return state;
  }
}
function App() {
  // const [emotion, setEmotion] = useState("happy");
  // 3. useReducer
  const [emotion, dispatch] = useReducer(reducer, initialState);

  const bgColors = {
    happy: "yellow",
    sad: "blue",
    angry: "red",
  };
  const message = {
    happy: "지금 나는 😊 행복해요!",
    sad: "지금 나는 😢 슬퍼요...",
    angry: "지금 나는 🤬 화났어요!",
  };
  return (
    <div
      style={{
        backgroundColor: bgColors[emotion],
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        transition: "0.3s",
      }}
    >
      <h1>오늘의 기분 등록하기</h1>
      <h2>{message[emotion]}</h2>
      <div>
        <button onClick={() => dispatch({ type: "HAPPY" })}>😊</button>
        <button onClick={() => dispatch({ type: "SAD" })}>😢</button>
        <button onClick={() => dispatch({ type: "ANGRY" })}>🤬</button>
      </div>
    </div>
  );
}

export default App;
```

- Context API 마이그레이션
  - /src/contexts 폴더
  - EmotionContext.jsx 생성

- 1 단계 (컨텍스트와 컨텍스트 프로바이더 생성)

```jsx
import { createContext } from "react";

const EmotionContext = createContext();
const EmotionContextProvider = ({ children }) => {
  return (
    <EmotionContext.Provider value={0}>{children}</EmotionContext.Provider>
  );
};
```

- 2 단계 (export)

```jsx
import { createContext } from "react";

export const EmotionContext = createContext();
export const EmotionContextProvider = ({ children }) => {
  return (
    <EmotionContext.Provider value={0}>{children}</EmotionContext.Provider>
  );
};
```

- 3 단계 (useReducer 이동)

```jsx
import { createContext } from "react";
// 1. 초기값
const initialState = "happy";
// 2. 리듀서함수
function reducer(state, action) {
  switch (action.type) {
    case "HAPPY":
      return "happy";
    case "SAD":
      return "sad";
    case "ANGRY":
      return "angry";
    default:
      return state;
  }
}
export const EmotionContext = createContext();
export const EmotionContextProvider = ({ children }) => {
  const [emotion, dispatch] = useReducer(reducer, initialState);

  return (
    <EmotionContext.Provider value={{ emotion, dispatch }}>
      {children}
    </EmotionContext.Provider>
  );
};
```

- 4 단계 (활용)

```jsx
import { useContext } from "react";
import {
  EmotionContext,
  EmotionContextProvider,
} from "./contexts/EmotionContext";

function Emotion() {
  const { emotion, dispatch } = useContext(EmotionContext);
  const bgColors = {
    happy: "yellow",
    sad: "blue",
    angry: "red",
  };
  const message = {
    happy: "지금 나는 😊 행복해요!",
    sad: "지금 나는 😢 슬퍼요...",
    angry: "지금 나는 🤬 화났어요!",
  };
  return (
    <div
      style={{
        backgroundColor: bgColors[emotion],
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        transition: "0.3s",
      }}
    >
      <h1>오늘의 기분 등록하기</h1>
      <h2>{message[emotion]}</h2>
      <div>
        <button onClick={() => dispatch({ type: "HAPPY" })}>😊</button>
        <button onClick={() => dispatch({ type: "SAD" })}>😢</button>
        <button onClick={() => dispatch({ type: "ANGRY" })}>🤬</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <EmotionContextProvider>
      <Emotion />
    </EmotionContextProvider>
  );
}

export default App;
```

- 로컬스토리지 적용

```jsx
import { createContext, useEffect, useReducer } from "react";
// 1. 초기값
const initialState = "happy";
// 2. 리듀서함수
function reducer(state, action) {
  switch (action.type) {
    case "HAPPY":
      return "happy";
    case "SAD":
      return "sad";
    case "ANGRY":
      return "angry";
    case "INIT":
      return action.payload;
    default:
      return state;
  }
}
export const EmotionContext = createContext();
export const EmotionContextProvider = ({ children }) => {
  // js 자리
  const [emotion, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const result = localStorage.getItem("emotion");
    if (result) {
      dispatch({ type: "INIT", payload: result });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("emotion", emotion);
  }, [emotion]);
  // jsx 자리
  return (
    <EmotionContext.Provider value={{ emotion, dispatch }}>
      {children}
    </EmotionContext.Provider>
  );
};
```

- 하루에 한번만 등록하기

```jsx
import { createContext, useEffect, useReducer, useState } from "react";
// 1. 초기값
const initialState = "happy";
// 2. 리듀서함수
function reducer(state, action) {
  switch (action.type) {
    case "HAPPY":
      return "happy";
    case "SAD":
      return "sad";
    case "ANGRY":
      return "angry";
    case "INIT":
      return action.payload;
    default:
      return state;
  }
}
export const EmotionContext = createContext();
export const EmotionContextProvider = ({ children }) => {
  // js 자리
  const [emotion, dispatch] = useReducer(reducer, initialState);
  // 등록이 가능여부를 관리
  const [isSelected, setIsSelected] = useState(false);

  // 날짜를 생성하는 함수 : 2025-07-24 생성
  const getTodayKey = () => {
    return new Date().toISOString().slice(0, 10);
  };

  useEffect(() => {
    const result = localStorage.getItem("emotionDay");
    if (result) {
      // { date: "2025-07-24", emotion: "happy"}
      // JSON.parse 는 js 로 변환하기
      const { date, emotion } = JSON.parse(result);

      // 오늘 날짜를 읽어옮 : 2025-07-24
      const today = getTodayKey();
      // 오늘 날짜와 json 으로 불러온 날짜가 같다면.
      if (date === today) {
        dispatch({ type: "INIT", payload: emotion });
        setIsSelected(true);
      }
    }
  }, []);

  useEffect(() => {
    if (isSelected) {
      const today = getTodayKey();
      // { date: "2025-07-24", emotion: "happy"}
      localStorage.setItem(
        "emotionDay",
        JSON.stringify({ date: today, emotion: emotion }),
      );
      // 셋팅 끝났으니까 버튼 비활성화
      setIsSelected(true);
    }
  }, [emotion, isSelected]);
  // jsx 자리
  return (
    // isSelected 를 추가해서 전달함.
    <EmotionContext.Provider
      value={{ emotion, dispatch, isSel7ected, setIsSelected }}
    >
      {children}
    </EmotionContext.Provider>
  );
};
```

- 활용하기

```jsx
import { useContext } from "react";
import {
  EmotionContext,
  EmotionContextProvider,
} from "./contexts/EmotionContext";

function Emotion() {
  const { emotion, dispatch, isSelected, setIsSelected } =
    useContext(EmotionContext);
  const bgColors = {
    happy: "yellow",
    sad: "blue",
    angry: "red",
  };
  const message = {
    happy: "지금 나는 😊 행복해요!",
    sad: "지금 나는 😢 슬퍼요...",
    angry: "지금 나는 🤬 화났어요!",
  };
  return (
    <div
      style={{
        backgroundColor: bgColors[emotion],
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        transition: "0.3s",
      }}
    >
      <h1>오늘의 기분 등록하기</h1>
      <h2>{message[emotion]}</h2>
      <div>
        <button
          disabled={isSelected}
          onClick={() => {
            dispatch({ type: "HAPPY" });
            setIsSelected(true);
          }}
        >
          😊
        </button>
        <button
          disabled={isSelected}
          onClick={() => {
            dispatch({ type: "SAD" });
            setIsSelected(true);
          }}
        >
          😢
        </button>
        <button
          disabled={isSelected}
          onClick={() => {
            dispatch({ type: "ANGRY" });
            setIsSelected(true);
          }}
        >
          🤬
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <EmotionContextProvider>
      <Emotion />
    </EmotionContextProvider>
  );
}

export default App;
```

## 4. 종합예제

- 리액트에는 리액트 전용 변수, 즉 state 가 두종류 있음.
- 1. 컴포넌트에서만 생성 및 관리되는 useState 가 있음.
- 2. 리액트 전체 영역에서 생성 및 관리되는 context 가 있음.
- 공통적으로 state 가 바뀌면 리랜더링이 일어난다.

### 4.1. context 를 다루는 context 전용 API 가 있다.

- context 는 대표적으로 사용자정보, 테마, 장바구니 등에 활용함.
- 라이브러리도 꽤 많다. (RTK - Redux Toolkit, Recoil, Zustands 등)
- context 를 다루기 위한 좋은 도구로 useReducer 를 활용했었음.

### 4.2. useReducer 란?

- useState 에 비해서 다양하게 state 를 관리할 수 있음.
- useReducer 에서의 state 와 action, reducer 함수에 대해서 반드시 이해하자.

### 4.3. 예제

- context 를 모아둔 폴더 즉, src/contexts 폴더 확인
- TodoContext.jsx 파일 생성

```jsx
// 1. Todo 를 위한 Context 생성
const { createContext } = require("react");
// 1.1. Todo 데이터를 위한 context
export const TodoStateContext = createContext(null);
// 1.2. Todo 데이터 업데이트를 위한 context
export const TodoDispatchContext = createContext(null);
```

- TodoProvider.jsx 파일 생성

```jsx
// 2. Provider 생성

import { useReducer } from "react";
import { TodoDispatchContext, TodoStateContext } from "./TodoContext";

// 2.1. 초기값 생성
const initialTodoState = [];
// 2.2. 리듀서 함수 생성
function todoReducer(state, action) {
  switch (action.type) {
    case "add":
      // action  = {type:"add", payload:"안녕하세요."}
      return [
        ...state,
        { id: new Date(), text: action.payload, completed: false },
      ];
    case "toggle":
      // action  = {type:"toggle", payload:아이디 }
      return state.map(item =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item,
      );
    case "delete":
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}
// 2.3. Provider 생성
export function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, initialTodoState);
  return (
    <TodoStateContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}
```
