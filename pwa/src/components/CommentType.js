import React, { useState } from "react";
import styled from "styled-components";
import variables from "../styles/variables";
import useStore from "../state/store";
import ListeningIconImg from "../assets/images/listeningIcon.png";

const CommentType = ({ setIsOpenModal, type }) => {
  const { feedDetailData } = useStore((state) => state);
  const [recoding, setRecoding] = useState(true);
  const ColesModal = () => {
    setIsOpenModal(false);
  };
  console.log(type);
  return (
    <>
      {feedDetailData.map(({ id, name, text, profile }) => {
        return (
          <div key={id}>
            <Post>
              <OwnerInfo>
                <PostOwnerProfileImg src={profile} alt="" />
                <PostOwner>{name}</PostOwner>
              </OwnerInfo>
              <PostText>{text}</PostText>
            </Post>
            {type[0] === "card" && (
              <CommentModal>
                <CommentModalTitle>
                  {name.slice(1)}님에게 전할
                  <br />
                  덕담을 골라주세요
                </CommentModalTitle>
                <BlessingComment>
                  <ChooseBlessingComment data-value="건강하세요">
                    건강하세요
                    <CommentMethodArrowRight>{">"}</CommentMethodArrowRight>
                  </ChooseBlessingComment>
                  <ChooseBlessingComment data-value="행복하세요">
                    행복하세요
                    <CommentMethodArrowRight>{">"}</CommentMethodArrowRight>
                  </ChooseBlessingComment>
                  <ChooseBlessingComment data-value="아름다운 추억이에요">
                    아름다운 추억이에요
                    <CommentMethodArrowRight>{">"}</CommentMethodArrowRight>
                  </ChooseBlessingComment>
                </BlessingComment>
              </CommentModal>
            )}
            {type[0] === "voice" && (
              <CommentModal>
                {recoding && (
                  <>
                    <CommentModalTitle>
                      {name.slice(1)}님의 말씀을
                      <br />
                      듣고 있어요
                    </CommentModalTitle>
                    <RecodingComment src={ListeningIconImg} />
                  </>
                )}
                {recoding ? (
                  <>
                    <StopRecoding
                      onClick={() => {
                        setRecoding(false);
                      }}
                    >
                      말 끝맺기
                    </StopRecoding>
                    <CancelMakeComment onClick={ColesModal}>
                      취소하기
                    </CancelMakeComment>
                  </>
                ) : (
                  <>
                    <MakeComment> 답글 남기기</MakeComment>
                    <CorrectionComment>답글 수정하기</CorrectionComment>
                  </>
                )}
              </CommentModal>
            )}
          </div>
        );
      })}
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
  ${variables.fontStyle("22px", 500)};
  margin: 24px 0px 32px;
  line-height: 31px;
`;

const CommentModal = styled.ul`
  ${variables.widthHeight("335px", "322px")}
  ${variables.position("fixed", "405px", "20px", "105px", "20px")}
  margin : auto;
  padding: 20px;
  background: ${(props) => props.theme.style.white};
  box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  z-index: 10;
`;

const CommentModalTitle = styled.div`
  ${variables.fontStyle("24px", 600)};
  ${variables.widthHeight("fit-content", "66px")};
  margin: 4px 0 2px 0px;
  color : ${(props) => props.theme.style.black}
  line-height: 33px;
`;

const RecodingComment = styled.img`
  ${variables.position("absolute", "50%", "null", "null", "50%")};
  ${variables.widthHeight("96px", "96px")};
  transform: translate(-50%, -50%);
`;

const StopRecoding = styled.div`
  ${variables.position("fixed", "null", "0", "62px", "0")}
  ${variables.widthHeight("335px", "68px")}
  ${variables.fontStyle("22px", 600)}
  padding : 16px;
  margin: 0 20px;
  border-top: 1px solid;
  text-align: center;
`;

const MakeComment = styled.div`
  ${variables.position("fixed", "null", "0", "62px", "0")}
  ${variables.widthHeight("335px", "68px")}
  ${variables.fontStyle("22px", 600)}
  padding : 16px;
  margin: 0 20px;
  border-top: 1px solid;
  color: white;
  background-color: black;
  border-radius: 0 0 24px 24px;
  text-align: center;
`;

const BlessingComment = styled.div``;

const ChooseBlessingComment = styled.li`
  ${variables.flex("row", "space-between", "center")}
  ${variables.widthHeight("295px", "31px")}
  ${variables.fontStyle("22px", 500)}
  margin-top : 32px;
  color: ${(props) => props.theme.style.black};
`;

const CommentMethodArrowRight = styled.div`
  color: #ababab;
`;

const CancelMakeComment = styled.div`
  ${variables.widthHeight("64px", "29px")}
  ${variables.position("fixed", "null", "156px", "12px", "156px")}
  margin :  auto;
  /* bottom : 32px */
  text-align: center;
  color: ${(props) => props.theme.style.white};
  z-index: 10;
`;

const CorrectionComment = styled.div`
  ${variables.widthHeight("99px", "29px")}
  ${variables.position("fixed", "null", "50%", "12px", "50%")}
  margin :  auto;
  /* bottom : 32px */
  text-align: center;
  color: ${(props) => props.theme.style.white};
  transform: translate(-50%, -50%);
  z-index: 10;
`;
