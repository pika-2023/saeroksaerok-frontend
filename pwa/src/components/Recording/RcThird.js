import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useStore from "../../state/store";
import MicRecorder from "mic-recorder-to-mp3";
import * as S from "../../pages/Word/Word.style";
import * as W from "../../pages/Word/VoiceRecord/VoiceRecord.style";

const RcThird = (e) => {
  const navigate = useNavigate();

  const {
    setAudioUrl,
    keyword,
    audioData,
    isRecording,
    setIsRecording,
    recorder,
    setRecorder,
    setPictureDiary,
    setTextDiary,
  } = useStore((state) => state);

  const accessToken = localStorage.getItem("accessToken");
  const recordApiUrl = "http://13.124.76.165:8080/diaries";

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
      const file = new File(buffer, "3rd_q.mp3", {
        type: blob.type,
        lastModified: Date.now(),
      });

      if (file.size === 0) {
        console.log("파일이 비어있거나 유효하지 않습니다");
        return;
      }

      const formData = new FormData();
      formData.append("keyword", keyword);
      formData.append("firstAnswer", audioData.get("firstAnswer"));
      formData.append("secondAnswer", audioData.get("secondAnswer"));
      formData.append("thirdAnswer", file);

      console.log("formData:", ...formData);

      setAudioUrl(URL.createObjectURL(file));
      setIsRecording(false);

      if (accessToken) {
        axios
          .post(recordApiUrl, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((response) => {
            console.log("음성 파일 업로드 성공 ✨", response.data);
            setTextDiary(response.data.textDiary);
            setPictureDiary(response.data.pictureDiary);
          })
          .catch((error) => {
            console.error("음성 파일 업로드 실패:", error);
          });
      } else {
        console.log("액세스 토큰이 존재하지 않습니다");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonClick = () => {
    if (isRecording) {
      stopRecording();
      navigate("/textResult");
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
      <W.QuestionText>
        누구와 어떤 하루를 <br /> 보내셨나요?
      </W.QuestionText>
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

export default RcThird;
