import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash/Splash";
import Login from "./pages/Account/Login";
import Signup from "./pages/Account/Signup";
import Feed from "./pages/Feed/Feed";
import FeedDetail from "./pages/Feed/FeedDetail";
import Word from "./pages/Word/Word";
import VoiceRecord from "./pages/Word/VoiceRecord/VoiceRecord";
import TextResult from "./pages/Word/TextResult/TextResult";
import Result from "./pages/Word/Result/Result";
import Sample from "./state/Sample";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/feedDetail" element={<FeedDetail />} />
        <Route path="/word" element={<Word />} />
        <Route path="/voiceRecord" element={<VoiceRecord />} />
        <Route path="/textResult" element={<TextResult />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<h1>해당 주소는 없는 페이지입니다.</h1>} />
        {/* zustand sample page */}
        <Route path="/sample" element={<Sample />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
