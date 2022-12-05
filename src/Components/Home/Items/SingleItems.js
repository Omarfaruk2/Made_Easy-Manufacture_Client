import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from '@iconify/react'
import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import Rating from 'react-rating'
import { useNavigate } from 'react-router-dom'
import auth from '../../../firebase.init'
import Loadding from '../../Share/Loadding'
// import useAlluser from '../../../Hooks/useAlluser'
import "./SingleItem.css"

const SingleItems = ({ item }) => {

    const [user, loading,] = useAuthState(auth)

    const navigate = useNavigate()

    const { _id, name, image, minquantity, avilablequantity, price } = item

    const handleOrderpage = () => {
        navigate(`/order/${_id}`)
    }

    const rating = "5"


    // --------------------------------------------------------------------------------------

    const { isLoading, error, data: alluser, refetch } = useQuery(['alluserdata'], () =>
        fetch('https://made-easy-menufacture.onrender.com/user', {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        }).then(res => {
            // console.log("res", res)
            if (res.status === 401 || res.status === 403) {
                signOut(auth)
                localStorage.removeItem("accessToken")
                navigate("/")
            }
            return res.json()
        }
        )
    )

    if (isLoading) {
        return <Loadding />
    }
    if (error) {
        return <p>{error.massage}</p>
    }
    refetch()



    // console.log(user?.email, "email")

    // if (alluser.map(all => all?.email === user?.email && all.role === "admin")) {
    //     console.log("hello")
    // }




    return (
        <div>
            <div
                data-aos="zoom-in-down"
                data-aos-easing="linear"
                data-aos-duration="1000"

                className="card w-4/5 my-8 bg-white card-header mx-auto">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <b className='text-center'>
                    <Rating
                        initialRating={rating}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{ color: 'gold' }} icon={faStar} />} readonly
                    ></Rating>
                    {/* {rating} */}

                </b>
                <div className="card-body  py-0 pb-3">

                    <div className='flex items-center justify-between'>
                        <span className="text-2xl font-bold "> {name}</span>
                        <div className="badge badge-secondary">NEW</div>
                    </div>

                    <b>
                        <p className='my-2 text-xl'>Avilable Quantity: {avilablequantity}</p>
                        <p className='my-2 text-xl'>Minimum Quantity: {minquantity}</p>
                        <p className='my-2 text-xl  text-red-400'>Per Unit Price: ${price}</p>

                    </b>
                    <div className="card-actions">

                        {alluser?.role !== "admin" &&
                            <p className='text-center'> <button onClick={() => handleOrderpage()} className="btn my-5 btn-primary">Purchase  Now <span className='text-xl font-bold mx-2'><Icon className="text-xl text-yellow-400" icon="el:shopping-cart" /></span></button></p>
                        }
                        {alluser?.role === "admin" &&
                            <p className='text-center'> <button onClick={() => handleOrderpage()} className="btn my-5 btn-primary btn-disabled">Purchase  Now <span className='text-xl font-bold mx-2'><Icon className="text-xl text-yellow-400" icon="el:shopping-cart" /></span></button></p>
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleItems