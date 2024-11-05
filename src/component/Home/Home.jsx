import React from 'react';
import Banner from '../Banner/Banner';
import AllProducts from '../AllProducts/AllProducts';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories=useLoaderData()
   
    
    return (
        <div>
            <Banner ></Banner>
            <AllProducts categories={categories}></AllProducts>
        </div>
    );
};

export default Home;