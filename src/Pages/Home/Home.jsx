import React from "react";
import HomeBanner from "../../Components/Home/HomeBanner";
import img from "../../../public/Images/Home/Ellipse.png";
import HomeCarsSlider from "../../Components/Home/HomeCarsSlider";
import HomeCards from "../../Components/Home/HomeCards";
import Footer from './../../Components/Footer/Footer';
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="relative">
        {/* Background Image */}
        <div className="absolute top-0 w-full md:h-[60vh] h-[60vh] lg:h-[90vh] -z-20 overflow-hidden">
          <img
            src={img}
            alt="Background"
            className="object-cover w-full h-full"
          />
        </div>
        <HomeBanner />
        <HomeCarsSlider />
        <HomeCards />
        <Footer/>
      </div>
    </>
  );
};

export default Home;
