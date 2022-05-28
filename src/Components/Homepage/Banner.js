import React from 'react';
import image from '../../Images/banner.jpg'

const Banner = () => {
    return (
        <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full">
                <img src={image} alt='' className="w-full h-96" ></img>
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <p className='text-center font-medium text-2xl'>WLCOME TO OUR HOUSE.FIND YOUR NECCESARY PRODUCTS</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;