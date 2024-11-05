import React from 'react';
import { Link } from 'react-router-dom';

const WishList = () => {
    return (
        <div>
            <div className='flex justify-between mt-6'>
                <h1 className='text-black text-2xl font-bold'>Wise List</h1>
                <div className='flex gap-4'>
                    <h2 className='text-[#0B0B0B] text-2xl font-bold'>total cost:</h2>
                    <div className='flex gap-6'>
                    <Link><button className='btn btn-outline'>short By price</button> </Link>
                    <Link><button className='btn btn-outline'>purches</button> </Link>
                    </div>

                </div>
             </div>
        </div>
    );
};

export default WishList;