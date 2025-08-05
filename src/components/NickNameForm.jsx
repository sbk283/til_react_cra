import useInput from "../hooks/useInput";

function NickNameForm() {
  const nickName = useInput();
  const handleSubmit = () => {
    alert(nickName.value);
    nickName.reset();
  };
  return (
    <div>
      <h2>닉네임 입력</h2>
      <input type="text" placeholder="닉네임을 입력하세요" {...nickName} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default NickNameForm;
