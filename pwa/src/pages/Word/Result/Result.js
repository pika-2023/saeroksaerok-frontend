import React from "react";
import styled from "styled-components";
import variables from "../../../styles/variables";

const Result = () => {
  return (
    <ResultBackground>
      <ResultContainer>
        <ResultTitle>
          새록새록 떠오른 <br />
          추억이에요
        </ResultTitle>
        {/* MARK: 하단 src 링크는 샘플 이미지입니다 */}
        <ResultImage
          src="https://img.freepik.com/free-vector/hand-drawn-adventure-background_23-2149048448.jpg?w=1800&t=st=1685902962~exp=1685903562~hmac=5cf9a5a3bdc961caf5c71279c0df081e9e36ea74b1c59938f70091687dff5058"
          alt="결과 이미지"
        />
        <ResultContent>
          <ResultContentTitle>가족</ResultContentTitle>
          <ResultContentText>
            그때가 아마 삼십 년도 더 됐을 거야. 옛날에 거기 영등포 살던 곳에
            마당이 큰 거 있었어. 거기서들 손녀딸내미들이랑 사방치기 했지. 고무줄
            놀이 했지. 아주 재밌게 놀았어. 그때가 아마 삼십 년도 더 됐을 거야.
            옛날에 거기 영등포 살던 곳에 마당이 큰 거 있었어. 거기서들
            손녀딸내미들이랑 사방치기 했지. 고무줄 놀이 했지. 아주 재밌게
            놀았어.
          </ResultContentText>
        </ResultContent>
        <GradientBox />
        <ShareButton>친구들과 공유하기</ShareButton>
      </ResultContainer>
    </ResultBackground>
  );
};

export default Result;

const ResultBackground = styled.div`
  ${variables.widthHeight("100vw", "100%")}
  margin: calc(-20px);
  background: url("./images/bg_ai_image.png") no-repeat;
  background-size: cover;

  @media (min-width: 769px) {
    ${variables.widthHeight("375px", "100%")}
    overflow: hidden;
  }
`;

const ResultContainer = styled.div`
  display: grid;
  grid-auto-rows: 5%;
  height: 100%;
  padding: 20px;
`;

const ResultTitle = styled.h1`
  ${variables.fontStyle("32px", 600)}
  grid-row: 3;
`;

const ResultImage = styled.img`
  ${variables.widthHeight("100%", "242px")}
  grid-row: 6;
  background: ${({ theme }) => theme.style.gray1};
`;

const ResultContent = styled.div`
  grid-row: 14;
`;

const ResultContentTitle = styled.h2`
  ${variables.fontStyle("24px", 600)}
  margin: 20px 0 40px 0;
`;

const ResultContentText = styled.p`
  ${variables.widthHeight("100%", "200px")}
  ${variables.fontStyle("22px", 500)}
  line-height: 31px;
  letter-spacing: -0.04em;
  overflow: scroll;
`;

const GradientBox = styled.div`
  ${variables.position("absolute", "null", "null", "90px", "0")}
  ${variables.widthHeight("100%", "100px")}
  background: linear-gradient(180deg, rgba(255, 248, 225, 0.5) 0%, rgba(255, 248, 225, 0) 100%);
  transform: rotate(-180deg);
`;

const ShareButton = styled.button`
  ${variables.position("fixed", "null", "null", "0", "0")}
  ${variables.widthHeight("100%", "91px")}
  ${variables.fontStyle("22px", 600)}
  background: ${({ theme }) => theme.style.yellow2};
  border: none;
  color: ${({ theme }) => theme.style.black};
  text-align: center;
  letter-spacing: -0.03em;
`;
