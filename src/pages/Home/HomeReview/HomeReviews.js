import React, { useState, useEffect } from 'react';
import './HomeReview.css'
const HomeReview = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then((response) => response.json())
            .then(result => setReviews(result))
    }, [])

    console.log(reviews);
    return (
        <div>
            <h2>Our Clients Reviews</h2>
            <div className="container ratings">
                <div className="row">
                    {
                        reviews.map(review => (
                            <>
                                <div className="col-12 col-md-3 mb-3">
                                    <img src={review?.image}
                                        width="100"
                                        height="100"
                                        className="rounded-circle" alt="" />
                                    <h4>{review?.name}</h4>
                                    <p style={{ fontWeight: 600 }}>{review?.reviewDetails}</p>
                                    {   
                                        review?.ratings==="4"?
                                        <h6>Ratings: <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        </h6>: ""
                                        
                                    }
                                    {   
                                        review?.ratings==="3"?
                                        <h6>Ratings: <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        
                                        </h6>: ""
                                        
                                    }
                                    {   
                                        review?.ratings==="2"?
                                        <h6>Ratings: <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        
                                        
                                        </h6>: ""
                                        
                                    }
                                    {   
                                        review?.ratings==="1"?
                                        <h6>Ratings: <i class="fas fa-star"></i>
                                        
                                        
                                        
                                        </h6>: ""
                                        
                                    }
                                </div>

                            </>
                        ))
                    }


                </div>
            </div>
        </div>
    );
};

export default HomeReview;