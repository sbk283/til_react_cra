# useMemo

## 1. 참고사항 (최적화 해보셨나요?)

### 1.1. 레이아웃

- Shift Layout 현상을 가능하면 제거
- CSS로 꾸준히 작업, npm으로 가짜 배치
- skeleton 레이아웃
- 반응형 코드 꾸준히 작업

## 1.2. 리액트 성능 최적화

- lazy, suspense로 로딩 처리
- useMemo, useCallBack, React.memo()로 판별

### 1.3. SEO 최적화

- meta 태그
- favicon
- title
- 모바일 icon 등등
- GA4 적용

## 2. useMemo

- 개발 중에는 적용하지 않음
- 최적화 고민하면서 개발하면 시간이 오래 걸림
- 개발 중에 틈틈이 최적화하길 권장

### 2.1. useMemo: 리액트 변수 저장하기

- 성능 이슈 발생 가능함
  - 문제점
    - `count` 값 변경 시
    - 다시 계산할 필요 없는 `num * 2`가 실행됨
  - 원하는 것 -`num` 값 변할 때만
    - 다시 계산 필요한 `num * 2`가 실행됨

```jsx
import React, { useState } from "react";

function App() {
  // js 자리
  console.log("APP: 리랜더링");
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);

  // 값을 2배로
  const now = ;
  console.log("now: ", now);

  // jsx자리
  return (
    <div>
      <h2>count 값: {count}</h2>
      <h2>num 값: {num}</h2>
      <h2>now 값: {now}</h2>
      <button onClick={() => setCount(count + 1)}>count 증가</button>
      <button onClick={() => setNum(num + 1)}>num 증가</button>
    </div>
  );
}

export default App;
```

- 해결 코드

```jsx
import React, { useMemo, useState } from "react";

function App() {
  // js 자리
  console.log("APP: 리랜더링");
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);

  // 값을 2배로
  const now = useMemo(() => {
    console.log("now 새로 계산");
    return num * 2;
  }, [num]);

  // jsx자리
  return (
    <div>
      <h2>count 값: {count}</h2>
      <h2>num 값: {num}</h2>
      <h2>now 값: {now}</h2>
      <button onClick={() => setCount(count + 1)}>count 증가</button>
      <button onClick={() => setNum(num + 1)}>num 증가</button>
    </div>
  );
}

export default App;
```

- 연습

```jsx
import React, { useMemo, useState } from "react";

function App() {
  // js 자리
  const [num, setNum] = useState(0);
  const [text, setText] = useState("");

  const refultFN = useMemo(() => {
    return num * num;
  }, [num]);

  const helloFn = useMemo(() => {
    return text + " 안녕!";
  }, [text]);

  // jsx 자리
  return (
    <div>
      <h1>간단한 계산 출력</h1>
      <div>
        <input
          type="number"
          placeholder="숫자 입력"
          value={num}
          onChange={e => setNum(parseInt(e.target.value))}
        />
        <div>{refultFN}</div>
        <h1>글자 최적화</h1>
        <div>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div>{helloFn}</div>
      </div>
    </div>
  );
}

export default App;
```

# useCallback

- 왜 함수를 랜더링마다 자꾸 새로 만들죠?

```jsx
import React from "react";

function App() {
  console.log("App : 리랜더링");

  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(Math.floor(Math.random() * 50))}>
        50이하 랜덤값
      </button>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => setCount(count - 1)}>감소</button>
      <button onClick={() => setCount(0)}>초기화</button>
    </div>
  );
}

export default App;
```

- 성능 이슈 발생 가능함
  - 문제점
    - `count` 값 변경 시
    - 다시 만들 필요 없는 `const add = () => {...}`가 실행됨
  - 원하는 것
    - `const add = () => {...}` 한번 만들고 다시는 새로 만들지마라.

- 성능 개선 코드

```jsx
import React, { useCallback, useState } from "react";

function App() {
  console.log("App : 리랜더링");

  const [count, setCount] = useState(0);

  const add = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const minus = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  const random = useCallback(() => {
    setCount(Math.floor(Math.random() * 50));
  }, []);

  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={random}>50이하 랜덤값</button>
      <button onClick={add}>증가</button>
      <button onClick={minus}>감소</button>
      <button onClick={reset}>초기화</button>
    </div>
  );
}

export default App;
```
