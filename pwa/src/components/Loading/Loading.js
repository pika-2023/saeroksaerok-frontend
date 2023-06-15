import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import variables from "../../styles/variables";

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

// const LoadingContainer = styled.div`
//   ${variables.position("absolute", 0, null, null, 0)}
//   ${variables.flex("column", "center", "center")}
//   ${variables.widthHeight("100vw", "100vh")}
//   background-color: ${({ theme }) => theme.style.white};
//   z-index: 100;
// `;

// const LoadingTitle = styled.h1`
//   ${variables.fontStyle("19px", 500)}
//   color: ${({ theme }) => theme.style.gray4};
//   line-height: 29px;
//   text-align: center;
//   letter-spacing: -0.03em;
// `;

const LoadingContainer = styled.div`
  ${variables.widthHeight("100vw", "100vh")}
  ${variables.position("absolute", 0, null, null, 0)}
  ${variables.widthHeight("100vw", "100vh")}
  background: url("./images/bg_reminisce_final_flipped.png") no-repeat;
  background-size: cover;
  white-space: nowrap;
  z-index: 1000;

  @media (min-width: 769px) {
    ${variables.widthHeight("375px", "685px")}
  }
`;

const LoadingTitle = styled.h1`
  ${variables.fontStyle("32px", 600)}
  margin: 100px 0 0 20px;
  line-height: 45px;
  letter-spacing: -0.03em;
`;

const LoadingIcon = styled.img`
  ${variables.absoluteCenter}
  width: 180px;
`;

const MessageTodayBtn = styled.button`
  ${variables.widthHeight("126px", "42px")}
  ${variables.fontStyle("19px", 500)}

  background: #fff4cc;
  border-radius: 12px;
  border: none;

  position: absolute;
  left: 50%;
  bottom: 20%;
  transform: translate(-50%, -50%);

  color: ${({ theme }) => theme.style.gray5};
  line-height: 29px;
  text-align: center;
  letter-spacing: -0.03em;
  white-space: nowrap;
`;

const MessageTodayText = styled.h4`
  ${variables.position("absolute", "null", "null", "6%", "50%")}
  ${variables.fontStyle("24px", 500)}
  text-align: center;
  line-height: 35px;
  letter-spacing: -0.03em;
  transform: translate(-50%, -50%);
`;
