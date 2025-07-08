import styled from "@emotion/styled";
import React from "react";

function PhotoList({ id, title, url, thumbnailUrl, albumId }) {
  const PhotoCard = styled.div`
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
  const PhotoTitle = styled.h2`
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const PhotoBody = styled.div`
    font-size: 15px;
    color: #555;
    line-height: 1.6;
    margin-bottom: 10px;
    color: #007bff;
  `;
  const PhotoUrl = styled.div`
    font-size: 13px;
    color: #007bff;
    margin-bottom: 10px;
    word-break: break-all;
  `;
  const PhotoAlbumId = styled.div`
    font-size: 13px;
    text-align: right;
    color: #999;
  `;
  return (
    <PhotoCard>
      <PhotoTitle>
        {id} : {title}
      </PhotoTitle>
      <PhotoBody>{thumbnailUrl}</PhotoBody>
      <PhotoUrl>{url}</PhotoUrl>
      <PhotoAlbumId>Album ID : {albumId}</PhotoAlbumId>
    </PhotoCard>
  );
}

export default PhotoList;
