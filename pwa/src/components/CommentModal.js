import React, { useState } from "react";
import CommentType from "./CommentType";
import styled from "styled-components";
import variables from "../styles/variables";
import useStore from "../state/store";
import { COMMENT_METHOD } from "./Modal/modalData";

const CommentModal = ({
  setIsOpenModal,
  modalData,
  setModalData,
  detailData,
}) => {
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
            {modalData[0].title[0]} <br /> {modalData[0].title[1]}
          </CommentMethodTitle>
          <CommentMethod>
            <ChooseCommentMethod data-value="card" onClick={ClickMethod}>
              {modalData[0].options[0]}
              <CommentMethodArrowRight>{">"}</CommentMethodArrowRight>
            </ChooseCommentMethod>
            <ChooseCommentMethod data-value="voice" onClick={ClickMethod}>
              {modalData[0].options[1]}
              <CommentMethodArrowRight>{">"}</CommentMethodArrowRight>
            </ChooseCommentMethod>
            {modalData === COMMENT_METHOD && (
              <ChooseCommentMethod data-value="text" onClick={ClickMethod}>
                {modalData[0].options[2]}
                <CommentMethodArrowRight>{">"}</CommentMethodArrowRight>
              </ChooseCommentMethod>
            )}
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
  ${variables.position("fixed", "405px", "20px", "105px", "20px")}
  ${variables.widthHeight("335px", "auto")}
  margin : auto;
  background: ${(props) => props.theme.style.white};
  box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  z-index: 10;
`;

const CommentMethodTitle = styled.div`
  ${variables.fontStyle("24px", 600)};
  ${variables.widthHeight("fit-content", "66px")};
  margin: 20px 0 9px 20px;
  height: 30%;
  color: ${(props) => props.theme.style.black};
  line-height: 33px;
`;

const CommentMethod = styled.div`
  ${variables.flex("column", "center", "center")}
  height: 50%;
  gap: 35px;
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
