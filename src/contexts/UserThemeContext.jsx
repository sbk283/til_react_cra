import { createContext, useEffect, useState } from "react";

export const UserThemeContext = createContext();
export const UserThemeProvider = ({ children }) => {
  const [bg, setBg] = useState("#ffc0c0");

  // 💡 저장된 배경색 불러오기
  useEffect(() => {
    const saveBg = localStorage.getItem("bg");
    if (saveBg) setBg(saveBg);
  }, []);
  return (
    <UserThemeContext.Provider value={{ bg, setBg }}>
      {children}
    </UserThemeContext.Provider>
  );
};
