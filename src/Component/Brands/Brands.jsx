import React from "react";

// Swiper import
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Modules
import { Autoplay } from "swiper/modules";

const BrandsImages = [
  "/asset/brands/amazon.png",
  "/asset/brands/amazon_vector.png",
  "/asset/brands/casio.png",
  "/asset/brands/moonstar.png",
  "/asset/brands/randstad.png",
  "/asset/brands/star.png",
  "/asset/brands/start_people.png",
];

const Brands = () => {
  return (
    <div className='max-w-[1280px] mx-auto my-10'>
      <h1 className='font-extrabold text-[28px] text-[#03373D] text-center mb-8'>
        We've helped thousands of sales teams
      </h1>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {BrandsImages.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} className='h-[50px] mx-auto object-contain' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
