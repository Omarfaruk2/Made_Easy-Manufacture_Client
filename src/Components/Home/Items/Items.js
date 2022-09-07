import React from 'react'
import { useQuery } from 'react-query'
import Loadding from '../../Share/Loadding'
// import './Items.css'
import SingleItems from './SingleItems'

const Items = () => {

    const { isLoading, error, data } = useQuery(['repoData'], () =>
        fetch('https://cryptic-badlands-38526.herokuapp.com/items').then(res =>
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
        <div className='bg-base-200 mt-12 pt-12'>
            <h2 className='text-center text-4xl text-primary my-16  font-bold'>Our Tools Collections</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2'>
                {
                    data?.map(item => <SingleItems
                        key={item?._id}
                        item={item}
                    ></SingleItems>)
                }
            </div>

        </div>
    )
}

export default Items