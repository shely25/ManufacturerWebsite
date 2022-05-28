import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    console.log(user)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/profile?email=${user?.email}`
        fetch(url, {
            method: 'PUT',
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
        window.location.reload()
    }
    return (
        <div>
            <h1 className='text-2xl font-semibold mb-16'>My Profile</h1>
            <div className='grid grid-cols-3'>
                <div class="avatar">
                    <div class="w-12 rounded-full">
                        <img src={user?.photoURL} alt='' />
                    </div>
                </div>
                <div>
                    <p>Name : {user?.displayName}</p>
                    <p>Email : {user?.email}</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-8'>
                <input type="text" placeholder="Your Education" className="input input-bordered  w-full max-w-xs mb-3 " {...register("education")} />
                <br />

                <input type="text" placeholder="Your Location" className="input input-bordered  w-full max-w-xs mb-3 " {...register("location")} />
                <br />
                <input type="number" placeholder="Phone Number" className="input input-bordered  w-full max-w-xs mb-3 " {...register("number")} />
                <br />
                <input type="text" placeholder="Linked In Profile " className="input input-bordered  w-full max-w-xs mb-3 " {...register("linkedin")} />
                <br />
                <input className='btn' type="submit" value="Update" />
            </form>
        </div>
    );
};

export default MyProfile;