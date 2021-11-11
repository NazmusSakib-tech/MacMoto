import React from 'react';
import './Navigation.css'
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo1 from '../../../utilities/images/brand Logo/logo1.jfif'
const Navigation = () => {
    const {logOut, user} = useAuth()
    return (
        <>
            <Navbar collapseOnSelect expand="lg">

                <Container className="sticky-md-top">

                    <Navbar.Brand as={Link} to="/home" className="nav-brand d-flex align-items-center ">

                        <img
                            src={logo1}
                            width="100"
                            height="80"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        <h3 className="text-danger">MACmOTO</h3>

                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link activeClassName="on-select" className="text-dark fw-bold mouse-hover" as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link activeClassName="on-select" className="text-dark fw-bold mouse-hover" as={NavLink} to="/allProducts">Our All Products</Nav.Link>
                        <Nav.Link activeClassName="on-select" className="text-dark fw-bold mouse-hover ms-2" as={NavLink} to="/dashboard">Dashboard</Nav.Link>
                        

                        {!user?.email && <Nav.Link activeClassName="on-select" className="text-dark fw-bold mouse-hover ms-2 w-sm-50" as={NavLink} to="/login">Login</Nav.Link>}
                        {user?.email && <Navbar.Text className="ms-2 text-primary">
                            Signed in as: <span className="user-name-text fw-bold">{user?.displayName}</span>
                        </Navbar.Text>}
                        {user?.email && <Button onClick={logOut} className="mx-2 logout-btn">Log Out</Button>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;