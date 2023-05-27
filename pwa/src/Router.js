import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash/Splash";
import Login from "./pages/Account/Login";
import Signup from "./pages/Account/Signup";
import Feed from "./pages/Feed/Feed";
import Sample from "./state/Sample";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="*" element={<h1>해당 주소는 없는 페이지입니다.</h1>} />
        {/* zustand sample page */}
        <Route path="/sample" element={<Sample />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
