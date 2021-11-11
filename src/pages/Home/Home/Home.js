import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Navigation from '../../shared/Navigation/Navigation';
import Header from '../Header/Header';
import HomeReview from '../HomeReview/HomeReviews';
import ExploreNow from '../ExploreNow/ExploreNow';
import HomeProducts from '../HomeProducts/HomeProducts';

const Home = () => {
    return (
        <>
         <Navigation></Navigation>
         <Header></Header>  
         <HomeProducts></HomeProducts>
         <ExploreNow></ExploreNow>
         <HomeReview></HomeReview>
         
        </>
    );
};

export default Home;