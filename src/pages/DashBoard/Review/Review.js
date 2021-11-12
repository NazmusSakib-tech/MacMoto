import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import "./Review.css"
const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        // data.ratings = Math.round(parseFloat(data.ratings));
        fetch('https://polar-cove-41231.herokuapp.com/addRatings', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    alert('Review added')
                    reset();
                }
                console.log(result)
            }
            )
        console.log(data)
    };
    return (
        <div>
            <div className="user-review">
                <h2 className="text-white p-4">Please Give Your Reviews</h2>
                <form className="form-custom p-3" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} placeholder="Name" defaultValue={user?.displayName} required /> <br />
                    <input className="mt-2" type="text" {...register("reviewDetails")} placeholder="Review Details" required /> <br />
                    <input className="mt-2" type="number" {...register("ratings", { min: 0, max: 5 })} placeholder="Ratings out of 5" required /> <br />
                    <input className="mt-2" type="text" {...register("image")} defaultValue={user?.photoURL} placeholder="Image-Url" required /> <br />
                    <input className="mt-2 btn btn-primary fw-bold" type="submit" value="Send Review" />
                </form>
            </div>
        </div>
    );
};

export default Review;