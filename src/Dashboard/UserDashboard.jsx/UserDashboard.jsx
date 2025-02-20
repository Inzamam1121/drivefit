import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "../UserSideBarLinks/Profile";
import SavedAds from "../UserSideBarLinks/SavedAds";
import Rides from "../UserSideBarLinks/Rides";
import SearchBar from "../UserSideBarLinks/SearchBar";
import Sidebar from "../SideBar/Sidebar";
import Myadds from "../UserSideBarLinks/Myadds";

const UserDashboard = () => {
  return (
    <div className="md:flex">
      <div className="lg:basis-[20%]">
      <Sidebar />
      </div>
      <div className="flex flex-col lg:basis-[80%] w-full h-screen bg-[#f8f7f1]">
        <SearchBar />
        <Routes>
          <Route path="/ads" element={<Myadds />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/savedAds" element={<SavedAds />} />
          <Route path="/Rides" element={<Rides />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserDashboard;
