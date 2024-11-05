import React from 'react';
import { MdDelete } from "react-icons/md";

const Card = ({product,handleRemove}) => {
   
    const {price,product_image,product_title,description,id}=product
    return (
        <div className='bg-slate-200 p-6 rounded-xl mt-6'>
            <div className='flex gap-4'>
                <img className='w-52 h-32 rounded-2xl' src={product_image} alt="" />
                <div className='space-y-3'>
                    <h2 className='text-start text-2xl font-semibold'>{product_title}</h2>
                    <p className='text-start'>{description}</p>
                    <p className='text-start text-xl'>{price}</p>
                </div>
            </div>
            <div className='flex justify-end items-center'>
                <button onClick={()=>handleRemove(id)} className='text-3xl '><MdDelete /></button>
            </div>
        </div>
    );
};

export default Card;