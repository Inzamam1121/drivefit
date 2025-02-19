import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/MainDashboard";
import ScroolToTop from "./Pages/ScroolToTop";
import Login from "./Pages/Login/Login";
import LoginandSignUp from "./Pages/LoginandSignup/Signup";
import Signup from "./Pages/LoginandSignup/Signup";
import MainDashboard from "./Pages/Contact/MainDashboard";

const MainComponents = () => {
  return (
    <div className="font-pop">
      <ScroolToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/*" element={<MainDashboard />} />
      </Routes>
    </div>
  );
};

export default MainComponents;
