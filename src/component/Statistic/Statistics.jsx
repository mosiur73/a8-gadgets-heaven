import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, XAxis, YAxis, Bar } from 'recharts';


const Statistics = () => {
   
   
    
    const productData = [
        { name: "Smartphone", price: 699 },
        { name: "Laptop", price: 1299 },
        { name: "Headphones", price: 199 },
        { name: "Smartwatch", price: 299 },
        { name: "Tablet", price: 499 },
        { name: "Camera", price: 899 },
        { name: "Gaming Console", price: 399 },
        { name: "Monitor", price: 249 },
        { name: "Keyboard", price: 99 },
        { name: "Mouse", price: 49 }
      ];
      
    return (
        <div>
           
           {/* <LineChart width={600} height={500} data={productData}>
            <Line dataKey="price"></Line>
           </LineChart> */}
           <BarChart width={1000} height={500} data={productData}>
            <XAxis dataKey="name"></XAxis>
            <YAxis dataKey="price"></YAxis>
            <Bar dataKey="price" ></Bar>
           </BarChart>
           
        </div>
    );
};

export default Statistics;