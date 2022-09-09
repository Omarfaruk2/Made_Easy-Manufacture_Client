import React from 'react'
import { useForm } from 'react-hook-form'

const Contact = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className='my-20'>
            <h2 className='text-center text-4xl mt-12 font-mono'>Contact Us</h2>
            <img className='mx-auto' width="80px" src="https://img.freepik.com/free-vector/violet-banner-design-white-background_1308-94115.jpg?w=740&t=st=1662614288~exp=1662614888~hmac=722e90f19677ac52cab91d0b969f4490b8adce5a9969ea323559fe93b424c70b" alt="" />
            <div className='grid lg:grid-cols-2 sm:grid-cols-1'>

                {/* Text-left */}
                <div
                    data-aos="zoom-out-right"
                    data-aos-easing="linear"
                    data-aos-duration="2000"
                    className='w-5/6 mx-auto'>
                    <img src="https://img.freepik.com/free-vector/email-marketing-internet-chatting-24-hours-support-get-touch-initiate-contact-contact-us-feedback-online-form-talk-customers-concept_335657-25.jpg?w=740&t=st=1662601986~exp=1662602586~hmac=45a4716bcce035f260a15f015b776ae9b931e1beec970dcfd19a4d7c1b1fc30e" alt="" />

                </div>

                {/* Contact-form */}
                <div>

                    <div
                        data-aos="zoom-out-left"
                        data-aos-easing="linear"
                        data-aos-duration="2000"
                        className="card w-5/6 mx-auto bg-base-100 shadow-2xl">
                        <div className="card-body">

                            <form className='' onSubmit={handleSubmit(onSubmit)}>

                                <input {...register("email", { required: true })} type="text" placeholder="Email" className="input my-1  input-bordered input-primary w-full " />
                                {errors.email?.type === 'required' && "email name is required"}

                                <input {...register("subject", { required: true })} type="text" placeholder="Subject" className="input my-1  input-bordered input-primary w-full" />
                                {errors.subject?.type === 'required' && "email name is required"}


                                <textarea  {...register("massage", { required: true })} id="" rows="7" placeholder='Massage' className="input  my-1 input-bordered input-primary w-full h-[20vh] "></textarea>

                                <input className='btn btn-primary w-full' type="submit" value="Send Mail" />
                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact