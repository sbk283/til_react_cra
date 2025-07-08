import styled from "@emotion/styled";
import React from "react";

function AlbumsList({ id, title, userId }) {
  // js 자리
  const AlbumCard = styled.div`
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
  const AlbumTitle = styled.h2`
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const AlbumUser = styled.div`
    font-size: 13px;
    text-align: right;
    color: #999;
  `;
  // jsx 자리
  return (
    <AlbumCard>
      <AlbumTitle>
        {id} : {title}
      </AlbumTitle>
      <AlbumUser>User Id : {userId}</AlbumUser>
      <div>Post ID: {id}</div>
    </AlbumCard>
  );
}

export default AlbumsList;
