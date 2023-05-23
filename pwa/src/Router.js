import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash/Splash";
import Login from "./pages/Account/Login";
import Signup from "./pages/Account/Signup";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<h1>해당 주소는 없는 페이지입니다.</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
