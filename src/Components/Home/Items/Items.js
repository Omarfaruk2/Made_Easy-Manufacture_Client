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





            {/*             
            <div>
                <div className='grid grid-cols-3 mx-auto'>

                    <div className="card w-4/5  bg-base-100 shadow-xl mx-auto">
                        <figure className="px-10 pt-10">
                            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-4/5  bg-base-100 shadow-xl mx-auto">
                        <figure className="px-10 pt-10">
                            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-4/5  bg-base-100 shadow-xl mx-auto">
                        <figure className="px-10 pt-10">
                            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>






                </div>
            </div> */}
        </div>
    )
}

export default Items