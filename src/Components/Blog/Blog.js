import React from 'react'

const Blog = () => {

    return (
        <div className='mt-20'>
            <div className='grid grid-cols-3 '>

                <div className='col-span-2 w-11/12 mx-auto'>
                    <div>
                        <img src="https://htmldemo.net/jantrik/jantrik/img/blog/details.jpg" alt="" />
                        <p className='text-3xl mt-10'>occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
                        <b className='my-10'>By: Jantrik, On: 05 May, 2023</b>
                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example,</p>
                    </div>
                    <div className='bg-slate-200 blog'>
                        <p className='p-10 text-2xl '>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms with righteous indignation and dislike.Christine Rios
                        </p>
                    </div>
                    <p className=" mt-10">
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and will give you a complete account of the system, and expound the actual teachings of the great explorer othe truth, the master-builder of human happiness.
                    </p>
                    <div className='grid grid-cols-3 gap-2'>
                        <img src="https://htmldemo.net/jantrik/jantrik/img/products/2.jpg" alt="" />
                        <img src="https://htmldemo.net/jantrik/jantrik/img/products/1.jpg" alt="" />
                        <img src="https://htmldemo.net/jantrik/jantrik/img/products/3.jpg" alt="" />
                    </div>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p> <br /> <br />
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                </div>


                <div className='col-span-1 blog-2'>
                    <div className='p-3'>
                        <h2 className='text-2xl'>RECENT POSTS</h2>


                        <div className='flex justify-around items-center'>
                            <img className='blog-2' width="80px" src="https://htmldemo.net/jantrik/jantrik/img/products/1.jpg" alt="" />
                            <p className='blog-link text-xl'>Lorem ipsum dolor sit amet <br /> August 10, 2018</p>
                        </div>

                        <div className='flex justify-around items-center'>
                            <img className='blog-2' width="80px" src="https://htmldemo.net/jantrik/jantrik/img/products/2.jpg" alt="" />
                            <p className='blog-link text-xl'>Lorem ipsum dolor sit amet <br /> August 10, 2018</p>
                        </div>

                        <div className='flex justify-around items-center'>
                            <img className='blog-2' width="80px" src="https://htmldemo.net/jantrik/jantrik/img/products/3.jpg" alt="" />
                            <p className='blog-link text-xl'>Lorem ipsum dolor sit amet <br /> August 10, 2018</p>
                        </div>

                        <div className='flex justify-around items-center'>
                            <img className='blog-2' width="80px" src="https://htmldemo.net/jantrik/jantrik/img/products/4.jpg" alt="" />
                            <p className='blog-link text-xl'>Lorem ipsum dolor sit amet <br /> August 10, 2018</p>
                        </div>

                        <h2 className='text-2xl'>CATEGORIES</h2>
                        <div className='grid grid-cols-1 blog-catagori'>
                            <span>Electrical Device</span>
                            <span>Hardware Device</span>
                            <span>Drill Machine</span>
                            <span>Tools Box</span>
                            <span>Power Saw</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Blog