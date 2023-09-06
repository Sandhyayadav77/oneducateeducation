import React from 'react'
import ClassesList from './ClassesList'
import InnerGrid from './InnerGrid'

const Books = () => {
  return (
    <>
      <div className="category-books-section pt-9 md:pt-20  h-fit bg-[#f3f3f3]">
        <div className="container w-[90%] px-[15px] mx-auto before:content-[''] after:content-['']">
          <div className="row before:content-[''] after:content-[''] mx-[-15px] w-full ">
            {/* pghead */}
            <div className='w-full'>
              <h3 className="pghead text-center mb-[20px] font-sans font-bold uppercase text-2xl">Books</h3>
            </div>
            {/* classesList */}
          <ClassesList/>
          <InnerGrid/>
          </div>
        </div>

      </div>
    </>
  )
}

export default Books