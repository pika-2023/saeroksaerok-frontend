// import React from "react";
// import { useNavigate } from "react-router-dom";
// import * as S from "../Word.style";
// import * as W from "./VoiceRecord.style";
// import useStore from "../../../state/store";

// const VoiceRecord = (e) => {
//   const { keyword, setKeyword } = useStore((state) => state);
//   const navigate = useNavigate();

//   return (
//     <W.VoiceRecordContainer>
//       <S.TodayWordContainer>
//         <S.TodayWord>
//           {(function () {
//             if (keyword === "가족")
//               return <S.TodayWordContent src="/images/text_family.png" />;
//             if (keyword === "친구")
//               return <S.TodayWordContent src="/images/text_friend.png" />;
//             if (keyword === "여행")
//               return <S.TodayWordContent src="/icons/text_travel.png" />;
//           })()}
//         </S.TodayWord>
//       </S.TodayWordContainer>
//       <W.VoiceRecordTitle onClick={() => navigate("/question-1")}>
//         추억을 돌이켜보아요
//       </W.VoiceRecordTitle>
//     </W.VoiceRecordContainer>
//   );
// };

// export default VoiceRecord;
