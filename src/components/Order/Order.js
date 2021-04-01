
import React from 'react';

const Order = (props) => {
    const product = JSON.parse(localStorage.getItem("product"));

     const { name, price, quantity, time } =product;

    return (
        <div>
                      
                    <h1>{name}</h1>
                    <h1>{quantity}</h1>
                    <h1>Total:  {price}</h1>
                    <h1>{time}</h1>
              
        </div>
    );
};

export default Order;