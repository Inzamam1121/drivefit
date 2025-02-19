import React, { useState } from "react";
import img1 from "../../../public/Images/Home/BannerCar.png";
import Icon1 from "../../../public/Images/Home/bannerIcon1.png";
import Icon2 from "../../../public/Images/Home/bannerIcon2.png";
import Icon3 from "../../../public/Images/Home/bannerIcon3.png";
import Sedan from "../../../public/Images/Home/Sedan.png";
import Cabriolet from "../../../public/Images/Home/Cabriolet.png";
import Coupe from "../../../public/Images/Home/Coupe.png";
import SUV from "../../../public/Images/Home/Suv.png";
import Micro from "../../../public/Images/Home/Micro.png";

const HomeBanner = () => {
  const bannerData = [
    { id: 1, img: Icon1, heading: "ENGINE", Engine: "V12", color: "#e5fbfd" },
    {
      id: 2,
      img: Icon2,
      heading: "0-100 KM/H",
      Engine: "2,9",
      time: "sec",
      color: "#fdf7e7",
    },
    {
      id: 3,
      img: Icon3,
      heading: "SPECIFIC OUTPUT",
      Engine: "123",
      litter: "CV/L",
      color: "#f1ffef",
    },
  ];
  const CarsIcon = [
    { id: 1, img: Sedan, name: "Sedan" },
    { id: 2, img: Cabriolet, name: "Cabriolet" },
    { id: 3, img: Coupe, name: "Coupe" },
    { id: 4, img: SUV, name: "SUV" },
    { id: 5, img: Micro, name: "Micro" },
  ];
  return (
    <div className="lg:pt-36 pt-10">
      <div className="mx-auto container px-6 lg:flex justify-between gap-6 pt-20 ">
        <div className="basis-[35%] flex flex-col text-white md:gap-6">
          <h1 className="font-Sansita lg:text-6xl font-semibold md:text-5xl text-2xl italic">
            Find Used Cars in Pakistan
          </h1>
          <p className="text-gray-300 md:text-base py-4 text-xs">
            Lorem Ipsum has been the industry's standard dummy text ever since
          </p>
          <button className="text-xs md:text-md border md:border-2 w-fit md:py-3 md:px-7 px-3 py-2 rounded-md transition-all duration-300 hover:scale-95">
            Read More
          </button>
        </div>
        <div className="relative basis-[70%]">
          <img src={img1} alt="" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Banner Section with Dynamic Background Color */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center mx-auto w-[70%] gap-5 md:mt-5 mt-36 text-[#283646]">
        {bannerData.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col gap-2 pt-6 z-20 px-6"
            style={{ backgroundColor: item.color }}
          >
            <div className="absolute md:top-16 -z-10">
              <h1 className="text-7xl textstyle font-light">812</h1>
            </div>
            <div className="absolute bottom-0 -z-10">
              <h1 className="text-7xl textstyle font-light">GTS</h1>
            </div>
            <img src={item.img} alt={item.heading} className="w-[25%] py-5" />
            <h1 className="font-bold">{item.heading}</h1>
            <div className="flex gap-5">
              <h1 className="md:text-6xl text-5xl font-extrabold font-jos">
                {item.Engine}
              </h1>
              <h1 className="font-semibold md:text-lg">{item.time}</h1>
              <h1 className="font-semibold md:text-lg ">{item.litter}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 mx-auto w-[80%] gap-6 py-20">
        {CarsIcon.map((item) => (
          <div
            key={item.id}
            className="text-gray-500 gap-2 border border-gray-300 text-center p-1 rounded-lg flex flex-col justify-center items-center transition-all duration-500 cursor-pointer hover:scale-110"
          >
            <img
              src={item.img}
              alt={item.name}
              className="md:w-[30%] w-[60%]"
            />
            <h1 className="md:text-sm text-xs">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;
