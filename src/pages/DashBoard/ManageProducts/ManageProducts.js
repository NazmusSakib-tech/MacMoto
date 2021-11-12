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
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            manageProducts.map(product =>(
                                
                                <>
                                    <div className="col">
                                        <div className="card h-100">
                                            <img src={product?.image} className="card-img-top" alt="..." />
                                            <div className="card-body text-start">
                                                <h2 className="card-title px-3">{product?.name}</h2>
                                                <p className="card-text card-description text-start p-3">{product?.shortdescribe}</p>
                                            </div>
                                            <div className="card-footer p-4">
                                                <h3 className="text-bold"> Price: ${product?.price}</h3>
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