import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import variables from "../../styles/variables";
import font from "../../styles/fontStyle";

const Loading = () => {
  const navigate = useNavigate();

  return (
    <LoadingContainer>
      <LoadingTitle>
        추억을 <br />
        글로 적는 중이에요
      </LoadingTitle>
      <LoadingIcon src="/images/animation_loading.gif" />
      <MessageTodayBtn onClick={() => navigate("/pictureResult")}>
        오늘의 메시지
      </MessageTodayBtn>
      <MessageTodayText>
        아름다운 추억이 남는 <br />
        행복한 날이 되시길 바라요
      </MessageTodayText>
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled.div`
  ${variables.position("absolute", 0, null, null, 0)}
  ${variables.widthHeight("100vw", "100vh")}
  background: url("/images/bg_reminisce_final_flipped.png") no-repeat;
  background-size: cover;
  white-space: nowrap;
  z-index: 1000;

  @media (min-width: 769px) {
    ${variables.widthHeight("375px", "685px")}
  }
`;

const LoadingTitle = styled.h1`
  ${font.t1}
  margin: 100px 0 0 20px;
`;

const LoadingIcon = styled.img`
  ${variables.absoluteCenter}
  width: 180px;
`;

const MessageTodayBtn = styled.button`
  ${variables.position("absolute", "null", "null", "20%", "50%")}
  ${variables.widthHeight("126px", "42px")}
  ${font.t7}
  background: #fff4cc;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.style.gray5};
  transform: translate(-50%, -50%);
  white-space: nowrap;
`;

const MessageTodayText = styled.h4`
  ${variables.position("absolute", "null", "null", "6%", "50%")}
  ${font.t3}
  text-align: center;
  transform: translate(-50%, -50%);
`;
