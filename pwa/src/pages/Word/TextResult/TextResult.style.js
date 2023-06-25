import styled from "styled-components";
import variables from "../../../styles/variables";
import font from "../../../styles/fontStyle";

export const TextResultContainer = styled.div`
  ${variables.widthHeight("100vw", "100vh")}
  position: relative;
  display: grid;
  grid-auto-rows: 5%;
  margin: calc(-20px);
  padding: 20px;
  background: url("./images/bg_speach_to_text.png") no-repeat;
  background-size: cover;
  overflow: hidden;

  @media (min-width: 769px) {
    ${variables.widthHeight("375px", "685px")}
  }
`;

export const TextResultTitle = styled.h1`
  ${font.t1}
  grid-row: 3;
  text-align: left;
`;

export const TextResultContent = styled.div`
  grid-row: 7;
`;

export const TextResultContentTitle = styled.h2`
  ${font.t2}
  margin-bottom: 40px;
`;

export const TextResultContentText = styled.p`
  ${variables.widthHeight("100%", "30vh")}
  ${font.t5}
  color: ${({ theme }) => theme.style.gray5};
  text-align: left;
  word-break: keep-all;
  overflow: scroll;
`;

export const GradationBox = styled.div`
  ${variables.position("absolute", "null", "null", "0", "0")}
  ${variables.widthHeight("100%", "400px")}
  background: linear-gradient(
    180deg,
    #ffffff 60.17%,
    rgba(255, 255, 255, 0) 98.19%
  );
  transform: rotate(-180deg);
`;

export const ModifyButton = styled.button`
  ${variables.position("absolute", "null", "null", "5%", "50%")}
  ${variables.flex("row", "center", "center")}
  ${font.t7}
  color: ${({ theme }) => theme.style.gray4};
  background: none;
  border: none;
  transform: translate(-50%, -50%);
  z-index: 100;
  cursor: pointer;
`;
