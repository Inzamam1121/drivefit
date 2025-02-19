import React from "react";
// import img from "../../../public/Images/Login/SideBar.png";
import img from "../../../public/Images/Login/LoginBanner.png";
import img1 from "../../../public/Images/Login/3dimage4Drivefit.png";

const SideCard = ({ text }) => {
  return (
    <div className="relative w-full h-full">
      {/* Image background */}
      <div className="relative">
        <img
          src={img}
          alt="Side Background"
          className="h-screen w-full bg-black"
        />
      </div>
      <div className="absolute h-[80vh]  opacity-100 backdrop-blur top-0 left-0 right-0  bottom-0 w-[60%] m-auto rounded-2xl shadow-xl"></div>
      <div className="absolute  right-0  bottom-0 w-[60%]">
        <img src={img1} alt="" />
      </div>

      {/* Text overlay */}
      <div className="absolute inset-0 flex justify-center items-center ">
        <h1 className="text-white text-2xl font-semibold w-[30%]">
          Very good works are waiting for you. {text} Now!!!
        </h1>
      </div>
    </div>
  );
};

export default SideCard;
