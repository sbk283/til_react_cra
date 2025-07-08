import React, { useState } from "react";

// 파일로 만들지 않은  컴포넌트
function Hi({ data }) {
  // js 자리
  // jsx 자리
  return <div>안녕 {data?.name}!</div>;
}

function Test() {
  // js 자리
  const [userData, setUserData] = useState([
    {
      name: "Hong",
      age: 20,
    },
    {
      name: "Kim",
      age: 30,
    },
    {
      name: "Lee",
      age: 40,
    },
    {
      name: "Song",
      age: 27,
    },
  ]);

  // jsx 자리
  return (
    <>
      <h2>회원전체 명단: map 활용</h2>
      <div>
        {userData.map((item, index) => (
          <Hi key={index} data={item} />
        ))}
      </div>
      <h2>연령이 20대인 회원 명단 : filter 활용</h2>
      <div>
        {userData
          .filter(item => item.age >= 20 && item.age < 30)
          .map((item, index) => (
            <Hi key={index} data={item} />
          ))}
      </div>
      <h2>이름이 Song 이면서 20대인 회원</h2>
      <div>
        {userData
          .filter(item => item.age >= 20 && item.age < 30)
          .find(item => item.name === "Song")
          ? userData
              .filter(item => item.age >= 20 && item.age < 30)
              .find(item => item.name === "Song").name
          : "없음"}
      </div>
    </>
  );
}

export default Test;
