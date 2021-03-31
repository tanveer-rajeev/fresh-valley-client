import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Checkout = () => {
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState([]);


    useEffect(() => {

        axios.get(`http://localhost:5000/${id}`)
        .then((response) => setProductDetails(response.data))
        .catch((error) =>console.log(error))
    },[id])

    return (

        <div>
            <h1>{productDetails.name}</h1>
            <h1>{productDetails.price}</h1>
            <h1>1</h1>
            <h1>Total:  { productDetails.price}</h1>
        </div>
    );
};

export default Checkout;