import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import Loadding from '../Share/Loadding'
import SingleExtratoll from './SingleExtratoll'

const ExtraTools = () => {

    const { isLoading, error, data } = useQuery(['useageItems'], () =>
        fetch('use.json').then(res =>
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
        <div>
            <h2 className='text-center text-4xl font-bold text-purple-900 my-20'> Where Use Our Tool</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 w-11/12 mx-auto gap-3'>

                {
                    data.map(use => <SingleExtratoll
                        key={use._id}
                        use={use}
                    ></SingleExtratoll>)
                }
            </div>

        </div>
    )
}

export default ExtraTools