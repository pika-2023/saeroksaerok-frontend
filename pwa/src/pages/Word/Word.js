import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./Word.style";
import Modal from "../../components/Modal/Modal";
import useStore from "../../state/store";

const Word = () => {
  const { isOpen, setIsOpen, modalData, keyword, setKeyword } = useStore(
    (state) => state
  );
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("accessToken");
  const randomWordUrl = "http://13.124.76.165:8080/diaries/keyword/draw";

  useEffect(() => {
    if (accessToken) {
      axios
        .get(randomWordUrl, {
          headers: {
            contentType: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          console.log("success", response.data);
          setKeyword(response.data.keyword);
        })
        .catch((error) => {
          console.log("error occured!", error);
        });
    }
  }, []);

  return (
    <S.WordContainer>
      <S.MyInfoContainer>
        <S.MyInfo>내 정보</S.MyInfo>
      </S.MyInfoContainer>

      <S.TodayWordContainer>
        <S.TodayWord>
          <S.TodayWordTitle>
            오늘의 단어 <br /> 🌼 {keyword}
          </S.TodayWordTitle>
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
