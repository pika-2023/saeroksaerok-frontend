import styled from "styled-components";
import variables from "../../../styles/variables";
import font from "../../../styles/fontStyle";

export const FeedDetailContainer = styled.div`
  margin-bottom: 82px;

  @media (min-width: 769px) {
    margin-bottom: 0px;
  }
`;

export const FeedDetailTab = styled.div`
  ${variables.position("fixed", "0", "null", "null", "0")}
  ${variables.widthHeight("100%", "96px")}
  ${font.t7}
  padding: 61px 0 0 20px;
  background-color: ${(props) => props.theme.style.white};
`;

export const FeedReturnButton = styled.div`
  ${variables.position("fixed", "0", "null", "null", "0")}
  ${variables.widthHeight("fit-content", "29px")}
  ${font.t7}
  padding: 61px 0 0 20px;
  background-color: ${(props) => props.theme.style.white};
  text-align: left;
  color: #4c4c4c;
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

export const FeedFrame = styled.div`
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

export const FeedInfo = styled.div`
  ${variables.flex("row", "space-between", "center")}
`;

export const FeedOwnerInfo = styled.div`
  ${variables.flex}
  gap : 8px;
`;

export const FeedOwnerImg = styled.img`
  ${variables.widthHeight("32px", "32px")}
  border-radius: 50%;
`;

export const FeedOwnerName = styled.div`
  ${font.t6};
`;

export const FeedUploadDate = styled.div`
  ${font.t7};
  text-align: right;
  color: ${(props) => props.theme.style.gray3};
`;

export const FeedImg = styled.img`
  ${variables.widthHeight("335px", "242px")}
  margin : 20px auto 0;
`;

export const FeedContent = styled.div`
  ${variables.flex("row", "space-between", "center")}
  margin : 24px 0 16px 0;
`;

export const FeedWord = styled.div`
  ${variables.fontStyle("24px", 500)};
`;

export const ListenToVoice = styled.div`
  ${variables.flex("row", "null", "center", "null")}
  ${font.t7};
  color: #828282;
  gap: 8px;
  cursor: pointer;
`;

export const VoiceButton = styled.button`
  ${variables.widthHeight("28px", "28px")}
  background: url("/icons/icon_voice.png");
  background-size: 100% 100%;
  border: none;
  cursor: pointer;
`;

export const FeedText = styled.div`
  ${variables.widthHeight("100%", "fit-content")};
  ${font.t5};
  text-align: left;
  color: ${(props) => props.theme.style.gray5};
`;

export const MakeComment = styled.button`
  ${variables.position("fixed", "null", 0, 0, 0)}
  ${variables.widthHeight("100%", "82px")};
  ${font.t4}
  margin: auto;
  color: ${(props) => props.theme.style.black};
  background-color: ${(props) => props.theme.style.yellow2};
  border: none;
  cursor: pointer;

  @media (min-width: 769px) {
    ${variables.widthHeight("375px", "82px")};
    ${font.t4}
    position: ${(props) => (props.value === 0 ? "fixed" : "sticky")};
    right: 0px;
    bottom: 0px;
    left: 0px;
    color: rgb(47, 47, 47);
    margin: ${(props) => (props.value === 0 ? "auto" : "calc(-20px)")};
    background-color: rgb(255, 227, 128);
    border: none;
    transform: ${(props) =>
      props.value === 0 ? "null" : "translate(0px, 20px)"};
  }
`;

export const CommentFrame = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

export const CommentAuthorInfo = styled.div`
  ${variables.flex("row", "center", "center")}
  gap: 8px;
`;

export const ProfileImag = styled.img`
  ${variables.widthHeight("32px", "32px")}
  border-radius:50%;
`;

export const CommentInfo = styled.div`
  ${variables.flex("row", "space-between", "null")}
  margin-bottom : 14px;
`;

export const EmojiReply = styled.img`
  ${variables.widthHeight("114px", "114px")}
`;

export const CommentCreatedAt = styled.div`
  ${font.t7}
  text-align: right;
  color: ${(props) => props.theme.style.gray3};
`;

export const VoiceReplyContainer = styled.div`
  ${variables.flex("row", "space-between", "center")}
`;

export const VoiceReply = styled.div`
  ${font.t5}
  color: ${(props) => props.theme.style.gray5};
`;
