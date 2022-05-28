import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const Purchase = () => {
    const param = useParams()
    const [tool, setTool] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/tools/${param.id}`)
            .then(res => res.json())
            .then(data => setTool(data))

    }, [])
    const { _id, Name, Description, Image, MinimumQuanrity, Available, price } = tool
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch(`http://localhost:5000/orders`, {
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
        reset()
    };

    const [user] = useAuthState(auth)
    return (
        <div className='grid lg:grid-cols-2 mx-16 lg:px-16 my-16'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img className='h-80 w-full p-4' src={Image} alt=" " /></figure>
                <div class="card-body">
                    <h2 class="card-title">{Name}</h2>
                    <p>{Description}</p>
                    <p>Availabe Quantity: {Available}</p>
                    <p>Price per piece: {price}</p>
                </div>
            </div>
            <div>
                <h1 className='text-2xl my-5'>For Purchase</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Your Name" className="input input-bordered  w-full max-w-xs mb-3 " {...register("name")} value={user?.displayName} />
                    <br />
                    <input type="email" placeholder="Your Email" className="input input-bordered  w-full max-w-xs mb-3 " {...register("email")} value={user?.email} />
                    <br />
                    <input type="text" placeholder="Products Name" className="input input-bordered  w-full max-w-xs mb-3 " {...register("product")} value={Name} />
                    <br />
                    <input type="text" placeholder="Your Address" className="input input-bordered  w-full max-w-xs mb-3 " {...register("address")} />
                    <br />
                    <input type="number" placeholder="Your Phone Number" className="input input-bordered  w-full max-w-xs mb-3 " {...register("number")} />
                    <br />
                    <input type="number" placeholder="order quantity" className="input input-bordered  w-full max-w-xs mb-3 " {...register("orderQuantity")} value={MinimumQuanrity} />
                    <br />

                    <input className='btn' type="submit" value="Place Order" />
                </form>
            </div>
        </div>
    );
};

export default Purchase;