import React, { useState } from "react";
import { BsBellFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { VscMenu } from "react-icons/vsc";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FiUser } from "react-icons/fi";
import { CiSaveDown2 } from "react-icons/ci";
import { GiCartwheel } from "react-icons/gi";
import img from "../../../public/Images/Home/Mainlogo .png"
const SearchBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { name: "My Ads", url: "/dashboard/ads", icon: <RxDashboard /> },
    { name: "Profile", url: "/dashboard/profile", icon: <FiUser /> },
    { name: "My Saved Ads", url: "/dashboard/savedAds", icon: <CiSaveDown2 /> },
    { name: "My Rides", url: "/dashboard/Rides", icon: <GiCartwheel /> },
  ];
  return (
    <div className="relative mt-4 p-4">
      {/* Menu Button */}
      {/* <button className="text-2xl md:hidden" onClick={() => setMenuOpen(true)}>
        <VscMenu />
      </button> */}

      {/* Sidebar & Overlay */}
      {menuOpen && (
        <>
          {/* Overlay to close sidebar when clicking outside */}
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Sidebar Menu */}
          <div className="fixed top-0 left-0 h-full w-[75%] md:w-[40%] bg-[#030915] shadow-lg z-50 transform transition-transform duration-300 translate-x-0">
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={() => setMenuOpen(false)}
            >
              <RxCross1 className="text-white"/>
            </button>
            <div className="w-[30%] flex justify-center items-center mx-auto mt-10">
              <img src={img} alt="" className="w-full h-full"/>
            </div>
            <nav className="p-6">
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 rounded-md text-gray-300 transition ${
                          isActive
                            ? "bg-blue-500 text-white"
                            : "hover:bg-gray-700"
                        }`
                      }
                    >
                      {item.icon} <span>{item.name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}

      {/* Search Bar Section */}
      <div className="flex lg:justify-end md:gap-10 w-[90%] mx-auto py-5 items-center text-[#191919]">
        <div>
          <VscMenu
            className="text-2xl lg:hidden block"
            onClick={() => setMenuOpen(true)}
          />
        </div>
       <div className="">
       <BsBellFill className="cursor-pointer text-gray-500 text-xl" />
       </div>
        <div className="relative md:w-[40%]">
          <input
            type="search"
            className="bg-white shadow-md outline-none w-full py-2 pl-10 pr-3 rounded placeholder:text-sm"
            placeholder="Search here..."
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
