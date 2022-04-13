import React from 'react';

import "./SideInfoArticle.css";

const SideInfoArticle = props => {
  return (
    <article className="SideInfoArticle__side-container">
      {props.children}
    </article>
  );
};

export {SideInfoArticle};