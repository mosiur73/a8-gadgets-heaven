import React, { useState } from 'react';
import {  useLoaderData } from 'react-router-dom';
import CartList from '../CartList/CartList';
import WishList from '../WishList/WishList';
import './Dashboard.css'
import { Helmet } from 'react-helmet';

const Dashboard = () => {
    const data =useLoaderData()
   
    
    const [isActive,setIsActive]=useState({
        cart:"true",
        status:"active"
      })
    
      const handleIsActiveState=(status)=>{
        if(status== "cart"){
          setIsActive({
            cart:true,
            status:"cart"
          })
        }
        else{
          setIsActive({
            cart:false,
            status:"about"
          })
        }
      }
    
    return (
        <div className='mt-10 mb-10'>
                      <Helmet>
                <meta charSet="utf-8" />
                <title>gadgets-Dashboard page</title>
                
            </Helmet>
             <div className=' bg-[#9538E2] w-full h-[300px] rounded-lg pt-20  '>
            
            <h2 className='text-center text-[#FFFFFF] text-5xl font-bold mb-6'>Dashboard</h2>
            <p className=' text-center text-[#FFFFFF] mb-5'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <div className='flex gap-4 justify-center mb-10'>
                   <button onClick={()=>handleIsActiveState('cart')} className={`${isActive.cart?"btn active" :"btn"}`}>Cart</button> 
                   <button onClick={()=>handleIsActiveState('about')} className={`${isActive.cart?"btn " :"btn active"}`}>Wish List</button> 
                  
                   
                </div> 
               
              
                </div> 
                
               
                
                
               
                {
                    isActive.cart? <CartList data={data} ></CartList>: <WishList></WishList>
                   }
          
        </div>
    );
};

export default Dashboard;