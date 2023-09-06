import React from 'react'
import InnerGrid from '../../Category/InnerGrid'
import ClassCard from '../../components/ClassCard'
import Class4Data from './Class4.json'

const classNameForPdf = "Class4"; 
const Class4 = () => {
  return (
    <>
    <div className="category-books-section pt-9 md:pt-20  h-fit bg-[#f3f3f3]">
      <div className="container w-[90%] px-[15px] mx-auto before:content-[''] after:content-['']">
        <div className="row before:content-[''] after:content-[''] mx-[-15px] w-full ">
          {/* pghead */}
          <div className='w-full'>
            <h3 className="pghead text-center mb-[20px] font-sans font-bold uppercase text-2xl">CLass 4th-Books</h3>
          </div>
         <div className="nursery-books flex columns-4 flex-wrap gap-3 mx-auto">
         {
            Class4Data.map((Class4,id)=>{
              return(
                <ClassCard  bookname={Class4.BookName}  classNameForPdf={classNameForPdf}   url={Class4.BookNameurl} fileId={Class4.fileId}/>
              )
            })
          }
         </div>
          {/* innergrid */}
          <InnerGrid />
        </div>
      </div>

    </div>
  </>
  )
}

export default Class4