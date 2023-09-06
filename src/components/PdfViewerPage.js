import React, { useState } from 'react';
import { useParams , useNavigate }  from 'react-router-dom';

const PdfViewerPage = () => {
  const { className, subjectName, fileId } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  if (!fileId || fileId === "") {
    return (
      <div className="pdf-container mt-11 mx-auto w-screen md:mt-24 md:p-10">
        <div>Error: PDF file ID is missing.</div>
      </div>
    );
  }
//   const pdfUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  const pdfUrl = `https://drive.google.com/file/d/${fileId}/preview`;
console.log(pdfUrl)

const handleLoad = () => {
  setLoading(false); // PDF content is loaded
};
  return (<>

   <div className="container mt-11 md:mt-24 ">
   <p className='text-center uppercase text-2xl font-semibold'>{className} {subjectName}</p>
    <div className="pdf-container  mx-auto w-screen  md:p-10">
    {loading ? (
        <div className="loading-spinner mt-24 text-4xl font-bold text-center">Loading...</div>
      ) : null}
  
       <iframe
        src={pdfUrl}
        title="Embedded PDF"
        width="100%"
        height="600px"
        frameBorder="0"
        onLoad={handleLoad}
      ></iframe>
   
    </div>
   </div>
  </>

  );
};

export default PdfViewerPage;
