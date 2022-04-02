import React from 'react';

import './NavBar.css';
import {HamburgerBtn} from "../HamburgerBtn/HamburgerBtn";

export const NavBar = props => {
  return (
    <div>
      <ul className="NavBar__nav">
        <li className="NavBar__nav-item"><a className="NavBar__link" href="#">Home</a></li>
        <li className="NavBar__nav-item"><a className="NavBar__link" href="#">O mnie</a></li>
        <li className="NavBar__nav-item"><a className="NavBar__link" href="">Projekty</a></li>
        <li className="NavBar__nav-item"><a className="NavBar__link" href="">Cośtam</a></li>
      </ul>
    </div>
  );
};