import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Word.style";

const Word = () => {
  const navigate = useNavigate();

  const goToVoiceRecord = () => {
    navigate("/voiceRecord");
  };

  return (
    <S.WordContainer>
      <S.MyInfoContainer>
        <S.MyInfo>내 정보</S.MyInfo>
      </S.MyInfoContainer>
      <S.Title>
        오늘은 ’기쁨’에 대한
        <br /> ○○님의 추억을 <br />
        들려주세요!
      </S.Title>
      <S.TodayWordContainer>
        <S.TodayWord>
          <S.TodayWordTitle>오늘의 단어</S.TodayWordTitle>
          <S.TodayWordContent>기쁨</S.TodayWordContent>
        </S.TodayWord>
      </S.TodayWordContainer>
      <S.MemoryButton>추억 남기기</S.MemoryButton>

      {/* MARK: modal */}
      <S.RecordModal>
        <S.ModalBackground />
        <S.ModalContents>
          <S.ModalTitle>
            어떤 방식으로 <br /> 추억을 남길까요?
          </S.ModalTitle>
          <S.ModalOption onClick={goToVoiceRecord}>
            <S.ModalOptionTitle>목소리로 남기기</S.ModalOptionTitle>
            <S.ModalOptionIcon>{">"}</S.ModalOptionIcon>
          </S.ModalOption>
          <S.ModalOption>
            <S.ModalOptionTitle>키보드로 남기기</S.ModalOptionTitle>
            <S.ModalOptionIcon>{">"}</S.ModalOptionIcon>
          </S.ModalOption>
          {/* MARK: cancel modal */}
          <S.ModalButtonBox>
            <S.ModalCancelButton>취소하기</S.ModalCancelButton>
          </S.ModalButtonBox>
        </S.ModalContents>
      </S.RecordModal>
    </S.WordContainer>
  );
};

export default Word;
