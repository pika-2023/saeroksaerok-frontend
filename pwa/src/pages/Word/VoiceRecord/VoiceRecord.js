import React from "react";
import styled from "styled-components";
import * as S from "../Word.style";
import ListeningIconImg from "../../../assets/images/listeningIcon.png";
import variables from "../../../styles/variables";

const VoiceRecord = () => {
  return (
    <VoiceRecordContainer>
      {/* 오늘의 단어 */}
      <S.TodayWordContainer>
        <S.TodayWord>
          <S.TodayWordTitle>오늘의 단어</S.TodayWordTitle>
          <S.TodayWordContent>기쁨</S.TodayWordContent>
        </S.TodayWord>
      </S.TodayWordContainer>

      {/* 녹음중 화면 */}
      <VoiceRecorder>
        <ListeningText>
          ○○님의 말씀을 <br />
          듣고 있어요
        </ListeningText>
        <ListeningIconContainer>
          <ListeningIcon src={ListeningIconImg} />
        </ListeningIconContainer>
        <FinishRecordButton>말 끝맺기</FinishRecordButton>
      </VoiceRecorder>

      {/* 취소하기 */}
      <CancelButton>취소하기</CancelButton>
    </VoiceRecordContainer>
  );
};

export default VoiceRecord;

const VoiceRecordContainer = styled.div`
  padding-top: 120px;
`;

const VoiceRecorder = styled.div`
  ${variables.widthHeight("100%", "300px")}
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  border: 1px solid #e2e2e2;
  border-radius: 24px;
  box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.05);
`;

const ListeningText = styled.h2`
  ${variables.fontStyle("24px", 600)}
  grid-row: 2;
  padding-left: 20px;
  line-height: 33px;
`;

const ListeningIconContainer = styled.div`
  ${variables.flex("row", "center", "center")}
  ${variables.widthHeight("100%", "100%")}
  grid-row: 4;
`;

const ListeningIcon = styled.img``;

const FinishRecordButton = styled.div`
  ${variables.fontStyle("22px", 600)}
  grid-row: 10;
  margin-top: -60px;
  padding: 20px 0;
  border-top: 1px solid #e2e2e2;
  text-align: center;
  z-index: 100;
  cursor: pointer;
`;

const CancelButton = styled.button`
  ${variables.flex("row", "center", "center")}
  ${variables.widthHeight("100%", "72px")}
  ${variables.fontStyle("19px", 500)}
  color: ${({ theme }) => theme.style.darkgray};
  background: none;
  border: none;
  cursor: pointer;
`;
