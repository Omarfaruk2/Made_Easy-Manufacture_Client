import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import auth from '../../firebase.init'
import Loadding from '../Share/Loadding'

const AllOrder = () => {

    const [user, loading,] = useAuthState(auth)
    const { isLoading, error, data } = useQuery(['Allorder'], () =>
        fetch("http://localhost:5000/orders",).then(res =>
            res.json()
        )
    )

    if (isLoading || loading) {
        return <Loadding />
    }

    if (error) {
        return <p>{error.massage}</p>
    }

    // const email = user?.email
    // console.log("data", data)


    const handleShift = (id) => {

        console.log("hello clicked", id, user)
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
                                <th>User Email</th>
                                <th>User Location</th>
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
                                    <td><button onClick={() => handleShift(order._id)} className='btn btn-primary'>Shift</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AllOrder