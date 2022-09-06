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
            <div className="hero min-h-screen bg-base-200">

                <div className="felx items-center grid grid-cols-2">
                    <div className="text-center order-2 lg:text-left w-5/6 mx-auto">
                        <h1 className="text-5xl font-bold">SignUP now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>

                    <div className="card order-1 flex-shrink-0 w-4/6 shadow-2xl mx-auto bg-base-100">

                        <div className="flex w-4/5 mt-10 mx-auto">
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

                        <div className="card-body">
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
        </div>
    )
}

export default Signup