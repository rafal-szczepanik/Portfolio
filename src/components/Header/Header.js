import React from 'react';

import './Header.css';
import {TypeingEffect} from "./TypeingEffect/TypeingEffect";

export const Header = props => {
  return (
    <div id="home" className="Header__container">
      {props.children}
      <div className="Header__container-content">
        <article className="Header__article">
          <h1 className="Header__heading">Cześć!</h1>
          <TypeingEffect/>
        </article>
        <div><img src={require("../../assets/images/programmer2.png")} alt=""/></div>
      </div>
    </div>
  );
};

