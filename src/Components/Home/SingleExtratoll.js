import React from 'react'
import { Link } from 'react-router-dom'

const SingleExtratoll = ({ use }) => {

    const { image, name, description } = use || {}

    return (
        <div>

            <div
                data-aos="zoom-out-right"
                data-aos-easing="linear"
                data-aos-duration="1000"


                className=' card cus-card  rounded-none'>
                <img className='image' src={image} alt="" />

                <div className='after-text'>
                    <p className='mb-2'>{name}</p>
                    <p className='text-sm tex-neutral'>
                        {description}
                    </p>

                    <Link to="/home/explore">
                        <span className='text-purple-400 text-2xl'>Explore More ➤</span>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default SingleExtratoll