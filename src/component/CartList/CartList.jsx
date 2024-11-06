import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts, removeProducts } from '../Utility/Utility';
import Card from '../Card/Card';
import ShortPrice from './ShortPrice';
//react modal
const modalStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modal: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '500px',
      width: '100%',
      textAlign: 'center',
    },
  };


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
  ////model 
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Step 2: Function to open/close the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

    return (
        <div>
             {isModalOpen && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.modal}>
            <h2>Modal Title</h2>
            <p>This is the content inside the modal.</p>
            <button onClick={toggleModal}>Close Modal</button>
          </div>
        </div>
      )}
                      
            <div className='flex justify-between mt-6'>
                <h1 className='text-black text-2xl font-bold'>Cart</h1>
                <div className='flex gap-4'>
                    <h2 className='text-[#0B0B0B] text-2xl font-bold'>total cost:{product}</h2>
                    <div className='flex gap-6'>
                    <button onClick={handleShort} className='btn btn-outline'>short By price</button> 
                    <button onClick={toggleModal} className='btn btn-outline'>purches</button> 
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