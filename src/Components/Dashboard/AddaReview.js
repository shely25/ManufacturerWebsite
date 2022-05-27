import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddaReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth)
    const onSubmit = data => {
        console.log(data)
        const review = { name: data.name, email: data.email, review: data.review }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);

            })
        toast("Review added successfully")
        reset()
    };
    return (
        <div>
            <h1 className='text-2xl font-semibold mb-16'>Add A review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Your Name" className="input input-bordered  w-full max-w-xs mb-3 " {...register("name")} value={user?.displayName} />
                <br />

                <input type="email" placeholder="Your Email" className="input input-bordered  w-full max-w-xs mb-3 " {...register("email")} value={user?.email} />
                <br />
                <input type="text-area" placeholder="Add a Review" className="input input-bordered  w-full max-w-xs mb-3 " {...register("review")} />
                <br />
                <input className='btn' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddaReview;