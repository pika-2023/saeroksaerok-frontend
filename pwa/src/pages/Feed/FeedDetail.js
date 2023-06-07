import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CommentModal from "../../components/CommentModal";
import styled from "styled-components";
import variables from "../../styles/variables";
import useStore from "../../state/store";

const FeedDetail = () => {
  const navigate = useNavigate();
  const { feedDetailData, removeFeedDetailData } = useStore((state) => state);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const OpenCommentModal = () => {
    setIsOpenModal(true);
  };
  const [detailData, setDetailData] = useState();
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    fetch(`http://13.124.76.165:8080/diaries/${feedDetailData[0]?.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: ` Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setDetailData(data));
  }, [accessToken, feedDetailData]);

  const sliceData = (a, b) => {
    return detailData?.createdAt?.slice(a, b);
  };

  const combineReplies = [detailData?.textReplies, detailData?.emojiReplies];
  const allReplies = combineReplies.flat();

  return (
    <>
      <FeedDetailContainer isOpenModal={isOpenModal}>
        <FeedReturnButton
          onClick={() => {
            navigate("/feed");
            removeFeedDetailData();
          }}
        >
          {"<"} 뒤로가기
        </FeedReturnButton>
        <FeedFrame key={detailData?.id}>
          <FeedInfo>
            <FeedOwnerInfo>
              <FeedOwnerImg></FeedOwnerImg>
              <FeedOwnerName>{detailData?.author}</FeedOwnerName>
            </FeedOwnerInfo>
            <FeedUploadDate>
              {`${sliceData(0, 4)}년 ${sliceData(5, 7)}월
                ${sliceData(8, 10)}일`}
            </FeedUploadDate>
          </FeedInfo>
          <FeedImg></FeedImg>
          <FeedContent>
            <FeedWord>{detailData?.keyword}</FeedWord>
            <ListenToVoice>
              목소리 듣기 <VoiceButton></VoiceButton>
            </ListenToVoice>
          </FeedContent>
          <FeedText>{detailData?.textDiary}</FeedText>
        </FeedFrame>
        {allReplies?.reverse().map((a) => {
          const createdAt = a?.createdAt;
          const createdAtDate = new Date(createdAt);
          const currentDate = new Date();

          const timeDifference =
            currentDate.getTime() - createdAtDate.getTime();
          const secondsDifference = Math.floor(timeDifference / 1000);

          let displayText;

          if (secondsDifference < 60) {
            displayText = `${secondsDifference}초 전`;
          } else if (secondsDifference < 3600) {
            const minutesDifference = Math.floor(secondsDifference / 60);
            displayText = `${minutesDifference}분 전`;
          } else if (secondsDifference < 86400) {
            const hoursDifference = Math.floor(secondsDifference / 3600);
            displayText = `${hoursDifference}시간 전`;
          } else {
            const daysDifference = Math.floor(secondsDifference / 86400);
            displayText = `${daysDifference}일 전`;
          }
          console.log(a);

          return (
            <CommentSection>
              <CommentFrame>
                <CommentInfo>
                  <div>{a?.author}</div>
                  <div>{displayText}</div>
                </CommentInfo>
                {a?.emojiReply && (
                  <div value={a?.emojiReply}>{a?.emojiReply}</div>
                )}
                <div>{a?.textReply}</div>
              </CommentFrame>
            </CommentSection>
          );
        })}

        {isOpenModal && (
          <CommentModal
            setIsOpenModal={setIsOpenModal}
            detailData={detailData}
          />
        )}
      </FeedDetailContainer>
      <MakeComment value={allReplies.length} onClick={OpenCommentModal}>
        답장 남기기
      </MakeComment>
    </>
  );
};

export default FeedDetail;

const FeedDetailContainer = styled.div`
  margin-bottom: 96px;
`;

const FeedReturnButton = styled.div`
  ${variables.widthHeight("100%", "96px")}
  ${variables.position("fixed", "0", "null", "null", "0")}
  padding: 61px 0 0 20px;
  background-color: ${(props) => props.theme.style.white};
  cursor: pointer;

  @media (min-width: 769px) {
    ${variables.position("sticky", "41px", "null", "null", "null")}
    ${variables.widthHeight("375px", "96px")}
    margin: calc(-20px);
    padding: 61px 0 0 20px;
    background-color: white;
    transform: translate(0px, -62px);
  }
`;

const FeedFrame = styled.div`
  width: 100vw;
  margin: 96px calc(-20px) 25px;
  padding: 0 20px 28px;
  border-bottom: solid 1px #e2e2e2;

  @media (min-width: 769px) {
    width: 375px;
    margin: 20px calc(-20px) 25px;
    padding: 0 20px 28px 20px;
    border-bottom: solid 1px #e2e2e2;
  }
`;

const FeedInfo = styled.div`
  ${variables.flex("", "space-between", "center")}
`;

const FeedOwnerInfo = styled.div`
  ${variables.flex()}
  gap : 5px;
`;

const FeedOwnerImg = styled.div`
  ${variables.widthHeight("32px", "32px")}
  background-color: ${(props) => props.theme.style.gray1};
  border-radius: 50%;
`;

const FeedOwnerName = styled.div`
  ${variables.fontStyle("19px", 600)};
`;

const FeedUploadDate = styled.div`
  ${variables.fontStyle("19px", 500)};
  color: ${(props) => props.theme.style.gray3};
  line-height: 29px;
  text-align: right;
  letter-spacing: -0.03em;
`;

const FeedImg = styled.div`
  ${variables.widthHeight("335px", "242px")}
  margin : 20px auto 0;
  background-color: ${(props) => props.theme.style.gray1};
`;

const FeedContent = styled.div`
  ${variables.flex("", "space-between", "center")}
  margin : 24px 0  16px 0;
`;

const FeedWord = styled.div`
  ${variables.fontStyle("24px", 500)};
`;

const ListenToVoice = styled.div`
  ${variables.flex("row", "null", "center", "null")}
  ${variables.fontStyle("19px", 500)};
  gap: 8px;
  color: #828282;
`;

const VoiceButton = styled.button`
  ${variables.widthHeight("28px", "28px")}
  border:none;
  background: url(icons/icon_voice.png);
  background-size: 100% 100%;
`;

const FeedText = styled.div`
  ${variables.fontStyle("22px", 500)};
  ${variables.widthHeight("100%", "fit-content")};
  color: ${(props) => props.theme.style.gray5};
  line-height: 32px;
  letter-spacing: -0.03em;
`;

const MakeComment = styled.button`
  ${variables.position("fixed", "null", 0, 0, 0)}
  ${variables.widthHeight("100%", "82px")};
  ${variables.fontStyle("22px", 600)}
  margin: auto;
  color: ${(props) => props.theme.style.black};
  background-color: ${(props) => props.theme.style.yellow2};
  border: none;

  @media (min-width: 769px) {
    ${variables.widthHeight("375px", "82px")};
    ${variables.fontStyle("22px", 600)}
    position: ${(props) => (props.value === 0 ? "fixed" : "sticky")};
    right: 0px;
    bottom: 0px;
    left: 0px;
    color: rgb(47, 47, 47);
    margin: ${(props) => (props.value === 0 ? "auto" : "calc(-20px)")};
    transform: ${(props) =>
      props.value === 0 ? "null" : "translate(0px, 20px)"};
    background-color: rgb(255, 227, 128);
    border: none;
  }
`;

//TODO : 스타일 작업 필요
const CommentSection = styled.div``;
//

const CommentFrame = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

const CommentInfo = styled.div`
  ${variables.flex("row", "space-between", "null")}
  margin-bottom : 16px;
`;
