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
  grid-row: 2;
`;

export const TodayWordContent = styled.img`
  width: 146px;
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
