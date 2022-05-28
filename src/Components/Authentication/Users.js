import React, { useEffect, useState } from 'react';
import useAdmin from '../hooks/useAdmin';

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/profile')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    const handlebtn = (email) => {
        const url = `http://localhost:5000/profile/user?email=${email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
        window.location.reload()
    }
    return (
        <div>
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>E-mail</th>
                        <th>operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{user.email}</td>
                            <td><button onClick={() => handlebtn(user.email)} className='btn btn primari'>Make Admin</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div >
    );
};

export default Users;