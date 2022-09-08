import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import Loadding from '../Share/Loadding'
import useToken from '../../Hooks/useToken'

const Login = () => {
    let location = useLocation()
    let from = location.state?.from?.pathname || "/"
    const navigate = useNavigate()
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth)
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth)
    const [token] = useToken(guser || user)

    const { register, formState: { errors }, handleSubmit } = useForm()

    const handlegoogleSingin = () => {
        signInWithGoogle()
    }
    const onSubmit = (data) => {
        signInWithEmailAndPassword(data?.email, data?.password)
        console.log(data)
    }



    useEffect(() => {

        if (token) {
            navigate(from, { replace: true })
        }


    }, [from, navigate, token])

    if (error || gerror) {

        return <p>Error: {error.message}</p>


    }

    if (loading || gloading) {
        return <Loadding />
    }
    return (

        <div>
            <div className=" min-h-screen bg-base-100">
                <div className=" grid grid-cols-2">
                    <div className="text-center lg:text-left w-5/6 mx-auto">
                        <img src="https://i.ibb.co/T2PGTXX/tablet-login-concept-illustration-114360-7873-removebg-preview.png" alt="" />
                    </div>

                    <div className="card flex-shrink-0 w-4/6 shadow-2xl mx-auto bg-base-100">

                        <div className="flex w-4/5 mt-10 mx-auto">
                            <div className="grid h-15 flex-grow card  rounded-box place-items-center">
                                <button onClick={() => handlegoogleSingin()} className="btn btn-primary">Google</button>
                            </div>
                            <div className="divider divider-horizontal">OR</div>
                            <div className="grid h-15 flex-grow card  rounded-box place-items-center">
                                <button className="btn ">GitHub</button>
                            </div>
                        </div>

                        {/* From */}

                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>


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
                                        <button>Forgot password?</button>

                                        <Link to="/singup">SingUp</Link>

                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login