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

  //MARK : 헤더에 액세스토큰 추가 후 통신 연습 중
  // const accessToken = localStorage.getItem("accessToken");

  // useEffect(() => {
  //   if (accessToken) {
  //     fetch("http://13.124.76.165:8080/diaries?searchType=ALL", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json;charset=utf-8",
  //         Authorization: ` Bearer ${accessToken}`,
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   }
  // }, []);

  useEffect(() => {
    (async () => {
      const data = await myFeedData();
      setMyFeed(data.data);
      removeFeedDetailData();
    })();
  }, [myFeedData, removeFeedDetailData]);

  useEffect(() => {
    (async () => {
      const data = await friendsFeedData();
      setFriendsMyFeed(data.data);
      removeFeedDetailData();
    })();
  }, [friendsFeedData, removeFeedDetailData]);

  const MyMemory = () => {
    setCurrentMemory(0);
  };
  const FriendsMemory = () => {
    setCurrentMemory(1);
  };

  return (
    <>
      <FeedPageHeader>
        <UserInfo>내정보</UserInfo>
        <FeedSection>
          <MyMemorySection value={currentMemory} onClick={MyMemory}>
            나의 추억
          </MyMemorySection>
          <FriendsMemorySection value={currentMemory} onClick={FriendsMemory}>
            친구의 추억
          </FriendsMemorySection>
        </FeedSection>
      </FeedPageHeader>
      <FeedFrameContainer>
        {(currentMemory === 0 ? myFeed : friendsFeed).map((data) => {
          const sliceData = (a, b) => {
            return data.upload_date?.slice(a, b);
          };
          return (
            <FeedFrame key={data.id}>
              <FeedInfo>
                <FeedOwnerInfo>
                  <FeedOwnerImg></FeedOwnerImg>
                  <FeedOwnerName>{data.name}</FeedOwnerName>
                </FeedOwnerInfo>
                <FeedUploadDate>
                  {`${sliceData(0, 4)}년 ${sliceData(5, 7)}월
                ${sliceData(8, 10)}일`}
                </FeedUploadDate>
              </FeedInfo>
              <FeedImg></FeedImg>

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
              <FeedText>
                {data.text.length > 38
                  ? data.text.slice(0, 37) + "..."
                  : data.text}
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
  ${variables.position("fixed", 0, "null", "null", 0)}
  background-color: white;

  @media (min-width: 769px) {
    ${variables.widthHeight("375px", "81px")};
    position: sticky;
    top: 0px;
    margin: 0px 0px 0px calc(-40px);
    padding: 20px 20px;
  }
`;

const UserInfo = styled.div`
  position: relative;
  padding: 52px 20px 0 0;
  text-align: right;

  @media (min-width: 769px) {
    ${variables.widthHeight("375px", "null")};
    margin: calc(-40px) 0px 0px 0;
    background-color: white;
  }
`;

// TODO : 리팩토링하면서 스타일 줄이기
const FeedSection = styled.div`
  ${variables.flex("row", "null", "null")}
  ${variables.widthHeight("100vw", "61px")};

  @media (min-width: 769px) {
    ${variables.widthHeight("375px", "61px")};
    margin: 9px 0px 1px 0;
  }
`;

const MyMemorySection = styled.div`
  ${variables.fontStyle("19px", 600)};
  width: 50%;
  padding: 18.5px 0;
  background-color: ${(props) => props.theme.style.white};
  text-align: center;
  border-bottom: ${(props) =>
    props.value === 0 ? "2px solid #212121" : "1px solid #e2e2e2"};
`;

const FriendsMemorySection = styled.div`
  ${variables.fontStyle("19px", 600)};
  width: 50%;
  padding: 18.5px 0;
  background-color: ${(props) => props.theme.style.white};
  text-align: center;
  border-bottom: ${(props) =>
    props.value === 1 ? "2px solid #212121" : "1px solid #e2e2e2"};
`;

const FeedFrameContainer = styled.div`
  margin-top: 130px;

  @media (min-width: 769px) {
    margin-top: 67px;
  }
`;

const FeedFrame = styled.div`
  ${variables.widthHeight("335px", "430px")}
  margin : 0  auto 42px;
  overflow: hidden;
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

const FeedDetailButton = styled.div`
  ${variables.fontStyle("19px", 500)};
  color: #828282;
`;

const FeedText = styled.div`
  ${variables.fontStyle("22px", 500)};
  ${variables.widthHeight("100%", "62px")};
  line-height: 31px;
`;
