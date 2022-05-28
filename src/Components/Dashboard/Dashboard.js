import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">
                    <Outlet />
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Menu</label>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='Myprofile'>My Profile</Link></li>
                        <li><Link to='AddaReview'>Add A Review</Link></li>
                        <li><Link to='Myorders'>My Orders</Link></li>
                        <li><Link to='allorders'>All Orders</Link></li>
                        <li><Link to='addaproduct'>Add A products</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;