import React from 'react';

import "./SideInfo.css";

const SideInfo = ({title, text, graphic}) => {
  return (
    <div className="SideInfo__side-info">
      {graphic}
      <h1 className="SideInfo__side-info-heading">{title}</h1>
      <p className="SideInfo__side-info-text">{text}</p>
    </div>
  );
};

export {SideInfo};