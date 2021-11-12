import React from 'react';
import { Link } from 'react-router-dom';
import './ExploreNow.css'
const ExploreNow = () => {
    return (
        <>
            {/* Bg Images Start */}

            <div className="explore">
                <div className="text-position-center">
                    <h1 style={{fontWeight:900}}>Welcome To Bike Lovers</h1>
                    <Link to="/allProducts"><button className="btn btn-warning fw-bold ">Explore Now</button></Link>
                </div>
            </div>

            {/* Bg Images End */}
        </>
    );
};

export default ExploreNow;