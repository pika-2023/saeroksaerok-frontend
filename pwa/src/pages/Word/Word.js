import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Word.style";
import Modal from "../../components/Modal/Modal";
import useStore from "../../state/store";

const Word = () => {
  const { isOpen, setIsOpen, modalData } = useStore((state) => state);
  const navigate = useNavigate();

  return (
    <S.WordContainer>
      <S.MyInfoContainer>
        <S.MyInfo>내 정보</S.MyInfo>
      </S.MyInfoContainer>

      <S.TodayWordContainer>
        <S.TodayWord>
          <S.TodayWordTitle>오늘의 단어</S.TodayWordTitle>
          <S.TodayWordContent src="/icons/text_family.png" />
        </S.TodayWord>
      </S.TodayWordContainer>
      <S.MemoryGuideText>
        소중한 추억을 <br /> 들려주세요
      </S.MemoryGuideText>
      <S.MemoryButton
        onClick={() => {
          setIsOpen(true);
        }}
      >
        추억하러 가기
      </S.MemoryButton>

      {isOpen && <Modal setIsOpen={setIsOpen} modalData={modalData} />}
      <S.NavBar>
        <S.NavButton onClick={() => navigate("/word")}>
          <S.NavButtonIcon
            src="/icons/icon_reminisce_on.png"
            alt="추억하기 아이콘"
          />
          <S.NabButtonText>추억하기</S.NabButtonText>
        </S.NavButton>
        <S.NavButton onClick={() => navigate("/feed")}>
          <S.NavButtonIcon
            src="/icons/icon_feed_off.png"
            alt="모아보기 아이콘"
          />
          <S.NabButtonText>모아보기</S.NabButtonText>
        </S.NavButton>
      </S.NavBar>
    </S.WordContainer>
  );
};

export default Word;
