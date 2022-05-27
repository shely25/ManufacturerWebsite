import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    console.log(user)
    return (
        <div>
            <h1 className='text-2xl font-semibold mb-16'>My Profile</h1>
            <div className='grid grid-cols-3'>
                <div class="avatar">
                    <div class="w-12 rounded-full">
                        <img src={user?.photoURL} />
                    </div>
                </div>
                <div>
                    <p>Name : {user?.displayName}</p>
                    <p>Email : {user?.email}</p>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;