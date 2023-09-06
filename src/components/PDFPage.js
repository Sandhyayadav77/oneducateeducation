import React, { useEffect, useState } from 'react';

const PDFPage = ({ match }) => {
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    const fetchPdfUrl = async () => {
      const className = match.params.className;
      const subjectName = match.params.subjectName;

      try {
        const response = await fetch(`http://localhost:5000/api/pdfUrl?className=${className}&subjectName=${subjectName}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPdfUrl(data.url); // URL to the PDF file on the server
      } catch (error) {
        console.error('Error fetching PDF URL:', error);
      }
    };

    fetchPdfUrl();
  }, [match.params.className, match.params.subjectName]);

  return (
    <div className="pdf-page">
      <h2>PDF Viewer</h2>
      {pdfUrl ? (
        <embed src={pdfUrl} width="100%" height="800" type="application/pdf" />
      ) : (
        <p>Loading PDF...</p>
      )}
    </div>
  );
};

export default PDFPage;
