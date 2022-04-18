import React from 'react';
import {BsGithub, BsLinkedin} from "react-icons/bs";

import './Footer.css';

export const Footer = () => {
  return (
    <footer className="Footer">
      <p className="Footer__text">
        <a href="https://www.freepik.com"><span
          className="Footer__text-span">Designed by</span>
          stories / Freepik</a>
      </p>
      <div>
        <p className="Footer__text">Created by </p>
        <p className="Footer__text">Rafał Szczepanik {new Date().getFullYear()}</p>
      </div>
      <div>
        <a href="https://github.com/rafal-szczepanik"
           rel="noopener noreferrer"
           target="_blank">
          <BsGithub
            style={{color: 'white', fontSize: '20px', margin: '0 5px'}}/></a>
        <a href="https://www.linkedin.com/in/rafał-szczepanik-75425a107/"
           rel="noopener noreferrer"
           target="_blank">
          <BsLinkedin
            style={{color: 'white', fontSize: '20px', margin: ' 0 5px'}}/></a>
      </div>
    </footer>
  );
};