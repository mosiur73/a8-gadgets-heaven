import React from 'react';
import { NavLink, Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import CartList from '../CartList/CartList';
import Banner from '../Banner/Banner';
import Statistics from '../Statistic/Statistics';
import WishList from '../WishList/WishList';

const Dashboard = () => {
   
    
    return (
        <div className='mt-10'>
            
                
               
                <Header></Header>
                <CartList></CartList>
                <WishList></WishList>
               
          
        </div>
    );
};

export default Dashboard;