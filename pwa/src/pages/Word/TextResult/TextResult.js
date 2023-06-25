import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../../state/store";
import * as T from "./TextResult.style";
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
        <T.TextResultContainer>
          <T.TextResultTitle>
            추억을 <br />
            글로 적었어요
          </T.TextResultTitle>
          <T.TextResultContent>
            <T.TextResultContentTitle>{keyword}</T.TextResultContentTitle>
            <T.TextResultContentText>{textDiary}</T.TextResultContentText>
          </T.TextResultContent>
          <T.GradationBox></T.GradationBox>
          <S.MemoryButton onClick={() => navigate("/pictureResult")}>
            추억 그리기
          </S.MemoryButton>
          {!isOpenModal && (
            <T.ModifyButton
              onClick={() => {
                setIsOpenModal(true);
                setModalData(EDIT_MEMORY);
              }}
            >
              추억 수정하기
            </T.ModifyButton>
          )}
          {isOpenModal && (
            <CommentModal
              setIsOpenModal={setIsOpenModal}
              modalData={modalData}
              setModalData={setModalData}
            />
          )}
        </T.TextResultContainer>
      )}
    </>
  );
};

export default TextResult;
