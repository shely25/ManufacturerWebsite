import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure??want to delete');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('Success:', data);
                    }

                })
            window.location.reload()
        }
    }
    return (
        <div>
            <h1 className='text-2xl font-semibold mb-16'>My Orders</h1>
            {
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <tr>
                                    <th>{index + 1}</th>
                                    <td>{order.product}</td>
                                    <td><button onClick={() => handleDelete(order._id)} className='btn btn primari'>Detele Order</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default MyOrders;