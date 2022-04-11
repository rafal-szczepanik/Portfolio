import React from 'react';

import "./SideInfoArticle.css";

const SideInfoArticle = ({title, text, graphic}) => {
  return (
    <div className="SideInfoArticle__side-info">
      {graphic}
      <h1 className="SideInfoArticle__side-info-heading">{title}</h1>
      <p className="SideInfoArticle__side-info-text">{text}</p>
    </div>
  );
};

export {SideInfoArticle};