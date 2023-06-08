import React from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../../state/store";
import MicRecorder from "mic-recorder-to-mp3";
import * as S from "../Word.style";
import * as W from "./VoiceRecord.style";
import styled, { keyframes } from "styled-components";
import variables from "../../../styles/variables";

const RcFirst = (e) => {
  const navigate = useNavigate();

  const {
    setAudioUrl,
    keyword,
    setAudioData,
    isRecording,
    setIsRecording,
    recorder,
    setRecorder,
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
      const file = new File(buffer, "1st_q.mp3", {
        type: blob.type,
        lastModified: Date.now(),
      });

      if (file.size === 0) {
        console.log("파일이 비어있거나 유효하지 않습니다");
        return;
      }

      const audioData = new FormData();
      audioData.append("keyword", keyword);
      audioData.append("firstAnswer", file);

      setAudioData(audioData);

      console.log("audioData 1:", ...audioData);

      setAudioUrl(URL.createObjectURL(file));
      setIsRecording(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonClick = () => {
    if (isRecording) {
      stopRecording();
      navigate("/question-2");
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
      <QuestionText style={{}}>언제 있었던 일인가요?</QuestionText>
      {isRecording ? (
        <>
          <W.ListeningText>귀기울여 듣고 있어요</W.ListeningText>
          <RecordBtn onClick={handleButtonClick} value={1}>
            말 끝내기
          </RecordBtn>
        </>
      ) : (
        <RecordBtn onClick={handleButtonClick} value={0}>
          말 시작하기
        </RecordBtn>
      )}
      <CancelBtn onClick={() => navigate("/word")}>취소하기</CancelBtn>
    </W.VoiceRecordContainer>
  );
};

const slideUp = keyframes`
  0% {
    bottom: 30%;
    opacity: 0;
  }
  50% {
    bottom: 30%;
    opacity: 1;
  }
  70% {
    bottom: 50%;
    opacity: 1;
  }
`;

const recordAnimation = keyframes`
 0% {
    opacity: 0%;
  }
  75% {
    opacity: 0%;
  }
  90% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
`;

const QuestionText = styled.div`
  ${variables.position("absolute", "null", "null", "50%", "50%")};
  ${variables.flex("row", "center", "center")};
  ${variables.widthHeight("100vw", "100vh")};
  ${variables.fontStyle("30px", 600)};
  white-space: no-wrap;
  opacity: 1;

  animation: ${slideUp} 2s ease-in;
  transform: translate(-50%, 50%);
`;

const RecordBtn = styled.button`
  ${variables.position("absolute", "null", "null", "10%", "50%")}
  ${variables.flex("row", "center", "center")}
  ${variables.widthHeight("90%", "68px")}
  ${variables.fontStyle("22px", 600)}
  background: ${(props) => (props.value === 0 ? "#FFF4CC" : "#FFE380")};
  color: ${({ theme }) => theme.style.gray5};
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.03em;
  border: none;
  border-radius: 20px;
  transform: translate(-50%, -50%);
  opacity: 1;
  cursor: pointer;

  animation: ${recordAnimation} 3s ease-in;
`;

const CancelBtn = styled.button`
  ${variables.position("absolute", "null", "null", "5%", "50%")}
  ${variables.flex("row", "center", "center")}
  ${variables.fontStyle("19px", 500)}
  color: ${({ theme }) => theme.style.gray3};
  background: none;
  border: none;
  transform: translate(-50%, -50%);
  opacity: 1;
  cursor: pointer;

  animation: ${recordAnimation} 3s ease-in;
`;

export default RcFirst;
