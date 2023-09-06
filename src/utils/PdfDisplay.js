// client/src/utils/pdfDisplay.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFDisplay = ({ classTitle, bookTitle }) => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPDF = async () => {
    try {
      const response = await axios.get(`/api/pdf/${classTitle}/${bookTitle}`);
      setPdfUrl(response.data.pdfUrl);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching PDF:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPDF();
  }, [classTitle, bookTitle]);

  return (
    <div className="pdf-container">
      {loading ? (
        <p>Loading PDF...</p>
      ) : pdfUrl ? (
        <Document file={pdfUrl} loading="Loading PDF...">
          <Page pageNumber={1} />
        </Document>
      ) : (
        <p>PDF not found</p>
      )}
    </div>
  );
};

export default PDFDisplay;
