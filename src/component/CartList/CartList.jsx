import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts, removeProducts } from '../Utility/Utility';
import Card from '../Card/Card';
import ShortPrice from './ShortPrice';

const CartList = ({data}) => {

    
    //short by price pactice
    const [product,setProduct]=useState([])
    const handleShort=short=>{
        if(short == 'price'){
            const shorted=[...data].short((a,b)=>b.price - a.price)
            setProduct(shorted)
        }
    }



   const [products,setProducts]=useState([])
   
  useEffect(() => {
    const product = getAllProducts()
             setProducts(product)
  }, [])
     
  const handleRemove = id => {
    removeProducts(id)
    const product = getAllProducts()
    setProducts(product)
  }


    return (
        <div>
            <div className='flex justify-between mt-6'>
                <h1 className='text-black text-2xl font-bold'>Cart</h1>
                <div className='flex gap-4'>
                    <h2 className='text-[#0B0B0B] text-2xl font-bold'>total cost:{product}</h2>
                    <div className='flex gap-6'>
                    <button onClick={handleShort} className='btn btn-outline'>short By price</button> 
                    <button className='btn btn-outline'>purches</button> 
                    </div>

                </div>
             </div>

             <div className='space-y-4'>
                {
                    products.map(product=><Card key={product.id} product={product} handleRemove={handleRemove}></Card> )
                }
                {
                    product.map(short=> <ShortPrice key={short.id} short={short}></ShortPrice>)
                }
             </div>
        </div>
    );
};

export default CartList;