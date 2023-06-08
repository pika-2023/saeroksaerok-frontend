import React, { useState } from "react";
import CommentType from "./CommentType";
import styled from "styled-components";
import variables from "../styles/variables";
import useStore from "../state/store";

const CommentModal = ({ setIsOpenModal, detailData }) => {
  const { commentType, removeCommentType } = useStore((state) => state);

  const CloseCommentModal = () => {
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
      <CommentModalBackground
        onClick={CloseCommentModal}
      ></CommentModalBackground>
      {!commentTypeModal && (
        <CommentMethodContainer>
          <CommentMethodTitle>
            어떤 방식으로
            <br /> 답글을 남길까요?
          </CommentMethodTitle>
          <CommentMethod>
            <ChooseCommentMethod data-value="card" onClick={ClickMethod}>
              덕담 카드
              <CommentMethodArrowRight>{">"}</CommentMethodArrowRight>
            </ChooseCommentMethod>
            <ChooseCommentMethod data-value="voice" onClick={ClickMethod}>
              목소리
              <CommentMethodArrowRight>{">"}</CommentMethodArrowRight>
            </ChooseCommentMethod>
            <ChooseCommentMethod data-value="text" onClick={ClickMethod}>
              키보드
              <CommentMethodArrowRight>{">"}</CommentMethodArrowRight>
            </ChooseCommentMethod>
          </CommentMethod>
        </CommentMethodContainer>
      )}
      {commentTypeModal && (
        <CommentType
          type={commentType}
          setCommentTypeModal={setCommentTypeModal}
          setIsOpenModal={setIsOpenModal}
          detailData={detailData}
        />
      )}
      {!commentTypeModal && (
        <CancelMakeComment onClick={CloseCommentModal}>
          뒤로가기
        </CancelMakeComment>
      )}
    </>
  );
};

export default CommentModal;

const CommentModalBackground = styled.div`
  ${variables.position("fixed", "0", "0", "0", "0")}
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(45px);
  z-index: 10;
`;

const CommentMethodContainer = styled.ul`
  ${variables.widthHeight("335px", "288px")}
  ${variables.position("fixed", "405px", "20px", "105px", "20px")}
  margin : auto;
  background: ${(props) => props.theme.style.white};
  box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  z-index: 10;
`;

const CommentMethodTitle = styled.div`
  ${variables.fontStyle("24px", 600)};
  ${variables.widthHeight("fit-content", "66px")};
  margin: 20px;
  color: ${(props) => props.theme.style.black};
  line-height: 33px;
`;

const CommentMethod = styled.div`
  ${variables.flex("column", "center", "center")}
  gap: 32px;
`;

const ChooseCommentMethod = styled.li`
  ${variables.flex("row", "space-between", "center")}
  ${variables.widthHeight("295px", "31px")}
  ${variables.fontStyle("22px", 500)}
  color: ${(props) => props.theme.style.black};
`;

const CommentMethodArrowRight = styled.div`
  color: #ababab;
`;

const CancelMakeComment = styled.div`
  ${variables.position("fixed", "null", "156px", "12px", "156px")}
  ${variables.widthHeight("64px", "29px")}
  margin :  auto;
  color: ${(props) => props.theme.style.gray4};
  text-align: center;
  z-index: 9999;
`;
