import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import variables from "../../styles/variables";
import useStore from "../../state/store";

const Feed = () => {
  const [myFeed, setMyFeed] = useState([]);
  const [friendsFeed, setFriendsFeed] = useState([]);
  const { feedDetailData } = useStore((state) => state);
  const [currentMemory, setCurrentMemory] = useState(1);

  const navigate = useNavigate();

  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (accessToken && currentMemory === 1) {
      fetch("http://13.124.76.165:8080/diaries?searchType=ALL", {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: ` Bearer ${accessToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setFriendsFeed(data.data);
        });
    } else if (accessToken && currentMemory === 0) {
      fetch("http://13.124.76.165:8080/diaries?searchType=MY", {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: ` Bearer ${accessToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setMyFeed(data.data);
        });
    }
  }, [accessToken, currentMemory]);

  const getBackgroundImage = () => {
    if (currentMemory === 0) {
      return "url(images/my_memory.png)";
    } else if (currentMemory === 1) {
      return "url(images/friend_memory.png)";
    } else {
      return "";
    }
  };

  const MyMemory = () => {
    setCurrentMemory(0);
  };
  const FriendsMemory = () => {
    setCurrentMemory(1);
  };

  return (
    <>
      <FeedPageHeader
        style={{ backgroundImage: getBackgroundImage(currentMemory) }}
      >
        <UserInfo>내정보</UserInfo>
        <FeedSection>
          <Section onClick={MyMemory}>나의 추억</Section>
          <Section onClick={FriendsMemory}>친구의 추억</Section>
        </FeedSection>
      </FeedPageHeader>
      <FeedFrameContainer>
        {(currentMemory === 0 ? myFeed : friendsFeed).map((data) => {
          const sliceData = (a, b) => {
            return data.createdAt?.slice(a, b);
          };
          return (
            <FeedFrame key={data.id}>
              <FeedInfo>
                <FeedOwnerInfo>
                  <FeedOwnerImg></FeedOwnerImg>
                  <FeedOwnerName>{data.author}</FeedOwnerName>
                </FeedOwnerInfo>
                <FeedUploadDate>
                  {`${sliceData(0, 4)}년 ${sliceData(5, 7)}월 ${sliceData(
                    8,
                    10
                  )}일`}
                </FeedUploadDate>
              </FeedInfo>
              <FeedImg src={data.pictureDiary} alt="새록새록" />

              <FeedContent>
                <FeedWord>{data.keyWord}</FeedWord>
                <FeedDetailButton
                  onClick={() => {
                    navigate("/feedDetail");
                    feedDetailData.push(data);
                  }}
                >
                  자세히 보기 {">"}
                </FeedDetailButton>
              </FeedContent>
              <FeedText>
                {data.textDiary.length > 38
                  ? data.textDiary.slice(0, 37) + "..."
                  : data.textDiary}
              </FeedText>
            </FeedFrame>
          );
        })}
      </FeedFrameContainer>
    </>
  );
};

export default Feed;

const FeedPageHeader = styled.div`
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

const UserInfo = styled.div`
  position: relative;
  padding: 61px 19px 0 0;
  text-align: right;
`;

const FeedSection = styled.div`
  ${variables.flex("row", "null", "center")}
  ${variables.widthHeight("100%", "57px")};
`;

const Section = styled.div`
  ${variables.fontStyle("19px", 600)};
  width: 50%;
  line-height: 29px;
  text-align: center;
`;

const FeedFrameContainer = styled.div`
  margin: 167px calc(-20px) 0;

  @media (min-width: 769px) {
    margin-top: 22px;
  }
`;

const FeedFrame = styled.div`
  ${variables.widthHeight("100%", "430px")}
  margin : 0  auto 42px;
  overflow: hidden;
  display: grid;
  justify-items: center;
  border-bottom: 1px solid #e2e2e2;
`;

const FeedInfo = styled.div`
  ${variables.flex("row", "space-between", "center")}
  width : 335px;
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

const FeedImg = styled.img`
  ${variables.widthHeight("335px", "242px")}
  margin-top : 20px;
  background-color: ${(props) => props.theme.style.gray1};
`;

const FeedContent = styled.div`
  ${variables.flex("row", "space-between", "center")};
  width: 335px;
  margin: 24px 0 16px 0;
`;

const FeedWord = styled.div`
  ${variables.fontStyle("24px", 500)};
`;

const FeedDetailButton = styled.div`
  ${variables.fontStyle("19px", 500)};
  color: #828282;
`;

const FeedText = styled.div`
  ${variables.widthHeight("335px", "62px")}
  ${variables.fontStyle("22px", 500)};
  line-height: 31px;
`;
