import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ShowCard from '../ShowCard/ShowCard';

const ProductCard = () => {
    const data =useLoaderData()
   
    
    const {category}=useParams()
    const [products,setProducts]=useState([])

    useEffect( ()=>{
        if(category){
            const filterProduct=[...data].filter(product =>product.category === category)
        setProducts(filterProduct)
        }else{
            setProducts(data.slice(0,8))
        }
    },[data,category])
    
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
           {
            products.map(product => <ShowCard key={product.id} product={product}></ShowCard>)
           }
        </div>
    );
};

export default ProductCard;