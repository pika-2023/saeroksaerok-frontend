import React from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../../state/store";
import MicRecorder from "mic-recorder-to-mp3";
import * as S from "../Word.style";
import * as W from "./VoiceRecord.style";

const RcSecond = (e) => {
  const navigate = useNavigate();

  const {
    keyword,
    audioData,
    setAudioData,
    isRecording,
    setIsRecording,
    recorder,
    setRecorder,
    setAudioUrl,
  } = useStore((state) => state);

  const startRecording = async () => {
    const mp3Recorder = new MicRecorder({ bitRate: 128 });

    try {
      await mp3Recorder.start();
      setRecorder(mp3Recorder);
      setIsRecording(true);
    } catch (error) {
      console.error(error);
    }
  };

  const stopRecording = async () => {
    try {
      const [buffer, blob] = await recorder.stop().getMp3();
      const file = new File(buffer, "2nd_q.mp3", {
        type: blob.type,
        lastModified: Date.now(),
      });

      if (file.size === 0) {
        console.log("파일이 비어있거나 유효하지 않습니다");
        return;
      }

      audioData.append("secondAnswer", file);
      setAudioData(audioData);
      console.log("audioData 2:", ...audioData);

      setAudioUrl(URL.createObjectURL(file));
      setIsRecording(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonClick = () => {
    if (isRecording) {
      stopRecording();
      navigate("/question-3");
    } else {
      startRecording();
    }
  };

  return (
    <W.VoiceRecordContainer>
      <S.TodayWordContainer>
        <S.TodayWord>
          {(function () {
            if (keyword === "가족")
              return <S.TodayWordContent src="/images/text_family.png" />;
            if (keyword === "친구")
              return <S.TodayWordContent src="/images/text_friend.png" />;
            if (keyword === "여행")
              return <S.TodayWordContent src="/icons/text_travel.png" />;
          })()}
        </S.TodayWord>
      </S.TodayWordContainer>
      <W.QuestionText>장소는 어디였나요?</W.QuestionText>
      {isRecording ? (
        <>
          <W.ListeningText>귀기울여 듣고 있어요</W.ListeningText>
          <W.RecordBtn onClick={handleButtonClick}>말 끝내기</W.RecordBtn>
        </>
      ) : (
        <W.RecordBtn onClick={handleButtonClick} value={"start"}>
          말 시작하기
        </W.RecordBtn>
      )}
      <W.CancelBtn onClick={() => navigate("/word")} value={"start"}>
        취소하기
      </W.CancelBtn>
    </W.VoiceRecordContainer>
  );
};

export default RcSecond;
