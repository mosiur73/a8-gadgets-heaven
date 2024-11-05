import React, { useEffect, useState } from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import {  useLoaderData, useParams } from 'react-router-dom';
import { addToCart } from '../Utility/Utility';

const ProductDetails = () => {
   
   const {id}=useParams()
   const data =useLoaderData()
   const [product,setProducts]=useState({})
   
    useEffect( ()=>{
        const singleProduct=data.find(product =>product.id == id)
        setProducts(singleProduct)
    },[data,id])
    const {price,product_title,product_image,description,Specification,rating}=product

    //product add to cart
    const handleAddToCart=(product)=>{
            addToCart(product)
          
    }
   
    return (
        <div className='mt-10'>
            <div className=' bg-[#9538E2] w-full h-[500px] rounded-lg pt-20  '>
            
            <h2 className='text-center text-[#FFFFFF] text-5xl font-bold mb-6'>Product Details</h2>
            <p className=' text-center text-[#FFFFFF] mb-5'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                
             </div>
             <div className="hero bg-base-200 max-w-4xl  rounded-xl mx-auto -translate-y-56">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={product_image}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div className=' justify-start'>
      <h1 className="text-2xl font-bold">{product_title}</h1>
      <p className="py-6">{price} </p>
      <button className="btn btn-outline">in-stock</button>
      <p>{description}</p>
      <h1>Specification:</h1>
      <h2 className='text-[#09080F] text-xl font-bold'>Rating:</h2>
      
      <div className='flex'>
      <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
<p>{rating}</p>
      </div>
      <div className='flex'>
      <button onClick={()=>handleAddToCart(product)} className='btn btn-warning '>add to Cart <FiShoppingCart></FiShoppingCart></button>
      <MdFavoriteBorder></MdFavoriteBorder>
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ProductDetails;