import React from "react";
import HomeSlider from "./HomeSlider";

const HomeCarsSlider = () => {
  return (
    <div className="bg-[#030915] w-full my-10 py-6 md:py-20 h-full">
      {/* Title Section */}
      <div className="pb-6 text-center px-4">
        <h1 className="text-white font-Sansita italic font-extrabold text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
          New Cars by Make
        </h1>
      </div>

      {/* Slider Section */}
      <div className="w-full flex justify-center">
        <HomeSlider />
      </div>
    </div>
  );
};

export default HomeCarsSlider;
