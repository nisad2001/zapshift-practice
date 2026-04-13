import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className='max-w-[1280px] mx-auto mb-25'>
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        <div className='relative'>
          <img src='/asset/banner/banner2.png' alt='' />

          <button className='absolute bottom-18 left-20 bg-primary text-black px-4 py-2 rounded rounded-full'>
            Track Your Parcel
          </button>
        </div>

        <div className='relative'>
          <img src='/asset/banner/banner2.png' alt='' />

          <button className='absolute bottom-18 left-20 bg-primary text-black px-4 py-2 rounded bottom-15 rounded-full '>
            Track Your Parcel
          </button>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
