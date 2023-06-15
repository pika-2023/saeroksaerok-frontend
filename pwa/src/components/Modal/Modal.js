import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Modal.style";

const Modal = ({ setIsOpen, modalData, setModalData }) => {
  const navigate = useNavigate();

  return (
    <S.RecordModal>
      <S.ModalBackground
        onClick={() => {
          setIsOpen(false);
        }}
      />
      <S.ModalContents>
        <>
          <S.ModalTitle>
            {modalData[0].title[0]} <br /> {modalData[0].title[1]}
          </S.ModalTitle>
          <S.ModalOptionContainer>
            <S.ModalOption value={0}>
              <S.ModalOptionIcon
                src="./icons/icon_keyboard.png"
                alt="키보드 아이콘"
              />
              <S.ModalOptionTitle>{modalData[0].options[0]}</S.ModalOptionTitle>
            </S.ModalOption>
            <S.ModalOption
              onClick={() => navigate("/voiceRecord")}
              value={1}
              style={{ marginLeft: "10px" }}
            >
              <S.ModalOptionIcon
                src="./icons/icon_voice.png"
                alt="목소리 아이콘"
              />
              <S.ModalOptionTitle>{modalData[0].options[1]}</S.ModalOptionTitle>
            </S.ModalOption>
          </S.ModalOptionContainer>

          <S.ModalCancelButton onClick={() => setIsOpen(false)}>
            뒤로가기
          </S.ModalCancelButton>
        </>
      </S.ModalContents>
    </S.RecordModal>
  );
};

export default Modal;
