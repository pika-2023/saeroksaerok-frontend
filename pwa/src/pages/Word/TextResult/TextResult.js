import React from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../../state/store";
import styled from "styled-components";
import variables from "../../../styles/variables";

const TextResult = () => {
  const { keyword, textDiary } = useStore((state) => state);
  const navigate = useNavigate();

  return (
    <TextResultContainer>
      <TextResultTitle>추억을 글로 적었어요</TextResultTitle>
      <TextResultContent>
        <TextResultContentTitle>{keyword}</TextResultContentTitle>
        <TextResultContentText>{textDiary}</TextResultContentText>
      </TextResultContent>
      <ShareButton onClick={() => navigate("/pictureResult")}>
        추억 그리기
      </ShareButton>
      {/* TODO: 추후 수정하기 버튼이 들어갈 자리입니다.
        <ShareButton>추억 수정하기</ShareButton> 
      */}
    </TextResultContainer>
  );
};

export default TextResult;

const TextResultContainer = styled.div`
  display: grid;
  grid-auto-rows: 5%;
  padding-bottom: 100px;
  height: 100%;
`;

const TextResultTitle = styled.h1`
  ${variables.fontStyle("32px", 600)}
  grid-row: 3;
`;

const TextResultContent = styled.div`
  grid-row: 15;
`;

const TextResultContentTitle = styled.h2`
  ${variables.fontStyle("24px", 600)}
  margin-bottom: 40px;
`;

const TextResultContentText = styled.p`
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
