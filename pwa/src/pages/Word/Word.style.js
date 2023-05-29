import styled from "styled-components";
import variables from "../../styles/variables";

// ---------- Word.js 첫 화면 ----------

export const WordContainer = styled.div`
  position: relative;
  height: 80%;
`;

export const MyInfoContainer = styled.div`
  ${variables.flex("row", "flex-end", "null")}
  ${variables.widthHeight("100%", "50px")}
  margin-top: 20px;
`;

export const MyInfo = styled.button`
  ${variables.fontStyle("19px", 500)}
  background: none;
  border: none;
  cursor: pointer;
`;

export const Title = styled.h1`
  ${variables.fontStyle("32px", 600)}
  margin-bottom: 60px;
  line-height: 42px;
`;

export const TodayWordContainer = styled.div`
  ${variables.flex("column", "center", "center")}
`;

export const TodayWord = styled.div`
  ${variables.flex("column", "center", "center")}
  ${variables.widthHeight("190px", "190px")}
  margin-bottom: 60px;
  background: ${({ theme }) => theme.style.lightgray};
  border-radius: 50%;
  gap: 15px;
`;

export const TodayWordTitle = styled.h4`
  ${variables.fontStyle("24px", 500)}
  color: ${({ theme }) => theme.style.darkgray};
`;

export const TodayWordContent = styled.h2`
  ${variables.fontStyle("52px", 700)}
`;

export const MemoryButton = styled.button`
  ${variables.position("absolute", "null", "null", "0", "null")}
  ${variables.widthHeight("100%", "72px")}
  ${variables.fontStyle("22px", 600)}
  background: ${({ theme }) => theme.style.black};
  color: ${({ theme }) => theme.style.white};
  border-radius: 24px;
  cursor: pointer;
`;

// ---------- 추억 기록 방식 modal ----------

export const RecordModal = styled.div`
  ${variables.position("fixed", "0", "0", "null", "null")}
  ${variables.flex("row", "center", "center")}
  ${variables.widthHeight("100%", "100%")}
  display: none;
`;

export const ModalBackground = styled.div`
  ${variables.position("absolute", "0", "null", "null", "0")}
  ${variables.widthHeight("100vw", "100vh")}
  background-color: rgba(0, 0, 0, 0.4);
  z-index: -1;
`;

export const ModalContents = styled.div`
  ${variables.position("absolute", "null", "null", "85px", "null")}
  ${variables.widthHeight("100%", "259px")}
  padding: 15px 40px;
  background: ${({ theme }) => theme.style.white};
  border-radius: 24px;

  @media (min-width: 769px) {
    ${variables.position("fixed", "null", "null", "null", "5%")}
  }
`;

export const ModalTitle = styled.h1`
  ${variables.fontStyle("24px", 600)}
  margin: 20px 0 40px 0;
  line-height: 33px;
`;

export const ModalOption = styled.div`
  ${variables.flex("row", "space-between", "center")}
  margin: 30px 0;
  cursor: pointer;
`;

export const ModalOptionTitle = styled.h2`
  ${variables.fontStyle("22px", 500)}
  background: none;
  border: none;
`;

export const ModalOptionIcon = styled.button`
  ${variables.fontStyle("24px", 500)}
  color: ${({ theme }) => theme.style.gray};
  background: none;
  border: none;
  cursor: pointer;
`;

export const ModalButtonBox = styled.div`
  ${variables.flex("row", "center", "center")}
  gap: 10px;
`;

export const ModalCancelButton = styled.button`
  ${variables.position("fixed", "null", "null", "32px", "null")}
  ${variables.fontStyle("19px", 500)}
  color: ${({ theme }) => theme.style.white};
  background: none;
  border: none;
  cursor: pointer;
`;
