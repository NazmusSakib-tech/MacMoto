import React, { useState, useEffect } from 'react';
import Navigation from '../../shared/Navigation/Navigation';
import Product from '../Product/Product';
import "./Products.css"
const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://polar-cove-41231.herokuapp.com/bikes')
            .then((response) => response.json())
            .then(result => setProducts(result))
    }, [])

    return (
        <>
            <Navigation></Navigation>
            <div className="all-products">

                <div className="container p-4 ">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            products.map(product => <Product key={product.id} product={product}></Product>)
                        }
                    </div>

                </div>
            </div>

        </>

    );
};

export default Products;