import { createContext, useEffect, useReducer } from "react";
// 1 번 초기값
const initialState = "light";
// 2 번 리듀서함수
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      const nextTheme = state === "light" ? "dark" : "light";
      localStorage.setItem("theme", nextTheme);
      return nextTheme;
    case "INIT":
      return action.payload || state; // 로컬스토리지에서 불러온 값이 없으면 초기값 사용
    default:
      return state;
  }
}
export const ThemeContext = createContext();
export const ThemeContextProvider = ({ children }) => {
  // js자리
  // 3번
  const [theme, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // 로컬스토리지에서 테마를 불러오기
    const result = localStorage.getItem("theme");
    dispatch({ type: "INIT", payload: result });
  }, []);
  // jsx 자리
  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
