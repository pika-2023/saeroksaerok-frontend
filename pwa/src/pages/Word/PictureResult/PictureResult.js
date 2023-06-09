import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useStore from "../../../state/store";
import styled from "styled-components";
import variables from "../../../styles/variables";

const PictureResult = () => {
  const { keyword, textDiary, pictureDiary } = useStore((state) => state);
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("accessToken");
  const shareApiUrl = "http://13.124.76.165:8080/diaries/share";

  const shareToFeed = () => {
    let data = {
      keyword: keyword,
      textDiary: textDiary,
      pictureDiary: pictureDiary,
    };

    if (accessToken) {
      axios
        .post(shareApiUrl, JSON.stringify(data), {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          navigate("/feed");
        })
        .catch((error) => {
          console.error("파일 공유 실패:", error);
        });
    } else {
      console.log("액세스 토큰이 존재하지 않습니다");
    }
  };

  return (
    <PictureResultContainer>
      <PictureResultTitle>
        새록새록 떠오른
        <br />
        추억이에요
      </PictureResultTitle>
      <PictureResultImage src={pictureDiary} alt="추억 그림 이미지" />
      <PictureResultContent>
        <PictureResultContentTitle>{keyword}</PictureResultContentTitle>
        <PictureResultContentText>{textDiary}</PictureResultContentText>
      </PictureResultContent>
      <GradationBox></GradationBox>
      <ShareButton onClick={shareToFeed}>친구들과 공유하기</ShareButton>
    </PictureResultContainer>
  );
};

export default PictureResult;

const PictureResultContainer = styled.div`
  ${variables.widthHeight("null", "100vh")}
  position: relative;
  display: grid;
  grid-auto-rows: 5%;
  margin: calc(-20px);
  padding: 20px;
  background: url("./images/bg_ai_image.png") no-repeat center;
  background-size: cover;
  overflow: hidden;

  @media (min-width: 769px) {
    ${variables.widthHeight("375px", "685px")}
  }
`;

const PictureResultTitle = styled.h1`
  ${variables.fontStyle("32px", 600)}
  grid-row: 3;
  line-height: 45px;
  letter-spacing: -0.03em;
`;

const PictureResultImage = styled.img`
  ${variables.flex("row", "center", "center")}
  ${variables.widthHeight("100%", "242px")}
  margin-top: 10px;
  grid-row: 6;
`;

const PictureResultContent = styled.div`
  grid-row: 14;
`;

const PictureResultContentTitle = styled.h2`
  ${variables.fontStyle("24px", 600)}
  margin-bottom: 40px;

  @media (min-width: 769px) {
    margin-top: 20px;
  }
`;

const PictureResultContentText = styled.p`
  ${variables.widthHeight("100%", "120px")}
  ${variables.fontStyle("22px", 500)}
  line-height: 31px;
  letter-spacing: -0.04em;
  overflow: scroll;
  word-break: keep-all;

  @media (min-width: 769px) {
    margin-top: -20px;
  }
`;

const GradationBox = styled.div`
  ${variables.position("absolute", "null", "null", "80px", "0")}
  ${variables.widthHeight("100%", "10%")}
  background: linear-gradient(
    180deg,
    #fff8e1 0%,
    rgba(255, 247, 217, 0) 100%,
    rgba(255, 248, 225, 0) 100%
  );
  transform: rotate(-180deg);
  z-index: 100;
`;

const ShareButton = styled.button`
  ${variables.position("fixed", "null", "null", "0", "0")}
  ${variables.widthHeight("100%", "82px")}
  ${variables.fontStyle("22px", 600)}
  background: ${({ theme }) => theme.style.yellow2};
  color: ${({ theme }) => theme.style.black};
  border: none;
  cursor: pointer;
`;
