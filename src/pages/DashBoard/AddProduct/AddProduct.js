import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css'
const AddProduct = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        fetch('https://polar-cove-41231.herokuapp.com/addSingleProduct', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    alert('Successfully added')
                    reset();
                }
                console.log(result)
            }
            )
        console.log(data)
    };
    return (
        <div className="add-product p-3">
            <h2 className="text-warning fw-bold">Add New Product</h2>
            <form className="form-custom p-3" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Product Model" required /> <br />
                <input className="mt-2" type="text" {...register("shortdescribe")} placeholder="Shortdescribe" required /> <br />
                <input className="mt-2" type="text" {...register("price")} placeholder="Price" required /> <br />
                <input className="mt-2" type="text" {...register("image")} placeholder="Image-Url" required /> <br />
                <input className="mt-2 btn btn-primary fw-bold" type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;