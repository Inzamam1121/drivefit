import React from "react";
import img from "../../../public/Images/Login/SideBar.png";

const SideCard = ({text}) => {
  return (
    <div className="relative w-full h-full">
      {/* Image background */}
      <img src={img} alt="Side Background" className="h-screen w-full" />

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
