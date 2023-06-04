import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import variables from "../../styles/variables";

const Signup = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    checkPassword: "",
  });

  const [signup, setSignup] = useState(false);

  const { email, password, checkPassword } = userInfo;

  const onChangeUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

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
      .then((response) => response.json())
      .then((data) => {
        if (data.email === email) {
          setSignup(true);
        } else alert("중복된 이메일 입니다.");
      });
  };

  return (
    <>
      {!signup && (
        <SignupContainer>
          <SymbolMark src="./images/saeroksaerok_logo_inapp.png" alt="none" />
          <SignupForm>
            <FormContainer>
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
          <SignupButton onClick={handleSignup}>다음으로</SignupButton>
        </SignupContainer>
      )}
      {signup && (
        <SignupContainer>
          <UploadProfileImg>
            <BasicProfileImg src="./images/saeroksaerok_profile.png" />
            <UploadMyProfileImg>
              나를 나타내는 사진을 올려보세요
            </UploadMyProfileImg>
          </UploadProfileImg>
          {/* MARK : 와이어프레임에 없어서 일단 지우겠습니다.
          <EditImgIcon src="./images/profileImgIcon.png" /> */}
          <SignupForm>
            <FormContainer>
              <FormTitle>이름</FormTitle>
              <FormInput
                type="text"
                name="name"
                placeholder="이름을 입력해주세요"
              />
            </FormContainer>
          </SignupForm>

          <SignupButton
            onClick={() => {
              navigate("/word");
            }}
          >
            새록새록 시작하기
          </SignupButton>
        </SignupContainer>
      )}
    </>
  );
};

export default Signup;

const SignupContainer = styled.div`
  ${variables.flex("column", "center", "center")}
  padding-top: 25%;
`;

const SymbolMark = styled.img`
  width: 187px;
  margin-bottom: 28px;
`;

const UploadProfileImg = styled.div`
  ${variables.flex("column", "flex-start", "center")}
  ${variables.widthHeight("147px", "147px")}
  ${variables.fontStyle("19px", 500)}
  margin-bottom: 85px;
  background: ${({ theme }) => theme.style.gray1};
  color: ${({ theme }) => theme.style.gray3};
  border-radius: 50%;
`;

const BasicProfileImg = styled.img`
  width: 100%;
  margin-bottom: 16px;
`;

// const EditImgIcon = styled.img`
//   ${variables.widthHeight("50px", "50px")}
//   margin: -100px -100px 60px 0;
// `;

const UploadMyProfileImg = styled.div`
  width: 235px;
  font-weight: 500;
  font-size: 19px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.style.gray4};
`;

const SignupForm = styled.div`
  width: 100%;
`;

const FormContainer = styled.div`
  margin-bottom: 20px;
`;

const FormTitle = styled.div`
  ${variables.fontStyle("22px", 600)}
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
  background: ${({ theme }) => theme.style.yellow2};
  color: ${({ theme }) => theme.style.black};
  border: none;
  cursor: pointer;
`;
