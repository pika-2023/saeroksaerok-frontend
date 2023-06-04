import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import variables from "../../styles/variables";

const Login = () => {
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginInfo;

  const onChangeLoginInfo = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleLogin = () => {
    fetch("http://13.124.76.165:8080/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
          navigate("/word");
        }
      });
  };

  console.log(loginInfo);

  return (
    <LoginContainer>
      <SaerokSaerokLogo
        src="./images/saeroksaerok_logo_inapp.png"
        alt="새록새록"
      />
      <LoginForm>
        <FormContainer>
          <FormTitle>이메일</FormTitle>
          <FormInput
            type="email"
            value={email}
            name="email"
            placeholder="이메일을 입력해주세요"
            onChange={onChangeLoginInfo}
          />
        </FormContainer>
        <FormContainer>
          <FormTitle>비밀번호</FormTitle>
          <FormInput
            type="password"
            value={password}
            name="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={onChangeLoginInfo}
          />
        </FormContainer>
      </LoginForm>
      <LoginButton onClick={handleLogin}>로그인하기</LoginButton>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  ${variables.flex("column", "center", "center")}
  padding-top: 25%;
`;

const SaerokSaerokLogo = styled.img`
  ${variables.widthHeight("187px", "auto")}
  margin-bottom: 70px;
`;

const LoginForm = styled.div`
  width: 90%;
`;

const FormContainer = styled.div`
  margin-bottom: 20px;
`;

const FormTitle = styled.div`
  ${variables.fontStyle("22px", 500)}
  margin-bottom: 15px;
  color: ${({ theme }) => theme.style.gray5};
  letter-spacing: -0.03em;
`;

const FormInput = styled.input`
  ${variables.fontStyle("19px", 500)}
  margin-bottom: 20px;
  padding: 13px 16px;
  width: 100%;
  background: ${({ theme }) => theme.style.gray1};
  border: 1px solid #e5e5e5;
  border-radius: 12px;

  &::placeholder {
    color: ${({ theme }) => theme.style.gray3};
    letter-spacing: -0.03em;
  }

  &:focus {
    border: 1.5px solid #ffc700;
    outline: none;
  }
`;

const LoginButton = styled.button`
  ${variables.position("fixed", "null", "null", "0", "0")}
  ${variables.widthHeight("100%", "82px")}
  ${variables.fontStyle("22px", 600)}
  background: ${({ theme }) => theme.style.yellow2};
  color: ${({ theme }) => theme.style.black};
  border: none;
  cursor: pointer;
`;
