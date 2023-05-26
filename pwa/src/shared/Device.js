import React from "react";
import styled from "styled-components";

const Device = ({ children }) => {
  return (
    <div>
      <BackGround>
        <PhoneFrame>
          <WebViewLayout>{children}</WebViewLayout>
        </PhoneFrame>
      </BackGround>
    </div>
  );
};

export default Device;

const BackGround = styled.div`
  width: 100%;
  height: 100vh;
`;

const PhoneFrame = styled.div`
  width: 100%;
  height: 100%;
  background: url(images/web_phone.webp);
  @media (min-width: 769px) {
    width: 426px;
    height: 90%;
    background-size: 100% 100%;
    position: relative;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
    @media (min-width: 1000px) {
      width: 426px;
      height: 90%;
      background-size: 100% 100%;
      position: relative;
      top: 50%;
      left: 75%;
      transform: translate(-50%, -50%);
    }
  }
`;

const WebViewLayout = styled.div`
  width: 375px;
  height: calc(100% - 43px);
  position: relative;
  border-radius: 40px;
  background-color: #ffffff;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }
  @media (min-width: 769px) {
    width: 375px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
