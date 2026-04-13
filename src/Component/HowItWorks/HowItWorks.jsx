import React from "react";

const HowItWorks = () => {
  return (
    <div className='max-w-[1280px] mx-auto px-4 md:px-8 mb-[80px]'>
      {/* Heading */}
      <h1 className='font-extrabold text-2xl md:text-3xl mb-8 text-center md:text-left'>
        How It Works
      </h1>

      {/* Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {/* Card 1 */}
        <div className='w-full p-6 md:p-8 bg-white rounded-3xl shadow-sm hover:shadow-lg transition duration-300 text-center md:text-left'>
          <img
            className='mb-6 mx-auto md:mx-0 w-12'
            src='/asset/bookingIcon.png'
            alt=''
          />
          <h1 className='mb-3 font-bold text-[18px] md:text-[20px] text-[#03373D]'>
            Booking Pick & Drop
          </h1>
          <p className='font-medium text-[14px] md:text-[16px] text-[#606060]'>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        {/* Card 2 */}
        <div className='w-full p-6 md:p-8 bg-white rounded-3xl shadow-sm hover:shadow-lg transition duration-300 text-center md:text-left'>
          <img
            className='mb-6 mx-auto md:mx-0 w-12'
            src='/asset/bookingIcon.png'
            alt=''
          />
          <h1 className='mb-3 font-bold text-[18px] md:text-[20px] text-[#03373D]'>
            Fast Processing
          </h1>
          <p className='font-medium text-[14px] md:text-[16px] text-[#606060]'>
            Your parcel is processed quickly and prepared for safe delivery.
          </p>
        </div>

        {/* Card 3 */}
        <div className='w-full p-6 md:p-8 bg-white rounded-3xl shadow-sm hover:shadow-lg transition duration-300 text-center md:text-left'>
          <img
            className='mb-6 mx-auto md:mx-0 w-12'
            src='/asset/bookingIcon.png'
            alt=''
          />
          <h1 className='mb-3 font-bold text-[18px] md:text-[20px] text-[#03373D]'>
            In Transit
          </h1>
          <p className='font-medium text-[14px] md:text-[16px] text-[#606060]'>
            Real-time tracking keeps you updated while your parcel is on the
            way.
          </p>
        </div>

        {/* Card 4 */}
        <div className='w-full p-6 md:p-8 bg-white rounded-3xl shadow-sm hover:shadow-lg transition duration-300 text-center md:text-left'>
          <img
            className='mb-6 mx-auto md:mx-0 w-12'
            src='/asset/bookingIcon.png'
            alt=''
          />
          <h1 className='mb-3 font-bold text-[18px] md:text-[20px] text-[#03373D]'>
            Delivered
          </h1>
          <p className='font-medium text-[14px] md:text-[16px] text-[#606060]'>
            Parcel will delived within on time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
