import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import { Navigate, useParams } from 'react-router-dom'
import auth from '../../firebase.init'
import Loadding from '../Share/Loadding'
import CheckoutForm from './CheckoutForm'


const stripePromise = loadStripe('pk_test_51LeXLzL5n1xpiLWTlF6rrENWjtWxLkXSWYutMlZtdJlooW1pKVoS2CgwImrGfCIdOlOCPchsTQYxPr8NRWiq6VHi00JEeo3nmY')

const Payment = () => {
    const { id } = useParams()
    const [user, loading,] = useAuthState(auth)

    const { isLoading, error, data, refetch } = useQuery(['myorderpayments'], () =>
        fetch(`https://cryptic-badlands-38526.herokuapp.com/myitems/${id}`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        }).then(res => {
            // console.log("res", res)
            if (res.status === 401 || res.status === 403) {
                signOut(auth)
                localStorage.removeItem("accessToken")
                Navigate("/")
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

    const { name, totalprice } = data || {}
    // console.log(data, "data inside")
    refetch()



    return (
        <div className=''>

            <div className="card w-50 max-w-md mx-auto  bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p>Hello, <span className='text-primary text-2xl'> {user?.displayName}</span></p>
                    <h2 className="card-title">Pay For {name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <p className='font-bold'>Please Pay: ${totalprice}</p>
                </div>
            </div>

            <div className="card w-50 mx-auto max-w-md shadow-2xl bg-base-100">

                <div className="card-body">

                    <Elements stripe={stripePromise}>
                        <CheckoutForm data={data} />
                    </Elements>

                </div>

            </div>

        </div>

    )
}

export default Payment