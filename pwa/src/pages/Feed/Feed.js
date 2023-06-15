import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../state/store";
import * as F from "./Feed.style.js";
import * as S from "../Word/Word.style.js";

const Feed = () => {
  const {
    feedDetailData,
    myFeed,
    setMyFeed,
    friendsFeed,
    setFriendsFeed,
    currentMemory,
    setCurrentMemory,
  } = useStore((state) => state);

  const navigate = useNavigate();

  const accessToken = localStorage.getItem("accessToken");
  const searchALLApiUrl = "http://13.124.76.165:8080/diaries?searchType=ALL";
  const searchMYApiUrl = "http://13.124.76.165:8080/diaries?searchType=MY";

  useEffect(() => {
    if (accessToken && currentMemory === 1) {
      fetch(searchALLApiUrl, {
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
      fetch(searchMYApiUrl, {
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
      <F.FeedPageHeader
        style={{ backgroundImage: getBackgroundImage(currentMemory) }}
      >
        <F.UserInfo>내 정보</F.UserInfo>
        <F.FeedSection>
          <F.MyMemorySection value={currentMemory} onClick={MyMemory}>
            나의 추억
          </F.MyMemorySection>
          <F.FriendsMemorySection value={currentMemory} onClick={FriendsMemory}>
            친구의 추억
          </F.FriendsMemorySection>
        </F.FeedSection>
      </F.FeedPageHeader>
      <F.FeedFrameContainer>
        {(currentMemory === 0 ? myFeed : friendsFeed).map((data) => {
          const sliceData = (a, b) => {
            return data.createdAt?.slice(a, b);
          };
          return (
            <F.FeedFrame key={data.id}>
              <F.FeedInfo>
                <F.FeedOwnerInfo>
                  <F.FeedOwnerImg src={data.profileImageUrl} />
                  <F.FeedOwnerName>{data.author}</F.FeedOwnerName>
                </F.FeedOwnerInfo>
                <F.FeedUploadDate>
                  {`${sliceData(0, 4)}년 ${sliceData(5, 7)}월 ${sliceData(
                    8,
                    10
                  )}일`}
                </F.FeedUploadDate>
              </F.FeedInfo>
              <F.FeedImg src={data.pictureDiary} alt="새록새록 feed image" />

              <F.FeedContent>
                <F.FeedWord>{data.keyWord}</F.FeedWord>
                <F.FeedDetailButton
                  onClick={() => {
                    navigate("/feedDetail");
                    feedDetailData.push(data);
                  }}
                >
                  자세히 보기 {">"}
                </F.FeedDetailButton>
              </F.FeedContent>
              <F.FeedText>
                {data.textDiary.length > 38
                  ? data.textDiary.slice(0, 37) + "..."
                  : data.textDiary}
              </F.FeedText>
            </F.FeedFrame>
          );
        })}
      </F.FeedFrameContainer>
      <S.NavBar>
        <S.NavButton onClick={() => navigate("/word")}>
          <S.NavButtonIcon
            src="/icons/icon_reminisce_off.png"
            alt="추억하기 icon"
          />
          <S.NabButtonText>추억하기</S.NabButtonText>
        </S.NavButton>
        <S.NavButton onClick={() => navigate("/feed")}>
          <S.NavButtonIcon src="/icons/icon_feed_on.png" alt="모아보기 icon" />
          <S.NabButtonText>모아보기</S.NabButtonText>
        </S.NavButton>
      </S.NavBar>
    </>
  );
};

export default Feed;
