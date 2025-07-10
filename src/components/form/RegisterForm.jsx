import styled from "@emotion/styled";
import React, { useState } from "react";
import InputUi from "./InputUi";
import {
  FormContainer,
  FormLabel,
  RadioGroup,
  RadioLabel,
  RadioInput,
  CheckBoxGroup,
  CheckBoxLabel,
  CheckBoxInput,
  SelectGroup,
  SelectList,
  SelectOption,
  UploadImageGroup,
  ImagePreview,
  ImageUploadButton,
  ImageUploadLabel,
  TextAreaGroup,
  TextArea,
  SubmitButton,
} from "./RegisterForm.styles";

function RegisterForm({ formData, errMessage, onChange, setFormData }) {
  const handleInterestChange = e => {
    const { value, checked } = e.target;
    const newInterests = checked
      ? [...formData.user_interest, value]
      : formData.user_interest.filter(i => i !== value);

    setFormData(prev => ({ ...prev, user_interest: newInterests }));
  };
  const handlePreviewImg = e => {
    const file = e.target.files[0];
    if (file) {
      const 임시주소 = URL.createObjectURL(file);
    }
  };

  return (
    <FormContainer>
      <form>
        <InputUi
          id="user_name"
          type="text"
          name="user_name"
          value={formData.user_name}
          placeholder="아이디를 입력하세요."
          label="아이디"
          onChange={onChange}
        />
        <InputUi
          id="user_email"
          type="text"
          name="user_email"
          value={formData.user_email}
          placeholder="이메일을 입력하세요."
          label="이메일"
          onChange={onChange}
        />
        <InputUi
          id="user_pw"
          type="password"
          name="user_pw"
          value={formData.user_pw}
          placeholder="비밀번호를 입력하세요."
          label="비밀번호"
          onChange={onChange}
        />
        <InputUi
          id="user_pw_confirm"
          type="password"
          name="user_pw_confirm"
          value={formData.user_pw_confirm}
          placeholder="비밀번호를 다시 입력하세요."
          label="비밀번호 확인"
          onChange={onChange}
        />
        <InputUi
          id="user_nickname"
          type="text"
          name="user_nickname"
          value={formData.user_nickname}
          placeholder="닉네임을 입력하세요."
          label="닉네임"
          onChange={onChange}
        />
        <InputUi
          id="user_birth"
          type="date"
          name="user_birth"
          value={formData.user_birth}
          label="생년월일"
          onChange={onChange}
        />

        <FormLabel>성별</FormLabel>
        <RadioGroup>
          <RadioLabel>
            <RadioInput
              type="radio"
              value={"남성"}
              name="user_gender"
              checked={formData.user_gender === "남성"}
              onChange={onChange}
            />
            남성
          </RadioLabel>
          <RadioLabel>
            <RadioInput
              type="radio"
              value={"여성"}
              name="user_gender"
              checked={formData.user_gender === "여성"}
              onChange={onChange}
            />
            여성
          </RadioLabel>
        </RadioGroup>

        <FormLabel>관심사</FormLabel>
        <CheckBoxGroup>
          {formData.user_interest_default.map((item, index) => (
            <CheckBoxLabel key={index}>
              <CheckBoxInput
                type="checkbox"
                name="user_interest"
                value={item}
                checked={formData.user_interest.includes(item)}
                onChange={handleInterestChange}
              />
              {item}
            </CheckBoxLabel>
          ))}
        </CheckBoxGroup>

        <FormLabel>거주 지역</FormLabel>
        <SelectGroup>
          <SelectList id="user_location" name="user_location">
            <SelectOption value="">---지역을 선택해주세요---</SelectOption>

            {formData.user_location_default.map((item, index) => (
              <SelectOption value={`${item}`} key={index}>
                {item}
              </SelectOption>
            ))}
          </SelectList>
        </SelectGroup>
        <FormLabel>프로필 사진</FormLabel>
        <UploadImageGroup>
          {/* 미리보기 이미지 */}
          {formData.user_image_preview && (
            <ImagePreview src={formData.user_image_preview} />
          )}
          <ImageUploadLabel htmlFor="user_image">이미지 선택</ImageUploadLabel>
          <ImageUploadButton
            type="file"
            accept="image/*"
            id="user_image"
            name="user_image"
            onChange={handlePreviewImg}
          />
        </UploadImageGroup>
        <FormLabel>자기소개</FormLabel>
        <TextAreaGroup>
          <TextArea
            name="user_intro"
            id="user_intro"
            rows={10}
            value={formData.user_intro}
            onChange={onChange}
            placeholder="자기소개를 500자 이상 입력하세요."
          />
        </TextAreaGroup>
        <SubmitButton type="submit">회원 가입</SubmitButton>
      </form>
    </FormContainer>
  );
}

export default RegisterForm;
