import React from "react";
import * as S from "../../pages/Word/Word.style";
import * as W from "../../pages/Word/VoiceRecord/VoiceRecord.style";
import useStore from "../../state/store";

const Recall = (e) => {
  const { keyword } = useStore((state) => state);

  return (
    <W.VoiceRecordContainer>
      <S.TodayWordContainer>
        <S.TodayWord>
          {(function () {
            if (keyword === "가족")
              return <S.TodayWordContent src="/images/text_family.png" />;
            if (keyword === "친구")
              return <S.TodayWordContent src="/images/text_friend.png" />;
            if (keyword === "여행")
              return <S.TodayWordContent src="/icons/text_travel.png" />;
          })()}
        </S.TodayWord>
      </S.TodayWordContainer>
      <W.VoiceRecordTitle>추억을 돌이켜보아요</W.VoiceRecordTitle>
    </W.VoiceRecordContainer>
  );
};

export default Recall;
