import React from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../../state/store";
import styled from "styled-components";
import variables from "../../../styles/variables";

const PictureResult = () => {
  const { keyword, textDiary, pictureDiary } = useStore((state) => state);
  const navigate = useNavigate();

  return (
    <PictureResultContainer>
      <PictureResultTitle>○○님의 추억이에요!</PictureResultTitle>
      <PictureResultImage src={pictureDiary} alt="그림 결과" />
      <PictureResultContent>
        <PictureResultContentTitle>{keyword}</PictureResultContentTitle>
        <PictureResultContentText>{textDiary}</PictureResultContentText>
      </PictureResultContent>
      <ShareButton onClick={() => navigate("/feed")}>공유하기</ShareButton>
    </PictureResultContainer>
  );
};

export default PictureResult;

const PictureResultContainer = styled.div`
  display: grid;
  grid-auto-rows: 5%;
  padding-bottom: 100px;
  height: 100%;
`;

const PictureResultTitle = styled.h1`
  ${variables.fontStyle("32px", 600)}
  grid-row: 3;
`;

const PictureResultImage = styled.img`
  ${variables.flex("row", "center", "center")}
  ${variables.widthHeight("100%", "242px")}
  grid-row: 6;
`;

const PictureResultContent = styled.div`
  grid-row: 15;
`;

const PictureResultContentTitle = styled.h2`
  ${variables.fontStyle("24px", 600)}
  margin-bottom: 40px;
`;

const PictureResultContentText = styled.p`
  ${variables.widthHeight("100%", "120px")}
  ${variables.fontStyle("22px", 500)}
  line-height: 31px;
  letter-spacing: -0.04em;
  overflow: scroll;
`;

const ShareButton = styled.button`
  ${variables.position("fixed", "null", "null", "0", "0")}
  ${variables.widthHeight("100%", "82px")}
  ${variables.fontStyle("22px", 600)}
  background: ${({ theme }) => theme.style.black};
  color: ${({ theme }) => theme.style.white};
  border: none;
`;
