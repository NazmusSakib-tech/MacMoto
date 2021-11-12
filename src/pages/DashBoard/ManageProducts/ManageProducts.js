import React, { useState, useEffect } from 'react';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const [manageProducts, setManageProducts] = useState([]);
    const [currentStatus, setCurrentStatus] = useState(true)


    // Get ALL product from API
    useEffect(() => {
        fetch('https://polar-cove-41231.herokuapp.com/bikes')
            .then((response) => response.json())
            .then(result => {
                setManageProducts(result)
                setCurrentStatus(true);
                })
    }, [currentStatus])


      // For Delete Product
      const handleDeleteProduct = (id, index) => {
        console.log(id);
        if (window.confirm("Are You Sure")) {

            const url = `https://polar-cove-41231.herokuapp.com/deleteProduct/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        alert("Product Has Deleted")
                        // allOrders[index].status="Approved";
                        setCurrentStatus(false);
                    }
                })
        }

    }
    return (
        <>
            <div className="all-products">

                <div className="container p-4 ">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        {
                            manageProducts.map(product =>(
                                
                                <>
                                    <div class="col ">
                                        <div class="card h-100">
                                            <img src={product?.image} class="card-img-top" alt="..." />
                                            <div class="card-body text-start">
                                                <h2 class="card-title">{product?.name}</h2>
                                                <p class="card-text card-description text-start">{product?.shortdescribe}</p>
                                            </div>
                                            <div class="card-footer">
                                                <h3 class="text-bold"> Price: ${product?.price}</h3>
                                                <button onClick={()=>handleDeleteProduct(product._id)} className="btn btn-danger fw-bold">Delete Product</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </div>

                </div>
            </div>
        </>
    );
};

export default ManageProducts;