import styled from "styled-components";
import variables from "../../../styles/variables";

export const PictureResultContainer = styled.div`
  ${variables.widthHeight("null", "100vh")}
  position: relative;
  display: grid;
  grid-auto-rows: 5%;
  margin: calc(-20px);
  padding: 20px;
  background: url("./images/bg_ai_image.png") no-repeat center;
  background-size: cover;
  overflow: hidden;

  @media (min-width: 769px) {
    ${variables.widthHeight("375px", "685px")}
  }
`;

export const PictureResultTitle = styled.h1`
  ${variables.fontStyle("32px", 600)}
  grid-row: 3;
  line-height: 45px;
  letter-spacing: -0.03em;
`;

export const PictureResultImage = styled.img`
  ${variables.flex("row", "center", "center")}
  ${variables.widthHeight("100%", "242px")}
  margin-top: 10px;
  grid-row: 6;
`;

export const PictureResultContent = styled.div`
  grid-row: 14;
`;

export const PictureResultContentTitle = styled.h2`
  ${variables.fontStyle("24px", 600)}
  margin-bottom: 40px;

  @media (min-width: 769px) {
    margin-top: 20px;
  }
`;

export const PictureResultContentText = styled.p`
  ${variables.widthHeight("100%", "120px")}
  ${variables.fontStyle("22px", 500)}
  line-height: 31px;
  letter-spacing: -0.04em;
  overflow: scroll;
  word-break: keep-all;

  @media (min-width: 769px) {
    margin-top: -20px;
  }
`;

export const GradationBox = styled.div`
  ${variables.position("absolute", "null", "null", "80px", "0")}
  ${variables.widthHeight("100%", "10%")}
  background: linear-gradient(
    180deg,
    #fff8e1 0%,
    rgba(255, 247, 217, 0) 100%,
    rgba(255, 248, 225, 0) 100%
  );
  transform: rotate(-180deg);
  z-index: 100;
`;

export const ShareButton = styled.button`
  ${variables.position("fixed", "null", "null", "0", "0")}
  ${variables.widthHeight("100%", "82px")}
  ${variables.fontStyle("22px", 600)}
  background: ${({ theme }) => theme.style.yellow2};
  color: ${({ theme }) => theme.style.black};
  border: none;
  cursor: pointer;
`;
