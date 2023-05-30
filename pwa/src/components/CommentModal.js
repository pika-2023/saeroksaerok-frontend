import React, { useState } from "react";
import CommentType from "./CommentType";
import styled from "styled-components";
import variables from "../styles/variables";
import useStore from "../state/store";

const CommentModal = ({ setIsOpenModal }) => {
  const { commentType, removeCommentType } = useStore((state) => state);

  const ColesModal = () => {
    setIsOpenModal(false);
    removeCommentType();
  };

  const [commentTypeModal, setCommentTypeModal] = useState(false);

  const ClickMethod = (e) => {
    commentType.push(e.currentTarget.dataset.value);
    setCommentTypeModal(true);
  };

  return (
    <>
      <CommentModalBackground onClick={ColesModal}></CommentModalBackground>
      <CommentMethodContainer>
        <Title>
          어떤 방식으로
          <br /> 답글을 남길까요?
        </Title>
        <CommentMethod>
          <ChooseCommentMethod data-value="card" onClick={ClickMethod}>
            덕담 카드 보내기
            <CommentMethodArrowRight>{">"}</CommentMethodArrowRight>
          </ChooseCommentMethod>
          <ChooseCommentMethod data-value="voice" onClick={ClickMethod}>
            목소리로 답글 달기
            <CommentMethodArrowRight>{">"}</CommentMethodArrowRight>
          </ChooseCommentMethod>
          <ChooseCommentMethod data-value="text" onClick={ClickMethod}>
            키보드로 답글 달기
            <CommentMethodArrowRight>{">"}</CommentMethodArrowRight>
          </ChooseCommentMethod>
        </CommentMethod>
      </CommentMethodContainer>
      {commentTypeModal && (
        <CommentType type={commentType} setIsOpenModal={setIsOpenModal} />
      )}
      <CancelMakeComment onClick={ColesModal}>취소하기</CancelMakeComment>
    </>
  );
};

export default CommentModal;

const CommentModalBackground = styled.div`
  ${variables.position("fixed", "0", "0", "0", "0")}
  background: rgba(0, 0, 0, 0.4);
`;

const CommentMethodContainer = styled.ul`
  ${variables.widthHeight("335px", "322px")}
  ${variables.position("fixed", "405px", "20px", "105px", "20px")}
  margin : auto;
  padding: 20px;
  background: ${(props) => props.theme.style.white};
  box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  z-index: 10;
`;

const Title = styled.div`
  ${variables.fontStyle("24px", 600)};
  ${variables.widthHeight("fit-content", "66px")};
  margin: 4px 0 2px 0px;
  color : ${(props) => props.theme.style.black}
  line-height: 33px;
`;

const CommentMethod = styled.div``;

const ChooseCommentMethod = styled.li`
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
  z-index: 9999;
`;
