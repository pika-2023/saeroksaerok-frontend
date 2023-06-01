import React, { useState } from "react";
import styled from "styled-components";
import variables from "../../styles/variables";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    checkPassword: "",
  });

  const { email, password, checkPassword } = userInfo;

  const onChangeUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // MARK : 회원가입 API 테스트용 mockUrl
  // const ApiUrl = "https://64763b93e607ba4797dd7d29.mockapi.io/api/signup";
  const ApiUrl = "http://13.124.76.165:8080/signup";

  const handleSignup = () => {
    fetch(ApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email,
        password,
        checkPassword,
      }),
    })
      .then((response) => response.json)
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <SignupContainer>
      <UploadProfileImg>프로필</UploadProfileImg>
      <EditImgIcon
        src="/icons/profileImgIcon.png"
        alt="프로필 사진 등록하기 버튼"
      />
      <SignupForm>
        <FormContainer>
          {/* 이름 대신 이메일로 테스트 진행 */}
          {/* <FormTitle>이름</FormTitle> */}
          {/* <FormInput type="text" placeholder="이름 입력란" /> */}
          <FormTitle>이메일</FormTitle>
          <FormInput
            type="email"
            value={email}
            name="email"
            placeholder="이메일 입력란"
            onChange={onChangeUserInfo}
          />
        </FormContainer>
        <FormContainer>
          <FormTitle>비밀번호</FormTitle>
          <FormInput
            type="password"
            value={password}
            name="password"
            placeholder="비밀번호 입력란"
            onChange={onChangeUserInfo}
          />
          <FormInput
            type="password"
            value={checkPassword}
            name="checkPassword"
            placeholder="비밀번호 확인란"
            onChange={onChangeUserInfo}
          />
        </FormContainer>
      </SignupForm>
      <SignupButton onClick={handleSignup}>회원가입</SignupButton>
    </SignupContainer>
  );
};

export default Signup;

const SignupContainer = styled.div`
  ${variables.flex("column", "center", "center")}
  padding-top: 25%;
`;

const UploadProfileImg = styled.div`
  ${variables.flex("row", "center", "center")}
  ${variables.widthHeight("147px", "147px")}
  ${variables.fontStyle("22px", 500)}
  margin-bottom: 50px;
  background: ${({ theme }) => theme.style.gray1};
  color: ${({ theme }) => theme.style.gray3};
  border-radius: 50%;
`;

const EditImgIcon = styled.img`
  ${variables.widthHeight("50px", "50px")}
  margin: -100px -100px 60px 0;
`;

const SignupForm = styled.div`
  width: 90%;
`;

const FormContainer = styled.div`
  margin-bottom: 20px;
`;

const FormTitle = styled.div`
  ${variables.fontStyle("24px", 500)}
  margin-bottom: 15px;
`;

const FormInput = styled.input`
  ${variables.fontStyle("22px", 500)}
  margin-bottom: 20px;
  padding: 13px 16px;
  width: 100%;
  background: ${({ theme }) => theme.style.gray1};
  border: none;
  border-radius: 6px;

  &::placeholder {
    color: ${({ theme }) => theme.style.gray3};
  }
`;

const SignupButton = styled.button`
  ${variables.position("fixed", "null", "null", "0", "0")}
  ${variables.widthHeight("100%", "82px")}
  ${variables.fontStyle("22px", 600)}
  background: ${({ theme }) => theme.style.black};
  color: ${({ theme }) => theme.style.white};
  border: none;
  cursor: pointer;
`;
