import { Icon } from '@iconify/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader

const Banner = () => {
    return (
        <div>
            <Carousel>
                <div className="hero min-h-screen" style={{ "backgroundImage": "url(https://images.unsplash.com/photo-1502343019212-cc6a09783255?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)" }}>
                    <div className="hero-overlay bg-opacity-40"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-lg card">
                            <h1
                                data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1000"
                                className="mb-2 text-6xl font-serif ">Big Sales</h1> <br />

                            <h1
                                data-aos="fade-left"
                                data-aos-easing="linear"
                                data-aos-duration="1000"
                                className="mb-5 text-7xl font-bold "><span className='text-primary'>Hand</span> Tools <span className='text-primary'>Circular</span> Saw & <span className='text-primary'>Power</span> Saw</h1>

                            <button
                                data-aos="fade-up"
                                data-aos-easing="linear"
                                data-aos-duration="1000"
                                className="btn btn-primary  font-bold"> Get Started with  <span className='text-yellow-400 mx-2 text-2xl'> 19% </span><Icon className='text-yellow-400 text-2xl' icon="teenyicons:discount-solid" />  Discount</button>
                        </div>
                    </div>
                </div>

                <div className="hero min-h-screen" style={{ "backgroundImage": "url(https://images.unsplash.com/photo-1607631623698-8d54695923c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)" }}>
                    <div className="hero-overlay bg-opacity-40"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-lg">
                            <h1 className="mb-2 text-6xl font-serif ">Big Sale</h1> <br />
                            <h1 className="mb-5 text-7xl font-bold ">Hand Tools Circular Saw & Power Saw</h1>

                            <button className="btn btn-primary  font-bold"> Get Started with  <span className='text-yellow-400 mx-2 text-2xl'> 19% </span>  Discount</button>
                        </div>
                    </div>
                </div>

                <div className="hero min-h-screen" style={{ "backgroundImage": "url(https://htmldemo.net/jantrik/p2/img/jantrik/hero-bg.jpg)" }}>
                    <div className="hero-overlay bg-opacity-40"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary text-yellow-400 font-bold"> Get Started </button>                        </div>
                    </div>
                </div>

            </Carousel>

        </div>
    )
}

export default Banner