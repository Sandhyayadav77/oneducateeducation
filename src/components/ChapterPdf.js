import React, { useState } from 'react';
import axios from 'axios';

const PDFViewer = () => {
  const [pdfs, setPdfs] = useState([]);

  // Function to fetch PDF data for a specific class and subject
  const fetchPDFData = async (className, subjectName) => {
    try {
      const response = await axios.get(`/api/pdf/${className}/${subjectName}`);
      setPdfs(response.data);
    } catch (error) {
      console.error('Error fetching PDF data:', error);
    }
  };

  return (
    <div>
      {/* Assuming you have a list of classes and subjects */}
      <button onClick={() => fetchPDFData('Class1', 'Math')}>View PDFs for Class 1 Math</button>
      <button onClick={() => fetchPDFData('Class2', 'Science')}>View PDFs for Class 2 Science</button>
      {/* Render the PDF links */}
      {pdfs.map((pdf) => (
        <div key={pdf._id}>
          <a href={`/pdf/${pdf.filename}`} target="_blank" rel="noopener noreferrer">
            {pdf.filename}
          </a>
        </div>
      ))}
    </div>
  );
};

export default PDFViewer;
