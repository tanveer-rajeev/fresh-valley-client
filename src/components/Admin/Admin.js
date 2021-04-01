import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Admin = () => {

    const { register, handleSubmit } = useForm();
    const [imageURL, setIMageURL] = useState(null);

    const onSubmit = data => {
        const addData = {
            name: data.name,
            price: data.price,
            weight: data.weight,
            imageURL: imageURL
        };
        const url = `http://localhost:5000/addProducts`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addData)
        })
            .then(res => console.log('server side response', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '4295ac4d47b569312bea67b440cdbdbb');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className=" row container">
            <div className="col-md-3">
                <Link to="/admin" >Admin</Link>
                <br/>
                <Link to="/manageProduct" >Manage Product</Link>
            </div>
            <div className="col-md-9">
                <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Product name</h1>
                <input name="name" placeholder="Enter name" ref={register} />
                <br />
                <h1>Add Price</h1>
                <input name="price" placeholder="Enter price" type="text" ref={register} />
                <br />
                <h1>Weight</h1>
                <input name="weight" placeholder="Enter weight" type="text" ref={register} />
                <br />
                <h1>Add photo</h1>
                <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                <input type="submit" />
            </form>
            </div>

            
        </div>
    );
};

export default Admin;