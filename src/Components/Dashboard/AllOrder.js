import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import swal from 'sweetalert'
import auth from '../../firebase.init'
import Loadding from '../Share/Loadding'

const AllOrder = () => {

    const [user, loading,] = useAuthState(auth)

    const { isLoading, error, data, refetch } = useQuery(['Allorder'], () =>
        fetch("https://cryptic-badlands-38526.herokuapp.com/orders",).then(res =>
            res.json()
        )
    )

    if (isLoading || loading || !user) {
        return <Loadding />
    }
    if (error) {
        return <p>{error.massage}</p>
    }


    const handleShift = (id) => {

        swal({
            title: "Are you sure to shift items?",
            text: "Once Shift, you will not be able to recover this Shift File!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    refetch()
                    swal("This order has been Shift", {
                        icon: "success",
                    })
                    const role = { role: "shift" }
                    fetch(`https://cryptic-badlands-38526.herokuapp.com/orders/${id}`, {
                        method: "PATCH",
                        headers: {
                            'content-type': "application/json",
                            "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                        },
                        body: JSON.stringify(role)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            refetch()
                        })

                } else {
                    swal("This order not shift !")
                }
            })

    }


    const hangleDeleteOrder = (id) => {

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

                    const url = `https://cryptic-badlands-38526.herokuapp.com/orders/${id}`
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


    return (
        <div>
            <div>
                <div
                    data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="1000"
                    className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>Serial</th>
                                <th>Item Name:</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Image</th>
                                <th>User Email</th>
                                <th>User Location</th>
                                <th>Delete Order</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((order, index) => <tr
                                    key={index}
                                >
                                    <th>{index + 1}</th>
                                    <td>{order?.name}</td>
                                    <td>{order?.quantity}</td>
                                    <td>{order?.totalprice}</td>
                                    <td><img width="50px" src={order?.image} alt="" /></td>
                                    <td>{order?.email}</td>
                                    <td>{order?.address}</td>
                                    {
                                        order?.paid ?
                                            <td><button className='btn btn-error btn-disabled'>Cencel</button> </td>
                                            : <td><button onClick={() => hangleDeleteOrder(order?._id)} className='btn btn-error'>Cencel</button> </td>
                                    }

                                    {/* {
                                        order?.paid ?
                                            <td td > <button onClick={() => handleShift(order._id)} className='btn btn-success'>Pending</button></td>
                                            : <td><button className='btn btn-warning'>Unpaid</button></td>
                                    } */}
                                    <td>

                                        {(!order.paid) && <td td > <button className='btn btn-success'>Unpaid</button></td>}

                                        {(order?.paid && order?.role) && <td> <span className='text-success text-xl font-bold'> Shift</span></td>}

                                        {(order.paid && !order?.role) && <td> <button onClick={() => handleShift(order._id)} className='btn btn-warning'>Pending</button></td>}

                                    </td>


                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default AllOrder