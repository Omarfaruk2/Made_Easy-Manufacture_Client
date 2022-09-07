import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import auth from '../../firebase.init'
import Loadding from '../Share/Loadding'
import "./MyProfile.css"

const Myprofile = () => {
    const [user, loading,] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit } = useForm()



    const { isLoading, error, data } = useQuery(['updateuserdata'], () =>
        fetch(`https://cryptic-badlands-38526.herokuapp.com/updateuser/${user?.email}`).then(res =>
            res.json()
        )
    )

    if (isLoading || loading) {
        return <Loadding />
    }

    if (error) {
        return <p>{error?.massage} </p>
    }

    const personalcollection = data[0]
    const { phone, address, country, education, } = personalcollection || {}

    const { displayName } = user || {}

    const onSubmit = (userData) => {

        console.log("userdata", userData)
        const email = user?.email
        const address = userData?.address
        const country = userData?.country
        const education = userData?.education
        const phone = userData?.phone
        const photo = userData?.photo

        const updateData = { email, address, country, education, phone, photo }

        fetch(`https://cryptic-badlands-38526.herokuapp.com/updateuser/${email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData),
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success', data)
                alert("User Added Successfully!!!!")
            })

    }



    return (

        <div>

            <div className='grid lg:grid-cols-2 sm:grid-cols-1'>

                {/* User Info */}
                <div >
                    <div className="card w-4/5 bg-base-100 shadow-2xl mx-auto">

                        <div className="card w-4/5 mx-auto bg-base-100 shadow-xl image-full">
                            <figure><img src="https://images.unsplash.com/photo-1586672806791-3a67d24186c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y292ZXIlMjBhcnR8ZW58MHx8MHx8&w=1000&q=80" alt="Shoes" /></figure>
                            <div className="card-body">

                                <div className="avatar">
                                    <div className="w-24 rounded">

                                        {
                                            personalcollection?.photo ?
                                                <img src={personalcollection?.photo} alt="" />
                                                :
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOth66OC9IjxBJ2qqyFqbdzg19cZ1Bhbj4AWkruWZtygzopH9DUbV6vgrL7NlL_cOth6k&usqp=CAU" alt='' />
                                        }

                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title">{displayName?.toUpperCase()}</h2>
                            <p className='text-xl font-mono'>Phone: {phone}</p>
                            <p className='text-xl font-mono'>Address: {address?.toUpperCase()}</p>
                            <p className='text-xl font-mono'>Country: {country?.toUpperCase()}</p>
                            <p className='text-xl font-mono'>Education: {education?.toUpperCase()}</p>

                        </div>
                    </div>

                </div>

                {/* ------------------------------------------------------------------------- */}
                {/* User From */}
                <div>
                    <form className='mt-10' onSubmit={handleSubmit(onSubmit)}>


                        {/* <input {...register("firstName", { required: true })} />
                        <input {...register("firstName", { required: true })} /> */}
                        {/* {errors.firstName?.type === 'required' && "First name is required"} */}
                        {/* <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input w-full max-w-xs" /> */}


                        <input type="text" placeholder="Type Your Address"
                            className="input my-3 input-bordered input-primary lg:w-8/12  my-profile-input  inline mx-auto"
                            {...register("address", { required: true })}
                        />


                        <input type="text" placeholder="Type Your Educational Background"
                            className="input my-3 input-bordered input-primary w-8/12   lg:mx-auto"
                            {...register("education", { required: true })}
                        />

                        <input type="text" placeholder="Type Your Country"
                            className="input my-3 input-bordered input-primary w-8/12 mx-auto"
                            {...register("country", { required: true })}
                        />

                        <input type="number" placeholder="Type Your Number"
                            className="input my-3 input-bordered input-primary w-8/12 mx-auto"
                            {...register("phone", { required: true })}
                        />

                        <input type="url" placeholder="Type Your PhotUrl"
                            className="input my-3 input-bordered input-primary w-8/12 mx-auto"
                            {...register("photo", { required: true })}
                        />

                        {/* <input  /> */}

                        <div className="card-actions justify-start">
                            <button type="submit" className="btn btn-primary">Update Your Profile</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Myprofile