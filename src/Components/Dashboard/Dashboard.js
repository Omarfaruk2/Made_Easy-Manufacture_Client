import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, Outlet } from 'react-router-dom'
import auth from '../../firebase.init'
import useAdmin from '../../Hooks/userAdmin'
import Loadding from '../Share/Loadding'

const Dashboard = () => {

    const [user, loading,] = useAuthState(auth)

    const [admin] = useAdmin(user)

    if (loading) {
        return <Loadding />
    }

    return (
        <div className="drawer drawer-mobile">
            <input id="Dashboard-SIdebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* <!-- Page content here --> */}
                <p className='text-3xl text-center'>Dashboard</p>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="Dashboard-SIdebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-300 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Profile</Link></li>

                    {!admin &&
                        <>
                            <li><Link to="/dashboard/order">My Order</Link></li>
                            <li><Link to="/dashboard/addreview">Review</Link></li>
                        </>
                    }
                    {admin &&
                        <>
                            <li><Link to="/dashboard/additem">Add Item</Link></li>
                            <li><Link to="/dashboard/allOrder">All Order</Link></li>
                            <li><Link to="/dashboard/alluser">All User</Link></li>
                            <li><Link to="/dashboard/manageitems">Manage Items</Link></li>
                        </>
                    }

                </ul>

            </div>
        </div>
    )
}

export default Dashboard