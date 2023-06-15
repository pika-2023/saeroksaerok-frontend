import React from "react";
import useStore from "../../../state/store";
import RcFirst from "../../../components/Recording/RcFirst";
import RcSecond from "../../../components/Recording/RcSecond";
import RcThird from "../../../components/Recording/RcThird";

const VoiceRecord = () => {
  const { page } = useStore((state) => state);

  return (
    <>
      {page === "first" && <RcFirst />}
      {page === "second" && <RcSecond />}
      {page === "third" && <RcThird />}
    </>
  );
};

export default VoiceRecord;
