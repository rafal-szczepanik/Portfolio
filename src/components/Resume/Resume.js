import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Document, Page, pdfjs} from "react-pdf";
import {useWebsiteTitle} from "../hooks/useWebsiteTitle";
import {RedirectLink} from "../common/RedirectLink/RedirectLink";
import pdf from './../../assets/images/RafalSzczepanikResume.pdf';

import './Resume.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const Resume = () => {
  const [width, setWidth] = useState(1200);
  useWebsiteTitle("Moje CV");

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="Resume__container">
      <h1 className="Resume__heading">Pobierz moje CV lub <Link className={'Resume__home-link'} to="/">WRÓĆ</Link> na
        stronę główną</h1>
      <Document className="Resume" file={pdf}>
        <RedirectLink
          url={pdf}
          text={"Download CV"}
        />
        <Page pageNumber={1} scale={width > 786 ? 1 : 0.6}/>
      </Document>
    </div>
  );
};
