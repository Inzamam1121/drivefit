import React from "react";
import logo from "../../../public/Images/Home/Mainlogo .png";
import { NavLink } from "react-router-dom";
const Footer = () => {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
  return (
    <div className="bg-[#030915] py-10 text-white">
      <div className="lg:flex justify-between mx-auto md:w-[80%] items-center w-[90%]">
        <div className="flex items-center md:gap-20 gap-10">
          <div className="w-[20%]">
            <img src={logo} alt="logo" className="object-contain" />
          </div>
          <div className="">
            <ul className="flex items-center md:gap-10 gap-4">
              <NavLink to={"/"} className="md:text-lg font-light">
              <a href="#home" onclick="scrollToTop()">Home</a>
              </NavLink>
              <div className="w-fit flex items-center gap-4">
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
              {/* <NavLink to={"/about"} className="md:text-lg font-light">
                About
              </NavLink>
              <NavLink to={"/service"} className="md:text-lg font-light">
                Services
              </NavLink> */}
              {/* <NavLink to={"/contact"} className="md:text-lg font-light">
                Contact
              </NavLink> */}
            </ul>
          </div>
        </div>
        <div className="lg:text-center flex flex-col gap-2 lg:mt-0 mt-10">
          <h1 className="md:text-xl text-lg">(123) 456-7890</h1>
          <h2 className="font-light">info@abc.co.uk</h2>
          <h3 className="font-light">abc street # 02</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
