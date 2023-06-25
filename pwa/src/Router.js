import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Account/Login";
import Signup from "./pages/Account/Signup";
import Word from "./pages/Word/Word";
import VoiceRecord from "./pages/Word/VoiceRecord/VoiceRecord";
import TextResult from "./pages/Word/TextResult/TextResult";
import PictureResult from "./pages/Word/PictureResult/PictureResult";
import Feed from "./pages/Feed/Feed";
import FeedDetail from "./pages/Feed/FeedDetail/FeedDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* MARK: 시연을 위해 /signup을 main url로 설정 */}
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/word" element={<Word />} />
        <Route path="/voiceRecord" element={<VoiceRecord />} />
        <Route path="/textResult" element={<TextResult />} />
        <Route path="/pictureResult" element={<PictureResult />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/feedDetail" element={<FeedDetail />} />
        <Route path="*" element={<h1>해당 주소는 없는 페이지입니다.</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
