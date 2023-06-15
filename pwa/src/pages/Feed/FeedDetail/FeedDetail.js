import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CommentModal from "../../../components/CommentModal";
import * as D from "./FeedDetail.style";
import useStore from "../../../state/store";
import { COMMENT_METHOD } from "../../../components/Modal/modalData";

const FeedDetail = () => {
  const navigate = useNavigate();
  const { feedDetailData, removeFeedDetailData, modalData, setModalData } =
    useStore((state) => state);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const OpenCommentModal = () => {
    setIsOpenModal(true);
    setModalData(COMMENT_METHOD);
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
  }, [isOpenModal]);

  const sliceData = (a, b) => {
    return detailData?.createdAt?.slice(a, b);
  };

  const combineReplies = [detailData?.textReplies, detailData?.emojiReplies];

  const allReplies = combineReplies.flat();

  const allRepliesSort = allReplies.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  console.log(feedDetailData[0]?.profileImageUrl);

  return (
    <>
      <D.FeedDetailContainer isOpenModal={isOpenModal}>
        <D.FeedDetailTab>
          <D.FeedReturnButton
            onClick={() => {
              navigate("/feed");
              removeFeedDetailData();
            }}
          >
            {"<"} 뒤로가기
          </D.FeedReturnButton>
        </D.FeedDetailTab>

        <D.FeedFrame key={detailData?.id}>
          <D.FeedInfo>
            <D.FeedOwnerInfo>
              <D.FeedOwnerImg src={feedDetailData[0]?.profileImageUrl} />
              <D.FeedOwnerName>{detailData?.author}</D.FeedOwnerName>
            </D.FeedOwnerInfo>
            <D.FeedUploadDate>
              {`${sliceData(0, 4)}년 ${sliceData(5, 7)}월
                ${sliceData(8, 10)}일`}
            </D.FeedUploadDate>
          </D.FeedInfo>
          <D.FeedImg src={detailData?.pictureDiary} />
          <D.FeedContent>
            <D.FeedWord>{detailData?.keyword}</D.FeedWord>
          </D.FeedContent>
          <D.FeedText>{detailData?.textDiary}</D.FeedText>
        </D.FeedFrame>
        {allRepliesSort?.map((reply) => {
          const createdAt = reply?.createdAt;
          const createdAtDate = new Date(createdAt);
          const currentDate = new Date();
          const timeDifference =
            currentDate.getTime() - createdAtDate.getTime();
          const secondsDifference = Math.floor(timeDifference / 1000);
          let displayText;

          if (secondsDifference < 60) {
            displayText = `방금 전`;
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

          return (
            <D.CommentFrame>
              <D.CommentInfo>
                <D.CommentAuthorInfo>
                  <D.ProfileImag src={reply?.profileImageUrl} alt="no" />
                  <div>{reply?.author}</div>
                </D.CommentAuthorInfo>
                <D.CommentCreatedAt>{displayText}</D.CommentCreatedAt>
              </D.CommentInfo>
              {reply?.emojiReply && (
                <div>
                  {reply?.emojiReply === "HAPPY" ? (
                    <D.EmojiReply
                      src="./images/card_blessing_happy.png"
                      alt="none"
                    />
                  ) : (
                    <D.EmojiReply
                      src="./images/card_blessing_beautiful.png"
                      alt="none"
                    />
                  )}
                </div>
              )}
              {reply?.textReply && (
                <D.VoiceReplyContainer>
                  <D.VoiceReply>{reply?.textReply}</D.VoiceReply>
                  <D.VoiceButton></D.VoiceButton>
                </D.VoiceReplyContainer>
              )}
            </D.CommentFrame>
          );
        })}
      </D.FeedDetailContainer>

      <D.MakeComment onClick={OpenCommentModal}>답글 남기기</D.MakeComment>

      {isOpenModal && (
        <CommentModal
          setIsOpenModal={setIsOpenModal}
          feedDetailData={feedDetailData}
          modalData={modalData}
          setModalData={setModalData}
          detailData={detailData}
        />
      )}
    </>
  );
};

export default FeedDetail;
