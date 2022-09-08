import React from 'react'
import { useQuery } from 'react-query'
import Loadding from '../Share/Loadding'
// import "./Review.css"
import SingleREviews from './SingleREviews'

const Review = () => {

    const { isLoading, error, data } = useQuery(['reviews'], () =>
        fetch('https://cryptic-badlands-38526.herokuapp.com/reviews').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loadding />
    }

    if (error) {
        return <p>{error.massage}</p>
    }
    // console.log(data)


    return (
        <div className='my-14'>
            <h2 className='text-center text-4xl text-primary mt-12  font-bold'>Happy Customers Feedback</h2>
            <img className='mx-auto' width="80px" src="https://img.freepik.com/free-vector/violet-banner-design-white-background_1308-94115.jpg?w=740&t=st=1662614288~exp=1662614888~hmac=722e90f19677ac52cab91d0b969f4490b8adce5a9969ea323559fe93b424c70b" alt="" />

            <div className='grid lg:grid-cols-3 sm:grid-cols-1 my-10'>
                {
                    data.slice(data.length - 3, data.length).map(review => <SingleREviews
                        key={review?._id}
                        review={review}
                    >
                    </SingleREviews>)
                }
            </div>
        </div>
    )
}

export default Review