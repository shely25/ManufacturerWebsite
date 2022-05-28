import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/orders/all')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])
    return (
        <div>
            <h1 className='text-2xl font-semibold mb-16'>All Orders</h1>
            {
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allOrders.map((allorder, index) => <tr>
                                    <th>{index + 1}</th>
                                    <td>{allorder.product}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default ManageAllOrders;