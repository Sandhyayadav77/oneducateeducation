import React from 'react'
import {BsFillPlayFill} from 'react-icons/bs'
import book from '../assets/images/book.png'

const Main = () => {
  return (
    <>
        <div className="grid-info py-[2em] px-[2.5em] md:px-[3.5em] bg-[#f6f6f6] md:flex justify-center gap-80 items-center h-full ">
        <div className="book-img  max-w-[50%] hidden  md:block pt-[50px] px-[15px] ">
                <img src={book} className='max-h-[80%] shadow-lg rounded-md ' alt="Book" />
            </div>
            <div className="content-panel md:relative md:mr-[100px] ">
            <div className="inner-content lg:ml-[-250px] flex justify-start items-start flex-col">
            <p className='text-[2em] font-light leading-tight font-sans text-black md:text-[1.6em] lg:text-[1.9em]'>Unlease the power of thought with our <br /> wide range of</p>
            <h1 className='text-[2.5em] md:text-[2em] lg:text-[2.3em] font-bold mb-4'>PREMIUM E-BOOKS</h1>
            </div>
            <div className="play p-0 lg:ml-[-250px]">
            {/* z-[1] */}
                <span className='before:content-[" "] after:content-[" "] inline-block relative left w-14 h-14 text-center leading-[56px]  rounded-[50%] bg-transparent  bg-gradient-to-b from-[#5d99ee] to-[#032759] before:h-full before:w-full before:z-[-1] before:absolute before:left-0 before:top-0 
                after:h-full after:w-full after:z-[-2] after:absolute after:left-0 after:top-0 
                after:rounded-full  after:bg-[#fff] after:shadow-sm after:scale-125 border border-solid border-[#a43591] '>
                
                <BsFillPlayFill className='before:content-[""] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white'/>
                </span>
            </div>
            </div>
        </div>
    </>
  )
}

export default Main