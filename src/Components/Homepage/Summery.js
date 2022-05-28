import React from 'react';
import './Summery.css'
import { IoIosPeople } from 'react-icons/io';
import { MdReviews } from 'react-icons/md';
import { GrMoney } from 'react-icons/gr';
import { GiElectricalSocket } from 'react-icons/gi';

const Summery = () => {
    return (
        <div className='summery mt-16'>
            <div className='pr-16'>
                <h1 className='text-4xl text-blue-300 font-bold mt-16 text-right'>Million Business Trust Us</h1>
                <p className='text-2xl font-semibold text-right'>Million Business Trust Us</p>
                <div className="divider pl-16"></div>

            </div>
            <div className='grid lg:grid-cols-4 pl-16'>
                <div className='w-40'>
                    <IoIosPeople className='w-40 text-8xl'></IoIosPeople>
                    <p className='text-2xl text-center'> we served 100+ customers</p>
                </div>
                <div className='w-40'>
                    <GrMoney className='w-40 text-9xl'></GrMoney>
                    <p className='text-2xl text-center'> 120M+ Annual revenue</p>
                </div>
                <div className='w-40'>
                    <MdReviews className='w-40 text-9xl'></MdReviews>
                    <p className='text-2xl text-center'> 33K+ Reviews</p>
                </div>
                <div className='w-40'>
                    <GiElectricalSocket className='w-40 text-9xl'></GiElectricalSocket>
                    <p className='text-2xl text-center'> 50+ tools</p>
                </div>
            </div>
        </div>
    );
};

export default Summery;