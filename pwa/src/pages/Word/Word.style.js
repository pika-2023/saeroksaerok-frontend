import styled from "styled-components";
import variables from "../../styles/variables";

// ---------- MARK: Word.js 첫 화면 ----------

export const WordContainer = styled.div`
  position: relative;
  height: 100%;
`;

export const MyInfoContainer = styled.div`
  ${variables.flex("row", "flex-end", "null")}
  ${variables.widthHeight("100%", "50px")}
  margin-top: 20px;
`;

export const MyInfo = styled.button`
  ${variables.fontStyle("19px", 500)}
  color: #2F2F2F;
  background: none;
  border: none;
  cursor: pointer;
`;

export const TodayWordContainer = styled.div`
  ${variables.position("absolute", "150px", "null", "null", "null")}
  ${variables.flex("column", "center", "center")}
  width: 100%;
`;

export const TodayWord = styled.div`
  ${variables.flex("column", "center", "center")}
  gap: 15px;
`;

export const TodayWordTitle = styled.h4`
  ${variables.fontStyle("24px", 500)};
  color: #7d7d7d;
`;

export const TodayWordContent = styled.img`
  width: 146px;
`;

export const MemoryGuideText = styled.h3`
  ${variables.position("absolute", "null", "null", "250px", "null")}
  ${variables.fontStyle("32px", 600)}
  width: 100%;
  line-height: 46px;
  text-align: center;
  letter-spacing: -0.03em;
  color: #2f2f2f;
`;

export const MemoryButton = styled.button`
  ${variables.position("absolute", "null", "null", "140px", "null")}
  ${variables.widthHeight("100%", "72px")}
  ${variables.fontStyle("22px", 600)}
  padding: 0px 113px;
  background: #ffe380;
  color: ${({ theme }) => theme.style.black};
  border: none;
  border-radius: 24px;
  white-space: nowrap;
  cursor: pointer;
`;

export const NavBar = styled.div`
  ${variables.position("fixed", null, null, 0, 0)}
  ${variables.widthHeight("100%", "104px")}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: ${({ theme }) => theme.style.white};
  border-top: 1px solid #e5e5e5;
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const NavButtonIcon = styled.img`
  ${variables.widthHeight("36px", "36px")}
`;

export const NabButtonText = styled.h4`
  ${variables.fontStyle("19px", 600)}
`;
