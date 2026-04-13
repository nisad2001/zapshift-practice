import React from "react";
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='bg-[#0B0B0B] text-gray-300 rounded-2xl mx-4 my-10 px-6 py-10 max-w-[1280px] mx-auto rounded-4xl'>
      <div className='max-w-5xl mx-auto text-center'>
        {/* Logo */}
        <div className='flex justify-center items-center gap-2 mb-4'>
          <img src='/asset/logo.png' alt='' />
          <h3 className='font-extrabold text-[32px] -ms-4'>zapshift</h3>
        </div>

        {/* Description */}
        <p className='text-sm text-gray-400 max-w-xl mx-auto'>
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        {/* Divider */}
        <div className='border-t border-dashed border-gray-600 my-6'></div>

        {/* Links */}
        <ul className='flex flex-wrap justify-center gap-6 text-sm text-gray-400'>
          <li className='hover:text-white cursor-pointer'>Services</li>
          <li className='hover:text-white cursor-pointer'>Coverage</li>
          <li className='hover:text-white cursor-pointer'>About Us</li>
          <li className='hover:text-white cursor-pointer'>Pricing</li>
          <li className='hover:text-white cursor-pointer'>Blog</li>
          <li className='hover:text-white cursor-pointer'>Contact</li>
        </ul>

        {/* Divider */}
        <div className='border-t border-dashed border-gray-600 my-6'></div>

        {/* Social Icons */}
        <div className='flex justify-center gap-4'>
          <div className='bg-blue-600 p-3 rounded-full cursor-pointer hover:scale-110 transition'>
            <FaLinkedinIn className='text-white' />
          </div>
          <div className='bg-gray-700 p-3 rounded-full cursor-pointer hover:scale-110 transition'>
            <FaSquareXTwitter className='text-white' />
          </div>
          <div className='bg-blue-500 p-3 rounded-full cursor-pointer hover:scale-110 transition'>
            <FaFacebookF className='text-white' />
          </div>
          <div className='bg-red-600 p-3 rounded-full cursor-pointer hover:scale-110 transition'>
            <FaYoutube className='text-white' />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
