import React from "react";
import styled from "styled-components";
import variables from "../../../styles/variables";

const Result = () => {
  return (
    <ResultContainer>
      <ResultTitle>○○님의 추억이에요!</ResultTitle>
      <ResultImage>이미지</ResultImage>
      <ResultContent>
        <ResultContentTitle>기쁨</ResultContentTitle>
        <ResultContentText>
          엄마랑 함께 봄 소풍을 갔던 기억이 제일 먼저 나네, 그때는 좋았지 그때는
          말야 봄인데 미세먼지가 어딨어 아주 파아란 하늘에! 말야 봄인데
          미세먼지가 어딨어 아주 파아란 하늘에!말야 봄인데 미세먼지가 어딨어
          아주 파아란 하늘에!
        </ResultContentText>
      </ResultContent>
      <ShareButton>공유하기</ShareButton>
    </ResultContainer>
  );
};

export default Result;

const ResultContainer = styled.div`
  display: grid;
  grid-auto-rows: 5%;
  padding-bottom: 100px;
  height: 100%;
`;

const ResultTitle = styled.h1`
  ${variables.fontStyle("32px", 600)}
  grid-row: 3;
`;

const ResultImage = styled.div`
  ${variables.flex("row", "center", "center")}
  ${variables.widthHeight("100%", "242px")}
  ${variables.fontStyle("22px", 500)}
  grid-row: 6;
  background: ${({ theme }) => theme.style.lightgray};
  color: ${({ theme }) => theme.style.gray};
`;

const ResultContent = styled.div`
  grid-row: 15;
`;

const ResultContentTitle = styled.h2`
  ${variables.fontStyle("24px", 600)}
  margin-bottom: 40px;
`;

const ResultContentText = styled.p`
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
