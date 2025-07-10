import styled from "@emotion/styled";

export const FormContainer = styled.div`
  padding: 24px;
  width: 90%;
  max-width: 800px;
  margin: 30px auto;
  border-radius: 16px;
  background-color: #fefefe;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
`;

export const FormLabel = styled.label`
  font-weight: 600;
  margin-bottom: 8px;
  display: block;
  font-size: 16px;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 80px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
`;

export const RadioInput = styled.input``;

export const CheckBoxGroup = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  padding-left: 80px;
  margin-bottom: 8px;
`;

export const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
`;

export const CheckBoxInput = styled.input`
  width: 16px;
  height: 16px;
  accent-color: hotpink;
`;

export const SelectGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 80px;
  margin-bottom: 8px;
`;

export const SelectList = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 13px;
  color: #333;
  &:focus {
    outline: none;
    border-color: hotpink;
  }
`;

export const SelectOption = styled.option``;

export const TextAreaGroup = styled.div`
  padding-left: 80px;
  margin-bottom: 8px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  font-size: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: hotpink;
  }
  &::placeholder {
    color: #aaa;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background-color: hotpink;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    background-color: #ffc5e2;
  }
`;

// 이미지 미리보기 및 파일 업로드 관련
export const UploadImageGroup = styled.div`
  padding-left: 80px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const ImagePreview = styled.img`
  width: 1000px;
  height: 1000px;
  border-radius: 8px;
  overflow: hidden;
  object-fit: cover;
  margin-bottom: 12px;
`;
export const ImageUploadLabel = styled.label`
  padding: 10px 16px;
  background-color: #007bff;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  font-size: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;

export const ImageUploadButton = styled.input`
  display: none;
`;
