import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import variables from "../../styles/variables";

const Signup = () => {
  const navigate = useNavigate();
  const [basicProfileImg, setBasicProfileImg] = useState(
    "./images/saeroksaerok_profile.png"
  );
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    checkPassword: "",
    nickname: "",
  });
  console.log(userInfo);
  console.log(basicProfileImg);
  const [signup, setSignup] = useState(false);

  const { email, password, checkPassword, nickname } = userInfo;

  const onChangeUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const fileInput = useRef(null);

  const onChange = (e) => {
    if (e.target.files[0]) {
      setBasicProfileImg(URL.createObjectURL(e.target.files[0]));
    } else {
      //MARK : 업로드 취소할 시
      setBasicProfileImg("./images/saeroksaerok_profile.png");
      return;
    }
    // MARK : 화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setBasicProfileImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
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

  const createProfile = () => {
    console.log(userInfo, basicProfileImg);
    const formData = new FormData();
    formData.append("file", basicProfileImg);
    formData.append("email", email);
    formData.append("nickname", nickname);

    axios
      .post("http://13.124.76.165:8080/profiles", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("프로필 생성 성공 ✨", response.data);
      })
      .catch((error) => {
        console.error("프로필 생성 실패:", error);
      });
  };

  return (
    <>
      {!signup && (
        <SignupContainer>
          <WelcomeContainer>
            <WelcomeTitle>
              새록새록에 오신 것을 <br />
              환영해요
            </WelcomeTitle>
          </WelcomeContainer>
          <SignupForm>
            <FormContainer>
              <FormTitle>이메일</FormTitle>
              <FormInput
                type="email"
                value={email}
                name="email"
                placeholder="이메일을 입력해주세요"
                onChange={onChangeUserInfo}
              />
            </FormContainer>
            <FormContainer>
              <FormTitle>비밀번호</FormTitle>
              <FormInput
                type="password"
                value={password}
                name="password"
                placeholder="비밀번호를 입력해주세요"
                onChange={onChangeUserInfo}
              />
              <FormInput
                type="password"
                value={checkPassword}
                name="checkPassword"
                placeholder="비밀번호를 다시 한 번 입력해주세요"
                onChange={onChangeUserInfo}
              />
            </FormContainer>
          </SignupForm>
          <GoToLogin>
            <GoToLoginText>이미 계정이 있으신가요?</GoToLoginText>
            <GoToLoginButton onClick={() => navigate("/login")}>
              로그인
            </GoToLoginButton>
          </GoToLogin>
          <SignupButton onClick={handleSignup} value={0}>
            다음으로
          </SignupButton>
        </SignupContainer>
      )}
      {signup && (
        <SignupContainer>
          <UploadProfileImg>
            <BasicProfileImg
              src={basicProfileImg}
              onClick={() => {
                fileInput.current.click();
              }}
            />
            <input
              type="file"
              style={{ display: "none" }}
              accept="image/jpg,image/png,image/jpeg, image/webp, image/git, image/bmp, image/svg"
              name="profileimage"
              onChange={onChange}
              ref={fileInput}
            />
            <UploadMyProfileImg>
              나를 나타내는 사진을 올려보세요
            </UploadMyProfileImg>
          </UploadProfileImg>
          <SignupForm>
            <FormContainer>
              <FormTitle>이름</FormTitle>
              <FormInput
                type="text"
                name="nickname"
                placeholder="이름을 입력해주세요"
                value={nickname}
                onChange={onChangeUserInfo}
              />
            </FormContainer>
          </SignupForm>

          <SignupButton onClick={createProfile} value={1}>
            회원가입하기
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
  margin-bottom: 82px;

  @media (min-width: 769px) {
    margin-bottom: 0px;
  }
`;

const WelcomeContainer = styled.div`
  width: 100%;
  margin: -40px 0 40px 0;
`;

const WelcomeTitle = styled.h1`
  ${variables.fontStyle("32px", 600)}
  margin: 20px 0 40px 0;
  line-height: 45px;
  letter-spacing: -0.03em;
  color: #212121;
`;

const UploadProfileImg = styled.div`
  ${variables.flex("column", "flex-start", "center")}
  ${variables.widthHeight("147px", "auto")}
  ${variables.fontStyle("19px", 500)}
  margin-bottom: 40px;
  color: ${({ theme }) => theme.style.gray3};
`;

const BasicProfileImg = styled.img`
  ${variables.widthHeight("147px", "147px")}
  margin-bottom: 16px;
  border-radius: 50%;
`;

const UploadMyProfileImg = styled.div`
  ${variables.fontStyle("19px", 500)}
  width: 235px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.style.gray4};
`;

const SignupForm = styled.div`
  width: 100%;
`;

const FormContainer = styled.div`
  margin-bottom: 35px;
`;

const FormTitle = styled.div`
  ${variables.fontStyle("22px", 500)}
  margin-bottom: 15px;
  color: ${({ theme }) => theme.style.gray5};
  letter-spacing: -0.03em;
`;

const FormInput = styled.input`
  ${variables.fontStyle("19px", 500)}
  margin-bottom: 10px;
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

  &:focus {
    border: 1.5px solid #ffc700;
    outline: none;
  }
`;

const GoToLogin = styled.div`
  margin-top: 80px;
  white-space: nowrap;
`;

const GoToLoginText = styled.span`
  ${variables.fontStyle("19px", 500)}
  line-height: 29px;
  text-align: center;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.style.gray3};
`;

const GoToLoginButton = styled.button`
  ${variables.fontStyle("19px", 500)}
  line-height: 29px;
  text-align: center;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.style.gray5};
  background: none;
  border: none;
  cursor: pointer;
`;

const SignupButton = styled.button`
  ${variables.position("fixed", "null", "null", "0", "0")}
  ${variables.widthHeight("100%", "82px")}
  ${variables.fontStyle("22px", 600)}
  background: ${(props) => (props.value === 0 ? "#FFF4CC" : "#FFE380")};
  color: ${({ theme }) => theme.style.black};
  border: none;
  cursor: pointer;

  @media (min-width: 769px) {
    position: sticky;
    width: 375px;
    bottom: 0px;
    transform: translate(0px, 20px);
  }
`;
