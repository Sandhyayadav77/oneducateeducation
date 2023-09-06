import React from 'react'

const MakeEnquiry = () => {
    return (
        <>
            <div className="make-enquiry w-[90%] md:w-[50%]">
                <div>
                    <div>
                        <h3 className='text-[1.8em] mt-[20px] md:mt-0
                         md:text-[2.3em] font-bold mb-[20px]'>Make Enquiry</h3>
                       <form action="https://getform.io/f/96415907-0bf4-4cb3-aea0-79e3a372fa86"  method='post'>
                       <div className="top md:flex space-x-2 ">
                            <div className="frmbox">
                                <label htmlFor="myName" className='block font-semibold text-base'>Name</label>
                                <input type="text" name='Name' placeholder='Enter Your Name' id='myName' className='focus:border focus:border-black p-[10px] mb-[10px] rounded-md border border-solid border-[#eee] outline-none w-full' />
                            </div>
                            <div className="frmbox">
                                <label htmlFor="myEmail" className='block font-semibold text-base'>Email</label>
                                <input type="text" name='Email' placeholder='Enter Your Email' id='myEmail' className='focus:border focus:border-black p-[10px] mb-[10px] rounded-md border border-solid border-[#eee] outline-none w-full' />
                            </div>
                        </div>
                        <div className='middle md:flex space-x-2'>
                            <div className="frmbox">
                                <label htmlFor="myPhone" className='block font-semibold text-base'>Phone</label>
                                <input type="text" id='myPhone' name='phone' className='focus:border focus:border-black p-[10px] mb-[10px] rounded-md border border-solid border-[#eee] outline-none w-full' />
                            </div>
                            <div className="frmbox">
                                <label htmlFor="mySubject" className='block font-semibold text-base'>Subject</label>
                                <input type="text" placeholder='' id='mySubject' name='subject'  className='focus:border focus:border-black p-[10px] mb-[10px] rounded-md border border-solid border-[#eee] outline-none w-full' />
                            </div>
                        </div>
                        <div className='Bottom-message-box '>
                            <div className="frmbox">
                                <label htmlFor="myMessage" className='block font-semibold text-base'>Message</label>
                                <textarea name='message' className='p-[10px] mb-[10px] rounded-md border border-solid border-[#eee] outline-none w-full focus:border focus:border-black' id="myMessage" cols="30" rows="5"></textarea>
                            </div>
                        </div>
                        <button className="bg-[#032759] hover:bg-gradient-to-r from-[#2f6ec6] hover:transition hover:ease-in hover:duration-300 to-[#1d57a7] text-white font-bold py-2 px-4 border border-[#032759] hover:scale-105 rounded-md ">
                            Send Enquiry
                        </button>
                       </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MakeEnquiry