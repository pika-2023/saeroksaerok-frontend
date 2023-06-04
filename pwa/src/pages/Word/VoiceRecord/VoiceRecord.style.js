import styled from "styled-components";
import variables from "../../../styles/variables";

export const VoiceRecordContainer = styled.div`
  ${variables.widthHeight("100vw", "100vh")}
  margin: calc(-20px);

  padding-top: 120px;
`;

// export const VoiceRecordContainer = styled.div`
//   ${variables.widthHeight("100vw", "100vh")}
//   display: grid;
//   grid-template-rows: repeat(8, 1fr);
//   margin: calc(-20px);
//   background: url("./images/bg_reminisce_before.png");
//   background-size: cover;

//   @media (min-width: 769px) {
//     ${variables.widthHeight("375px", "685px")}
//     margin: calc(-20px);
//     background: url("./images/bg_reminisce_before.png");
//     background-size: cover;
//   }
// `;

export const VoiceRecorder = styled.div`
  ${variables.widthHeight("100%", "300px")}
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  border: 1px solid #e2e2e2;
  border-radius: 24px;
  box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.05);
`;

export const ListeningText = styled.h2`
  ${variables.fontStyle("24px", 600)}
  grid-row: 2;
  padding-left: 20px;
  line-height: 33px;
`;

export const ListeningIconContainer = styled.div`
  ${variables.flex("row", "center", "center")}
  ${variables.widthHeight("100%", "100%")}
  grid-row: 4;
`;

export const ListeningIcon = styled.img`
  cursor: pointer;
`;

export const FinishRecordButton = styled.div`
  ${variables.fontStyle("22px", 600)}
  grid-row: 10;
  margin-top: -60px;
  padding: 20px 0;
  background: ${({ theme }) => theme.style.white};
  border-top: 1px solid #e2e2e2;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  text-align: center;
  z-index: 100;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  ${variables.flex("row", "center", "center")}
  ${variables.widthHeight("100%", "72px")}
  ${variables.fontStyle("19px", 500)}
  color: ${({ theme }) => theme.style.gray3};
  background: none;
  border: none;
  cursor: pointer;
`;
