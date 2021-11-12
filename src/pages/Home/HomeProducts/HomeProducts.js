import React, { useState, useEffect } from 'react';
import HomeProduct from '../HomeProduct/HomeProduct';
import "./HomeProducts.css"

const HomeProducts = () => {

    const [HomeProducts, setHomeProducts] = useState([]);

    useEffect(()=>{
        fetch('https://polar-cove-41231.herokuapp.com/bikes')
        .then((response)=>response.json())
        .then(result=>setHomeProducts(result))
    },[])
    return (
        <div className="p-4 home-product container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    HomeProducts.slice(0,6).map(product=><HomeProduct key={product.id} product={product}></HomeProduct>)
                }
            </div>
            
        </div>
    );
};

export default HomeProducts;