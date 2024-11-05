import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const AllProducts = ({categories}) => {
  
    
    return (
        <div>
            <h2 className='text-[#0B0B0B] text-center text-5xl font-bold mb-20'>Explore Cutting-Edge Gadgets</h2>
           
             <div className='flex gap-10'>
             <Sidebar categories={categories}></Sidebar>
              <Outlet></Outlet>
    
             </div>
        </div>
    );
};

export default AllProducts;