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


        const url = "https://cryptic-badlands-38526.herokuapp.com/reviews"
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
        <div className=' py-5'>
            <h2 className='text-center text-3xl font-mono '>Feedback Is Always Welcome </h2>
            <div className='grid grid-cols-2'>
                <div data-aos="zoom-in-right" data-aos-duration="3000">
                    <img src="https://i.ibb.co/b15q2XY/reviews-concept-landing-page-52683-12186-removebg-preview.png" alt="feedback" />
                </div>

                <div

                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="card h-[50vh] mt-10 w-4/5 mx-auto bg-base-100 card-header">
                    <div className="card-body">

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p className=' mt-10'>
                                <b>Give a Rating (1-5)
                                    <b className='text-center '>
                                        <Rating
                                            initialRating={0}
                                            emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                            fullSymbol={<FontAwesomeIcon style={{ color: 'gold' }} icon={faStar} />} readonly
                                        ></Rating>
                                        {/* {rating} */}

                                    </b>
                                </b> <br />

                                <input type="number" min="1" max="5" className="input input-bordered input-primary" {...register("rating", { required: true })} />
                                {errors.firstName?.type === 'required' && "First name is required"}

                            </p>

                            <p className=' mt-5'>
                                <b>Please Give US To Your Valuable FeedBack..</b> <br />
                                <textarea className='w-4/5 input input-bordered input-primary' cols="20" rows="7" type="text" {...register("description", { required: true })}></textarea>
                            </p>
                            <button type="submit" className='btn btn-outline btn-primary mx-auto'>Add Review</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Addreview