import styled, { keyframes } from "styled-components";
import variables from "../../../styles/variables";

export const VoiceRecordContainer = styled.div`
  ${variables.widthHeight("100vw", "100vh")}
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  margin: calc(-20px);
  background: url("./images/bg_reminisce.png");
  background-size: cover;

  @media (min-width: 769px) {
    ${variables.widthHeight("375px", "685px")}
  }
`;

export const VoiceRecordTitle = styled.h2`
  ${variables.fontStyle("32px", 600)}
  grid-row: 4;
  text-align: center;
  letter-spacing: -0.03em;
`;

// MARK: fade in-out animation css
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const ListeningText = styled.h6`
  ${variables.fontStyle("24px", 500)}
  grid-row: 5;
  color: ${({ theme }) => theme.style.gray5};
  line-height: 35px;
  text-align: center;
  letter-spacing: -0.03em;
  animation: ${fadeIn} 3s infinite;
  ${({ isVisible }) => isVisible && "opacity: 1;"}
  opacity: 0;
`;

export const StartRecordButton = styled.button`
  ${variables.position("absolute", "null", "null", "15%", "50%")}
  ${variables.flex("row", "center", "center")}
  ${variables.widthHeight("90%", "68px")}
  ${variables.fontStyle("22px", 600)}
  grid-row: 7;
  background: ${({ theme }) => theme.style.yellow1};
  color: ${({ theme }) => theme.style.gray5};
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.03em;
  border: none;
  border-radius: 24px;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export const CancelButton = styled.button`
  ${variables.flex("row", "center", "center")}
  ${variables.fontStyle("19px", 500)}
  grid-row: 8;
  color: ${({ theme }) => theme.style.gray3};
  background: none;
  border: none;
  cursor: pointer;
`;
