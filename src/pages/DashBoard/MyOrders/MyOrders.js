import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Fade from 'react-reveal/Fade';
import { Button, Card, CardGroup, Row, Spinner } from 'react-bootstrap';




const MyOrders = () => {

    const [myOrders, setmyOrders] = useState([]);
    const[isLoading, setIsLoading] = useState(true)
    const { user } = useAuth();
    useEffect(() => {
        
        fetch(`http://localhost:5000/myOrders?email=${user.email}`)
            .then(res => res.json())
            .then(result => {
                setmyOrders(result);
                console.log(result);
                setIsLoading(true)

            })
    }, [isLoading])


    // for DELETE orders from user 

    const handleDeleteOrders = (id) => {
        console.log("order delete");
        if (window.confirm("Are You Sure")) {

            const url = `http://localhost:5000/deleteOrder/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        alert("Your Order Deleted")
                        setIsLoading(false)

                    }
                })
        }

    }

    return (
        <div className="my-orders">
            <div className="container">
                <Fade left>
                    <h2 className=" display-6"> <u>My Orders</u> </h2>
                </Fade>
                <Fade right>
                    <Row xs={1} md={4} className="p-3">
                        {
                            myOrders.map(item => (
                                <>
                                    <CardGroup>
                                        <Card>
                                            <Card.Img variant="top" src={item.product_image} />
                                            <Card.Body>
                                                <Card.Title>{item.product_name}</Card.Title>
                                                <Card.Text>
                                                    {item.product_shortdescribe}
                                                </Card.Text>
                                                <Card.Text>
                                                    <h3 className="fw-bold text-primary">${item.price}</h3>
                                                </Card.Text>
                                                {item.status === "Pending" ?
                                                    <Card.Text className="text-danger fw-bold">
                                                        {item.status}
                                                    </Card.Text> :
                                                    <Card.Text className="text-success fw-bold">
                                                        {item.status}
                                                    </Card.Text>}
                                                <Button onClick={() => handleDeleteOrders(item._id)} className="btn btn-danger m-2">Cancel Booking</Button>
                                            </Card.Body>
                                            <Card.Footer>
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </Card.Footer>
                                        </Card>
                                    </CardGroup>
                                </>
                            ))
                        }
                    </Row>
                </Fade>

            </div>
        </div>
    );
};

export default MyOrders;