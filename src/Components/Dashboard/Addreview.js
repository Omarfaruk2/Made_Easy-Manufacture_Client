import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import Rating from 'react-rating'
import { useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'

const Addreview = () => {
    const [user, ,] = useAuthState(auth)
    const navigate = useNavigate("")
    const { register, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (data) => {
        // const { name, image, description, rating } = review

        const name = user.displayName
        const image = user.photoURL
        const description = data?.description
        const rating = data?.rating

        let review = { name, image, description, rating }
        console.log(review)


        const url = "http://localhost:5000/reviews"
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId);
                review = {}
                navigate('/')
            })



    }
    return (
        <div className='bg-base-200 py-5'>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p className='text-center mt-20'>
                        <b>Give a Rating (1-5)
                            <b className='text-center '>
                                <Rating
                                    initialRating={0}
                                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                    fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />} readonly
                                ></Rating>
                                {/* {rating} */}

                            </b>
                        </b> <br />
                        <input type="number" min="1" max="5" className="input input-bordered input-primary" {...register("rating", { required: true })} />
                        {errors.firstName?.type === 'required' && "First name is required"}

                    </p>

                    <p className='text-center mt-5'>
                        <b>Please Commment..</b> <br />
                        <textarea className='w-2/6 input input-bordered input-primary' type="text" {...register("description", { required: true })}></textarea>
                    </p>

                    {/* <input {...register("lastName", { required: true })} />
                    {errors.lastName && <p>Last name is required</p>}

                    <input {...register("mail", { required: "Email Address is required" })} />
                    <p>{errors.mail?.message}</p> */}
                    <p className='text-center'>
                        <button type="submit" className='btn btn-outline btn-primary mx-auto'>Add Review</button>

                    </p>
                </form>
            </div>
        </div>
    )
}

export default Addreview