import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Word.style";
import Modal from "../../components/Modal/Modal";
import useStore from "../../state/store";
import axios from "axios";

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
          {(function () {
            if (keyword === "가족")
              return <S.TodayWordContent src="/images/text_family.png" />;
            if (keyword === "친구")
              return <S.TodayWordContent src="/images/text_friend.png" />;
            if (keyword === "여행")
              return <S.TodayWordContent src="/icons/text_travel.png" />;
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
