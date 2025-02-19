import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import img from "../../../public/Images/Home/Buggati.png";
import img1 from "../../../public/Images/Home/Porsche.png";
import img2 from "../../../public/Images/Home/LandRover.png";
import img3 from "../../../public/Images/Home/Ford.png";
import img4 from "../../../public/Images/Home/Ferrari.png";
import img5 from "../../../public/Images/Home/Bmw.png";
import img6 from "../../../public/Images/Home/Mercides.png";
// Import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

// 🔹 Add your custom image URLs here
const customImages = [
  { images: img },
  { images: img1 },
  { images: img2 },
  { images: img3 },
  { images: img4 },
  { images: img5 },
  { images: img6 },
];

const HomeSlider = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={4} // Show 4 slides by default
      spaceBetween={20} // Adds space between slides
      coverflowEffect={{
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination]}
      className="w-full mx-auto"
      breakpoints={{
        640: {
          slidesPerView: 2,  // 2 slides on small screens
          spaceBetween: 10,  // Reduce space between slides on small screens
        },
        768: {
          slidesPerView: 3,  // 3 slides on medium screens
          spaceBetween: 15,  // Adjust space between slides for medium screens
        },
        1024: {
          slidesPerView: 4,  // 4 slides on larger screens
          spaceBetween: 20,  // Standard space between slides on larger screens
        },
      }}
    >
      {customImages.map((item, index) => (
        <SwiperSlide key={index} className="flex justify-center items-center">
          <img
            src={item.images}
            className="w-32 md:w-40 lg:w-48 lg:h-[40vh] md:h-[20vh] h-[10vh] object-cover rounded-lg"
            alt={`Slide ${index + 1}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeSlider;
