import React from "react";
import useStore from "./store";

const Sample = () => {
  const { bears, increasePopulation, removeAllBears } = useStore(
    (state) => state
  );

  return (
    <>
      <h1>Zustand 사용 예시 화면입니다</h1>
      <h2>{bears} around here ...</h2>
      <button onClick={increasePopulation}>one up</button>
      <button onClick={removeAllBears}>remove all</button>
    </>
  );
};

export default Sample;
