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
                            <h2>Nature Your Love</h2>
                            <p>The mountains are calling and I must go</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://pro-theme.com/html/sokolcov/bikers-club/media/sliders/slider8.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Welcome Beach Lovers</h2>
                            <p>Only at the beach can we go a splishin’ and a splashin</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://pro-theme.com/html/sokolcov/bikers-club/media/sliders/slider10.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>A Journey That You Enjoy</h2>
                            <p>Do not follow where the path may lead. Go instead where there is no path and leave a trail</p>
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