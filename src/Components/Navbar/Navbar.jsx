import React, { useState } from "react";
import logo from "../../../public/Images/Home/Mainlogo .png";
import { NavLink } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [Open, setOpen] = useState(false);

  return (
    <div className="text-white py-6 absolute top-0 w-full z-30">
      {/* Main Navbar */}
      <div className="flex justify-between mx-auto w-[90%] items-center">
        {/* Logo */}
        <div className="">
          <img
            src={logo}
            alt="Logo"
            className="md:w-[35%] w-[30%] object-contain"
          />
        </div>

        {/* Main Menu for Desktop */}
        <div className="  md:block hidden">
          <ul className="flex items-center gap-10">
            <NavLink to="/" className="md:text-lg font-light">
              Home
            </NavLink>
            <NavLink to="/MainDashboard" className="md:text-lg font-light">
              Dashboard
            </NavLink>
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden block" onClick={() => setOpen(!Open)}>
          <h1 className="text-xl cursor-pointer">{Open ? <RxCross1 /> : <VscMenu />}</h1>
        </div>

        {/* Login Button */}
        <div className=" md:flex gap-6 hidden items-center justify-center">
          <NavLink
            to="/login"
            className="hover:scale-110 text-xs font-light border-[1px] py-2 md:px-5 px-3 rounded-md shadow-[2px_2px_1px_white] hover:bg-gray-900 transition-all duration-300"
          >
            Login
          </NavLink>
          <NavLink
              to="/signup"
              className="hover:scale-110 text-xs font-light border-[1px] py-2 px-5 rounded-md shadow-[2px_2px_1px_white] hover:bg-[#030915] transition-all duration-300"
            >
              Sign Up
            </NavLink>
        </div>
      </div>

      {/* 2nd Navbar (Mobile Menu) */}
      <div
        className={`md:hidden block absolute top-0 bg-[#030915] text-white w-[60%] h-screen p-2 transition-transform duration-500 ${
          Open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mx-auto w-[90%] flex flex-col">
          <ul className="flex flex-col gap-1 p-2">
            <NavLink to="/" className="md:text-lg font-light">
              Home
            </NavLink>
            <NavLink to="/contact" className="md:text-lg font-light">
              Contact
            </NavLink>
          </ul>

          <div className=" mt-5 w-fit flex flex-col gap-4">
            <NavLink
              to="/login"
              className=" hover:scale-110 text-xs font-light border-[1px] py-2 px-5 rounded-md shadow-[2px_2px_1px_white] hover:bg-[#030915] transition-all duration-300"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="hover:scale-110 text-xs font-light border-[1px] py-2 px-5 rounded-md shadow-[2px_2px_1px_white] hover:bg-[#030915] transition-all duration-300"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
