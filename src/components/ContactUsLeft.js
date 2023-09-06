import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { FaAddressCard } from 'react-icons/fa'

const ContactUsLeft = () => {
    return (
        <>
            <div className="contact-us w-[90%] md:w-[50%]">
                <div>
                    <h3 className='text-[1.8em] md:text-[2.3em] font-bold mb-[20px]'>Contact Us</h3>
                </div>

                <div className="innergrid flex mb-5 md:flex-row ">
                    <span className="iconbox w-11 h-11 inline-block bg-[#032759] text-center p-[11px] rounded-lg">
                        <BsFillTelephoneFill className='before:content-[""] text-xl text-white' />
                    </span>
                    <div className='ml-[-35px]'>
                        <span className='lbl inline-block md:block pl-[55px] text-base text-[#6e6e6e]'>
                            Phone
                        </span>
                        <a href='tel:1234567890' className='m-0 pl-[55px] font-bold text-black'>+91-8178892514</a>
                    </div>
                </div>

                <div className="innergrid  mb-5 flex">
                    <span className="iconbox w-11 h-11 inline-block bg-[#032759] text-[#fff] text-center p-[11px] rounded-lg">
                        <FiMail className='before:content-[""] text-xl text-white' />
                    </span>
                    <div className='ml-[-35px]'>
                        <span className='lbl block pl-[55px] text-base text-[#6e6e6e]'>
                            Email
                        </span>
                        <h4 className='m-0 pl-[55px] font-bold text-black'>oneducateeducation@gmail.com</h4>
                    </div>
                </div>


                <div className="innergrid flex ">
                    <span className="iconbox w-11 h-11 inline-block bg-[#032759]  text-center p-[11px] rounded-lg">
                        <FaAddressCard className='before:content-[""] text-xl text-white' />
                    </span>
                    <div className='ml-[-35px]'>
                        <span className='lbl block pl-[55px] text-base text-[#6e6e6e]'>
                            Address
                        </span>

                        <h4 className='m-0 pl-[55px] font-bold text-black'>India - 250002</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUsLeft