import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='flex justify-center items-center banner'>
            <div>
                <h1 className='text-4xl font-semibold'>Welcome to our site.</h1>
                <p className='text-2xl'>Here You can find your necessary electric tools for your Shop at a pikary rate.</p>
            </div>

        </div>
    );
};

export default Banner;