import styled from "@emotion/styled";
import React from "react";
import { BiBorderRadius } from "react-icons/bi";

function PostList({ id, title, body, userId }) {
  // js 자리
  const PostCard = styled.div`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
    border: 6px solid #ffb703;
    margin: 20px;
    padding: 20px;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      transform: scale(1.02);
      box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
    }
  `;
  const PostTitle = styled.h2`
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const PostBody = styled.div`
    font-size: 15px;
    color: #555;
    line-height: 1.6;
    margin-bottom: 10px;
  `;
  const PostUser = styled.div`
    font-size: 13px;
    text-align: right;
    color: #999;
  `;

  const ListButton = styled.button`
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;

    &:hover {
      background-color: #0056b3;
    }
  `;

  // jsx 자리
  return (
    <PostCard>
      <PostTitle>
        {id}: {title}
      </PostTitle>
      <PostBody>Body: {body}</PostBody>
      <PostUser>User ID: {userId}</PostUser>
      <div>Post ID: {id}</div>
      <div></div>
    </PostCard>
  );
}

export default PostList;
