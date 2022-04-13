import React from 'react';

import "./SkillsInfoArticle.css";

const SkillsInfoArticle = ({sectionData, children}) => {
  return (
    <article className="SkillsInfoArticle__skills-article">
      <h1 className="SkillsInfoArticle__skills-heading">{sectionData.heading.text} <span
        className="global__span-color">{sectionData.heading.span}</span></h1>
      <div className="SkillsInfoArticle__skills-img-wrapper">
        {
          sectionData.skills.map(({title, img}) => (
            <div
              key={img}
              className="SkillsInfoArticle__one-skills-container"
            >
              <div className="SkillsInfoArticle__skills-img-container">
                <img src={require(`../../../assets/images/${img}`)} alt={title}/>
              </div>
              <p>{title}</p>
            </div>
          ))
        }
      </div>
      {children}
    </article>
  );
};

export {SkillsInfoArticle};