import React from 'react'
import ClassLists from '../Class.json'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'


// classeslist category pages 
const ClassesList = () => {
  return (
    <>
          <div className="classesList bg-[#eee] py-8 px-4 w-full md:columns-4">
              <ul >
                {
                  ClassLists.map(item => {
                    return (
                     <Link to={item.direct}>
                      <li key={item.id} className='relative'>
                        <span className='  text-[2em] text-[#84818138] absolute z-[11] bottom-1 right-3' >Class</span>
                        <Link to={item.direct} className='p-4 bg-[#fff] mb-8 font-bold shadow-md block text-[#000] text-[2em] font-sans relative  '> {item.classCategory}
                          <FaAngleRight className='before:content-[""] inline-block text-3xl absolute bottom-[22px]' />
                        </Link>
                      </li>
                      </Link>

                    )
                  })
                }
              </ul>
            </div>

    </>
  )
}

export default ClassesList