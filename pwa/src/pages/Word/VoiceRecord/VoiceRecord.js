import React from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../../state/store";
import * as S from "../Word.style";
import * as W from "./VoiceRecord.style";
import ListeningIconImg from "../../../assets/images/listeningIcon.png";
import Modal from "../../../components/Modal/Modal";
import { SAVE_AUDIO } from "./voiceRecordData";
import { EDIT_MEMORY } from "../../../components/Modal/modalData";

const VoiceRecord = () => {
  const navigate = useNavigate();
  const {
    isOpen,
    setIsOpen,
    voiceRecordData,
    setVoiceRecordData,
    modalData,
    setModalData,
  } = useStore((state) => state);

  const showRecordResult = () => {
    setVoiceRecordData(SAVE_AUDIO);
  };

  const showEditModal = () => {
    setIsOpen(true);
    setModalData(EDIT_MEMORY);
  };

  return (
    <W.VoiceRecordContainer>
      <S.TodayWordContainer>
        <S.TodayWord>
          <S.TodayWordContent>기쁨</S.TodayWordContent>
        </S.TodayWord>
      </S.TodayWordContainer>

      {voiceRecordData[0].buttonText === "언제 있었던 일인가요?" ? (
        <>
          <h1>hi!</h1>
        </>
      ) : (
        <>
          <W.VoiceRecorder>
            <W.ListeningText style={{ height: "200px", overflow: "scroll" }}>
              {voiceRecordData[0].listeningText}
            </W.ListeningText>
            <W.FinishRecordButton
              onClick={() => {
                navigate("/result");
              }}
              style={{ background: "#212121", color: "white" }}
            >
              {voiceRecordData[0].buttonText}
            </W.FinishRecordButton>
          </W.VoiceRecorder>

          <W.CancelButton onClick={showEditModal}>
            {voiceRecordData[0].subButtonText}
          </W.CancelButton>
        </>
      )}

      {!isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          modalData={modalData}
          setVoiceRecordData={setVoiceRecordData}
        />
      )}
    </W.VoiceRecordContainer>
  );
};

export default VoiceRecord;
