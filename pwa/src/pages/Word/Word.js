import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useStore from "../../state/store";
import * as S from "./Word.style";
import Modal from "../../components/Modal/Modal";

const Word = () => {
  const { isOpen, setIsOpen, keyword, setKeyword } = useStore((state) => state);
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
      <S.TodayWordTitle>오늘의 추억</S.TodayWordTitle>
      <S.MyInfoContainer>
        <S.MyInfo>내 정보</S.MyInfo>
      </S.MyInfoContainer>

      <S.TodayWordContainer>
        <S.TodayWord>
          {(function () {
            switch (keyword) {
              case "가족":
                return <S.TodayWordContent src="/images/text_family.png" />;

              case "친구":
                return <S.TodayWordContent src="/images/text_friend.png" />;

              case "여행":
                return <S.TodayWordContent src="/icons/text_travel.png" />;

              default:
                return <S.TodayWordContent src="/images/text_family.png" />;
            }
          })()}
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

      {isOpen && <Modal />}
      <S.NavBar>
        <S.NavButton onClick={() => navigate("/word")}>
          <S.NavButtonIcon
            src="/icons/icon_reminisce_on.png"
            alt="추억하기 icon"
          />
          <S.NabButtonText>추억하기</S.NabButtonText>
        </S.NavButton>
        <S.NavButton onClick={() => navigate("/feed")}>
          <S.NavButtonIcon src="/icons/icon_feed_off.png" alt="모아보기 icon" />
          <S.NabButtonText>모아보기</S.NabButtonText>
        </S.NavButton>
      </S.NavBar>
    </S.WordContainer>
  );
};

export default Word;
