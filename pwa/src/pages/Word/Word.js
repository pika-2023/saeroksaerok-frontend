import React from "react";
import * as S from "./Word.style";
import Modal from "../../components/Modal/Modal";
import useStore from "../../state/store";

const Word = () => {
  const { isOpen, setIsOpen, modalData } = useStore((state) => state);

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
      <S.MemoryButton
        onClick={() => {
          setIsOpen(true);
        }}
      >
        추억 남기기
      </S.MemoryButton>

      {isOpen && <Modal setIsOpen={setIsOpen} modalData={modalData} />}
    </S.WordContainer>
  );
};

export default Word;
