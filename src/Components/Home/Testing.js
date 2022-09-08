import React from 'react'
import { Link } from 'react-router-dom'
import "./Testing.css"

const Testing = () => {
    return (
        <div className='my-10'>

            <div className="grid grid-cols-3 w-11/12 mx-auto">

                <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    class="single-banner zoom mx-2">
                    <img src="https://htmldemo.net/jantrik/jantrik/img/banner/5.jpg" alt="slider-banner" />
                </div>

                <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    class="single-banner zoom mx-2">
                    <img src="https://htmldemo.net/jantrik/jantrik/img/banner/4.jpg" alt="slider-banner" />
                </div>

                <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    class="single-banner zoom mx-2">
                    <img src="https://htmldemo.net/jantrik/jantrik/img/banner/3.jpg" alt="slider-banner" />
                </div>

            </div>


        </div>
    )
}

export default Testing