import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import create from "zustand";
import * as S from "../Word.style";
import * as W from "./VoiceRecord.style";
import ListeningIconImg from "../../../assets/images/listeningIcon.png";

export const useStore = create((set) => ({
  visible: true,
  setVisible: () => set({ visible: false }),
}));

const VoiceRecord = () => {
  const navigate = useNavigate();
  const voiceRecordBox = useRef();
  const listeningText = useRef();
  const finishRecordText = useRef();
  const cancelRecordText = useRef();

  const { visible, setVisible } = useStore((state) => state);

  const showRecordResult = () => {
    setVisible(false);
    listeningText.current.innerHTML =
      "엄마랑 함께 봄 소풍을 갔던 기억이 제일 먼저 나네, 그때는 좋았지 그때는 말야 봄인데 미세먼지가 어딨어 아주 파아란 하늘에! 엄마랑 함께 봄 소풍을 갔던 기억이 제일 먼저 나네, 엄마랑 함께 봄 소풍을 갔던 기억이 제일 먼저 나네, 엄마랑 함께 봄 소풍을 갔던 기억이 제일 먼저 나네, ";
    finishRecordText.current.innerHTML = "추억 남기기";
    cancelRecordText.current.innerHTML = "추억 수정하기";
    listeningText.current.style = "height:200px; overflow: scroll";
    finishRecordText.current.style = "background: #212121; color: white";
  };

  return (
    <W.VoiceRecordContainer>
      {/* MARK: 오늘의 단어 */}
      <S.TodayWordContainer>
        <S.TodayWord>
          <S.TodayWordTitle>오늘의 단어</S.TodayWordTitle>
          <S.TodayWordContent>기쁨</S.TodayWordContent>
        </S.TodayWord>
      </S.TodayWordContainer>

      {/* MARK: 녹음중 화면 */}
      <W.VoiceRecorder ref={voiceRecordBox}>
        <W.ListeningText ref={listeningText}>
          ○○님의 말씀을 <br />
          듣고 있어요
        </W.ListeningText>
        {visible && (
          <>
            <W.ListeningIconContainer>
              <W.ListeningIcon src={ListeningIconImg} />
            </W.ListeningIconContainer>
          </>
        )}
        <W.FinishRecordButton onClick={showRecordResult} ref={finishRecordText}>
          말 끝맺기
        </W.FinishRecordButton>
      </W.VoiceRecorder>

      {/* MARK: 취소하기 */}
      <W.CancelButton ref={cancelRecordText}>취소하기</W.CancelButton>
    </W.VoiceRecordContainer>
  );
};

export default VoiceRecord;
