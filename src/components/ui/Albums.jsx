import React, { useState } from "react";
import AlbumsList from "./AlbumsList";
import DefaultButton from "./Button";

function Albums() {
  // js 자리
  const [albumsArr, setAlbumsArr] = useState([]);
  async function getAlbums() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/albums");
      const result = await res.json();
      console.log(result);
      setAlbumsArr(result);
    } catch (error) {
      console.log(error);
    }
  }
  // getAlbums();
  function makeAlbumList() {
    return albumsArr.map(album => {
      return (
        <AlbumsList
          key={album.id}
          id={album.id}
          title={album.title}
          userId={album.userId}
        />
      );
    });
  }

  function resetList() {
    setAlbumsArr([]);
  }
  // jsx 자리

  return (
    <div>
      <h1>
        Albums 목록
        <DefaultButton variant="get" onClick={getAlbums}>
          목록가져오기
        </DefaultButton>
        <DefaultButton variant="reset" onClick={resetList}>
          목록초기화
        </DefaultButton>
      </h1>
      <div>{makeAlbumList()}</div>
    </div>
  );
}

export default Albums;
