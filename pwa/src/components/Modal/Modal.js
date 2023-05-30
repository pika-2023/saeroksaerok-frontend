import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Modal.style";

const Modal = ({ setIsOpen, modalData }) => {
  const navigate = useNavigate();

  const goToVoiceRecord = () => {
    navigate("/voiceRecord");
  };

  return (
    <S.RecordModal>
      <S.ModalBackground />
      <S.ModalContents>
        {modalData[0].options[0] === "목소리로 남기기" ? (
          <>
            <S.ModalTitle>{modalData[0].title}</S.ModalTitle>
            <S.ModalOption onClick={goToVoiceRecord}>
              <S.ModalOptionTitle>{modalData[0].options[0]}</S.ModalOptionTitle>
              <S.ModalOptionIcon>{">"}</S.ModalOptionIcon>
            </S.ModalOption>
            <S.ModalOption>
              <S.ModalOptionTitle>{modalData[0].options[1]}</S.ModalOptionTitle>
              <S.ModalOptionIcon>{">"}</S.ModalOptionIcon>
            </S.ModalOption>
          </>
        ) : (
          <>
            <S.ModalTitle>{modalData[0].title}</S.ModalTitle>
            <S.ModalOption>
              <S.ModalOptionTitle>{modalData[0].options[0]}</S.ModalOptionTitle>
              <S.ModalOptionIcon>{">"}</S.ModalOptionIcon>
            </S.ModalOption>
            <S.ModalOption>
              <S.ModalOptionTitle>{modalData[0].options[1]}</S.ModalOptionTitle>
              <S.ModalOptionIcon>{">"}</S.ModalOptionIcon>
            </S.ModalOption>
          </>
        )}

        <S.ModalButtonBox>
          <S.ModalCancelButton onClick={() => setIsOpen(false)}>
            취소하기
          </S.ModalCancelButton>
        </S.ModalButtonBox>
      </S.ModalContents>
    </S.RecordModal>
  );
};

export default Modal;
