import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as A from "./Account.style";

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
    <A.LoginContainer>
      <A.SaerokSaerokLogo
        src="./images/saeroksaerok_logo_inapp.png"
        alt="새록새록"
      />
      <A.LoginForm>
        <A.FormContainer>
          <A.FormTitle>이메일</A.FormTitle>
          <A.FormInput
            type="email"
            value={email}
            name="email"
            placeholder="이메일을 입력해주세요"
            onChange={onChangeLoginInfo}
          />
        </A.FormContainer>
        <A.FormContainer>
          <A.FormTitle>비밀번호</A.FormTitle>
          <A.FormInput
            type="password"
            value={password}
            name="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={onChangeLoginInfo}
          />
        </A.FormContainer>
      </A.LoginForm>
      <A.LoginButton onClick={handleLogin}>로그인하기</A.LoginButton>
    </A.LoginContainer>
  );
};

export default Login;
