import { Icon } from '@iconify/react'
import React from 'react'
import CountUp from 'react-countup'
import "./BussnessSamary.css"

const BussneissSamary = () => {


    return (
        <div>
            <h2 className='text-center text-5xl  mt-16 font-momo'>Our <span className='text-primary'>Business</span> Summary</h2>
            <img className='mx-auto' width="80px" src="https://img.freepik.com/free-vector/violet-banner-design-white-background_1308-94115.jpg?w=740&t=st=1662614288~exp=1662614888~hmac=722e90f19677ac52cab91d0b969f4490b8adce5a9969ea323559fe93b424c70b" alt="" />

            <div className=" grid w-full mx-auto mt-10 lg:grid-cols-4 sm:grid-cols-1">


                <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className='border-card p-8'>
                    <div className=' text-center'>
                        <p className='text-center'>
                            <Icon className='text-8xl mx-auto text-primary text-bold' icon="bx:like" inline={true} />
                        </p>
                        <p className="">Reviews</p>
                        <div className="stat-value">
                            <CountUp end={37} duration={2} />
                            K+
                        </div>
                        <div className=" font-bold">Jan 1st - Feb 1st</div>

                    </div>
                </div>



                <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className='border-card p-8'>
                    <div className=' text-center'>
                        <p className='text-center'>
                            <Icon className='text-8xl mx-auto text-primary text-bold' icon="dashicons:money-alt" inline={true} />
                        </p>
                        <p className="">Annual Revenue</p>
                        <div className="stat-value">
                            <CountUp end={4200} duration={1.75} />
                            K+
                        </div>
                        <div className=" font-bold">↗︎ 400 (22%)</div>

                    </div>
                </div>




                <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className='border-card p-8'>
                    <div className=' text-center'>
                        <p className='text-center'>
                            <Icon className='text-8xl mx-auto text-primary text-bold' icon="fa6-solid:people-group" inline={true} />
                        </p>
                        <p className="">World Wide Customers</p>
                        <div className="stat-value">
                            <CountUp end={1200} kduration={2} />
                            Cr+
                        </div>
                        <div className="font-bold">↘︎ 90 (14%)</div>
                    </div>
                </div>



                <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className='border-card p-8'>
                    <div className=' text-center'>
                        <p className='text-center'>
                            <Icon className='text-8xl mx-auto text-primary text-bold' icon="fluent:collections-add-24-filled" inline={true} />
                            {/* <Icon className='text-8xl mx-auto text-primary text-bold' icon="fa6-solid:people-group" inline={true} /> */}
                        </p>
                        <p className="">Collections</p>
                        <div className="stat-value">
                            <CountUp end={96} kduration={2} />
                            +
                        </div>
                        <div className="font-bold">↘︎ 90 (14%)</div>
                    </div>
                </div>





                {/* 
                <div className="stat">
                    <div className="stat-value">
                        <CountUp end={37} duration={2} />
                        K</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>



                <div className="stat">
                    <div className="stat-title">New Users</div>
                    <div className="stat-value">
                        <CountUp end={4200} duration={1.75} />
                        K
                    </div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">
                        <CountUp end={1200} kduration={2} />

                        Cr
                    </div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

                <div className="stat">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">

                        <CountUp end={9900} duration={2.5} />

                    </div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div> */}

            </div>
        </div>
    )
}

export default BussneissSamary