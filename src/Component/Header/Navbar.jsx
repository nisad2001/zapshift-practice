import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to='/services'
          className={({ isActive }) =>
            isActive ? "bg-[#CAEB66] font-bold" : ""
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/coverage'
          className={({ isActive }) =>
            isActive ? "text-[#CAEB66] font-bold" : ""
          }
        >
          Coverage
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? "text-[#CAEB66] font-bold" : ""
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/pricing'
          className={({ isActive }) =>
            isActive ? "text-[#CAEB66] font-bold" : ""
          }
        >
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/rider'
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        >
          Be A Rider
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className='navbar bg-base-100 shadow-sm max-w-[1280px] mx-auto mb-9 rounded-2xl'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
            >
              {links}
            </ul>
          </div>

          <Link to='/' className='btn btn-ghost text-xl'>
            <div className='flex justify-center items-center gap-2'>
              <img src='/asset/logo.png' alt='' />
              <h3 className='font-extrabold text-[32px] -ms-4'>zapshift</h3>
            </div>
          </Link>
        </div>

        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{links}</ul>
        </div>

        <div className='navbar-end'>
          <a className='btn'>Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
