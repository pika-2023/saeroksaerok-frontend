import styled from "styled-components";
import variables from "../../styles/variables";
import font from "../../styles/fontStyle";

/////////////// Signup.js ///////////////
export const SignupContainer = styled.div`
  ${variables.flex("column", "center", "center")}
  margin-bottom: 82px;
  padding-top: 25%;

  @media (min-width: 769px) {
    margin-bottom: 0px;
  }
`;

export const WelcomeContainer = styled.div`
  width: 100%;
  margin: -40px 0 40px 0;
`;

export const WelcomeTitle = styled.h1`
  ${font.t1}
  margin: 20px 0 40px 0;
  text-align: left;
  color: #212121;
`;

export const UploadProfileImg = styled.div`
  ${variables.flex("column", "flex-start", "center")}
  ${variables.widthHeight("147px", "auto")}
  ${font.t7}
  margin-bottom: 40px;
  color: ${({ theme }) => theme.style.gray3};
`;

export const BasicProfileImg = styled.img`
  ${variables.widthHeight("147px", "147px")}
  margin-bottom: 16px;
  border-radius: 50%;
`;

export const UploadMyProfileImg = styled.div`
  ${font.t7}
  width: 235px;
  line-height: 150%;
  color: ${({ theme }) => theme.style.gray4};
`;

export const SignupForm = styled.div`
  width: 100%;
`;

export const SignupFormContainer = styled.div`
  margin-bottom: 35px;
`;

export const SignupFormTitle = styled.div`
  ${font.t5}
  margin-bottom: 15px;
  color: ${({ theme }) => theme.style.gray5};
  text-align: left;
`;

export const SignupFormInput = styled.input`
  ${font.t7}
  margin-bottom: 10px;
  padding: 13px 16px;
  width: 100%;
  background: ${({ theme }) => theme.style.gray1};
  border: 1px solid #e5e5e5;
  border-radius: 12px;

  &::placeholder {
    color: ${({ theme }) => theme.style.gray3};
  }

  &:focus {
    border: 1.5px solid #ffc700;
    outline: none;
  }
`;

export const GoToLogin = styled.div`
  margin-top: 80px;
  white-space: nowrap;
`;

export const GoToLoginText = styled.span`
  ${font.t7}
  color: ${({ theme }) => theme.style.gray3};
`;

export const GoToLoginButton = styled.button`
  ${font.t7}
  color: ${({ theme }) => theme.style.gray5};
  background: none;
  border: none;
  cursor: pointer;
`;

export const SignupButton = styled.button`
  ${variables.position("fixed", "null", "null", "0", "0")}
  ${variables.widthHeight("100%", "82px")}
  ${font.t4}
  background: ${(props) => (props.value === 0 ? "#FFF4CC" : "#FFE380")};
  color: ${({ theme }) => theme.style.black};
  border: none;
  cursor: pointer;

  @media (min-width: 769px) {
    ${variables.position("sticky", null, null, 0, null)}
    width: 375px;
    transform: translate(0px, 130px);
  }
`;

//////////////// Login.js ///////////////
export const LoginContainer = styled.div`
  ${variables.flex("column", "center", "center")}
  padding-top: 25%;
`;

export const SaerokSaerokLogo = styled.img`
  ${variables.widthHeight("187px", "auto")}
  margin-bottom: 70px;
`;

export const LoginForm = styled.div`
  width: 90%;
`;

export const FormContainer = styled.div`
  margin-bottom: 20px;
`;

export const FormTitle = styled.div`
  ${font.t5}
  margin-bottom: 15px;
  color: ${({ theme }) => theme.style.gray5};
  text-align: left;
`;

export const FormInput = styled.input`
  ${font.t7}
  width: 100%;
  margin-bottom: 20px;
  padding: 13px 16px;
  background: ${({ theme }) => theme.style.gray1};
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  text-align: left;

  &::placeholder {
    color: ${({ theme }) => theme.style.gray3};
  }

  &:focus {
    border: 1.5px solid #ffc700;
    outline: none;
  }
`;

export const LoginButton = styled.button`
  ${variables.position("fixed", "null", "null", "0", "0")}
  ${variables.widthHeight("100%", "82px")}
  ${font.t4}
  background: ${({ theme }) => theme.style.yellow2};
  color: ${({ theme }) => theme.style.black};
  border: none;
  cursor: pointer;
`;
