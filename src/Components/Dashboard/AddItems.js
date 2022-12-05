import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const AddItems = () => {
    const navigate = useNavigate()


    const { register, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (data) => {

        const url = "https://made-easy-menufacture.onrender.com/items"
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId);
                data = {}
                navigate('/')
            })
        console.log(data)
    }


    // const { _id, name, image, description, minquantity, avilablequantity, price } = item


    return (

        <div>
            <div className="card w-5/6 mx-auto bg-base-100 shadow-2xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">Add Items</h2>

                    {/* form------------------------------------------------------ */}
                    <form className='mx-auto' onSubmit={handleSubmit(onSubmit)}>

                        {/* name */}

                        <div className="form-control lg:w-5/12 sm:w-full my-0 mr-0 ml-6 inline-block mx-auto" >
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <input
                                {...register("name", { required: true })} type="text"
                                placeholder="Type here" className="input input-bordered sm:w-full lg:w-11/12" />
                            <label className="label">
                                <span className="label-text-alt">{errors.name && <p>Last name is required</p>}</span>
                            </label>
                        </div>


                        {/* image */}

                        <div className="form-control lg:w-5/12 my-0 mr-0 ml-6 inline-block mx-auto" >
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input
                                {...register("image", { required: true })} type="url"
                                placeholder="Type here" className="input input-bordered sm:w-full lg:w-11/12" />
                            <label className="label">
                                <span className="label-text-alt">{errors.image && <p>Last name is required</p>}</span>
                            </label>
                        </div>

                        {/* minquantity */}

                        <div className="form-control lg:w-5/12 my-0 mr-0 ml-6 inline-block mx-auto" >
                            <label className="label">
                                <span className="label-text">Minimum Quantity</span>
                            </label>
                            <input
                                {...register("minquantity", { required: true })} type="number"
                                placeholder="Type here" className="input input-bordered sm:w-full lg:w-11/12" />
                            <label className="label">
                                <span className="label-text-alt">{errors.minquantity && <p>Last name is required</p>}</span>
                            </label>
                        </div>

                        {/* avilablequantity */}

                        <div className="form-control lg:w-5/12 my-0 mr-0 ml-6 inline-block mx-auto" >
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input
                                {...register("avilablequantity", { required: true })} type="number"
                                placeholder="Type item available" className="input input-bordered sm:w-full lg:w-11/12" />
                            <label className="label">
                                <span className="label-text-alt">{errors.avilablequantity && <p>Last name is required</p>}</span>
                            </label>
                        </div>

                        {/* price */}

                        <div className="form-control lg:w-5/12 my-0 mr-0 ml-6 inline-block mx-auto" >
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                {...register("price", { required: true })} type="number"
                                placeholder="Type items price" className="input input-bordered sm:w-full lg:w-11/12" />
                            <label className="label">
                                <span className="label-text-alt">{errors.price && <p>Last name is required</p>}</span>
                            </label>
                        </div>

                        {/* description */}

                        <div className="form-control lg:w-5/12 my-0 mr-0 ml-6 inline-block mx-auto" >
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea
                                {...register("description", { required: true })} type="text"
                                placeholder="Type here" className="input input-bordered w-11/12" />
                            <label className="label">
                                <span className="label-text-alt">{errors.lastName && <p>Last name is required</p>}</span>
                            </label>
                        </div>


                        <div className='mx-auto'>
                            <p className='ml-10'> <button className='btn btn-primary w-1/5 mx-auto' type='submit'> Submit</button></p>
                        </div>

                    </form>


                    {/* from--------------------------------------------- */}


                </div>
            </div>
        </div>
    )
}

export default AddItems