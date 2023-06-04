import styled from "styled-components";
import variables from "../../styles/variables";

export const RecordModal = styled.div`
  ${variables.position("fixed", "0", "0", "null", "null")}
  ${variables.flex("row", "center", "center")}
  ${variables.widthHeight("100%", "100%")}
  white-space: nowrap;
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
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
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

export const ModalOptionIcon = styled.image`
  grid-row: 2/3;
  cursor: pointer;
`;

export const ModalOption = styled.div`
  ${variables.flex("column", "space-between", "center")}
  ${variables.widthHeight("142px", "100%")}
  grid-row: 3/3;
  margin: 30px 0;
  gap: 20px;
  cursor: pointer;
`;

export const ModalOptionTitle = styled.h2`
  ${variables.fontStyle("22px", 500)}
  background: none;
  border: none;
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
