import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddaProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/tools', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);

            })
        toast("Product added successfully")
        reset()
    };
    return (
        <div>
            <h1 className='text-2xl font-semibold mb-16'>Add A Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Tools Name" className="input input-bordered  w-full max-w-xs mb-3 " {...register("Name")} />
                <br />
                <input type="text-area" placeholder="Tools Description" className="input input-bordered  w-full max-w-xs mb-3 " {...register("Description")} />
                <br />
                <input type="text" placeholder="Image url" className="input input-bordered  w-full max-w-xs mb-3 " {...register("Image")} />
                <br />
                <input type="number" placeholder="Available Quanrity" className="input input-bordered  w-full max-w-xs mb-3 " {...register("Available")} />
                <br />
                <input type="number" placeholder="Minimum Quanrity" className="input input-bordered  w-full max-w-xs mb-3 " {...register("MinimumQuanrity")} />
                <br />
                <input type="number" placeholder="price per Quanrity" className="input input-bordered  w-full max-w-xs mb-3 " {...register("price")} />
                <br />
                <input className='btn' type="submit" value="Add A Product" />
            </form>
        </div>
    );
};

export default AddaProduct;