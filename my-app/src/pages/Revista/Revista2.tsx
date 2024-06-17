import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import HTMLFlipBook from 'react-pageflip';
import './Revista2.css';
import { useMediaQuery } from '@mui/material';
import pdf from './revista.pdf'


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const Revista2 = () => {
    const [numPages, setNumPages] = useState<number>();

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    const isSmallScreen = useMediaQuery('(max-width: 900px)');
    let pageWidth = 400;
    let pageHeight = 600;

    if(isSmallScreen){
        pageWidth = 400
        pageHeight = 600;
    }

    return (
        <div className="Revista2">
            <Document
                file={pdf}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <div className="flip-book-container" style={{display:"flex",justifyContent:'center'}}>
                    <HTMLFlipBook
                        width={pageWidth}
                        height={pageHeight}
                        size="stretch"
                        minWidth={pageWidth}
                        maxWidth={pageWidth}
                        minHeight={pageHeight}
                        maxHeight={pageHeight}
                        maxShadowOpacity={0.5}
                        showCover={true}
                        mobileScrollSupport={true}
                        className="flip-book"
                        style={{display:"flex",justifyContent:'center'}}
                        startPage={0}
                        drawShadow={true}
                        flippingTime={600}
                        useMouseEvents={true}
                        usePortrait={true}
                        startZIndex={1000}
                        autoSize={true}
                        clickEventForward={true}
                        swipeDistance={30}
                        showPageCorners={false}
                        disableFlipByClick={false}
                        
                    >
                        {Array.from(new Array(numPages || 0), (el, index) => (
                            <div key={`page_${index + 1}`} className="pdf-page">
                                <Page
                                    pageNumber={index + 1}
                                    height={pageHeight}
                                />
                            </div>
                        ))}
                    </HTMLFlipBook>
                </div>
            </Document>

            <div className="navigation">
                {/* Navegação (se houver) */}
            </div>
        </div>
    );
};

export default Revista2;
