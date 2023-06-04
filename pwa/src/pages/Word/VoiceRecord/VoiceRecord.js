import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useStore from "../../../state/store";
import * as S from "../Word.style";
import * as W from "./VoiceRecord.style";
import { SAVE_AUDIO } from "./voiceRecordData";

const VoiceRecord = (e) => {
  const navigate = useNavigate();
  const {
    isOpen,
    setIsOpen,
    voiceRecordData,
    setVoiceRecordData,
    modalData,
    setModalData,
    stream,
    setStream,
    media,
    setMedia,
    onRec,
    setOnRec,
    source,
    setSource,
    analyser,
    setAnalyser,
    audioUrl,
    setAudioUrl,
    disabled,
    setDisabled,
  } = useStore((state) => state);

  // MARK: 음성 녹음하기
  const onRecAudio = () => {
    setDisabled(true);

    // 음원 정보를 담은 노드를 생성하거나 음원을 실행, 또는 디코딩함
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    // JS를 통해 음원의 진행 상태에 직접 접근하는 역할
    const analyser = audioCtx.createScriptProcessor(0, 1, 1);
    setAnalyser(analyser);

    function makeSound(stream) {
      // 내 컴퓨터의 마이크 or 다른 소스를 통해 발생한 오디오 스트림의 정보를 보여줌
      const source = audioCtx.createMediaStreamSource(stream);
      setSource(source);
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
    }
    // 마이크 사용 권한 획득
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      setStream(stream);
      setMedia(mediaRecorder);
      makeSound(stream);

      analyser.onaudioprocess = function (e) {
        // 3분(180초) 이후 자동으로 음성 저장 및 녹음 중지
        if (e.playbackTime > 180) {
          stream.getAudioTracks().forEach(function (track) {
            track.stop();
          });
          mediaRecorder.stop();
          // 메서드가 호출된 노드 연결 해제
          analyser.disconnect();
          audioCtx.createMediaStreamSource(stream).disconnect();

          mediaRecorder.ondataavailable = function (e) {
            setAudioUrl(e.data);
            setOnRec(true);
          };
        } else {
          setOnRec(false);
        }
      };
    });
  };

  // MARK: 사용자가 음성 녹음을 중지했을 때
  const offRecAudio = () => {
    // dataavailable 이벤트로 Blob 데이터에 대한 응답을 받을 수 있음
    media.ondataavailable = function (e) {
      setAudioUrl(e.data);
      setOnRec(true);
    };

    // 모든 트랙에서 stop()을 호출해 오디오 스트림을 정지
    stream.getAudioTracks().forEach(function (track) {
      track.stop();
    });

    // 미디어 캡처 중지
    media.stop();

    // 메서드가 호출된 노드 연결 해제
    analyser.disconnect();
    source.disconnect();

    if (audioUrl) {
      URL.createObjectURL(audioUrl);
      // 출력된 링크에서 녹음된 오디오 확인 가능
    }

    // File 생성자를 사용해 파일로 변환
    const sound = new File([audioUrl], "soundBlob", {
      lastModified: new Date().getTime(),
      type: "audio",
    });

    setDisabled(false);
    console.log("sound", sound); // File 정보 출력
  };

  // MARK: 녹음한 음성 재생하기
  const play = () => {
    const audio = new Audio(URL.createObjectURL(audioUrl));
    audio.loop = false;
    audio.volume = 1;
    audio.play();
  };

  // 파일 다운로드
  const downloadFile = () => {
    const element = document.createElement("a");
    element.setAttribute("href", audioUrl);
    element.setAttribute("download", "recorded_audio.mp3");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // mp3 파일 다운로드 및 재생
  const audioBlob = new Blob([e.data], { type: "audio/mp3" });
  const formData = new FormData();
  formData.append("audioFile", audioBlob, "recorded_audio.mp3");

  // 파일 업로드
  const uploadAudio = async (audioBlob) => {
    try {
      const formData = new FormData();
      formData.append("audio", audioBlob);

      const response = await axios.post(recordApiUrl, formData);
      console.log("Audio uploaded successfully:", response.data);
      // 서버로 오디오 업로드 후 응답 처리
    } catch (error) {
      console.error("Error uploading audio:", error);
      // 오디오 업로드 중 오류 처리
    }
  };

  const accessToken = localStorage.getItem("accessToken");
  const recordApiUrl = "http://13.124.76.165:8080/diaries";

  useEffect(() => {
    if (accessToken) {
      axios
        .post(recordApiUrl, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: ` Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          console.log("Audio uploaded successfully:", response.data);
          const audioUrl = URL.createObjectURL(audioBlob);
          downloadFile(audioUrl, "recorded_audio.mp3");
        })
        .catch((error) => {
          console.error("Error uploading audio:", error);
        });
    }
  }, []);

  const showRecordResult = () => {
    setVoiceRecordData(SAVE_AUDIO);
    offRecAudio();
    if (audioUrl) {
      // 테스트용으로 변환한 mp3 파일을 다운로드하는 코드
      downloadFile();
      // 서버에 업로드할 때는 여기에서 uploadAudio 함수 호출
      uploadAudio(audioUrl);
    }
    navigate("/textResult");
  };

  return (
    <W.VoiceRecordContainer>
      <S.TodayWordContainer>
        <S.TodayWordContent src="./images/text_family.png" alt="가족 텍스트" />
      </S.TodayWordContainer>

      {/* MARK: 녹음 테스트용 요소 */}
      <button onClick={play}>녹음본 듣기</button>

      <W.VoiceRecordTitle>언제 있었던 일인가요?</W.VoiceRecordTitle>
      <W.ListeningText>귀기울여 듣고 있어요</W.ListeningText>

      {onRec ? (
        <>
          <W.StartRecordButton onClick={onRecAudio}>
            말 시작하기
          </W.StartRecordButton>
        </>
      ) : (
        <>
          <W.StartRecordButton onClick={showRecordResult}>
            말 끝내기
          </W.StartRecordButton>
        </>
      )}

      <W.CancelButton onClick={() => navigate("/word")}>
        취소하기
      </W.CancelButton>
    </W.VoiceRecordContainer>
  );
};

export default VoiceRecord;
