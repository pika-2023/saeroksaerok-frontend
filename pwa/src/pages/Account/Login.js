import React from "react";
import styled from "styled-components";
import variables from "../../styles/variables";

const Login = () => {
  return (
    <LoginContainer>
      <UploadProfileImg>프로필</UploadProfileImg>
      <EditImgIcon
        src="/icons/profileImgIcon.png"
        alt="프로필 사진 수정하기 버튼"
      />
      <LoginForm>
        <FormContainer>
          <FormTitle>이름</FormTitle>
          <FormInput type="text" placeholder="이름 입력란" />
        </FormContainer>
        <FormContainer>
          <FormTitle>비밀번호</FormTitle>
          <FormInput type="password" placeholder="비밀번호 입력란" />
        </FormContainer>
      </LoginForm>
      <LoginButton>로그인</LoginButton>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  ${variables.flex("column", "center", "center")}
  padding-top: 25%;
`;

const UploadProfileImg = styled.div`
  ${variables.flex("row", "center", "center")}
  ${variables.widthHeight("147px", "147px")}
  ${variables.fontStyle("22px", 500)}
  margin-bottom: 50px;
  background: ${({ theme }) => theme.style.lightgray};
  color: ${({ theme }) => theme.style.gray};
  border-radius: 50%;
`;

const EditImgIcon = styled.img`
  ${variables.widthHeight("50px", "50px")}
  margin: -100px -100px 60px 0;
`;

const LoginForm = styled.div`
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
  background: ${({ theme }) => theme.style.lightgray};
  border: none;
  border-radius: 6px;

  &::placeholder {
    color: ${({ theme }) => theme.style.gray};
  }
`;

const LoginButton = styled.button`
  ${variables.position("fixed", "null", "null", "0", "0")}
  ${variables.widthHeight("100%", "82px")}
  ${variables.fontStyle("22px", 600)}
  background: ${({ theme }) => theme.style.black};
  color: ${({ theme }) => theme.style.white};
  border: none;
  cursor: pointer;
`;
