import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { _id,name, shortdescribe, price, image } = props.product;
    return (
        <>
            <div className="col ">
                <div className="card h-100">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body text-start">
                        <h2 className="card-title">{name}</h2>
                        <p className="card-text card-description text-start">{shortdescribe}</p>
                    </div>
                    <div className="card-footer py-4">
                        <h3 className="text-bold"> Price: ${price}</h3>
                        <Link to={`/productDetails/${_id}`}> <button className="btn btn-success fw-bold">Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;