
import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import './Product.css'
import { useHistory } from 'react-router';
import Order from '../Order/Order';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {

    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    console.log(props.product);
    const { _id, name, price, weight, imageURL } = props.product;
    const history = useHistory();
    const showDetails = () => {
        const url = `checkout/${_id}`;

        history.push(url);
    }

    return (

        // <div className="col-md-3 align-items-center mt-5">
        //     <div className="d-flex justify-content-around">
        //         <Card id="card" className="">
        //             <Card.Img id="team-image" variant="top" src={imageURL} />
        //             <Card.Body>
        //                 <Card.Title>name: {name}</Card.Title>
        //                 <Card.Title>price: {price}</Card.Title>
        //                 <Card.Title>weight: {weight}</Card.Title>
        //                 <Button id="teamBtn" onClick={() => showDetails()}>Buy Now </Button>
        //             </Card.Body>
        //         </Card>
        //     </div>
        // </div>
        <div className="col-md-3 align-items-center mt-5">
            <div className="d-flex justify-content-around">
                <Card id="card" className="homeCardClass">
                    <Card.Img id="team-image" className="cardImageClass" variant="top" src={imageURL} />
                    <Card.Body>
                        <Card.Title>Name: {name}</Card.Title>
                        <Card.Title>Weight: {weight}</Card.Title>
                        <Card.Title>Price: {price}</Card.Title>
                        {/* <Button id="teamBtn" onClick={() => showDetails()}>Buy Now </Button> */}
                        <Button onClick={() => showDetails()} variant="contained" color="primary">{cartIcon} Buy Now </Button>
                    </Card.Body>
                </Card>
            </div>
        </div>

    );
};

export default Product;