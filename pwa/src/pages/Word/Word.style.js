import styled from "styled-components";
import variables from "../../styles/variables";
import font from "../../styles/fontStyle";

export const WordContainer = styled.div`
  ${variables.widthHeight("null", "100vh")}
  position: relative;
  margin: calc(-20px);
  background: url("/images/bg_reminisce_final.png") no-repeat center;
  background-size: cover;
  overflow: hidden;

  @media (min-width: 769px) {
    ${variables.widthHeight("375px", "685px")}
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
  ${variables.position("relative", "150px", "null", "null", "null")}
  ${variables.flex("column", "center", "center")}
`;

export const TodayWord = styled.div`
  ${variables.flex("column", "center", "center")}
`;

export const TodayWordTitle = styled.h4`
  ${variables.position("absolute", "212px", null, null, "50%")}
  ${variables.widthHeight("98px", "32px")}
  ${font.t5}
  margin-bottom: 20px;
  color: #7d7d7d;
  transform: translate(-50%, -50%);
`;

export const TodayWordContent = styled.img`
  ${variables.position("absolute", "22px", null, null, "50%")}
  width: 146px;
  transform: translate(-50%, 0%);
`;

export const MemoryGuideText = styled.h3`
  ${variables.position("absolute", "null", "null", "250px", "null")}
  ${font.t1}
  width: 100%;
  color: #2f2f2f;
  white-space: nowrap;
`;

export const MemoryButton = styled.button`
  ${variables.position("absolute", "null", "null", "100px", "50%")}
  ${variables.flex("row", "center", "center")}
  ${variables.widthHeight("90%", "72px")}
  ${variables.fontStyle("22px", 600)}
  background: #ffe380;
  color: ${({ theme }) => theme.style.black};
  border: none;
  border-radius: 20px;
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
