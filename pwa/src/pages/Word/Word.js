import React from "react";
import styled from "styled-components";
import variables from "../../styles/variables";

const Word = () => {
  return (
    <WordContainer>
      <MyInfoContainer>
        <MyInfo>내 정보</MyInfo>
      </MyInfoContainer>
      <Title>
        오늘은 ’기쁨’에 대한
        <br /> ○○님의 추억을 <br />
        들려주세요!
      </Title>
      <TodayWordContainer>
        <TodayWord>
          <TodayWordTitle>오늘의 단어</TodayWordTitle>
          <TodayWordContent>기쁨</TodayWordContent>
        </TodayWord>
      </TodayWordContainer>
      <MemoryButton>추억 남기기</MemoryButton>

      {/* MARK: modal */}
      <RecordModal>
        <ModalBackground />
        <ModalContents>
          <ModalTitle>
            어떤 방식으로 <br /> 추억을 남길까요?
          </ModalTitle>
          <ModalOption>
            <ModalOptionTitle>목소리로 남기기</ModalOptionTitle>
            <ModalOptionIcon>{">"}</ModalOptionIcon>
          </ModalOption>
          <ModalOption>
            <ModalOptionTitle>키보드로 남기기</ModalOptionTitle>
            <ModalOptionIcon>{">"}</ModalOptionIcon>
          </ModalOption>
          {/* MARK: cancel modal */}
          <ModalButtonBox>
            <ModalCancelButton>취소하기</ModalCancelButton>
          </ModalButtonBox>
        </ModalContents>
      </RecordModal>
    </WordContainer>
  );
};

export default Word;

const WordContainer = styled.div`
  position: relative;
`;

const MyInfoContainer = styled.div`
  ${variables.flex("row", "flex-end", "null")}
  ${variables.widthHeight("100%", "50px")}
  margin-top: 20px;
`;

const MyInfo = styled.button`
  ${variables.fontStyle("19px", 500)}
  background: none;
  border: none;
  cursor: pointer;
`;

const Title = styled.h1`
  ${variables.fontStyle("32px", 600)}
  margin-bottom: 60px;
  line-height: 42px;
`;

const TodayWordContainer = styled.div`
  ${variables.flex("column", "center", "center")}
`;

const TodayWord = styled.div`
  ${variables.flex("column", "center", "center")}
  ${variables.widthHeight("190px", "190px")}
  margin-bottom: 60px;
  background: ${({ theme }) => theme.style.lightgray};
  border-radius: 50%;
  gap: 15px;
`;

const TodayWordTitle = styled.h4`
  ${variables.fontStyle("24px", 500)}
  color: ${({ theme }) => theme.style.darkgray};
`;

const TodayWordContent = styled.h2`
  ${variables.fontStyle("52px", 700)}
`;

const MemoryButton = styled.button`
  ${variables.widthHeight("100%", "72px")}
  background: ${({ theme }) => theme.style.black};
  color: ${({ theme }) => theme.style.white};
  ${variables.fontStyle("22px", 600)}
  border-radius: 24px;
  cursor: pointer;
`;

/////////////// MARK: modal

const RecordModal = styled.div`
  ${variables.position("fixed", "0", "0", "null", "null")}
  ${variables.flex("row", "center", "center")}
  ${variables.widthHeight("100vw", "100vh")} ////
  /* @media (min-width: 769px) { */
    /* ${variables.widthHeight("426px", "90%")} */
    /* ${variables.position("relative", "0", "0", "null", "null")}; */
    /* background-size: 100% 100%;
    transform: translate(-50%, -50%); */
  /* } */
`;

const ModalBackground = styled.div`
  ${variables.position("absolute", "0", "null", "null", "0")}
  ${variables.widthHeight("100vw", "100vh")}
  background-color: rgba(0, 0, 0, 0.4);
  z-index: -1;
`;

const ModalContents = styled.div`
  ${variables.widthHeight("90%", "259px")}
  background: ${({ theme }) => theme.style.white};
  position: fixed;
  bottom: 85px;
  padding: 15px 40px;
  border-radius: 24px;

  @media (min-width: 769px) {
    ${variables.position("fixed", "null", "null", "null", "5%")}
  }
`;

const ModalTitle = styled.h1`
  ${variables.fontStyle("24px", 600)}
  margin: 20px 0 40px 0;
  line-height: 33px;
`;

const ModalOption = styled.div`
  ${variables.flex("row", "space-between", "center")}
  margin: 30px 0;
`;

const ModalOptionTitle = styled.h2`
  ${variables.fontStyle("22px", 500)}
  background: none;
  border: none;
`;

const ModalOptionIcon = styled.button`
  ${variables.fontStyle("24px", 500)}
  color: ${({ theme }) => theme.style.gray};
  background: none;
  border: none;
  cursor: pointer;
`;

const ModalButtonBox = styled.div`
  ${variables.flex("row", "center", "center")}
  gap: 10px;
`;

const ModalCancelButton = styled.button`
  ${variables.position("fixed", "null", "null", "32px", "null")}
  ${variables.fontStyle("19px", 500)}
  color: ${({ theme }) => theme.style.white};
  background: none;
  border: none;
  cursor: pointer;
`;
