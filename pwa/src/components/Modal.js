import React from "react";
import * as S from "../pages/Word/Word.style";
import { useNavigate } from "react-router-dom";

const Modal = ({ recordModal }) => {
  const navigate = useNavigate();

  const hideModal = () => {
    recordModal.current.style = "display: none";
  };

  const goToVoiceRecord = () => {
    navigate("/voiceRecord");
  };

  return (
    <>
      <S.RecordModal ref={recordModal}>
        <S.ModalBackground />
        <S.ModalContents>
          <S.ModalTitle>
            어떤 방식으로 <br /> 추억을 남길까요?
          </S.ModalTitle>
          <S.ModalOption onClick={goToVoiceRecord}>
            <S.ModalOptionTitle>목소리로 남기기</S.ModalOptionTitle>
            <S.ModalOptionIcon>{">"}</S.ModalOptionIcon>
          </S.ModalOption>
          <S.ModalOption>
            <S.ModalOptionTitle>키보드로 남기기</S.ModalOptionTitle>
            <S.ModalOptionIcon>{">"}</S.ModalOptionIcon>
          </S.ModalOption>

          <S.ModalButtonBox>
            <S.ModalCancelButton onClick={hideModal}>
              취소하기
            </S.ModalCancelButton>
          </S.ModalButtonBox>
        </S.ModalContents>
      </S.RecordModal>
    </>
  );
};

export default Modal;
