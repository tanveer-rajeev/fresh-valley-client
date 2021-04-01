import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router';
import Order from '../Order/Order';

const Checkout = () => {
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState(0);
    const [checkOrder,setCheckOrder] = useState(false);


    const handleCheckout = () => {
        const { _id, name, price, weight } = productDetails;
        const data = {
            name: name,
            price: price,
            weight: weight
        }

        axios.put(`http://localhost:5000/updateProduct/${_id}`, {
            body: JSON.stringify(data)
        }).then(res => {
            console.log('server side response', res.data.value)
            setCheckOrder(_id);
            
             localStorage.setItem("product", JSON.stringify(res.data.value));
            
        });

    }

    useEffect(() => {
        
        if (!productDetails) {
            console.log("useEffect");
            axios.get(`http://localhost:5000/${id}`)
                .then((response) => setProductDetails(response.data))
                .catch((error) => console.log(error))
        } 

    }, [id])

    return (
        <div>
            {
            !checkOrder &&
             <div>
                <h1>{productDetails.name}</h1>
                <h1>{productDetails.price}</h1>
                <h1>1</h1>
                <h1>Total:  {productDetails.price}</h1>
                <button onClick={handleCheckout}>Checkout</button>
            </div>   
            }
            
            {
                checkOrder &&
                <Order product={ productDetails}/>
            }
        </div>

    );
};

export default Checkout;