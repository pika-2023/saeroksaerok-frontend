import styled, { keyframes } from "styled-components";
import variables from "../../../styles/variables";

export const VoiceRecordContainer = styled.div`
  ${variables.widthHeight("100vw", "100vh")}
  position: relative;
  margin: calc(-20px);
  background: url("./images/bg_reminisce.png") no-repeat;
  background-size: cover;
  overflow: hidden;

  @media (min-width: 769px) {
    ${variables.widthHeight("375px", "685px")}
  }
`;

export const VoiceRecordTitle = styled.h2`
  ${variables.fontStyle("32px", 600)}
  ${variables.position("absolute", "42%", "null", "null", "50%")}
  text-align: center;
  letter-spacing: -0.03em;
  white-space: nowrap;
  transform: translate(-50%, -50%);
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
  ${variables.position("absolute", "70%", "null", "null", "50%")}
  ${variables.fontStyle("24px", 500)}
  color: ${({ theme }) => theme.style.gray5};
  line-height: 35px;
  text-align: center;
  letter-spacing: -0.03em;
  transform: translate(-50%, -50%);
  animation: ${fadeIn} 3s infinite;
  ${({ isVisible }) => isVisible && "opacity: 1;"}
  white-space: nowrap;
  opacity: 0;
`;

export const StartRecordButton = styled.button`
  ${variables.position("absolute", "null", "null", "10%", "50%")}
  ${variables.flex("row", "center", "center")}
  ${variables.widthHeight("90%", "68px")}
  ${variables.fontStyle("22px", 600)}
  background: ${(props) => (props.value === 0 ? "#FFF4CC" : "#FFE380")};
  color: ${({ theme }) => theme.style.gray5};
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.03em;
  border: none;
  border-radius: 20px;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

// export const FinishRecordButton = styled.div`
//   ${variables.fontStyle("22px", 600)}
//   grid-row: 7;
//   text-align: center;
//   cursor: pointer;
// `;

export const CancelButton = styled.button`
  ${variables.position("absolute", "null", "null", "5%", "50%")}
  ${variables.flex("row", "center", "center")}
  ${variables.fontStyle("19px", 500)}
  color: ${({ theme }) => theme.style.gray3};
  background: none;
  border: none;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;
