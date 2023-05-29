import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import variables from "../../styles/variables";
import useStore from "../../state/store";

const Feed = () => {
  const [myFeed, setMyFeed] = useState([]);
  const [friendsFeed, setFriendsMyFeed] = useState([]);
  const { myFeedData, friendsFeedData, feedDetailData, removeFeedDetailData } =
    useStore((state) => state);
  const [currentMemory, setCurrentMemory] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const data = await myFeedData();
      setMyFeed(data.data);
      removeFeedDetailData();
    })();
  }, [myFeedData]);

  useEffect(() => {
    (async () => {
      const data = await friendsFeedData();
      setFriendsMyFeed(data.data);
      removeFeedDetailData();
    })();
  }, [friendsFeedData]);

  function MyMemory() {
    setCurrentMemory(0);
  }
  function FriendsMemory() {
    setCurrentMemory(1);
  }

  return (
    <>
      <Info>
        <UserInfo>내정보</UserInfo>
        <FeedSection>
          <FeedList className="myMemory" onClick={MyMemory}>
            나의 추억
          </FeedList>
          <FeedList className="FriendsMemory" onClick={FriendsMemory}>
            친구의 추억
          </FeedList>
        </FeedSection>
      </Info>
      {(currentMemory === 0 ? myFeed : friendsFeed).map((data) => {
        return (
          <FeedFrame key={data.id}>
            <FeedInfo>
              <OwnerInfo>
                <UserImg></UserImg>
                <div>{data.name}</div>
              </OwnerInfo>
              <div>
                {data.return_date.slice(0, 4)}년 {data.return_date.slice(5, 7)}
                월 {data.return_date.slice(8, 10)}일
              </div>
            </FeedInfo>
            <FeedImg></FeedImg>
            <div>
              <FeedContent>
                <FeedWord>{data.word}</FeedWord>
                <FeedDetailButton
                  onClick={() => {
                    navigate("/feedDetail");
                    feedDetailData.push(data);
                  }}
                >
                  자세히 보기 {">"}
                </FeedDetailButton>
              </FeedContent>
              <span>{data.text}</span>
            </div>
          </FeedFrame>
        );
      })}
    </>
  );
};

export default Feed;

const Info = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
`;

const UserInfo = styled.div`
  position: relative;
  padding-top: 32px;
  text-align: right;
`;

const FeedSection = styled.div`
  ${variables.widthHeight("100vw", "29px")};
  margin: 9px 0 31px calc(-50vw + 50%);
  padding: 41px 0;
  border-bottom: 1px solid #e2e2e2;

  @media (min-width: 769px) {
    ${variables.widthHeight("375px", "29px")};
    margin: 9px -20px 31px -20px;

    border-bottom: 1px solid #e2e2e2;
  }
`;

const FeedList = styled.button`
  ${variables.fontStyle("19px", 600)};
  width: 50%;
  background-color: ${(props) => props.theme.style.white};
  border: none;
`;

const FeedFrame = styled.div`
  ${variables.widthHeight("335px", "430px")}
  margin : 0  auto 42px;
  overflow: hidden;
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

const FeedContent = styled.div`
  ${variables.flex("", "space-between", "center")}
  margin : 24px 0  16px 0;
`;

const FeedWord = styled.div`
  ${variables.fontStyle("24px", 500)};
`;

const FeedDetailButton = styled.div`
  color: #828282;
  font-size: 19px;
`;
