import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-200 rounded-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-6">
       <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/statice">Statistics</NavLink></li>
      <li><NavLink to="/dashboard">Dashboard</NavLink></li>
      <li><NavLink to="/feature">Feature</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-10">
    
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/static">Statistics</NavLink></li>
      <li><NavLink to="/dashboard">Dashboard</NavLink></li>
      <li><NavLink to="/feature">Feature</NavLink></li>
  
    </ul>
  </div>
  <div className="navbar-end text-2xl gap-6">
    <FiShoppingCart></FiShoppingCart>
    <MdFavoriteBorder></MdFavoriteBorder>
  </div>
</div>
        </div>
    );
};

export default Navbar;