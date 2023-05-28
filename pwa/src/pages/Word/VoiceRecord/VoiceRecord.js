import React from "react";
import styled from "styled-components";
import * as S from "../Word.style";
import ListeningIconImg from "../../../assets/images/listeningIcon.png";
import variables from "../../../styles/variables";

const VoiceRecord = () => {
  return (
    <>
      {/* 오늘의 단어 */}
      <S.TodayWordContainer style={{ marginTop: "150px" }}>
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
      <S.RecordModal style={{ zIndex: "-1" }}>
        <S.ModalContents>
          <S.ModalButtonBox>
            <S.ModalCancelButton>취소하기</S.ModalCancelButton>
          </S.ModalButtonBox>
        </S.ModalContents>
      </S.RecordModal>
    </>
  );
};

export default VoiceRecord;

const VoiceRecorder = styled.div`
  ${variables.widthHeight("100%", "298px")}
  padding: 25px 20px;
  border: 1px solid #e2e2e2;
  border-radius: 24px;
  box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.05);
`;

const ListeningText = styled.h2`
  ${variables.fontStyle("24px", 600)}
  line-height: 33px;
`;

const ListeningIconContainer = styled.div`
  ${variables.flex("row", "center", "center")}
  ${variables.widthHeight("100%", "100%")}
  position: relative;
  margin-top: -40px;
`;

const ListeningIcon = styled.img``;

const FinishRecordButton = styled.div`
  ${variables.flex("row", "center", "center")}
  ${variables.widthHeight("100%", "68px")}
  ${variables.fontStyle("22px", 600)}
  background: ${({ theme }) => theme.style.white};
  border: 1px solid #e2e2e2;
  border-radius: 0 0 24px 24px;
  /* position: absolute;
  left: 0;
  bottom: 90px; */
`;
