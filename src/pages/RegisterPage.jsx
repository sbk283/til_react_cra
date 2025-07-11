import React, { useState } from "react";
import RegisterForm from "../components/form/RegisterForm";

function RegisterPage() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_pw: "",
    user_pw_confirm: "",
    user_nickname: "",
    user_birth: "",
    user_gender: "",
    user_interest_default: ["코딩", "독서", "운동", "여행", "음악", "영화"],
    user_interest: [],
    user_location_default: [
      "서울",
      "경기",
      "인천",
      "부산",
      "대구",
      "광주",
      "대전",
      "울산",
    ],
    user_location: "",
    user_intro: "",
    user_image: null,
    user_image_preview: "", // ✅ 미리보기용 이미지 주소
  });

  const [errMessage, setErrMessage] = useState("");

  const handleChange = e => {
    const temp = { [e.target.name]: e.target.value };
    setFormData(prev => ({ ...prev, ...temp }));
  };

  const handleCheckBoxChange = e => {
    const { name, value, checked } = e.target;

    if (checked) {
      const arr = [...formData.user_interest, value];
      setFormData({ ...formData, user_interest: arr });
    } else {
      const arr = formData.user_interest.filter(item => item !== value);
      setFormData({ ...formData, user_interest: arr });
    }
  };

  const handlePreviewImg = e => {
    const imageFile = e.target.files[0];
    if (imageFile) {
      const imgUrl = URL.createObjectURL(imageFile);
      setFormData({
        ...formData,
        user_image: imageFile,
        user_image_preview: imgUrl,
      });
    }
  };

  const handleDeleteImage = () => {
    setFormData(prev => ({
      ...prev,
      user_image: null,
      user_image_preview: "",
    }));
  };

  // 최종 백엔드로 내용 보내기
  // 보내는 내용이 글자이면 괜찮다.
  // 만약 파일, 또는 배열이면 먼저 선작업이 필요하다.
  const handleSubmit = e => {
    // 웹브라우저 새로고침 방지
    e.preventDefault();
    const {
      user_name,
      user_email,
      user_pw,
      user_pw_confirm,
      user_nickname,
      user_birth,
      user_gender,
      user_interest,
      user_location,
      user_intro,
      user_image,
    } = formData;
    // 항목이 누락된다면 처리하기
    if (!user_name) {
      alert("이름을 작성해주세요.");
      return;
    }
    if (!user_email) {
      alert("이메일을 작성해주세요.");
      return;
    }
    if (!user_pw) {
      alert("비밀번호를 작성해주세요.");
      return;
    }
    if (user_pw !== user_pw_confirm) {
      alert("비밀번호가 다릅니다. 다시 확인해주세요.");
      return;
    }
    // 실제로 저장을 하면서 보는게 좋습니다.
    // 미니프로젝트는 임시로 저장하는 형태로 진행
    // 아래는 file 이 첨부되었다는 가정으로 진행함.
    const sendData = new FormData();
    for (let key in formData) {
      // key 는 객체의 속성명
      if (key === "user_interest") {
        // 배열 처리하기 ["운동", "개발"]
        formData.user_interest.forEach((item, index) => {
          // 하나씩 꺼내서 sendData 에 담기
          sendData.append("user_interest[]", item);
        });
      } else if (key === "user_image" && formData.user_image) {
        // 이미지 파일 처리하기
        sendData.append("user_image", formData.user_image);
      } else {
        // 그냥 일반적 글자라면
        // "user_name" : "홍길동"
        sendData.append(key, formData[key]);
        // sendData.append("user_name", "홍길동");
      }
    }

    alert("데이터가 전송되었습니다.");
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#ff69b4" }}>회원 가입</h1>
      <RegisterForm
        formData={formData}
        errMessage={errMessage}
        handleChange={handleChange}
        setFormData={setFormData}
        handleCheckboxChange={handleCheckBoxChange}
        handlePreviewImg={handlePreviewImg}
        handleDeleteImage={handleDeleteImage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
export default RegisterPage;
