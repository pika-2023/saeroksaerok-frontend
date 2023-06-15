import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useStore from "../../../state/store";
import * as P from "./PictureResult.style";

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
    <P.PictureResultContainer>
      <P.PictureResultTitle>
        새록새록 떠오른
        <br />
        추억이에요
      </P.PictureResultTitle>
      <P.PictureResultImage src={pictureDiary} alt="추억 그림 이미지" />
      <P.PictureResultContent>
        <P.PictureResultContentTitle>{keyword}</P.PictureResultContentTitle>
        <P.PictureResultContentText>{textDiary}</P.PictureResultContentText>
      </P.PictureResultContent>
      <P.GradationBox></P.GradationBox>
      <P.ShareButton onClick={shareToFeed}>친구들과 공유하기</P.ShareButton>
    </P.PictureResultContainer>
  );
};

export default PictureResult;
