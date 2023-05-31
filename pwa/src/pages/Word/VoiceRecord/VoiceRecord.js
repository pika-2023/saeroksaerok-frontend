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
    console.log(sound); // File 정보 출력
  };

  // MARK: 녹음한 음성 재생하기
  const play = () => {
    const audio = new Audio(URL.createObjectURL(audioUrl));

    audio.loop = false;
    audio.volume = 1;
    audio.play();
  };

  const showRecordResult = () => {
    setVoiceRecordData(SAVE_AUDIO);
    offRecAudio();
  };

  const showEditModal = () => {
    setIsOpen(true);
    setModalData(EDIT_MEMORY);
  };

  return (
    <W.VoiceRecordContainer>
      <S.TodayWordContainer>
        <S.TodayWord>
          <S.TodayWordTitle>오늘의 단어</S.TodayWordTitle>
          <S.TodayWordContent>기쁨</S.TodayWordContent>
        </S.TodayWord>
      </S.TodayWordContainer>

      {/* MARK: 녹음 테스트용 요소 */}
      <button onClick={play}>녹음본 듣기</button>

      {voiceRecordData[0].buttonText === "말 끝맺기" ? (
        <>
          <W.VoiceRecorder>
            <W.ListeningText>
              {voiceRecordData[0].listeningText[0]} <br />
              {voiceRecordData[0].listeningText[1]}
            </W.ListeningText>
            <W.ListeningIconContainer>
              <W.ListeningIcon onClick={onRecAudio} src={ListeningIconImg} />
            </W.ListeningIconContainer>
            <W.FinishRecordButton onClick={showRecordResult}>
              {voiceRecordData[0].buttonText}
            </W.FinishRecordButton>
          </W.VoiceRecorder>

          <W.CancelButton
            onClick={() => {
              navigate("/word");
            }}
          >
            {voiceRecordData[0].subButtonText}
          </W.CancelButton>
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
