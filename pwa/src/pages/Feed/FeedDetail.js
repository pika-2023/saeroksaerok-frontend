import React, { useState } from "react";
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

  return (
    <FeedDetailContainer isOpenModal={isOpenModal}>
      <FeedReturnButton
        onClick={() => {
          navigate("/feed");
          removeFeedDetailData();
        }}
      >
        {"<"} 뒤로가기
      </FeedReturnButton>

      {feedDetailData.map(({ id, name, upload_date, word, text }) => {
        const sliceData = (a, b) => {
          return upload_date?.slice(a, b);
        };
        return (
          <FeedFrame key={id}>
            <FeedInfo>
              <FeedOwnerInfo>
                <FeedOwnerImg></FeedOwnerImg>
                <FeedOwnerName>{name}</FeedOwnerName>
              </FeedOwnerInfo>
              <FeedUploadDate>
                {`${sliceData(0, 4)}년 ${sliceData(5, 7)}월
                ${sliceData(8, 10)}일`}
              </FeedUploadDate>
            </FeedInfo>
            <FeedImg></FeedImg>

            <FeedContent>
              <FeedWord>{word}</FeedWord>
              <ListenToVoice>
                목소리 듣기 <VoiceButton></VoiceButton>
              </ListenToVoice>
            </FeedContent>
            <FeedText>{text}</FeedText>
          </FeedFrame>
        );
      })}

      <MakeComment onClick={OpenCommentModal}>답글 남기기</MakeComment>

      {isOpenModal && (
        <CommentModal
          setIsOpenModal={setIsOpenModal}
          feedDetailData={feedDetailData}
        />
      )}
    </FeedDetailContainer>
  );
};

export default FeedDetail;

const FeedDetailContainer = styled.div``;

const FeedReturnButton = styled.div`
  ${variables.widthHeight("335px", "29px")}
  margin : 52px auto;
  cursor: pointer;

  @media (min-width: 769px) {
    margin: 32px 0 0 0;
  }
`;

const FeedFrame = styled.div`
  width: 335px;
  margin: 20px auto 25px;
  padding-bottom: 28px;
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
`;

const FeedImg = styled.div`
  ${variables.widthHeight("335px", "242px")}
  margin-top : 20px;
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
  border : none;
  border-radius: 50%;
  background-color: #ababab;
`;

const FeedText = styled.div`
  ${variables.fontStyle("22px", 500)};
  ${variables.widthHeight("100%", "fit-content")};

  line-height: 31px;
`;

const MakeComment = styled.button`
  ${variables.position("fixed", "null", 0, 0, 0)}
  ${variables.widthHeight("375px", "82px")};
  ${variables.fontStyle("22px", 600)}
  margin: auto;
  color: ${(props) => props.theme.style.black};
  background-color: ${(props) => props.theme.style.yellow2};
  border: none;
`;
