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
