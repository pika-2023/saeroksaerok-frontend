import React from "react";
import styled from "styled-components";

const Device = ({ children }) => {
  return (
    <div>
      <PhoneFrame>
        <WebViewLayout>{children}</WebViewLayout>
      </PhoneFrame>
    </div>
  );
};

export default Device;

const PhoneFrame = styled.div`
  width: 426px;
  height: 92%;
  min-height: 750px;
  position: fixed;
  right: 10%;
  top: 50%;
  transform: translate(0%, -50%);

  background-size: 100% 100%;
`;
const WebViewLayout = styled.div`
  max-width: 375px;
  height: calc(100% - 43px);
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 40px;
  background-color: #bebebe;
  overflow: hidden;
`;
