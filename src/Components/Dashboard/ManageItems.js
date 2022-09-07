import React from 'react'
import { useQuery } from 'react-query'
import swal from 'sweetalert'
import Loadding from '../Share/Loadding'

const ManageItems = () => {

    const { isLoading, error, data, refetch } = useQuery(['repoData'], () =>
        fetch('http://localhost:5000/items').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loadding />
    }
    if (error) {
        return <p>{error.massage}</p>
    }

    const handleDeleteItems = (id) => {

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

                    const url = `http://localhost:5000/items/${id}`
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
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>Serial</th>
                                <th>Item Name:</th>
                                <th>Cost Per Unit</th>
                                <th>Minquantity</th>
                                <th>Avilablequantity</th>
                                <th>Image</th>
                                <th>Delete Items</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((order, index) => <tr
                                    key={index}
                                >
                                    <th>{index + 1}</th>
                                    <td>{order?.name}</td>
                                    <td>{order?.price}</td>
                                    <td>{order?.minquantity}</td>
                                    <td>{order?.avilablequantity}</td>
                                    <td><img width="50px" src={order?.image} alt="" /></td>
                                    <td><button onClick={() => handleDeleteItems(order?._id)} className='btn btn-error'>Delete</button> </td>

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default ManageItems