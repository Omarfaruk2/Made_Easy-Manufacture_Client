import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from '@iconify/react'
import React from 'react'
import Rating from 'react-rating'
import { useNavigate } from 'react-router-dom'
import "./SingleItem.css"

const SingleItems = ({ item }) => {

    const navigate = useNavigate()

    const { _id, name, image, minquantity, avilablequantity, price } = item


    const handleOrderpage = () => {
        navigate(`/order/${_id}`)
    }

    const rating = "5"


    return (
        <div>
            <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="card w-4/5 my-8  bg-base-100 card-header mx-auto">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <b className='text-center'>
                    <Rating
                        initialRating={rating}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{ color: 'gold' }} icon={faStar} />} readonly
                    ></Rating>
                    {/* {rating} */}

                </b>
                <div className="card-body  py-0 pb-3">
                    <h2 className="text-2xl font-bold text-center"> {name}</h2>

                    <b>
                        <p className='my-2 text-xl'>Avilable Quantity: {avilablequantity}</p>
                        <p className='my-2 text-xl'>Minimum Quantity: {minquantity}</p>
                        <p className='my-2 text-xl  text-red-400'>Per Unit Price: ${price}</p>

                    </b>
                    <div className="card-actions">
                        <p className='text-center'> <button onClick={() => handleOrderpage()} className="btn my-5 btn-primary">Purchase  Now <span className='text-xl font-bold mx-2'><Icon icon="el:shopping-cart" /></span></button></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleItems