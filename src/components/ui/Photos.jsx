import React, { useState } from "react";
import PhotoList from "./PhotoList";
import DefaultButton from "./Button";

function Photos() {
  //js
  const [photoArr, setPhotoArr] = useState([]);
  async function getPhotos() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const result = await res.json();
      setPhotoArr(result);
    } catch (error) {
      console.log(error);
    }
  }
  function makePhotoList() {
    return photoArr.map(function (요소, 인덱스) {
      return (
        <PhotoList
          key={인덱스}
          id={요소.id}
          title={요소.title}
          url={요소.url}
          thumbnailUrl={요소.thumbnailUrl}
          albumId={요소.albumId}
        />
      );
    });
  }

  function resetList() {
    setPhotoArr([]);
  }
  //jsx
  return (
    <div>
      <h1>
        Photos 목록
        <DefaultButton variant="get" onClick={getPhotos}>
          목록가져오기
        </DefaultButton>
        <DefaultButton variant="reset" onClick={resetList}>
          목록초기화
        </DefaultButton>
      </h1>
      <div>{makePhotoList()}</div>
    </div>
  );
}
export default Photos;
