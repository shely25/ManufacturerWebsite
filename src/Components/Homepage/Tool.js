import React from 'react';

const Tool = (props) => {
    const { _id, Name, Description, Image } = props.product
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img className='h-80 w-full p-4' src={Image} alt=" " /></figure>
            <div class="card-body">
                <h2 class="card-title">{Name}</h2>
                <p>{Description}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;