import React from "react";

const Services = () => {
  return (
    <div className='max-w-[1280px] mx-auto bg-[#03373D] rounded-3xl px-6 md:px-12 mb-25'>
      {/* Heading */}
      <h1 className='font-extrabold text-white text-[32px] md:text-[40px] text-center pt-[80px] mb-4'>
        Our Services
      </h1>

      <p className='text-center font-medium text-[14px] md:text-[16px] text-[#DADADA] max-w-[700px] mx-auto'>
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>

      {/* Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-[80px] auto-rows-fr'>
        {/* CARD 1 */}
        <div className='group cursor-pointer h-full min-h-[280px] p-8 bg-white rounded-3xl flex flex-col shadow-md hover:shadow-xl hover:bg-[#CAEB66] transition-all duration-300'>
          <img className='mb-6 mx-auto w-12' src='/asset/service.png' alt='' />
          <h1 className='mb-4 font-bold text-[20px] text-[#03373D] text-center group-hover:text-[#03373D]'>
            Express & Standard <br /> Delivery
          </h1>
          <p className='font-medium text-[15px] text-[#606060] text-center flex-grow group-hover:text-[#03373D]'>
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi.
          </p>
        </div>

        {/* CARD 2 */}
        <div className='group cursor-pointer h-full min-h-[280px] p-8 bg-white rounded-3xl flex flex-col shadow-md hover:shadow-xl hover:bg-[#CAEB66] transition-all duration-300'>
          <img className='mb-6 mx-auto w-12' src='/asset/service.png' alt='' />
          <h1 className='mb-4 font-bold text-[20px] text-[#03373D] text-center group-hover:text-[#03373D]'>
            Nationwide Delivery
          </h1>
          <p className='font-medium text-[15px] text-[#606060] text-center flex-grow group-hover:text-[#03373D]'>
            We deliver parcels nationwide with home delivery in every district.
          </p>
        </div>

        {/* CARD 3 */}
        <div className='group cursor-pointer h-full min-h-[280px] p-8 bg-white rounded-3xl flex flex-col shadow-md hover:shadow-xl hover:bg-[#CAEB66] transition-all duration-300'>
          <img className='mb-6 mx-auto w-12' src='/asset/service.png' alt='' />
          <h1 className='mb-4 font-bold text-[20px] text-[#03373D] text-center group-hover:text-[#03373D]'>
            Fulfillment Solution
          </h1>
          <p className='font-medium text-[15px] text-[#606060] text-center flex-grow group-hover:text-[#03373D]'>
            Inventory management, order processing, packaging, and support.
          </p>
        </div>

        {/* CARD 4 */}
        <div className='group cursor-pointer h-full min-h-[280px] p-8 bg-white rounded-3xl flex flex-col shadow-md hover:shadow-xl hover:bg-[#CAEB66] transition-all duration-300'>
          <img className='mb-6 mx-auto w-12' src='/asset/service.png' alt='' />
          <h1 className='mb-4 font-bold text-[20px] text-[#03373D] text-center group-hover:text-[#03373D]'>
            Cash on Delivery
          </h1>
          <p className='font-medium text-[15px] text-[#606060] text-center flex-grow group-hover:text-[#03373D]'>
            100% cash on delivery service anywhere in Bangladesh.
          </p>
        </div>

        {/* CARD 5 */}
        <div className='group cursor-pointer h-full min-h-[280px] p-8 bg-white rounded-3xl flex flex-col shadow-md hover:shadow-xl hover:bg-[#CAEB66] transition-all duration-300'>
          <img className='mb-6 mx-auto w-12' src='/asset/service.png' alt='' />
          <h1 className='mb-4 font-bold text-[20px] text-[#03373D] text-center group-hover:text-[#03373D]'>
            Corporate Logistics
          </h1>
          <p className='font-medium text-[15px] text-[#606060] text-center flex-grow group-hover:text-[#03373D]'>
            Warehouse and inventory management solutions.
          </p>
        </div>

        {/* CARD 6 */}
        <div className='group cursor-pointer h-full min-h-[280px] p-8 bg-white rounded-3xl flex flex-col shadow-md hover:shadow-xl hover:bg-[#CAEB66] transition-all duration-300'>
          <img className='mb-6 mx-auto w-12' src='/asset/service.png' alt='' />
          <h1 className='mb-4 font-bold text-[20px] text-[#03373D] text-center group-hover:text-[#03373D]'>
            Parcel Return
          </h1>
          <p className='font-medium text-[15px] text-[#606060] text-center flex-grow group-hover:text-[#03373D]'>
            Easy return and exchange system for online businesses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
