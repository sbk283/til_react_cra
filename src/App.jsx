import AddressForm from "./components/AddressForm";
import CounterSample from "./components/CounterSample";
import NickNameForm from "./components/NickNameForm";
import useInput from "./hooks/useInput";
import useMessage from "./hooks/useMessage";
import { useTitle } from "./hooks/useTitle";
import useWindowSize from "./hooks/useWindowSize";

function App() {
  // js 자리
  useTitle("첫화면");
  const showMessage = useMessage();
  const { width, height } = useWindowSize();
  const { value, onChange, reset } = useInput();
  // jsx 자리
  return (
    <div>
      <div>
        <CounterSample />
      </div>
      <div>
        <button onClick={() => showMessage("안녕하세요!")}>
          메시지 출력하기
        </button>
      </div>
      <div>
        <h2>화면 너비: {width}px</h2>
        <h2>화면 높이: {height}px</h2>
      </div>
      <div>
        <h2>입력창 처리</h2>
        <NickNameForm />
        <AddressForm />
      </div>
    </div>
  );
}

export default App;
