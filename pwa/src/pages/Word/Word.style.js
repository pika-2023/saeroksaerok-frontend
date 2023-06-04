import styled from "styled-components";
import variables from "../../styles/variables";

// ---------- MARK: Word.js 첫 화면 ----------

export const WordContainer = styled.div`
  ${variables.widthHeight("null", "100vh")}
  position: relative;
  margin: calc(-20px);
  background: url("./images/bg_reminisce_home.png") no-repeat center;
  background-size: cover;
  overflow: hidden;

  @media (min-width: 769px) {
    ${variables.widthHeight("375px", "685px")}
    margin: calc(-20px);
    background: url("./images/bg_reminisce_home.png");
    background-size: cover;
    overflow: hidden;
  }
`;

export const MyInfoContainer = styled.div`
  ${variables.flex("row", "flex-end", "null")}
  ${variables.widthHeight("100%", "50px")}
  margin-top: 20px;
  padding-right: 20px;
  opacity: 85%;
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
`;

export const TodayWordTitle = styled.h4`
  ${variables.fontStyle("24px", 500)};
  margin-bottom: 20px;
  color: #7d7d7d;
  line-height: 32px;
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
  ${variables.position("absolute", "null", "null", "100px", "50%")}
  ${variables.flex("row", "center", "center")}
  ${variables.widthHeight("90%", "72px")}
  ${variables.fontStyle("22px", 600)}
  background: #ffe380;
  color: ${({ theme }) => theme.style.black};
  border: none;
  border-radius: 24px;
  transform: translate(-50%, -50%);
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
