import React from "react";
import styled from "styled-components";
import variables from "../../styles/variables";

const Feed = () => {
  return (
    <>
      <UserInfo>내정보</UserInfo>
      <FeedSection>
        <FeedList>나의 추억</FeedList>
        <FeedList>친구의 추억</FeedList>
      </FeedSection>
      <FeedFrame>
        <FeedInfo>
          <OwnerInfo>
            <UserImg></UserImg>
            <div>user name</div>
          </OwnerInfo>
          <div>upload date</div>
        </FeedInfo>
        <FeedImg></FeedImg>
        <FeedDetail>
          <div>기쁨</div>
          <div>자세히 보기 {">"}</div>
        </FeedDetail>
      </FeedFrame>
    </>
  );
};

export default Feed;

const UserInfo = styled.div`
  margin-top: 52px;
`;

const FeedSection = styled.div`
  ${variables.widthHeight("100vw", "29px")};
  margin: 9px 0 31px calc(-50vw + 50%);
  padding: 41px 0;
  border-bottom: 1px solid #e2e2e2;
`;

const FeedList = styled.button`
  width: 50%;
  background-color: ${(props) => props.theme.style.white};
  border: none;
`;

const FeedFrame = styled.div`
  ${variables.widthHeight("335px", "430px")}
  margin : auto;
`;

const FeedInfo = styled.div`
  ${variables.flex("", "space-between", "center")}
`;

const OwnerInfo = styled.div`
  ${variables.flex()}
  gap : 5px;
`;

const UserImg = styled.div`
  ${variables.widthHeight("32px", "32px")}
  border-radius : 50%;
  background-color: ${(props) => props.theme.style.lightgray};
`;

const FeedImg = styled.div`
  ${variables.widthHeight("335px", "242px")}
  margin-top : 53px;
  background-color: ${(props) => props.theme.style.lightgray};
`;

const FeedDetail = styled.div`
  ${variables.flex("", "space-between", "center")}
  margin-top : 24px;
`;
