import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Account/Login";
import Signup from "./pages/Account/Signup";
import Feed from "./pages/Feed/Feed";
import FeedDetail from "./pages/Feed/FeedDetail";
import Word from "./pages/Word/Word";
import TextResult from "./pages/Word/TextResult/TextResult";
import PictureResult from "./pages/Word/PictureResult/PictureResult";
import Sample from "./state/Sample";
import RcFirst from "./pages/Word/VoiceRecord/RcFirst";
import RcSecond from "./pages/Word/VoiceRecord/RcSecond";
import RcThird from "./pages/Word/VoiceRecord/RcThird";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* MARK: 시연을 위해 /signup을 main url로 설정 */}
        <Route path="/" element={<Signup />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/feedDetail" element={<FeedDetail />} />
        <Route path="/word" element={<Word />} />
        <Route path="/question-1" element={<RcFirst />} />
        <Route path="/question-2" element={<RcSecond />} />
        <Route path="/question-3" element={<RcThird />} />
        <Route path="/textResult" element={<TextResult />} />
        <Route path="/pictureResult" element={<PictureResult />} />
        <Route path="*" element={<h1>해당 주소는 없는 페이지입니다.</h1>} />
        {/* zustand sample page */}
        <Route path="/sample" element={<Sample />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
