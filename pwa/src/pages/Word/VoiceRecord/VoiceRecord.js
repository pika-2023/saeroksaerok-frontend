import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "../Word.style";
import * as W from "./VoiceRecord.style";

import MicRecorder from "mic-recorder-to-mp3";
import styled from "styled-components";

const VoiceRecord = (e) => {
  const navigate = useNavigate();

  const [recorders, setRecorders] = useState([null, null, null]);
  const [audioUrls, setAudioUrls] = useState([null, null, null]);

  const accessToken = localStorage.getItem("accessToken");
  const recordApiUrl = "http://13.124.76.165:8080/diaries";

  const handleButtonClick = async (index) => {
    if (recorders[index]) {
      await stopRecording(index);
    } else {
      startRecording(index);
    }
  };

  const startRecording = async (index) => {
    const mp3Recorder = new MicRecorder({ bitRate: 128 });

    try {
      await mp3Recorder.start();
      setRecorders((prevRecorders) => {
        const newRecorders = [...prevRecorders];
        newRecorders[index] = mp3Recorder;
        return newRecorders;
      });
    } catch (error) {
      console.error(error);
    }
  };

  const stopRecording = async (index) => {
    try {
      const recorder = recorders[index];
      if (!recorder) {
        return;
      }

      await recorder.stop();
      const [buffer, blob] = await recorder.getMp3();

      console.log("buffer:", buffer);
      console.log("blob:", blob);

      const numberSuffix = ["st", "nd", "rd"];
      const suffix = numberSuffix[index] || "th";
      const fileName = `${index + 1}${suffix}_q.mp3`;

      const file = new File([blob], fileName, {
        type: "audio/mp3", // 파일 형식 지정
        lastModified: Date.now(),
      });

      if (file.size === 0) {
        console.log("File is empty or invalid.");
        return;
      }

      console.log("File:", file);

      setAudioUrls((prevAudioUrls) => {
        const newAudioUrls = [...prevAudioUrls];
        newAudioUrls[index] = URL.createObjectURL(file);
        return newAudioUrls;
      });

      // Make POST request to upload audio to the server
      if (accessToken) {
        const formData = new FormData();
        formData.append("keyword", "설레임");

        // Append first answer file
        if (index === 0) {
          formData.append("firstAnswer", file, "1st_q.mp3");
        } else if (index === 1) {
          // Append second answer file
          formData.append("secondAnswer", file, "2nd_q.mp3");
        } else if (index === 2) {
          // Append third answer file
          formData.append("thirdAnswer", file, "3rd_q.mp3");
        }

        // Append additional files to FormData
        for (let i = 0; i < recorders.length; i++) {
          if (i !== index) {
            const additionalRecorder = recorders[i];
            if (additionalRecorder) {
              await additionalRecorder.stop();
              const [_, additionalBlob] = await additionalRecorder.getMp3();
              const additionalSuffix = numberSuffix[i] || "th";
              const additionalFileName = `${i + 1}${additionalSuffix}_q.mp3`;
              const additionalFile = new File(
                [additionalBlob],
                additionalFileName,
                {
                  type: additionalBlob.type,
                  lastModified: Date.now(),
                }
              );

              // Append additional answer file
              if (i === 0) {
                formData.append(
                  "firstAnswer",
                  additionalFile,
                  additionalFileName
                );
              } else if (i === 1) {
                formData.append(
                  "secondAnswer",
                  additionalFile,
                  additionalFileName
                );
              } else if (i === 2) {
                formData.append(
                  "thirdAnswer",
                  additionalFile,
                  additionalFileName
                );
              }
            }
          }
        }

        // 콘솔에 formData 출력
        console.log("...formData", ...formData);

        console.log(
          "formData",
          Array.from(formData).reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
          }, {})
        );

        // 서버로 formData 전송
        axios
          .post(recordApiUrl, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${accessToken}`,
            },
            transformRequest: (data, headers) => {
              return data;
            },
          })

          .then((res) => {
            console.log(res);
            console.log("음성 파일 등록 성공:", res.data);
          })
          .catch((err) => {
            console.log("등록을 실패하였습니다:", err);
          });
      } else {
        console.log("액세스 토큰이 없습니다");
      }
    } catch (err) {
      console.error("err", err);
    }
  };

  return (
    <W.VoiceRecordContainer>
      {/* First Answer */}
      <AnswerContainer>
        <button onClick={() => handleButtonClick(0)}>
          {recorders[0] ? "Stop recording1" : "Start recording1"}
        </button>
      </AnswerContainer>

      {/* Second Answer */}
      <AnswerContainer>
        <button onClick={() => handleButtonClick(1)}>
          {recorders[1] ? "Stop recording2" : "Start recording2"}
        </button>
      </AnswerContainer>

      {/* Third Answer */}
      <AnswerContainer>
        <button onClick={() => handleButtonClick(2)}>
          {recorders[2] ? "Stop recording3" : "Start recording3"}
        </button>
      </AnswerContainer>

      <W.VoiceRecordTitle>언제 있었던 일인가요?</W.VoiceRecordTitle>
      <W.StartRecordButton value={0}>말 시작하기</W.StartRecordButton>
      <W.CancelButton onClick={() => navigate("/word")}>
        취소하기
      </W.CancelButton>
    </W.VoiceRecordContainer>
  );
};

export default VoiceRecord;

const AnswerContainer = styled.div`
  margin: 100px;

  button {
    width: 100px;
    height: 100px;
  }
`;

////////////////////////// 녹음 테스트

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import useStore from "../../../state/store";
// import * as S from "../Word.style";
// import * as W from "./VoiceRecord.style";
// import { SAVE_AUDIO } from "./voiceRecordData";

// const VoiceRecord = (e) => {
//   const navigate = useNavigate();
//   const {
//     setVoiceRecordData,
//     stream,
//     setStream,
//     media,
//     setMedia,
//     onRec,
//     setOnRec,
//     source,
//     setSource,
//     analyser,
//     setAnalyser,
//     audioUrl,
//     setAudioUrl,
//     setDisabled,
//   } = useStore((state) => state);

//   const [sound, setSound] = useState(null);

//   // MARK: 음성 녹음하기
//   const onRecAudio = () => {
//     setDisabled(true);

//     // 음원 정보를 담은 노드를 생성하거나 음원을 실행, 또는 디코딩함
//     const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
//     // JS를 통해 음원의 진행 상태에 직접 접근하는 역할
//     const analyser = audioCtx.createScriptProcessor(0, 1, 1);
//     setAnalyser(analyser);

//     function makeSound(stream) {
//       // 내 컴퓨터의 마이크 or 다른 소스를 통해 발생한 오디오 스트림의 정보를 보여줌
//       const source = audioCtx.createMediaStreamSource(stream);
//       setSource(source);
//       source.connect(analyser);
//       analyser.connect(audioCtx.destination);
//     }
//     // 마이크 사용 권한 획득
//     navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
//       const mediaRecorder = new MediaRecorder(stream);
//       mediaRecorder.start();
//       setStream(stream);
//       setMedia(mediaRecorder);
//       makeSound(stream);

//       analyser.onaudioprocess = function (e) {
//         // 3분(180초) 이후 자동으로 음성 저장 및 녹음 중지
//         if (e.playbackTime > 180) {
//           stream.getAudioTracks().forEach(function (track) {
//             track.stop();
//           });
//           mediaRecorder.stop();
//           // 메서드가 호출된 노드 연결 해제
//           analyser.disconnect();
//           audioCtx.createMediaStreamSource(stream).disconnect();

//           mediaRecorder.ondataavailable = function (e) {
//             setAudioUrl(URL.createObjectURL(audioBlob));
//             setOnRec(true);
//           };
//         } else {
//           setOnRec(false);
//         }
//       };
//     });
//   };

//   // MARK: 사용자가 음성 녹음을 중지했을 때
//   const offRecAudio = () => {
//     media.ondataavailable = function (e) {
//       const audioBlob = new Blob([e.data], { type: "audio/mp3" });
//       setAudioUrl(URL.createObjectURL(audioBlob));
//       setOnRec(true);
//       setSound(audioBlob);

//       if (audioBlob.size === 0) {
//         console.log("빈 파일입니다.");
//       } else {
//         const soundFile = new File([audioBlob], "soundBlob", {
//           lastModified: new Date().getTime(),
//           type: "audio",
//         });

//         setDisabled(false);
//         setSound(soundFile);
//         console.log("soundFile", soundFile);
//       }
//     };

//     stream.getAudioTracks().forEach(function (track) {
//       track.stop();
//     });

//     media.stop();

//     analyser.disconnect();
//     source.disconnect();

//     if (audioUrl) {
//       URL.revokeObjectURL(audioUrl); // Revoke the previous audio URL
//     }
//   };

//   // MARK: 녹음한 음성 재생하기
//   const play = () => {
//     const audio = new Audio(URL.createObjectURL(audioUrl));
//     audio.loop = false;
//     audio.volume = 1;
//     audio.play();
//   };

//   // 파일 다운로드
//   const downloadFile = () => {
//     const element = document.createElement("a");
//     element.setAttribute("href", audioUrl);
//     element.setAttribute("download", "recorded_audio.mp3");
//     element.style.display = "none";
//     document.body.appendChild(element);
//     element.click();
//     document.body.removeChild(element);
//   };

//   // mp3 파일 다운로드 및 재생
//   const audioBlob = new Blob([e.data], { type: "audio/mp3" });

//   const uploadAudio = async (audioFile) => {
//     try {
//       const formData = new FormData();
//       formData.append("audio", audioFile);

//       const response = await axios.post(recordApiUrl, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });
//       console.log("Audio uploaded successfully:", response.data);
//       // 서버로 오디오 업로드 후 응답 처리
//     } catch (error) {
//       console.error("Error uploading audio:", error);
//       // 오디오 업로드 중 오류 처리
//     }
//   };

//   const formData = new FormData();
//   formData.append("audioFile", audioBlob, "recorded_audio.mp3");

//   const accessToken = localStorage.getItem("accessToken");
//   const recordApiUrl = "http://13.124.76.165:8080/diaries";

//   useEffect(() => {
//     if (accessToken) {
//       axios
//         .post(recordApiUrl, formData, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${accessToken}`,
//           },
//         })
//         .then((response) => {
//           console.log("Audio uploaded successfully:", response.data);
//           const audioUrl = URL.createObjectURL(audioBlob);
//           downloadFile(audioUrl, "recorded_audio.mp3");
//         })
//         .catch((error) => {
//           console.error("Error uploading audio:", error);
//         });
//     }
//   }, []);

//   const showRecordResult = async () => {
//     setVoiceRecordData(SAVE_AUDIO);
//     offRecAudio();
//     if (audioUrl) {
//       // 테스트용으로 변환한 mp3 파일을 다운로드하는 코드
//       downloadFile();
//       // 서버에 업로드할 때는 여기에서 uploadAudio 함수 호출
//       await uploadAudio(sound); // 수정: sound 변수로 파일 전달
//     }
//     // navigate("/textResult");
//   };

//   console.log("sound", sound);
//   console.log("audioUrl", audioUrl);
//   console.log("audioBlob", audioBlob);
//   console.log("audioBlob size:", audioBlob.size);
//   console.log("formData", formData);
//   console.log("accessToken", accessToken);
//   console.log("source", source);

//   return (
//     <W.VoiceRecordContainer>
//       <S.TodayWordContainer>
//         <S.TodayWordContent src="./images/text_family.png" alt="가족 텍스트" />
//       </S.TodayWordContainer>

//       {/* MARK: 녹음 테스트용 요소 */}
//       <button onClick={play}>녹음본 듣기</button>

//       <W.VoiceRecordTitle>언제 있었던 일인가요?</W.VoiceRecordTitle>

//       {onRec ? (
//         <>
//           <W.StartRecordButton onClick={onRecAudio} value={0}>
//             말 시작하기
//           </W.StartRecordButton>
//         </>
//       ) : (
//         <>
//           <W.ListeningText>귀기울여 듣고 있어요</W.ListeningText>
//           <W.StartRecordButton onClick={showRecordResult} value={1}>
//             말 끝내기
//           </W.StartRecordButton>
//         </>
//       )}

//       <W.CancelButton onClick={() => navigate("/word")}>
//         취소하기
//       </W.CancelButton>
//     </W.VoiceRecordContainer>
//   );
// };

// export default VoiceRecord;
