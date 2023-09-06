import React from 'react'

const ChapterVideo = ({videoIds}) => {
    // const videoSrc = `https://www.youtube.com/embed/${videoId}`;
    const videoIdsArray = videoIds;
    // console.log(videoIdsArray)
    return (
        <>
         
          <div className="main-container w-full flex flex-col md:grid md:grid-cols-2 m-5 mx-auto space-y-7 justify-center items-center mt-12">
          {
                videoIdsArray.map((videoId , index)=> <div key={index} className='container w-full h-fit  flex  justify-center  items-center'>
                <div className="video-container h-[320px] flex justify-center items-start relative rounded-xl  w-[420px] bg-gray-200">
                    <iframe className=' before:content-[""] after:content-[""] shadow-md shadow-white absolute top-6 rounded-2xl' width="385" height="210" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player"  allowFullScreen></iframe>
                </div>

            </div>
                )
            }
          </div>

        </>
    )
}

export default ChapterVideo