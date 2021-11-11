import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import "./ProductDetails.css";
import Fade from 'react-reveal/Fade';
import useAuth from '../../hooks/useAuth';
import Bounce from 'react-reveal/Bounce';
import Navigation from '../../pages/shared/Navigation/Navigation';



const ProductDetails = () => {
    const { productID } = useParams();
    const [ProductDetails, setProductDetails] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    console.log(user.email);
    const onSubmit = data => {

        data.id = productID;
        data.product_name = ProductDetails?.name;
        data.product_image = ProductDetails?.image;
        data.product_shortdescribe = ProductDetails?.shortdescribe;
        data.price = ProductDetails?.price;
        data.status = "Pending";

        fetch(`http://localhost:5000/productDetails/placeOrder`, {
            method: 'POST',
            headers: { 'content-type': "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert("Product Added")
                    reset();
                }
            })

    };

    useEffect(() => {
        fetch(`http://localhost:5000/bikes/${productID}`)
            .then((response) => response.json())
            .then(result => setProductDetails(result))
    }, [])


    return (
        <>
            <Navigation></Navigation>
            <div className="service-details">

                {/* <Row xs={1} md={4} className="g-4"> */}

                <div className="container py-5">
                    <div className="row mx-auto d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <Fade right>
                                <h2 className="text-warning fw-500">Choose The Best Bike</h2>
                            </Fade>
                            <Fade left>
                                <h5 className="text-white fw-bold mb-5">As Your Dreams</h5>
                            </Fade>

                            <Fade bounceRight>
                                <CardGroup>
                                    <Card className="bg-light text-dark custom-card">
                                        <Card.Img variant="top" src={ProductDetails?.image} />
                                        <Card.Body>
                                            <Card.Title className="text-primary fw-bold"><h3>{ProductDetails?.name}</h3></Card.Title>
                                            <Card.Text>
                                                {ProductDetails?.shortdescribe}
                                            </Card.Text>
                                            <Card.Text>
                                                <h4 className="bg-warning w-50 mx-auto border rounded-5 p-3">Price: <span className="text-primary">${ProductDetails?.price}</span></h4>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </Card.Footer>
                                    </Card>
                                </CardGroup>
                            </Fade>
                        </div>

                        <Bounce right >
                            <div className="col-md-6">
                                <h2 className="text-uppercase text-warning" >Please Fill-up The Form</h2>
                                <form className="form-custom" onSubmit={handleSubmit(onSubmit)}>
                                    <input className="mt-2" {...register("name")} placeholder="Name" defaultValue={user.displayName} required /> <br />
                                    <input className="mt-2" {...register("email")} placeholder="Email" defaultValue={user.email} required /> <br />
                                    <input className="mt-2" type="number" {...register("number")} placeholder="Mobile" required /> <br />
                                    <input className="mt-2" type="text" {...register("address")} placeholder="Address" required /> <br />
                                    <input className="bg-warning fw-bold border mt-2" type="submit" value="Checkout Booking" />
                                </form>
                            </div>
                        </Bounce>

                    </div>
                </div>


                {/* </Row> */}

            </div>

        </>
    );
};

export default ProductDetails;