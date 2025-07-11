import React, { use, useEffect } from "react";
import { useState } from "react";
// 전역자리
function Test3() {
  // js 자리
  const [Count, setCount] = useState(0);

  useEffect(() => {
    console.log("안녕. 나는 처음이지?");
    return () => {
      console.log("다음 생에 만나요");
    };
  }, []);

  useEffect(() => {
    console.log(`${Count} 이군요 하하`);
    return () => {
      console.log("사요나라");
    };
  }, [Count]);
  // jsx 자리
  return (
    <div>
      <h1>Test3</h1>
      <button onClick={() => setCount(Count + 1)}>점수</button>
      <p>{Count}</p>
    </div>
  );
}

export default Test3;
