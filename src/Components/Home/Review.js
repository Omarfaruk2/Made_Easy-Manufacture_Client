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
            <h2 className='text-center font-bold text-4xl my-10'>Happy Customers Feedback</h2>
            <div className='grid grid-cols-3 my-10'>
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