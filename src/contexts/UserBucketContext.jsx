import { createContext, useState } from "react";

export const UserBucketContext = createContext();
export const UserBucketProvider = ({ children }) => {
  // js 자리
  // 사용자 버킷 정보를 위한 리액트변수
  const [bucketList, setBucketList] = useState([]);

  // jsx 자리
  return (
    <UserBucketContext.Provider value={{ bucketList, setBucketList }}>
      {children}
    </UserBucketContext.Provider>
  );
};
