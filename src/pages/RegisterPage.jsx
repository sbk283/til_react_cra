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
    user_thumbnail: "",
  });

  const [errMessage, setErrMessage] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#ff69b4" }}>회원 가입</h1>
      <RegisterForm
        formData={formData}
        errMessage={errMessage}
        onChange={handleChange}
        setFormData={setFormData}
      />
    </div>
  );
}

export default RegisterPage;
