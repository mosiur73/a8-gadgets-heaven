import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = ({product}) => {
   
    const {product_image,product_title,price,id}=product
    return (
        <div>
           <div className="card card-compact bg-base-100 w- shadow-xl">
  <figure>
    <img className='w-64 h-40 rounded-xl'
      src={product_image}
      alt="Shoes" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{product_title}</h2>
    <p>Price:{price}</p>
    <div className="card-actions justify-center">
    <Link to={`/product/${id}`}><button className="btn btn-[#9538E2] btn-warning">view Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ShowCard;