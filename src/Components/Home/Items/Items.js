import React from 'react'
import { useQuery } from 'react-query'
import Loadding from '../../Share/Loadding'
// import './Items.css'
import SingleItems from './SingleItems'

const Items = () => {

    const { isLoading, error, data } = useQuery(['repoDatae'], () =>
        fetch('https://made-easy-menufacture.onrender.com/items').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loadding />
    }
    if (error) {
        return <p>{error.massage}</p>
    }
    // console.log(data, "data")

    return (
        <div className='bg-base-100 mt-12 pt-12'>
            <h2
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className='text-center text-4xl text-primary my-10  font-bold'>Our Tools Collections</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2'>
                {
                    data?.slice(0, 6).map(item => <SingleItems
                        key={item?._id}
                        item={item}
                    ></SingleItems>)
                }
            </div>
        </div>
    )
}

export default Items