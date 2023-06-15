import styled from "styled-components";
import variables from "../../styles/variables";

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
  ${variables.fontStyle("22px", 500)}
  margin-bottom: 15px;
  color: ${({ theme }) => theme.style.gray5};
  letter-spacing: -0.03em;
`;

export const FormInput = styled.input`
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

export const LoginButton = styled.button`
  ${variables.position("fixed", "null", "null", "0", "0")}
  ${variables.widthHeight("100%", "82px")}
  ${variables.fontStyle("22px", 600)}
  background: ${({ theme }) => theme.style.yellow2};
  color: ${({ theme }) => theme.style.black};
  border: none;
  cursor: pointer;
`;

/////////////// Signup.js ///////////////
export const SignupContainer = styled.div`
  ${variables.flex("column", "center", "center")}
  padding-top: 25%;
  margin-bottom: 82px;

  @media (min-width: 769px) {
    margin-bottom: 0px;
  }
`;

export const WelcomeContainer = styled.div`
  width: 100%;
  margin: -40px 0 40px 0;
`;

export const WelcomeTitle = styled.h1`
  ${variables.fontStyle("32px", 600)}
  margin: 20px 0 40px 0;
  line-height: 45px;
  letter-spacing: -0.03em;
  color: #212121;
`;

export const UploadProfileImg = styled.div`
  ${variables.flex("column", "flex-start", "center")}
  ${variables.widthHeight("147px", "auto")}
  ${variables.fontStyle("19px", 500)}
  margin-bottom: 40px;
  color: ${({ theme }) => theme.style.gray3};
`;

export const BasicProfileImg = styled.img`
  ${variables.widthHeight("147px", "147px")}
  margin-bottom: 16px;
  border-radius: 50%;
`;

export const UploadMyProfileImg = styled.div`
  ${variables.fontStyle("19px", 500)}
  width: 235px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.style.gray4};
`;

export const SignupForm = styled.div`
  width: 100%;
`;

export const SignupFormContainer = styled.div`
  margin-bottom: 35px;
`;

export const SignupFormTitle = styled.div`
  ${variables.fontStyle("22px", 500)}
  margin-bottom: 15px;
  color: ${({ theme }) => theme.style.gray5};
  letter-spacing: -0.03em;
`;

export const SignupFormInput = styled.input`
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

export const GoToLogin = styled.div`
  margin-top: 80px;
  white-space: nowrap;
`;

export const GoToLoginText = styled.span`
  ${variables.fontStyle("19px", 500)}
  line-height: 29px;
  text-align: center;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.style.gray3};
`;

export const GoToLoginButton = styled.button`
  ${variables.fontStyle("19px", 500)}
  line-height: 29px;
  text-align: center;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.style.gray5};
  background: none;
  border: none;
  cursor: pointer;
`;

export const SignupButton = styled.button`
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
