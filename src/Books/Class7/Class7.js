import React from 'react'
import InnerGrid from '../../Category/InnerGrid'
import ClassCard from '../../components/ClassCard'
import Class7Data from './Class7.json'

const classNameForPdf = "Class7"; 

const Class7 = () => {
  return (
    <>
    <div className="category-books-section pt-9 md:pt-20  h-fit bg-[#f3f3f3]">
      <div className="container w-[90%] px-[15px] mx-auto before:content-[''] after:content-['']">
        <div className="row before:content-[''] after:content-[''] mx-[-15px] w-full ">
          {/* pghead */}
          <div className='w-full'>
            <h3 className="pghead text-center mb-[20px] font-sans font-bold uppercase text-2xl">CLass 7th-Books</h3>
          </div>
         <div className="nursery-books flex columns-4 flex-wrap gap-3 mx-auto">
         {
            Class7Data.map((Class7,id)=>{
              return(
                <ClassCard   bookname={Class7.BookName}   classNameForPdf={classNameForPdf}   url={Class7.BookNameurl} fileId={Class7.fileId}/>
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

export default Class7