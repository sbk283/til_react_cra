import React, { useState } from "react";
import PostList from "./PostList";
import DefaultButton from "./Button";

function Posts() {
  // js 자리
  //   let postsArr = [];
  const [postsArr, setPostsArr] = useState([]);
  async function getPosts() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await res.json();
      setPostsArr(result);
    } catch (error) {
      console.log(error);
    }
  }
  // 데이터를 컴포넌트로 출력하는 함수
  function makePostList() {
    return postsArr.map(function (요소, 인덱스) {
      return (
        <PostList
          key={인덱스}
          id={요소.id}
          title={요소.title}
          body={요소.body}
          userId={요소.userId}
        />
      );
    });
  }

  function resetList() {
    setPostsArr([]);
  }
  // jsx 자리
  return (
    <div>
      <h1>
        Posts 목록
        <DefaultButton variant="get" onClick={getPosts}>
          목록가져오기
        </DefaultButton>
        <DefaultButton variant="reset" onClick={resetList}>
          목록초기화
        </DefaultButton>
      </h1>
      <div>{makePostList()}</div>
    </div>
  );
}

export default Posts;
