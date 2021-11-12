import React from 'react';

const Header = () => {
    return (
        <>
            {/* slider start */}


            <div id="carouselExampleCaptions" className="carousel slide" data-mdb-ride="carousel">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-mdb-target="#carouselExampleCaptions"
                        data-mdb-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-mdb-target="#carouselExampleCaptions"
                        data-mdb-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-mdb-target="#carouselExampleCaptions"
                        data-mdb-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://pro-theme.com/html/sokolcov/bikers-club/media/sliders/slider6.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Bike Your Passion</h2>
                            <p>We need to go on an adventure road trip</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://pro-theme.com/html/sokolcov/bikers-club/media/sliders/slider8.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Every day is a good day for a ride</h2>
                            <p>You don’t stop when you get old, You get old when you stop riding</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://pro-theme.com/html/sokolcov/bikers-club/media/sliders/slider10.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>A Ride That You Enjoy</h2>
                            <p> Keep your bike high and your head higher</p>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-mdb-target="#carouselExampleCaptions"
                    data-mdb-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-mdb-target="#carouselExampleCaptions"
                    data-mdb-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>



            {/* slider end */}
        </>
    );
};

export default Header;