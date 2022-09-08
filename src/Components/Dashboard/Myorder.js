import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import auth from '../../firebase.init'
import Loadding from '../Share/Loadding'

const Myorder = () => {
    const navigate = useNavigate()

    const [user, loading,] = useAuthState(auth)

    const email = user?.email

    const { isLoading, error, data, refetch } = useQuery(['myorders'], () =>
        fetch(`https://cryptic-badlands-38526.herokuapp.com/myitems?email=${email}`, {
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

    if (isLoading || loading) {
        return <Loadding />
    }

    if (error) {
        return <p>{error.massage}</p>
    }


    const handleDelete = (id) => {
        refetch()
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
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

                    const url = `https://cryptic-badlands-38526.herokuapp.com/myitems/${id}`
                    fetch(url, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data?.deletedCount > 0) {
                                refetch()
                                console.log(data, "Success to delete")
                                // const remaining = users.filter(user => user._id !== id)
                                // setUsers(remaining)
                            }
                        })

                } else {
                    swal("Your imaginary file is safe!")
                }
            })


    }



    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>Serial</th>
                                <th>Item Name:</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Image</th>
                                <th>Order Cencel</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data?.length === 0 && <p className=' text-2xl text-red-500'>You Have No Order yet</p>
                            }
                            {
                                data?.map((order, index) => <tr
                                    key={index}
                                >
                                    <th>{index + 1}</th>
                                    <td>{order?.name}</td>
                                    <td>{order?.quantity}</td>
                                    <td>{order?.totalprice}</td>
                                    <td><img width="50px" src={order?.image} alt="" /></td>

                                    <td>
                                        {(order?.totalprice && order?.paid) && <span className='btn btn-disabled'>Cencle</span>}
                                        {(order?.totalprice && !order?.paid) && <button onClick={() => handleDelete(order._id)} className='btn btn-error'>Cencle</button>}
                                        {/* <button onClick={() => handleDelete(order._id)} className='btn btn-error'>Cencle</button> */}

                                    </td>
                                    <td>

                                        {(order?.totalprice && !order?.paid) && <Link to={`/dashboard/payment/${order?._id}`}><button className='btn btn-success'>Pay</button></Link>}
                                        {(order?.totalprice && order?.paid) && <span className='text-success'>Already Paid</span>}

                                    </td>

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Myorder