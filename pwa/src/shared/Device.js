import React from "react";
import styled from "styled-components";
import variables from "../styles/variables";

const Device = ({ children }) => {
  return (
    <div>
      <Background>
        <PhoneFrame>
          <WebViewLayout>{children}</WebViewLayout>
        </PhoneFrame>
      </Background>
    </div>
  );
};

export default Device;

const Background = styled.div`
  ${variables.widthHeight("100%", "100vh")}
`;

const PhoneFrame = styled.div`
  ${variables.widthHeight("100%", "100%")}
  /* TODO: background image 교체 필요 */

  @media (min-width: 769px) {
    ${variables.widthHeight("415px", "90%")}
    ${variables.position("relative", "50%", "null", "null", "70%")};
    background: url(images/saeroksaerok_frame.png);
    background-size: 100% 100%;
    transform: translate(-50%, -50%);

    @media (min-width: 1000px) {
      ${variables.widthHeight("415px", "90%")}
      ${variables.position("relative", "50%", "null", "null", "75%")};
      background: url(images/saeroksaerok_frame.png);
      background-size: 100% 100%;
      transform: translate(-50%, -50%);
    }
  }
`;

const WebViewLayout = styled.div`
  position: relative;
  padding: 20px;
  width: 375px;
  height: calc(100% - 43px);
  border-radius: 40px;
  background-color: ${(props) => props.theme.style.white};
  overflow: scroll;

  @media screen and (max-width: 768px) {
    ${variables.widthHeight("100%", "100%")}
    border-radius: 0px;
  }

  @media (min-width: 769px) {
    ${variables.widthHeight("375px", "97%")}

    width: 375px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
