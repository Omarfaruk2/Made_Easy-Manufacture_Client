import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Rating from 'react-rating'

const SingleREviews = ({ review }) => {

    // console.log(review)

    const { name, image, description, rating } = review || {}
    // console.log(review)
    return (
        <div >
            <div className="card w-4/5 bg-base-100 py-8 shadow-2xl mx-auto">

                <div className="avatar mx-auto object-cover">
                    <div className="w-16  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">

                        {
                            image ? <img src={image} alt='reviewImage' /> :
                                <img src="https://cdn1.vectorstock.com/i/thumb-large/16/05/male-avatar-profile-picture-silhouette-light-vector-5351605.jpg" alt='userimage' />

                        }

                    </div>
                </div>

                <b className='text-center mt-3'>Rating :
                    <Rating
                        initialRating={rating}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />} readonly
                    ></Rating>
                    {/* {rating} */}

                </b>
                <div className="card-body p-6 px-6">
                    <h2 className="card-title">{name}, Japan</h2>

                    <p>{description.slice(0, 160)}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleREviews
