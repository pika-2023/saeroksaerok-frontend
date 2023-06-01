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
  background: ${({ theme }) => theme.style.gray1};
  border-radius: 50%;
  gap: 15px;
`;

export const TodayWordTitle = styled.h4`
  ${variables.fontStyle("24px", 500)}
  color: ${({ theme }) => theme.style.gray3};
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
