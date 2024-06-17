import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Switch from '@mui/material/Switch';
import Revista2 from './Revista2';
import pdf from './revista.pdf';
import './Revista.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Revista = () => {
  const [numPages, setNumPages] = useState<number>();
  const [type, setType] = useState<boolean>(true);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.checked);
  };

  return (
    <div className="Revista">
      <div className='header'>
        <h1>Perspetivas da Inclusão em Contexto Escolar</h1>
      </div>
      <Switch
        checked={type}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />

      <div className='pdf-container'>
        {type ? (
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(
              new Array(numPages),
              (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  className="pdf-page"
                />
              )
            )}
          </Document>
        ) : (
          <Revista2 />
        )}
      </div>
    </div>
  );
};

export default Revista;
