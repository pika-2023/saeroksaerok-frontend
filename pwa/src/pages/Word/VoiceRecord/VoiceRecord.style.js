import styled, { css } from "styled-components";
import variables from "../../../styles/variables";
import animations from "../../../styles/animations";

export const VoiceRecordContainer = styled.div`
  ${variables.widthHeight("100vw", "100vh")}
  position: relative;
  margin: calc(-20px);
  background: url("./images/bg_reminisce_final.png") no-repeat;
  background-size: cover;
  overflow: hidden;

  @media (min-width: 769px) {
    ${variables.widthHeight("375px", "685px")}
  }
`;

export const VoiceRecordTitle = styled.h2`
  ${variables.position("absolute", "null", "null", "30%", "50%")};
  ${variables.flex("row", "center", "center")};
  ${variables.widthHeight("100vw", "100vh")};
  ${variables.fontStyle("30px", 600)};
  white-space: no-wrap;
  transform: translate(-50%, 50%);
  animation: ${animations.slideUpIntroText} 2s ease-in;
  opacity: 0;
`;

export const ListeningText = styled.h6`
  ${variables.position("absolute", "70%", "null", "null", "50%")}
  ${variables.fontStyle("24px", 500)}
  color: ${({ theme }) => theme.style.gray5};
  line-height: 35px;
  text-align: center;
  letter-spacing: -0.03em;
  white-space: nowrap;
  transform: translate(-50%, -50%);
  animation: ${animations.fadeIn} 3s infinite;
  ${({ isVisible }) => isVisible && "opacity: 1"}
  opacity: 1;
`;

export const StartRecordButton = styled.button`
  ${variables.position("absolute", "null", "null", "10%", "50%")}
  ${variables.flex("row", "center", "center")}
  ${variables.widthHeight("90%", "68px")}
  ${variables.fontStyle("22px", 600)}
  color: ${({ theme }) => theme.style.gray5};
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.03em;
  border: none;
  border-radius: 20px;
  transform: translate(-50%, -50%);
  animation: ${animations.recordAnimation} 3s ease-in-out;
  opacity: 1;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  ${variables.position("absolute", "null", "null", "5%", "50%")}
  ${variables.flex("row", "center", "center")}
  ${variables.fontStyle("19px", 500)}
  color: ${({ theme }) => theme.style.gray3};
  background: none;
  border: none;
  transform: translate(-50%, -50%);
  animation: ${animations.recordAnimation} 3s ease-in-out;
  opacity: 1;
  cursor: pointer;
`;

// MARK: Questions

export const QuestionText = styled.div`
  ${variables.position("absolute", "null", "null", "50%", "50%")};
  ${variables.flex("row", "center", "center")};
  ${variables.widthHeight("100vw", "100vh")};
  ${variables.fontStyle("30px", 600)};
  line-height: 45px;
  text-align: center;
  letter-spacing: -0.03em;
  white-space: no-wrap;
  animation: ${animations.slideUpQuestionTitle} 2s ease-in;
  transform: translate(-50%, 50%);
  opacity: 1;
`;

export const RecordBtn = styled.button`
  ${variables.position("absolute", "null", "null", "10%", "50%")}
  ${variables.flex("row", "center", "center")}
  ${variables.widthHeight("90%", "68px")}
  ${variables.fontStyle("22px", 600)}
  background: ${(props) => (props.value === "start" ? "#FFF4CC" : "#FFE380")};
  color: ${({ theme }) => theme.style.gray5};
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.03em;
  border: none;
  border-radius: 20px;
  transform: translate(-50%, -50%);
  opacity: 1;
  animation: ${(props) =>
    props.value === "start"
      ? css`
          ${animations.recordQuestionAnimation} 2.5s ease-in
        `
      : "none"};
  cursor: pointer;
`;

export const CancelBtn = styled.button`
  ${variables.position("absolute", "null", "null", "5%", "50%")}
  ${variables.flex("row", "center", "center")}
  ${variables.fontStyle("19px", 500)}
  color: ${({ theme }) => theme.style.gray3};
  background: none;
  border: none;
  transform: translate(-50%, -50%);
  opacity: 1;
  animation: ${(props) =>
    props.value === "start"
      ? css`
          ${animations.recordQuestionAnimation} 2.5s ease-in
        `
      : "none"};
  cursor: pointer;
`;
