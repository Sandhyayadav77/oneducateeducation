import React, { useState } from 'react'
import { FiMail } from 'react-icons/fi'
import { BiLogoFacebook } from 'react-icons/bi'
import { BiLogoInstagram } from 'react-icons/bi'
import { TfiYoutube } from 'react-icons/tfi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaAngleDown } from 'react-icons/fa'
import { FaAngleRight} from 'react-icons/fa'
import { AiFillFileText } from 'react-icons/ai'
import ClassData from '../Class.json'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'


const LargeScreen = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="header-section bg-[#032759] h-[100px] z-[999] relative hidden md:block">
                <div className="container before:content-[''] mx-auto px-4  after:content-['']" >
                    <div className="row mx-[-15px] before:content-[''] after:content-['']">
                        <div className="top-head py-[10px] flex justify-between items-center px-[18px] ">
                            <div className="left-panel hover:cursor-pointer text-white font-sans text-base pt-1 flex gap-2 items-center">
                                <FiMail />
                                <a href='mailto:oneducateeducation@gmail.com' > 	oneducateeducation@gmail.com</a>
                            </div>
                            <div className="social-panel flex gap-1 md:gap-4 items-center text-center">
                                <a href="/" className='bg-white w-[30px] h-[30px] relative inline-block text-[#032759] text-lg rounded-[4px] p-[6px] text-center'>
                                    <BiLogoFacebook />
                                </a>
                                <a href="/" className='bg-white w-[30px] h-[30px] relative inline-block text-[#032759] text-lg rounded-[4px] p-[6px] text-center'>
                                    <BiLogoInstagram />
                                </a>
                                <a href="/" className='bg-white w-[30px] h-[30px] relative inline-block text-[#032759] text-lg rounded-[4px] p-[6px] text-center'>
                                    <TfiYoutube />
                                </a>
                            </div>
                            <div className="right-panel  ">
                                <a href="/" className='font-sans text-white '>
                                    <BsFillTelephoneFill className="before:content-[''] inline-block text-sm mr-[6px] " />
                                    <p className='text-base inline-block break-all'>  NEED HELP? +91-+91-8178892514
                                    </p>
                                </a>
                            </div>
                        </div>

                        {/* main-menu  */}
                        <div className="main-menu bg-[#fff] shadow-md mt-3 mx-[30px] flex items-center justify-between px-6 ">
                            <div className="logo-panel">
                                <a href="/">
                                    <img src={logo} className='' alt="logo" />
                                </a>
                            </div>
                            <div className="main-panel ml-[-25%]">
                                <ul className='p-0 m-0 inline-block list-none'>
                                    <li className='py-8 px-2 inline-block'>
                                        <Link to="/" className=" font-medium text-base hover:text-gray-600 uppercase font-Barlow ">Home</Link>
                                    </li>
                                    <li className='py-8 px-2 inline-block ' onMouseEnter={() => setIsOpen(true)}
                                        onMouseLeave={() => setIsOpen(false)} >
                                        <Link to="/category/books" className=' font-medium text-base hover:text-gray-600  uppercase font-Barlow  '>Books
                                        {
                                            isOpen ?  <FaAngleDown className='inline-block before:content-[""]  ' />:
                                            <FaAngleRight className='inline-block before:content-[""] ' />
                                        }
                                           
                                            {
                                                isOpen && 
                                                <ul className='py-2 text-sm  absolute top-36 z-[-1] before:content-[""] after:content-[""] shadow-md  w-[200px] bg-white rounded-lg
                                                transition-all duration-1000 ease-in transform '>
                                                    {
                                                        ClassData.map(item => {
                                                            return (
                                                                <Link to={item.direct}>
                                                                    <li key={item.id} className=" block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600  dark:hover:text-white">
                                                                        {item.classCategory}
                                                                    </li>
                                                                    <hr />
                                                                </Link>
                                                            )

                                                        })
                                                    }
                                                </ul>
                                            }
                                        </Link>
                                    </li>

                                    <li className='py-8 px-2 inline-block'>
                                        <Link to="/contact" className='font-medium text-base hover:text-gray-600  uppercase font-Barlow'>Contact us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="paper-panel  pr-1">
                                <a href="/" className='  btngen inline-block border-none p-4 relative bg-gradient-to-b from-[#144d9d] to-[#032759] pl-7 font-bold font-sans text-white rounded-[5px]'>

                                    <AiFillFileText size={28} className='before:content-[""] p-[5px] bg-white text-blue-800 absolute left-[-6px] top-[19px] border-2 border-blue-900 rounded-md' />
                                    Paper Generator
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LargeScreen