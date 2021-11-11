import React, { useState, useEffect } from 'react';
import HomeProduct from '../HomeProduct/HomeProduct';


const HomeProducts = () => {

    const [HomeProducts, setHomeProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/bikes')
        .then((response)=>response.json())
        .then(result=>setHomeProducts(result))
    },[])
    return (
        <div className="container p-4">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    HomeProducts.slice(0,6).map(product=><HomeProduct key={product.id} product={product}></HomeProduct>)
                }
            </div>
            
        </div>
    );
};

export default HomeProducts;