import React, { useState } from "react";
import UserList from "./UserList";
import DefaultButton from "./Button";

function Users() {
  // js
  const [usersArr, setUsersArr] = useState([]);
  async function getUsers() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await res.json();
      setUsersArr(result);
    } catch (error) {
      console.log(error);
    }
  }

  // 데이터를 컴포넌트로 출력하는 함수
  function makeUserList() {
    return usersArr.map((요소, 인덱스) => (
      <UserList key={인덱스} user={요소} />
    ));
  }

  // jsx
  function resetList() {
    setUsersArr([]);
  }

  return (
    <div>
      <h1>
        User 목록
        <DefaultButton variant="get" onClick={getUsers}>
          목록가져오기
        </DefaultButton>
        <DefaultButton variant="reset" onClick={resetList}>
          목록초기화
        </DefaultButton>
      </h1>
      <div>{makeUserList()}</div>
    </div>
  );
}

export default Users;
