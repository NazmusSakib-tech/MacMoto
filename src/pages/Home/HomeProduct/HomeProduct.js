import React from 'react';
import { Link } from 'react-router-dom';
import './HomeProduct.css'
const HomeProduct = (props) => {
    const { _id, name, shortdescribe, price, image } = props.product;
    return (
        <>
            <div class="col home-product-card">
                <div class="card h-100">
                    <img src={image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h3 class="card-title">{name}</h3>
                        <p class="card-text text-start">{shortdescribe.split(' ').slice(0, 50).toString().replace(/,/g, ' ')}</p>
                    </div>
                    <div class="card-footer pb-4">
                        <h2 class="text-bold"> Price: ${price}</h2>
                       <Link to={`/productDetails/${_id}`}> <button className="btn btn-success fw-bold">Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeProduct;