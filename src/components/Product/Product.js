
import React from 'react';
import { Button, Card } from 'react-bootstrap';

import { useHistory } from 'react-router';
import Order from '../Order/Order';

const Product = (props) => {

    console.log(props.product);
    const { _id, name, price, weight, imageURL } = props.product;
    

    const history = useHistory();

    const showDetails = () => {
        const url = `checkout/${_id}`;
      
        history.push(url);
    }

    return (
       
            <div className="col-md-3 align-items-center mt-5">
                <div className="d-flex justify-content-around">
                    <Card id="card" className="">
                        <Card.Img id="team-image" variant="top" src={imageURL} />
                        <Card.Body>
                            <Card.Title>name: {name}</Card.Title>
                            <Card.Title>price: {price}</Card.Title>
                            <Card.Title>weight: {weight}</Card.Title>
                            <Button id="teamBtn" onClick={() => showDetails()}>Buy Now </Button>
                        </Card.Body>
                    </Card>
                </div>
               

            </div>

    );
};

export default Product;