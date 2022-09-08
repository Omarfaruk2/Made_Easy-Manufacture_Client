import React, { useRef, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import auth from '../../firebase.init'
import Loadding from '../Share/Loadding'
// import "./Orderitem.css"
// import SingleOrder from './SingleOrder'

const Orderitems = () => {
    const navigate = useNavigate()
    const [totalprice, setTotalPrice] = useState('')
    // const [quantity, setQuantity] = useState('')

    const valueRaf = useRef("")
    // const quantity = useRef("")

    const [user, loading,] = useAuthState(auth)
    const param = useParams()
    const { id } = param

    const { isLoading, error, data, refetch } = useQuery(['singleData'], () =>
        fetch(`https://cryptic-badlands-38526.herokuapp.com/items/${id}`).then(res =>
            res.json()
        )
    )


    const { _id, name, image, description, minquantity, avilablequantity, price } = data || {}

    const { register, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (from) => {
        const quantity = valueRaf.current?.value
        const address = from.address
        const phone = from.phone
        const totalprice = from.totalprice
        const email = user.email
        const username = user?.displayName

        let voo = { address, phone, quantity, totalprice, email, name, image, username }
        console.log(voo)

        refetch()


        const url = "https://cryptic-badlands-38526.herokuapp.com/orders"
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(voo)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId);
                voo = {}
                refetch()
                navigate('/dashboard/order')
            })

    }

    if (isLoading || loading) {
        return <Loadding />
    }

    if (error) {
        return <p>{error.massage}</p>
    }


    return (
        <div>

            <div className='grid grid-cols-1'>

                <div className="card lg:w-2/6 sm:w-full bg-base-100 mt-10 shadow-2xl mx-auto">
                    <div className="card-body m-0 p-0">
                        <img src={image} alt="" />
                    </div>
                </div>

                {/*======================= user info ==============================*/}
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 my-10 items-center'>
                    <div>
                        {/* Details */}
                        <div className="card w-4/5 mx-auto bg-base-100 shadow-2xl">
                            <div className="card-body">
                                <p className='font-bold text-3xl '>Category:{name}</p>
                                <p className=''>{description}</p>
                                <span>Id: {_id}</span>
                                <p className='font-bold text-xl'>Per Single Cost: ${price}</p>
                                <p className='font-bold text-xl'>Minimum Order Quantity: {minquantity}</p>
                                <p className='font-bold text-xl'>Avilable Quantity: {avilablequantity}</p>
                            </div>
                        </div>

                    </div>

                    {/* form */}
                    <div className="card w-11/12 bg-base-100 shadow-2xl mx-auto ">
                        <div className="card-body">

                            <div className="avatar w-1/4 mx-auto">
                                <p className='text-center'>
                                    <div className=" rounded-full">
                                        {
                                            user?.photoURL ?
                                                <img className='rounded' src={user?.photoURL} alt="" />
                                                :
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz3ORQ1AO4Ik_6QdnD1MHNpf2-TuKITectSB6bYyJ-MMbtM_dsfng8ZvSWKmKQMtljuio&usqp=CAU" alt='' />
                                        }

                                    </div>
                                </p>
                            </div>
                            <p className='text-center text-xl font-bold'> {user?.displayName}</p>
                            <p className='text-center'>{user?.email}</p>

                            {/* input start */}
                            <form className='form-input ' onSubmit={handleSubmit(onSubmit)}>


                                <div className='lg:flex lg:justify-around'>
                                    <div className="form-control order-form">
                                        <label className="label">
                                            <span className="label-text">Your Address</span>
                                        </label>

                                        <input {...register("address", { required: true })} type="text" placeholder='Address' className="input input-bordered " />
                                        <label className="label">
                                            <span className="label-text-alt"> {errors.address && <p>Address is required</p>}</span>
                                        </label>
                                    </div>

                                    <div className="form-control  order-form">
                                        <label className="label">
                                            <span className="label-text">Your Number</span>
                                        </label>
                                        <input {...register("phone", { required: true })} type="number" placeholder='Number' className="input input-bordered" />
                                        <label className="label">
                                            <span className="label-text-alt"> {errors.phone && <p>Last name is required</p>}</span>
                                        </label>
                                    </div>
                                </div>
                                {/*---------------------------------- avilable quantity price----------------------- */}


                                <div className='lg:flex lg:justify-around'>

                                    <div className="form-control order-form">
                                        <label className="label">
                                            <span className="label-text">Order Quantity</span>
                                        </label>

                                        <input ref={valueRaf}
                                            min={minquantity}
                                            max={avilablequantity}
                                            onChange={() => setTotalPrice(valueRaf.current?.value * price)}
                                            // {...register("orderquantity")}
                                            // name="orderquantity"
                                            type="number" placeholder="Quantity" className="input input-bordered lg:w-48 " />



                                        <label className="label">
                                            <span className="label-text-alt"> {errors.orderquantity && <p>Last name is required</p>}</span>
                                        </label>
                                    </div>

                                    <div className="form-control  order-form">
                                        <label className="label">
                                            <span className="label-text">Total Price</span>
                                        </label>
                                        <input defaultValue="0"
                                            readOnly
                                            value={totalprice}
                                            {...register("totalprice", { required: true })} className="input input-bordered" />
                                        <label className="label">
                                            <span className="label-text-alt"> {errors.orderquantity && <p>Last name is required</p>}</span>
                                        </label>
                                    </div>
                                </div>



                                <p className='text-center'><button type="submit" className='btn btn-primary w-3/5 btn-outline'>Submit</button></p>
                            </form>
                        </div>
                    </div>
                    {/* ------------------------------------------------------------------- */}
                </div>
            </div>
        </div>
    )
}

export default Orderitems