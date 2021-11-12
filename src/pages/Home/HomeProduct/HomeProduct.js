import React from 'react';
import { Link } from 'react-router-dom';
import './HomeProduct.css'
const HomeProduct = (props) => {
    const { _id, name, shortdescribe, price, image } = props.product;
    return (
        <>
            <div className="col home-product-card">
                <div className="card h-100">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title">{name}</h3>
                        <p className="card-text text-start">{shortdescribe.split(' ').slice(0, 50).toString().replace(/,/g, ' ')}</p>
                    </div>
                    <div className="card-footer pb-4">
                        <h2 className="text-bold"> Price: ${price}</h2>
                       <Link to={`/productDetails/${_id}`}> <button className="btn btn-success fw-bold">Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeProduct;