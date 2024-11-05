import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
             <div className=' bg-[#9538E2] w-full h-[300px] rounded-lg pt-20  '>
            
            <h2 className='text-center text-[#FFFFFF] text-5xl font-bold mb-6'>Dashboard</h2>
            <p className=' text-center text-[#FFFFFF] mb-5'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <div className='flex gap-4 justify-center'>
                    <Link to="/static"><button className='btn btn-outline'>Cart</button> </Link>
                    <Link to="/wishlist"><button className='btn btn-outline'>Wish List</button> </Link>
                   
                </div> 
                </div> 
                <Outlet></Outlet>
        </div>
    );
};

export default Header;