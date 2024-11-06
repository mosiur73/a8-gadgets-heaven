import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({categories}) => {
   
    
    return (
        <div>
             <div  className="menu  bg-base-200 rounded-box  mt-3 w-52 h-72 p-6 shadow gap-6">
                <NavLink>All products</NavLink>
        {
            categories.map(category=>
                <NavLink key={category.category} to={`/category/${category.category}`} role='btn' 
                className={({isActive}) => `btn ${isActive ? ' btn-active' : ''}`}>
                    {category.category}
                </NavLink>
            )
        }
    </div>                                                         
        </div>
    );
};

export default Sidebar;