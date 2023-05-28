import React from "react";
import * as S from "../Word.style";
import * as W from "./VoiceRecord.style";
import ListeningIconImg from "../../../assets/images/listeningIcon.png";

const VoiceRecord = () => {
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
      <W.VoiceRecorder>
        <W.ListeningText>
          ○○님의 말씀을 <br />
          듣고 있어요
        </W.ListeningText>
        <W.ListeningIconContainer>
          <W.ListeningIcon src={ListeningIconImg} />
        </W.ListeningIconContainer>
        <W.FinishRecordButton>말 끝맺기</W.FinishRecordButton>
      </W.VoiceRecorder>

      {/* MARK: 취소하기 */}
      <W.CancelButton>취소하기</W.CancelButton>
    </W.VoiceRecordContainer>
  );
};

export default VoiceRecord;
