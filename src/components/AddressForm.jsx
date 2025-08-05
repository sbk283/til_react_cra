import useInput from "../hooks/useInput";

export default function AddressForm() {
  const address = useInput();
  const handleSubmit = () => {
    alert(address.value);
    address.reset();
  };
  return (
    <div>
      <h2>주소 입력</h2>
      <input type="text" placeholder="주소를 입력하세요" {...address} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}
