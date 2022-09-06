import React from 'react'
import "./Navber.css"
import CustomLink from '../../Hooks/CustomLink'
import { signOut } from 'firebase/auth'
import auth from '../../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth'
import Loadding from '../Share/Loadding'

const Navber = () => {
    const [user, loading,] = useAuthState(auth)

    if (loading) {
        return <Loadding />
    }

    const handlelogout = () => {
        signOut(auth)
        localStorage.removeItem("accessToken")
        // console.log("logout cliek")
    }

    // console.log(user)

    // console.log(user?.photoURL)
    return (
        <div className='z-40 sticky top-0 bg-white'>
            <div className="navbar lg:py-2  z-30">
                <div className="navbar-start">
                    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                    <img className='lg:w-2/5 sm:w-1/2 ml-10' src="https://i.ibb.co/hYWwWBy/afaf4656a4c04dfd88811474f1d7fea0-removebg-preview.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal customlink-head p-0 items-center">
                        <CustomLink to="/">Home</CustomLink>
                        {
                            user && <CustomLink to="/dashboard">Dashboard</CustomLink>
                        }
                        <CustomLink to="/blog">Blog</CustomLink>
                        <CustomLink to="/task">Task</CustomLink>
                        {
                            user ?
                                // <button onClick={() => handlelogout()} className='btn'>Log Out</button> 
                                <div>
                                    <button className='logoutbutton' onClick={() => handlelogout()} href="">Log Out</button>
                                </div>

                                :
                                <CustomLink to="/login">login</CustomLink>
                        }

                    </ul>
                </div>
                <div className="navbarextra-end lg:hidden ">
                    <div className='dropdown'>
                        <label tabIndex="0" className="btn btn-ghost ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box">
                            <CustomLink to="/">Home</CustomLink>
                            <CustomLink to="/dashboard">Dashboard</CustomLink>
                            <CustomLink to="/blog">Blog</CustomLink>
                            <CustomLink to="/login">login</CustomLink>
                        </ul>
                    </div>

                </div>

                <div className='flex w-1/5'>
                    {/* <button className="btn bg-primary ">Button</button> */}
                    <label tabIndex="0" className="btn btn-ghost lg:ml-auto btn-circle avatar">
                        <div className="w-10 rounded-full">

                            {
                                user?.photoURL ?
                                    <img src={user?.photoURL} alt="" />
                                    :
                                    <img src="https://cdn1.vectorstock.com/i/thumb-large/16/05/male-avatar-profile-picture-silhouette-light-vector-5351605.jpg" alt='userimage' />
                            }

                        </div>
                    </label>
                </div>
                <div className="navbar-end">

                    <label tabIndex="1" htmlFor="Dashboard-SIdebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>

            </div>
        </div>
    )
}

export default Navber




// <div>
// <nav>
//     <CustomLink to="/friends">Friends</CustomLink>
//     <CustomLink to="/about">About</CustomLink>
//     <CustomLink to="/">Home</CustomLink>
// </nav>
// </div>