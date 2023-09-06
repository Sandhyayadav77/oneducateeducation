import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import { SiBookstack } from 'react-icons/si'
import { AiOutlineFilePdf } from 'react-icons/ai'

const InnerGrid = () => {
    return (
        <div className='w-full before:content-[""] after:content-[""] shadow-lg bg-white py-5 mt-7 '>
            <div className='columns-3 before:content-[""] w-full px-10 my-[20px] mx-auto flex flex-col md:flex-row md:gap-10  gap-y-4 items-start '>
                <div className="left-panel flex gap-[10px] items-center justify-center ">
                    <div className='icon  bg-yellow-200 md:h-10 h-14 md:w-10 w-14 rounded-sm relative '>
                        <BsFillPlayFill className='fill-yellow-500 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl' />
                    </div>
                    <div>
                        <div className="category">
                            <h3 className=' font-bold text-[25px] md:text-[18px]'  >Animated Videos</h3>
                        </div>
                        <div className="desc">
                            <h3 className='text-lg md:text-xs font-normal hover:cursor-pointer hover:underline '>View and Read By Chapters</h3>
                        </div>
                    </div>
                </div>


                <div className="mid-panel flex items-center justify-center gap-[10px] md:ml-10" >
                <div className='icon md:before:content-["|"] md:before:text-[2.9em] md:before:absolute md:before:bottom-[-8px] md:before:left-[-25px]  md:before:text-gray-200 bg-blue-200 md:h-10 h-14 md:w-10 w-14 p-2 rounded-sm relative  '>
                        <SiBookstack className= ' hover:rotate- text-center fill-blue-500 duration-300 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-xl'/>
                    </div>
                    <div>
                        <div className="category">
                            <h3 className='font-bold text-[25px] md:text-[18px]'>E-Books</h3>
                        </div>
                        <div className="desc">
                            <h3 className='text-lg md:text-xs font-normal hover:cursor-pointer hover:underline' >Read E-Books</h3>
                        </div>
                    </div>
                </div>

                <div className="right-panel flex items-center justify-center gap-[10px] md:ml-10" >
                    <div className='icon md:before:content-["|"] md:before:text-[2.2em] md:before:absolute md:before:bottom-[10px] md:before:left-[-25px]  md:before:text-gray-200 bg-green-100 md:h-10 h-14 md:w-10 w-14 p-2 rounded-md md:rounded-sm relative text-xl'>
                        <AiOutlineFilePdf className='fill-green-500 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:rotate' />
                    </div>
                    <div>
                        <div className="category">
                            <h3  className='font-bold text-[25px] md:text-[18px]'>Answer Key</h3>
                        </div>
                        <div className="desc">
                            <h3 className='text-lg md:text-xs font-normal hover:cursor-pointer hover:underline'>View and Download</h3>
                        </div>
                    </div>
                </div >

            </div>
        </div>
    )
}

export default InnerGrid
