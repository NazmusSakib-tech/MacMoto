import React from 'react';
import { Link } from 'react-router-dom';

const HomeProduct = (props) => {
    const { _id, name, shortdescribe, price, image } = props.product;
    return (
        <>
            <div class="col">
                <div class="card h-100">
                    <img src={image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{shortdescribe}</p>
                    </div>
                    <div class="card-footer">
                        <h2 class="text-bold"> Price: ${price}</h2>
                       <Link to={`/productDetails/${_id}`}> <button className="btn btn-success fw-bold">Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeProduct;