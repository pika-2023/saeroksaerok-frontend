import React from "react";
import styled from "styled-components";
import variables from "../../styles/variables";

const Splash = ({ isSplashOpen, setIsSplashOpen }) => {
  return (
    <SplashContainer>
      <LogoIcon src="/images/saeroksaerok_logo_inapp.png" />
      <SplashTitle>떠오르는 우리 추억</SplashTitle>
    </SplashContainer>
  );
};

export default Splash;

const SplashContainer = styled.div`
  ${variables.position("absolute", 0, null, null, 0)}
  ${variables.flex("column", "center", "center")}
  ${variables.widthHeight("100vw", "100vh")}
  background-color: ${({ theme }) => theme.style.white};
  z-index: 100;
`;

const SplashTitle = styled.h1`
  ${variables.fontStyle("19px", 500)}
  color: ${({ theme }) => theme.style.gray4};
  line-height: 29px;
  text-align: center;
  letter-spacing: -0.03em;
`;

const LogoIcon = styled.img`
  width: 180px;
`;
