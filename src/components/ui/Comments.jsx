import React, { useState } from "react";
import CommentList from "./CommentList";
import DefaultButton from "./Button";

function Comments() {
  // js 자리
  const [commentsArr, setCommentsArr] = useState([]);
  async function getComments() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const result = await res.json();
      setCommentsArr(result);
    } catch (error) {
      console.log(error);
    }
  }
  function makeCommentList() {
    return commentsArr.map(function (요소, 인덱스) {
      return (
        <CommentList
          key={인덱스}
          postId={요소.postId}
          id={요소.id}
          name={요소.name}
          email={요소.email}
          body={요소.body}
        />
      );
    });
    // jsx 자리
  }
  function resetList() {
    setCommentsArr([]);
  }

  return (
    <div>
      <h1>
        Comments 목록
        <DefaultButton variant="get" onClick={getComments}>
          목록가져오기
        </DefaultButton>
        <DefaultButton variant="reset" onClick={resetList}>
          목록초기화
        </DefaultButton>
      </h1>
      <div>{makeCommentList()}</div>
    </div>
  );
}

export default Comments;
