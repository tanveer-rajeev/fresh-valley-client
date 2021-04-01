import axios from 'axios';
import React from 'react';

const DisplayProductDetails = (props) => {

    const { _id, name, weight, price } = props.product;

    const handleDelete = () => {
        axios.delete(`http://localhost:5000/deleteProduct/${_id}`)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }

    return (
        <div className="row">
            <div className="col-md-3">

            </div>
            <form className="col-md-9 d-flex justify-content-around mb-5 text-center">
                <h1>{name}</h1>
                <h1>{weight}</h1>
                <h1>{price}</h1>
                <button onClick={handleDelete} >Delete</button>
            </form>

        </div>
    );
};

export default DisplayProductDetails;