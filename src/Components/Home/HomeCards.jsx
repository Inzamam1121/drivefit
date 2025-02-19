import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import img from "../../../public/Images/Home/HomeCardsIcon1.png";
import img1 from "../../../public/Images/Home/HomeCardsIcon2.png";
const HomeCards = () => {
  const cards = [
    {
      id: 1,
      images: img,
      heading1: "Are You Looking",
      heading2: "For a Car ?",
      para: "We are committed to providing our customers with exceptional service.",
      btnColor: "#405ff2",
      icon: <GoArrowUpRight />,
      bg: "#e9f2ff",
    },
    {
      id: 2,
      images: img1,
      heading1: "Do You Want to",
      heading2: "Sell a Car ?",
      para: "We are committed to providing our customers with exceptional service.",
      btnColor: "#050b20",
      icon: <GoArrowUpRight />,
      bg: "#ffe9f3",
    },
  ];
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center mx-auto md:w-[80%] w-[90%] gap-10 text-[#050b20] my-20">
      {cards?.map((item) => {
        return (
          <>
            <div key={item.id} style={{ background: item.bg  }} className="rounded-xl" >
              <div className="w-[80%] mx-auto py-10 rounded-xl">
              <h1 className="md:text-3xl text-xl font-semibold">{item.heading1}</h1>
              <h1 className="md:text-3xl text-xl font-semibold">{item.heading2}</h1>
              <p className="md:text-sm text-xs py-2 tracking-wide">{item.para}</p>
              <div className="flex justify-between items-center">
                <button
                  className="text-white flex gap-2 md:py-4 md:px-4 py-2 px-3 md:rounded-xl rounded-md text-sm font-light hover:scale-105 transition-all duration-500"
                  style={{ background: item.btnColor }}
                >
                  Get Started <span className="text-xl">{item.icon}</span>
                </button>
                <img src={item.images} alt="" className="w-[20%]"/>
              </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default HomeCards;
