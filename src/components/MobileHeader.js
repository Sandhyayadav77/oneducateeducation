import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { AiFillFileText } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ClassData from '../Class.json'
import { FaAngleDown } from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = (e) => {
        e.preventDefault()
        setMenuOpen(true);
        setTimeout(() => {
          setMenuOpen(false);
        }, 2000);
    }

    return (
        <div>
            {/* mobile screen */}
            <div className="mobile-header  bg-[#fff] py-[10px] shadow md:hidden w-[100vw] ">
                <div className='container px-4 mx-auto flex justify-between items-center w-[100%]' >
                    <div className="logo-mobile before:content-[''] after:content-['']">
                        <a href="/">
                            <img src={logo} width={150} alt="Logo" />
                        </a>
                    </div>

                    <div className="btn-panel flex justify-center items-center gap-2">
                        <a className="before:content-[''] inline-block p-2 text-white rounded-md border bg-[#032759] border-[#032759]" href="/">
                            <AiFillFileText />
                        </a>
                        <div onClick={toggleMenu}>
                            {
                                isMenuOpen ? <a className="before:content-[''] inline-block p-2 text-white rounded-md border bg-[#032759] border-[#032759]" href="/">
                                    <AiOutlineClose />
                                </a> : <a className="before:content-[''] inline-block p-2 text-white rounded-md border bg-[#032759] border-[##032759]" href="/">
                                    <FiMenu />
                                </a>
                            }

                        </div>
                    </div>
                </div> 
                {
                        isMenuOpen &&
                        <div className='main-menu w-[100vw] relative flex flex-col z-[9999] opacity-1 transition-all duration-300 ease-linear '>
                            <ul className='p-0 m-0 flex flex-col list-nonebefore:content[""] after:content[""] shadow-lg bg-gray-400  absolute w-full'>
                                <li className='py-8 px-2 inline-block'>
                                    <Link to="/" className=" font-medium text-base hover:text-gray-600 uppercase font-Barlow ">Home</Link>
                                </li>
                                <li className=' px-2  ' onMouseEnter={() => setIsOpen(true)}
                                    onMouseLeave={() => setIsOpen(false)} >
                                    <Link to="/category/books" className=' font-medium text-base hover:text-gray-600  uppercase font-Barlow  '>Books
                                        {
                                            isOpen ? <FaAngleDown className='inline-block before:content-[""]' /> :
                                                <FaAngleRight className='inline-block before:content-[""] ' />
                                        }

                                        {
                                            isOpen &&
                                            <ul className=' '>
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

                                <li className='py-8 px-2'>
                                    <Link to="/contact" className='font-medium text-base hover:text-gray-600  uppercase font-Barlow'>Contact us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    }
            </div>
        </div>
    )
}

export default MobileHeader