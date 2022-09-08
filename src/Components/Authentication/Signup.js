import React from 'react'
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import auth from '../../firebase.init'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth'
import Loadding from '../Share/Loadding'
import useToken from '../../Hooks/useToken'

const Signup = () => {
    // const [displayName, setDisplayName] = useState('')
    const [updateProfile, updating, uperror] = useUpdateProfile(auth)

    const navigate = useNavigate()

    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth)
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth)

    const { register, formState: { errors }, handleSubmit } = useForm()

    const handlegoogleSingin = () => {
        signInWithGoogle()
    }

    const onSubmit = async (data) => {
        const displayName = data.displayName
        await createUserWithEmailAndPassword(data?.email, data?.password)
        await updateProfile({ displayName })
        // alert('Updated profile')
        // console.log(data)


    }

    const [token] = useToken(guser || user)

    if (error || gerror || uperror) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        )
    }
    if (loading || gloading || updating) {
        return <Loadding />
    }

    if (token) {
        navigate("/")
    }

    // console.log(user, "user")

    return (
        <div>
            <div className='grid grid-cols-4 my-10'>

                <div className='w-4/5 mx-auto col-span-2'>
                    <img src="https://i.ibb.co/MS8q31b/sign-up-concept-illustration-114360-7875-removebg-preview.png" alt="Sign up page" />
                </div>


                <div className="card order-1 w-4/6 mx-auto shadow-2xl bg-base-100 col-span-2">

                    <div className="flex w-full pt-3 mx-auto">
                        <div className="grid h-15 flex-grow card  rounded-box place-items-center">
                            <button onClick={() => handlegoogleSingin()} className="btn btn-primary">Google</button>
                        </div>
                        <div className="divider divider-horizontal">OR</div>
                        <div className="grid h-15 flex-grow card  rounded-box place-items-center">
                            <button className="btn ">GitHub</button>
                        </div>
                    </div>
                    <hr className='mt-10' />
                    {/* from */}

                    <div className="card-body w-full">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" {...register("displayName", { required: true })} />
                                {errors.name?.type === 'required' && "First name is required"}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: "Email Address is required" })} />
                                <p>{errors.email?.message}</p>
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                                <p>{errors.password?.message}</p>

                                <label className="label">


                                    <Link to="/login">Login</Link>

                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup

// <div className='w-full'>
// <img src="https://i.ibb.co/MS8q31b/sign-up-concept-illustration-114360-7875-removebg-preview.png" alt="Sign up page" />
// </div>

// <div className="card order-1 shadow-2xl bg-base-100">

// <div className="flex w-full pt-3 mx-auto">
//     <div className="grid h-15 flex-grow card  rounded-box place-items-center">
//         <button onClick={() => handlegoogleSingin()} className="btn btn-primary">Google</button>
//     </div>
//     <div className="divider divider-horizontal">OR</div>
//     <div className="grid h-15 flex-grow card  rounded-box place-items-center">
//         <button className="btn ">GitHub</button>
//     </div>
// </div>
// <hr className='mt-10' />
// {/* from */}

// <div className="card-body w-full">
//     <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="form-control">
//             <label className="label">
//                 <span className="label-text">Name</span>
//             </label>
//             <input type="text" placeholder="name" className="input input-bordered" {...register("displayName", { required: true })} />
//             {errors.name?.type === 'required' && "First name is required"}
//         </div>

//         <div className="form-control">
//             <label className="label">
//                 <span className="label-text">Email</span>
//             </label>
//             <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: "Email Address is required" })} />
//             <p>{errors.email?.message}</p>
//         </div>


//         <div className="form-control">
//             <label className="label">
//                 <span className="label-text">Password</span>
//             </label>
//             <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
//             <p>{errors.password?.message}</p>

//             <label className="label">


//                 <Link to="/login">Login</Link>

//             </label>
//         </div>
//         <div className="form-control mt-6">
//             <button type="submit" className="btn btn-primary">Sign Up</button>
//         </div>
//     </form>

// </div>
// </div>