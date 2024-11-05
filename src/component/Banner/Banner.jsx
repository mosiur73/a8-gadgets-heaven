import React from 'react';
import img from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div className=' mb-10  '>
            <div className=' bg-[#9538E2] h-[600px] rounded-lg pt-20  '>
            
               <h2 className='text-center text-[#FFFFFF] text-5xl font-bold mb-6'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h2>
               <p className=' text-center text-[#FFFFFF] mb-5'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                   <button className='bg-white p-3 rounded-2xl text-[#9538E2] font-bold '>Shop Now</button>
                </div>
               <img className='w-[1000px] h-[500px] mx-auto rounded-lg -translate-y-56' src={img} alt="" />
          
        </div>
    );
};

export default Banner;