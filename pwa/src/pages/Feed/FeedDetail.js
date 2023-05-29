import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useStore from "../../state/store";

const FeedDetail = () => {
  const navigate = useNavigate();
  const { feedDetailData, removeFeedDetailData } = useStore((state) => state);

  console.log(feedDetailData);

  return (
    <>
      <div
        onClick={() => {
          navigate("/feed");
          removeFeedDetailData();
        }}
      >
        {"<"}뒤로가기
      </div>
      {feedDetailData.map((data) => {
        return <div>{data.name}</div>;
      })}
    </>
  );
};

export default FeedDetail;
