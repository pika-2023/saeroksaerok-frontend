import React, { useState, useEffect } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import MicRecorder from "mic-recorder-to-mp3";
import variables from "../styles/variables";
import useStore from "../state/store";

const CommentType = ({ setIsOpenModal, type, detailData }) => {
  const [isVisible, setIsVisible] = useState(true);
  const {
    removeCommentType,
    setAudioUrl,
    isRecording,
    setIsRecording,
    recorder,
    setRecorder,
    feedDetailData,
  } = useStore((state) => state);

  const [voiceFile, setVoiceFile] = useState({});
  const [recording, setRecording] = useState(0);
  const [textComment, setTextComment] = useState("");
  const CloseModal = () => {
    setIsOpenModal(false);
    removeCommentType();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prevVisible) => !prevVisible);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
  const formData = new FormData();

  const stopRecording = async () => {
    try {
      const [buffer, blob] = await recorder.stop().getMp3();
      const file = new File(buffer, "reply_audio.mp3", {
        type: blob.type,
        lastModified: Date.now(),
      });

      if (file.size === 0) {
        console.log("파일이 비어있거나 유효하지 않습니다");
        return;
      }

      formData.append("diaryId", detailData.id);
      formData.append("audioReply", file);
      console.log("formData:", ...formData);

      setAudioUrl(URL.createObjectURL(file));
      setIsRecording(false);

      if (accessToken) {
        axios
          .post("http://13.124.76.165:8080/replies/text", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((response) => {
            console.log("음성 파일 업로드 성공 ✨", response.data);
            setVoiceFile(response.data);
            setRecording(2);
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
    } else {
      startRecording();
      setRecording(1);
    }
  };

  const VoiceComment = () => {
    CloseModal();
  };

  const accessToken = localStorage.getItem("accessToken");

  const CommentCard = (e) => {
    fetch("http://13.124.76.165:8080/replies/emoji", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: ` Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        diaryId: detailData.id,
        emoji: e.currentTarget.dataset.value,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        CloseModal();
      });
  };

  return (
    <>
      <Post>
        <OwnerInfo>
          <PostOwnerProfileImg
            src={feedDetailData[0]?.profileImageUrl}
            alt="새록새록"
          />
          <PostOwner>{detailData?.author}</PostOwner>
        </OwnerInfo>
        <PostText>{detailData?.textDiary}</PostText>
      </Post>
      {type[0] === "card" && (
        <CommentModal>
          <CommentModalTitle>
            {detailData.author}님에게 전할
            <br />
            덕담을 골라주세요
          </CommentModalTitle>
          <BlessingComment>
            <ChooseBlessingComment data-value="HAPPY" onClick={CommentCard}>
              <BlessingIcons
                src="./icons/icon_blessing_happy.png"
                alt="새록새록"
              />
              <CommentValue>행복하세요</CommentValue>
            </ChooseBlessingComment>
            <ChooseBlessingComment data-value="BEAUTIFUL" onClick={CommentCard}>
              <BlessingIcons
                src="./icons/icon_blessing_beautiful.png"
                alt="새록새록"
              />
              <CommentValue>아름다워요</CommentValue>
            </ChooseBlessingComment>
          </BlessingComment>
          <CancelMakeComment onClick={CloseModal}>뒤로가기</CancelMakeComment>
        </CommentModal>
      )}
      {type[0] === "voice" && (
        <CommentModal>
          {recording === 2 ? (
            <CommentModalTitle>
              {detailData?.author}님에게 남길
              <br />
              답장이에요
            </CommentModalTitle>
          ) : (
            <CommentModalTitle>
              {detailData.author}님에게 남길
              <br />
              답장을 말씀해주세요
            </CommentModalTitle>
          )}

          {recording === 1 && (
            <ListenCarefully isVisible={isVisible}>
              귀 기울여 듣고 있어요
            </ListenCarefully>
          )}
          {recording === 2 && (
            <SpeechToText>{voiceFile.textReply}</SpeechToText>
          )}
          {recording === 0 && (
            <>
              <StopRecording onClick={handleButtonClick}>
                말 시작하기
              </StopRecording>
              <CancelMakeComment onClick={CloseModal}>
                취소하기
              </CancelMakeComment>
            </>
          )}
          {recording === 1 && (
            <>
              <MakeComment onClick={handleButtonClick}> 말 끝맺기 </MakeComment>
              <CorrectComment>뒤로가기</CorrectComment>
            </>
          )}
          {recording === 2 && (
            <>
              <MakeComment onClick={VoiceComment}>답장 남기기</MakeComment>
              <CorrectComment onClick={CloseModal}>
                답장 수정하기
              </CorrectComment>
            </>
          )}
        </CommentModal>
      )}
      {type[0] === "text" && (
        <CommentModal>
          <TextCommentInput
            type="textarea"
            onChange={(e) => {
              setTextComment(e.target.value);
            }}
          />

          <MakeComment> 답글 남기기</MakeComment>
          <CancelMakeComment onClick={CloseModal}>취소하기</CancelMakeComment>
        </CommentModal>
      )}
    </>
  );
};

export default CommentType;

const Post = styled.div`
  ${variables.widthHeight("335px", "237px")}
  ${variables.position("fixed", "150px", "20px", "445px", "20px")}
  margin : auto;
  padding: 20px;
  background: ${(props) => props.theme.style.white};
  box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  z-index: 10;
`;

const OwnerInfo = styled.div`
  ${variables.flex("row", "null", "center")}
`;

const PostOwnerProfileImg = styled.img`
  ${variables.widthHeight("32px", "32px")}
  border-radius : 50%;
`;

const PostOwner = styled.div`
  ${variables.fontStyle("19px", 600)}
`;

const PostText = styled.div`
  ${variables.widthHeight("100%", "129px")}
  ${variables.fontStyle("22px", 500)};
  margin: 24px 0px 32px;
  line-height: 31px;
  overflow: scroll;
`;

const CommentModal = styled.ul`
  ${variables.widthHeight("335px", "288px")}
  ${variables.position("fixed", "405px", "20px", "105px", "20px")}
  margin : auto;
  background: ${(props) => props.theme.style.white};
  box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  z-index: 10;
`;

const CommentModalTitle = styled.div`
  ${variables.fontStyle("24px", 600)};
  ${variables.widthHeight("fit-content", "66px")};
  margin: 20px 0 30px 20px;
  color: ${(props) => props.theme.style.black};
  line-height: 33px;
`;

const BlessingIcons = styled.img`
  ${variables.widthHeight("36px", "36px")}
`;

const CommentValue = styled.div`
  ${variables.widthHeight("80px", "29px")}
  ${variables.fontStyle("19px", 500)}
  line-height: 29px;
  text-align: center;
  letter-spacing: -0.03em;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const ListenCarefully = styled.div`
  ${variables.position("absolute", "50%", "null", "null", "50%")};
  ${variables.fontStyle("19px", 500)}
  opacity: 0;
  animation: ${fadeIn} 3s infinite;
  ${({ isVisible }) => isVisible && "opacity: 1;"}
  transform: translate(-50%, -50%);
  line-height: 29px;
  text-align: right;
  letter-spacing: -0.03em;
`;

const SpeechToText = styled.div`
  ${variables.position("absolute", "130px", "null", "null", "20px")};
  ${variables.fontStyle("24px", 500)};
  ${variables.widthHeight("293px", "35px")};
  line-height: 35px;
  letter-spacing: -0.03em;
  color: #4c4c4c;
  text-align: center;
`;

const StopRecording = styled.div`
  ${variables.flex("row", "center", "center")}
  ${variables.position("fixed", "605px", "20px", "85px", "20px")}
  ${variables.widthHeight("335px", "68px")}
  ${variables.fontStyle("22px", 600)}
  padding : 16px;
  margin: auto;
  background-color: ${(props) => props.theme.style.yellow1};
  border-radius: 0 0 24px 24px;
  cursor: pointer;
`;

const MakeComment = styled.div`
  ${variables.flex("row", "center", "center")}
  ${variables.position("fixed", "605px", "20px", "85px", "20px")}
  ${variables.widthHeight("335px", "68px")}
  ${variables.fontStyle("22px", 600)}
  padding : 16px;
  margin: auto;
  border-top: 1px solid #e2e2e2;
  color: ${(props) => props.theme.style.black};
  background-color: ${(props) => props.theme.style.yellow2};
  border-radius: 0 0 24px 24px;
  cursor: pointer;
`;

const BlessingComment = styled.div`
  ${variables.flex("row", "center", "center")}
  gap : 11px;
  margin: 0 20px;
`;

const TextCommentInput = styled.textarea`
  ${variables.widthHeight("100%", "75%")}
  ${variables.fontStyle("24px", 500)}
  border: none;
  white-space: pre-wrap;
`;

const ChooseBlessingComment = styled.div`
  ${variables.flex("column", "center", "center")}
  ${variables.widthHeight("142px", "107px")}
  ${variables.fontStyle("22px", 500)};
  color: ${(props) => props.theme.style.gray5};
  background-color: ${(props) => props.theme.style.gray1};
  border-radius: 12px;
  cursor: pointer;
`;

const CancelMakeComment = styled.div`
  ${variables.widthHeight("64px", "29px")}
  ${variables.position("fixed", "null", "50%", "12px", "50%")}
  ${variables.fontStyle("19px", 500)}
  margin :  auto;
  color: ${(props) => props.theme.style.gray4};
  text-align: center;
  line-height: 29px;
  text-align: right;
  letter-spacing: -0.03em;
  transform: translate(-50%, 0%);
  z-index: 10;
  cursor: pointer;
`;

const CorrectComment = styled.div`
  ${variables.widthHeight("100px", "29px")}
  ${variables.position("fixed", "null", "50%", "12px", "50%")}
  ${variables.fontStyle("19px", 500)}
  margin :  auto;
  color: ${(props) => props.theme.style.gray4};
  text-align: center;
  line-height: 29px;
  text-align: right;
  letter-spacing: -0.03em;
  transform: translate(-50%, 0%);
  z-index: 10;
  cursor: pointer;
`;
