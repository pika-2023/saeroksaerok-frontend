import styled from "styled-components";
import variables from "../../styles/variables";

export const FeedPageHeader = styled.div`
  ${variables.position("fixed", 0, "null", "null", 0)};
  ${variables.widthHeight("100%", "187px")};
  display: grid;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media (min-width: 769px) {
    ${variables.widthHeight("375px", "187px")};
    ${variables.position("sticky", 0, "null", "null", 0)};
    margin: calc(-20px);
    transform: translate(0%, -11%);
  }
`;

export const UserInfo = styled.div`
  ${variables.fontStyle("19px", 500)};
  position: relative;
  padding: 61px 19px 0 0;
  color: ${(props) => props.theme.style.gray5};
  text-align: right;
  line-height: 29px;
  letter-spacing: -0.03em;
  cursor: pointer;
`;

export const FeedSection = styled.div`
  ${variables.flex("row", "null", "baseline")}
  ${variables.widthHeight("100%", "57px")};
`;

export const MyMemorySection = styled.div`
  ${variables.fontStyle("19px", 600)};
  width: 50%;
  color: ${(props) => (props.value === 0 ? "#2f2f2f" : " #7d7d7d")};
  text-align: center;
  letter-spacing: -0.03em;
  cursor: pointer;
`;

export const FriendsMemorySection = styled.div`
  ${variables.fontStyle("19px", 600)};
  width: 50%;
  color: ${(props) => (props.value === 1 ? "#2f2f2f" : " #7d7d7d")};
  line-height: 29px;
  text-align: center;
  letter-spacing: -0.03em;
  cursor: pointer;
`;

export const FeedFrameContainer = styled.div`
  margin: 169px calc(-20px) 168px;

  @media (min-width: 769px) {
    margin-top: 22px;
  }
`;

export const FeedFrame = styled.div`
  ${variables.widthHeight("100%", "430px")}
  margin : 0  auto 42px;
  overflow: hidden;
  display: grid;
  justify-items: center;
`;

export const FeedInfo = styled.div`
  ${variables.flex("row", "space-between", "center")}
  width : 335px;
`;

export const FeedOwnerInfo = styled.div`
  ${variables.flex()}
  gap : 8px;
`;

export const FeedOwnerImg = styled.img`
  ${variables.widthHeight("32px", "32px")}
  background-color: ${(props) => props.theme.style.gray1};
  border-radius: 50%;
`;

export const FeedOwnerName = styled.div`
  ${variables.fontStyle("19px", 600)};
  line-height: 29px;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.style.black};
`;

export const FeedUploadDate = styled.div`
  ${variables.fontStyle("19px", 500)};
  line-height: 29px;
  text-align: right;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.style.gray3};
`;

export const FeedImg = styled.img`
  ${variables.widthHeight("335px", "242px")}
  margin-top : 20px;
  background-color: ${(props) => props.theme.style.gray1};
`;

export const FeedContent = styled.div`
  ${variables.flex("row", "space-between", "center")};
  width: 335px;
  margin: 24px 0 16px 0;
`;

export const FeedWord = styled.div`
  ${variables.fontStyle("24px", 500)};
`;

export const FeedDetailButton = styled.div`
  ${variables.fontStyle("19px", 500)};
  color: #828282;
  cursor: pointer;
`;

export const FeedText = styled.div`
  ${variables.widthHeight("335px", "62px")}
  ${variables.fontStyle("22px", 500)};
  line-height: 32px;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.style.gray5};
`;
