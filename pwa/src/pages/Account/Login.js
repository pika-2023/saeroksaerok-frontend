import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <LoginContainer>
      <LoginContent>
        <RegisterProfileImg>
          <RegisterProfileImgBox />
          <RegisterProfileImgText>프로필</RegisterProfileImgText>
        </RegisterProfileImg>
        <InfoContainer>
          <InputContainer>
            <LoginTitle>이름</LoginTitle>
            <LoginInput type="text" placeholder="이름 입력란" />
          </InputContainer>
          <InputContainer>
            <LoginTitle>비밀번호</LoginTitle>
            <LoginInput type="password" placeholder="비밀번호 입력란" />
          </InputContainer>
        </InfoContainer>
      </LoginContent>
      <LoginButton>로그인</LoginButton>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  font-family: "NanumGothic";
`;

const LoginContent = styled.div`
  padding: 30px;
`;

const RegisterProfileImg = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
`;

const RegisterProfileImgBox = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  background: #f5f5f5;
  border-radius: 50%;
`;

const RegisterProfileImgText = styled.div`
  position: absolute;
  top: 170px;
  font-size: 20px;
  color: #ababab;
`;

const InfoContainer = styled.div``;

const InputContainer = styled.div`
  /* FIXME: Input padding 넣을시 어긋나는 문제 해결 필요  */
  /* width: 100%; */
`;

const LoginTitle = styled.div`
  margin: 40px 0 15px 0;
  font-size: 24px;
  color: #212121;
`;

const LoginInput = styled.input`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* TODO: padding: 20px 15px로 수정 필요 */
  padding: 20px 0px;
  background: #f5f5f5;
  border-radius: 5px;
  border: none;
  gap: 10px;

  &::placeholder {
    font-size: 22px;
    color: #ababab;
  }
`;

const LoginButton = styled.button`
  position: absolute;
  bottom: 0;
  margin: 0;
  width: 100%;
  height: 100px;
  background: #212121;
  font-size: 24px;
  color: #ffffff;
  border: none;
`;
