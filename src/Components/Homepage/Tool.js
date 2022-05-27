import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = (props) => {
    const { _id, Name, Description, Image, MinimumQuanrity, Available, price } = props.product
    const navigate = useNavigate()
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img className='h-80 w-full p-4' src={Image} alt=" " /></figure>
            <div class="card-body">
                <h2 class="card-title">{Name}</h2>
                <p>{Description}</p>
                <p>Minimum Quantity For Order: {MinimumQuanrity}</p>
                <p>Availabe Quantity: {Available}</p>
                <p>Price per piece: {price}</p>
                <div class="card-actions justify-end">
                    <button onClick={() => navigate(`/tools/${_id}`)} class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;