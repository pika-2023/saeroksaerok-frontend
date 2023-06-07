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
      <PictureResultTitle>
        새록새록 떠오른
        <br />
        추억이에요
      </PictureResultTitle>
      <PictureResultImage src={pictureDiary} alt="그림 결과" />
      <PictureResultContent>
        {/* TODO: 아래 텍스트는 테스트용으로 작성해둔 것으로, 추후 삭제 예정입니다 */}
        <PictureResultContentTitle>가족{keyword}</PictureResultContentTitle>
        <PictureResultContentText>
          그때가 아마 삼십 년도 더 됐을 거야. 옛날에 거기 영등포 살던 곳에
          마당이 큰 거 있었어. 거기서들 손녀딸내미들이랑 사방치기 했지. 고무줄
          놀이 했지. 아주 재밌게 놀았어.{textDiary}
        </PictureResultContentText>
      </PictureResultContent>
      <GradationBox></GradationBox>
      <ShareButton onClick={() => navigate("/feed")}>
        친구들과 공유하기
      </ShareButton>
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

  /* TODO: 테스트용 디자인으로, 추후 삭제 예정입니다 */
  border: 1px solid black;
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
