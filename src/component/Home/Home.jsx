import React from 'react';
import Banner from '../Banner/Banner';
import AllProducts from '../AllProducts/AllProducts';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Root from '../Root/Root';

const Home = () => {
    const categories=useLoaderData()
   
    
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>gadgets-Home page</title>
                
            </Helmet>
            
            <Banner ></Banner>
            <AllProducts categories={categories}></AllProducts>
        </div>
    );
};

export default Home;