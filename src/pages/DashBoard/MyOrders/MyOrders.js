import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Fade from 'react-reveal/Fade';
import { Button, Card, CardGroup, Row, Spinner } from 'react-bootstrap';
import './MyOrder.css'



const MyOrders = () => {

    const [myOrders, setmyOrders] = useState([]);
    const[isLoading, setIsLoading] = useState(true)
    const { user } = useAuth();
    useEffect(() => {
        
        fetch(`https://polar-cove-41231.herokuapp.com/myOrders?email=${user.email}`)
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

            const url = `https://polar-cove-41231.herokuapp.com/deleteOrder/${id}`
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
        <div className="my-orders p-4">
            <div className="container">
                <Fade left>
                    <h2 className=" display-6 text-warning fw-bold"> <u>My Orders</u> </h2>
                </Fade>
                <Fade right>
                    <Row xs={1} md={4} className="p-3">
                        {
                            myOrders.map(item => (
                                <>
                                    <CardGroup>
                                        <Card className="my-orders-card">
                                            <Card.Img variant="top" src={item?.product_image} />
                                            <Card.Body>
                                                <Card.Title> <h3>{item?.product_name}</h3> </Card.Title>
                                                <Card.Text>
                                                    {item?.product_shortdescribe.split(' ').slice(0, 60).toString().replace(/,/g, ' ')}
                                                </Card.Text>
                                                <Card.Text>
                                                    <h3 className="fw-bold text-primary">${item?.price}</h3>
                                                </Card.Text>
                                                {item.status === "Pending" ?
                                                    <Card.Text className="text-danger fw-bold">
                                                        {item.status}
                                                    </Card.Text> :
                                                    <Card.Text className="text-success fw-bold">
                                                        {item.status}
                                                    </Card.Text>}
                                                <Button onClick={() => handleDeleteOrders(item?._id)} className="btn btn-danger m-2">Cancel Order</Button>
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