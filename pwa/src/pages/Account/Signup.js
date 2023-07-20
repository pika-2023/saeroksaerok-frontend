import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as A from "./Account.style";
import Splash from "../../components/Splash/Splash";
import useStore from "../../state/store";

const Signup = () => {
  const { isSplashOpen, setIsSplashOpen } = useStore();
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
      setBasicProfileImg("./images/saeroksaerok_profile.png");
      return;
    }
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

  useEffect(() => {
    setTimeout(function () {
      setIsSplashOpen(false);
    }, 3000);
  }, []);

  return (
    <>
      {isSplashOpen && <Splash />}

      {!signup && (
        <A.SignupContainer>
          <A.WelcomeContainer>
            <A.WelcomeTitle>
              새록새록에 오신 것을 <br />
              환영해요
            </A.WelcomeTitle>
          </A.WelcomeContainer>
          <A.SignupForm>
            <A.SignupFormContainer>
              <A.SignupFormTitle>이메일</A.SignupFormTitle>
              <A.FormInput
                type="email"
                value={email}
                name="email"
                placeholder="이메일을 입력해주세요"
                onChange={onChangeUserInfo}
              />
            </A.SignupFormContainer>
            <A.SignupFormContainer>
              <A.SignupFormTitle>비밀번호</A.SignupFormTitle>
              <A.FormInput
                type="password"
                value={password}
                name="password"
                placeholder="비밀번호를 입력해주세요"
                onChange={onChangeUserInfo}
              />
              <A.FormInput
                type="password"
                value={checkPassword}
                name="checkPassword"
                placeholder="비밀번호를 다시 한 번 입력해주세요"
                onChange={onChangeUserInfo}
              />
            </A.SignupFormContainer>
          </A.SignupForm>
          <A.GoToLogin>
            <A.GoToLoginText>이미 계정이 있으신가요?</A.GoToLoginText>
            <A.GoToLoginButton onClick={() => navigate("/login")}>
              로그인
            </A.GoToLoginButton>
          </A.GoToLogin>
          <A.SignupButton onClick={handleSignup} value={0}>
            다음으로
          </A.SignupButton>
        </A.SignupContainer>
      )}
      {signup && (
        <A.SignupContainer>
          <A.UploadProfileImg>
            <A.BasicProfileImg
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
            <A.UploadMyProfileImg>
              나를 나타내는 사진을 올려보세요
            </A.UploadMyProfileImg>
          </A.UploadProfileImg>
          <A.SignupForm>
            <A.SignupFormContainer>
              <A.FormTitle>이름</A.FormTitle>
              <A.FormInput
                type="text"
                name="nickname"
                placeholder="이름을 입력해주세요"
                value={nickname}
                onChange={onChangeUserInfo}
              />
            </A.SignupFormContainer>
          </A.SignupForm>

          <A.SignupButton onClick={createProfile} value={1}>
            회원가입하기
          </A.SignupButton>
        </A.SignupContainer>
      )}
    </>
  );
};

export default Signup;
