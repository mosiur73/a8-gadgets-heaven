import React, { useEffect, useState } from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import {  useLoaderData, useParams } from 'react-router-dom';
import { addToCart,  } from '../Utility/Utility';
import { addToWishList } from '../Utility/WiceUtility';

const ProductDetails = () => {
  const [total,setTotal]=useState([0])
  
   const {id}=useParams()
   const data =useLoaderData()
   const [product,setProducts]=useState({})
   
    useEffect( ()=>{
        const singleProduct=data.find(product =>product.id == id)
        setProducts(singleProduct)
    },[data,id])
    const {price,product_title,product_image,description,rating}=product

    //product add to cart
    const handleAddToCart=(product)=>{
            addToCart(product)
            console.log(addToCart);
            
            setTotal(total + price)
          
    }
    //product add wish list
    const handleAddToWishlist=(product)=>{
      addToWishList(product)
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
    <div className=' justify-start space-y-2'>
      <h1 className="text-2xl font-bold text-start">{product_title}</h1>
      <p className="py-6 text-start">price:{price} </p>
      <button className="btn btn-outline flex">in-stock</button>
      <p className='text-start'>{description}</p>
      <h1 className='text-start'>Specification:</h1>
      <h2 className='text-[#09080F] text-xl font-bold text-start'>Rating:</h2>
      
      <div className='flex gap-4'>
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
      <div className='flex gap-8'>
      <button onClick={()=>handleAddToCart(product)} className='btn btn-warning '>add to Cart <FiShoppingCart></FiShoppingCart></button>
      <button onClick={()=>handleAddToWishlist(product)} className=' btn text-3xl'><MdFavoriteBorder></MdFavoriteBorder></button>
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ProductDetails;