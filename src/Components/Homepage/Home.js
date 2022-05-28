import React from 'react';
import Banner from './Banner.js';
import Review from './Review.js';
import Summery from './Summery.js';
import Tools from './Tools.js';
const Home = () => {
    return (
        <div className='my-8 mx-0 home'>
            <Banner></Banner>
            <Tools></Tools>
            <Summery></Summery>
            <Review></Review>
        </div >
    );
};

export default Home;