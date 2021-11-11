import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { _id,name, shortdescribe, price, image } = props.product;
    return (
        <>
            <div class="col ">
                <div class="card h-100">
                    <img src={image} class="card-img-top" alt="..." />
                    <div class="card-body text-start">
                        <h2 class="card-title">{name}</h2>
                        <p class="card-text card-description text-start">{shortdescribe}</p>
                    </div>
                    <div class="card-footer">
                        <h3 class="text-bold"> Price: ${price}</h3>
                        <Link to={`/productDetails/${_id}`}> <button className="btn btn-success fw-bold">Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;