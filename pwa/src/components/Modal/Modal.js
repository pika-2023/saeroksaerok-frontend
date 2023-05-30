import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Modal.style";
import { RECORD_AUDIO } from "../../pages/Word/VoiceRecord/voiceRecordData";

const Modal = ({ setIsOpen, modalData, setVoiceRecordData }) => {
  const navigate = useNavigate();

  const goToVoiceRecord = () => {
    navigate("/voiceRecord");
  };

  return (
    <S.RecordModal>
      <S.ModalBackground />
      <S.ModalContents>
        <S.ModalTitle>
          {modalData[0].title[0]} <br /> {modalData[0].title[1]}
        </S.ModalTitle>
        {modalData[0].options[0] === "목소리로 남기기" ? (
          <>
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
            <S.ModalOption>
              <S.ModalOptionTitle>{modalData[0].options[0]}</S.ModalOptionTitle>
              <S.ModalOptionIcon>{">"}</S.ModalOptionIcon>
            </S.ModalOption>
            <S.ModalOption
              onClick={() => {
                setIsOpen(false);
                setVoiceRecordData(RECORD_AUDIO);
              }}
            >
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
