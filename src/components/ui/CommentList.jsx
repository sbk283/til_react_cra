import styled from "@emotion/styled";
import React from "react";

function CommentList({ id, postId, name, email, body }) {
  const CommentCard = styled.div`
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
  const CommentTitle = styled.h2`
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const CommentBody = styled.div`
    font-size: 15px;
    color: #555;
    line-height: 1.6;
    margin-bottom: 10px;
  `;
  const CommentPostId = styled.div`
    font-size: 13px;
    text-align: right;
    color: #999;
  `;
  const CommentName = styled.div`
    font-size: 13px;
    text-align: right;
    color: #999;
  `;
  const CommentEmail = styled.div`
    font-size: 13px;
    text-align: right;
    color: #999;
  `;
  return (
    <CommentCard>
      <CommentName>{name}</CommentName>
      <CommentBody>{body}</CommentBody>
      <CommentPostId>Post ID : {postId}</CommentPostId>
      <CommentEmail>{email}</CommentEmail>
      <div>Comment ID : {id}</div>
      <div></div>
    </CommentCard>
  );
}

export default CommentList;
