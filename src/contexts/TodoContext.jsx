// 1. Todo 를 위한 Context 생성
const { createContext } = require("react");
// 1.1. Todo 데이터를 위한 context
export const TodoStateContext = createContext(null);
// 1.2. Todo 데이터 업데이트를 위한 context
export const TodoDispatchContext = createContext(null);
