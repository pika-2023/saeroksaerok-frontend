import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../../state/store";
import * as D from "./FeedDetail.style";
import CommentModal from "../../../components/CommentModal";
import { COMMENT_METHOD } from "../../../components/Modal/modalData";

const FeedDetail = () => {
  const {
    feedDetailData,
    removeFeedDetailData,
    setModalData,
    isOpenModal,
    setIsOpenModal,
    detailData,
    setDetailData,
  } = useStore((state) => state);

  const navigate = useNavigate();

  const accessToken = localStorage.getItem("accessToken");
  const feedDetailApiUrl = `http://13.124.76.165:8080/diaries/${feedDetailData[0]?.id}`;

  useEffect(() => {
    fetch(feedDetailApiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: ` Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setDetailData(data));
  }, [isOpenModal]);

  const OpenCommentModal = () => {
    setIsOpenModal(true);
    setModalData(COMMENT_METHOD);
  };

  const sliceData = (a, b) => {
    return detailData?.createdAt?.slice(a, b);
  };

  const combineReplies = [detailData?.textReplies, detailData?.emojiReplies];

  const allReplies = combineReplies.flat();

  const allRepliesSort = allReplies.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const returnToFeed = () => {
    navigate("/feed");
    removeFeedDetailData();
  };

  return (
    <>
      <D.FeedDetailContainer isOpenModal={isOpenModal}>
        <D.FeedDetailTab>
          <D.FeedReturnButton onClick={returnToFeed}>
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
                  {reply?.author}
                </D.CommentAuthorInfo>
                <D.CommentCreatedAt>{displayText}</D.CommentCreatedAt>
              </D.CommentInfo>
              {reply?.emojiReply && (
                <>
                  {reply?.emojiReply === "HAPPY" ? (
                    <D.EmojiReply
                      src="./images/card_blessing_happy.png"
                      alt="happy image card"
                    />
                  ) : (
                    <D.EmojiReply
                      src="./images/card_blessing_beautiful.png"
                      alt="beautiful image card"
                    />
                  )}
                </>
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
      {isOpenModal && <CommentModal />}
    </>
  );
};

export default FeedDetail;
