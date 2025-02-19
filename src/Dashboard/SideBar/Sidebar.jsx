import React from "react";
import logo from "../../../public/Images/Home/Mainlogo .png";
import { Link, NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FiUser } from "react-icons/fi";
import { CiSaveDown2 } from "react-icons/ci";
import { GiCartwheel } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
const Sidebar = () => {
    
  const navItems = [
    { name: "My Ads", url: "/MainDashboard/ads", icon: <RxDashboard /> },
    { name: "Profile", url: "/MainDashboard/profile", icon: <FiUser /> },
    { name: "My Saved Ads", url: "/MainDashboard/savedAds", icon: <CiSaveDown2 /> },
    { name: "My Rides", url: "/MainDashboard/Rides", icon: <GiCartwheel /> },
  ];

  return (
    <div className="bg-[#030915] h-screen p-4 flex flex-col justify-between hidden ">
      {/* Logo Section */}
     <div>
     <div className="flex lg:justify-center mb-6 justify-between">
        <img src={logo} alt="Logo" className="md:w-[50%] w-[30%] object-contain" />
        <div>
            <RxCross1 className="text-white"/>
        </div>
      </div>
      {/* Navigation List */}
      <ul className="space-y-2">
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.url}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-md text-gray-300 transition ${
                  isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
                }`
              }
            >
              {item.icon} <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
     </div>
      <div className="text-center mt-6">
            <Link to="/login">
              <p className=" text-white border py-2 px-4 rounded">
                 Log Out
              </p>
            </Link>
          </div>
    </div>
  );
};

export default Sidebar;
