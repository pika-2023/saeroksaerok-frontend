import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../../state/store";
import styled from "styled-components";
import variables from "../../../styles/variables";
import * as S from "../Word.style";
import CommentModal from "../../../components/CommentModal";
import Loading from "../../../components/Loading/Loading";
import { EDIT_MEMORY } from "../../../components/Modal/modalData";

const TextResult = () => {
  const {
    keyword,
    textDiary,
    isOpenModal,
    setIsOpenModal,
    modalData,
    setModalData,
    isSplashOpen,
    setIsSplashOpen,
    isOpen,
  } = useStore((state) => state);

  const navigate = useNavigate();

  useEffect(() => {
    setIsSplashOpen(true);
    setTimeout(function () {
      setIsSplashOpen(false);
    }, 12000);
  }, []);

  return (
    <>
      {isSplashOpen && <Loading />}
      {isOpen && (
        <TextResultContainer>
          <TextResultTitle>
            추억을 <br />
            글로 적었어요
          </TextResultTitle>
          <TextResultContent>
            <TextResultContentTitle>{keyword}</TextResultContentTitle>
            <TextResultContentText>{textDiary}</TextResultContentText>
          </TextResultContent>
          <GradationBox></GradationBox>
          <S.MemoryButton onClick={() => navigate("/pictureResult")}>
            추억 그리기
          </S.MemoryButton>
          {!isOpenModal && (
            <ModifyButton
              onClick={() => {
                setIsOpenModal(true);
                setModalData(EDIT_MEMORY);
              }}
            >
              추억 수정하기
            </ModifyButton>
          )}
          {isOpenModal && (
            <CommentModal
              setIsOpenModal={setIsOpenModal}
              modalData={modalData}
              setModalData={setModalData}
            />
          )}
        </TextResultContainer>
      )}
    </>
  );
};

export default TextResult;

const TextResultContainer = styled.div`
  ${variables.widthHeight("100vw", "100vh")}
  position: relative;
  display: grid;
  grid-auto-rows: 5%;
  margin: calc(-20px);
  padding: 20px;
  background: url("./images/bg_speach_to_text.png") no-repeat;
  background-size: cover;
  overflow: hidden;

  @media (min-width: 769px) {
    ${variables.widthHeight("375px", "685px")}
  }
`;

const TextResultTitle = styled.h1`
  ${variables.fontStyle("32px", 600)}
  grid-row: 3;
  line-height: 45px;
  letter-spacing: -0.03em;
`;

const TextResultContent = styled.div`
  grid-row: 7;
`;

const TextResultContentTitle = styled.h2`
  ${variables.fontStyle("24px", 600)}
  margin-bottom: 40px;
`;

const TextResultContentText = styled.p`
  ${variables.widthHeight("100%", "30vh")}
  ${variables.fontStyle("22px", 500)}
  color: ${({ theme }) => theme.style.gray5};
  line-height: 32px;
  letter-spacing: -0.03em;
  overflow: scroll;
  word-break: keep-all;
`;

const GradationBox = styled.div`
  ${variables.position("absolute", "null", "null", "0", "0")}
  ${variables.widthHeight("100%", "400px")}
  background: linear-gradient(
    180deg,
    #ffffff 60.17%,
    rgba(255, 255, 255, 0) 98.19%
  );
  transform: rotate(-180deg);
`;

const ModifyButton = styled.button`
  ${variables.position("absolute", "null", "null", "5%", "50%")}
  ${variables.flex("row", "center", "center")}
  ${variables.fontStyle("19px", 500)}
  color: ${({ theme }) => theme.style.gray4};
  background: none;
  border: none;
  transform: translate(-50%, -50%);
  z-index: 100;
  cursor: pointer;
`;
