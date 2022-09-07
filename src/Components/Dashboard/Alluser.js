import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import swal from 'sweetalert'
import auth from '../../firebase.init'
import Loadding from '../Share/Loadding'

const Alluser = () => {
    const navigate = useNavigate()
    const [, loading,] = useAuthState(auth)

    // start--------------------------------------------------------------------------------

    const { isLoading, error, data, refetch } = useQuery(['alluserdata'], () =>
        fetch('https://cryptic-badlands-38526.herokuapp.com/user', {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        }).then(res => {
            // console.log("res", res)
            if (res.status === 401 || res.status === 403) {
                signOut(auth)
                localStorage.removeItem("accessToken")
                navigate("/")
            }
            return res.json()
        }
        )
    )

    // end fetch-------------------------------------------------------------------------------

    if (isLoading || loading) {
        return <Loadding />
    }
    if (error) {
        return <p>{error.massage}</p>
    }
    refetch()

    // start--------------------------------------------------------------------------------

    const makeAdmin = (email) => {


        // fetch(`https://cryptic-badlands-38526.herokuapp.com/user/admin/${email}`, {
        //     method: 'PUT',
        //     headers: {
        //         "authorization": `Bearer ${localStorage.getItem("accessToken")}`
        //     }
        // })
        //     .then(res => {
        //         if (res.status === 403) {
        //             toast.error("Failed to make an admin")
        //         }
        //         return res.json()
        //     }
        //     )
        //     .then(data => {
        //         if (data.modifiedCount > 0) {
        //             refetch()
        //             toast.success(`Successfullly made an Admin`)
        //         }
        //     })


        swal({
            title: "Are you sure want to remove user?",
            text: "Once deleted, you will not be able to recover user!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    refetch()
                    swal("Successfullly made an Admin", {
                        icon: "success",
                    })


                    fetch(`https://cryptic-badlands-38526.herokuapp.com/user/admin/${email}`, {
                        method: 'PUT',
                        headers: {
                            "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                        }
                    })
                        .then(res => {
                            if (res.status === 403) {
                                toast.error("Failed to make an admin")
                            }
                            return res.json()
                        }
                        )
                        .then(data => {
                            if (data.modifiedCount > 0) {
                                refetch()
                                toast.success(`Successfullly made an Admin`)
                            }
                        })


                } else {
                    swal("Failed to make an admin")
                }
            })












    }

    const handleuserDelete = (id) => {

        swal({
            title: "Are you sure want to remove user?",
            text: "Once deleted, you will not be able to recover user!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    refetch()
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    })


                    const url = `https://cryptic-badlands-38526.herokuapp.com/user/${id}`
                    console.log(id)
                    fetch(url, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data?.deletedCount > 0) {
                                console.log(data, "Success to delete")
                                refetch()
                            }
                        })

                } else {
                    swal("Your imaginary file is safe!")
                }
            })
    }



    // End --------------------------------------------------------------------------------

    return (
        <div>
            <h2 className='text-center text-3xl'>this is all user {data?.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr className='bg-base-300 text-center'>
                            <th>Serial</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>

                        </tr>
                    </thead>
                    <tbody className='text-center '>
                        {
                            data?.map((user, index) => <tr
                                key={user._id}
                            >
                                <th>{index + 1}</th>
                                <td>{user?.email}</td>
                                <td> {user?.role !== "admin" && <button onClick={() => makeAdmin(user?.email)} className='btn btn-xs'>Make Admin</button>} </td>
                                <td> <button onClick={() => handleuserDelete(user?._id)} className='btn btn-xs btn-error'>Remove User</button> </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Alluser