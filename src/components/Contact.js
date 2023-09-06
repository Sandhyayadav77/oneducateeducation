import React from 'react'
import ContactUsLeft from './ContactUsLeft'
import MakeEnquiry from './MakeEnquiry'



const Contact = () => {
    return (
        <>
            <section className='widget-contact pt-20 pb-8 px-0 bg-[#f3f3f3] h-fit'>
                <div className="container before:content-[''] after:content-[''] px-[15px] mx-auto">
                    <div className="row mx-[-15px] before:content-[''] after:content-['']" >
                        <div className="widget-inner-box shadow-sm py-11 px-5 mx-[30px] md:mx-[80px] bg-[#fff] font-sans rounded-xl">
                            <div className='flex flex-col md:flex-row  '>
                              <ContactUsLeft/>
                               <MakeEnquiry/>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Contact