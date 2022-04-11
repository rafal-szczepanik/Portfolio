import React from 'react';
import {Project} from "./Project/Project";
import {ProjectItems} from "./ProjectItems/ProjectItems";

import './Projects.css';

export const Projects = props => {
  return (
    <div id="projects" className="Projects">
      <h1 className="Projects__title">Moje <span className="global__span-color">projekty</span></h1>
      <div className="Projects__container">
        {ProjectItems.map((project,) => (
          <Project
            key={project.title}
            title={project.title}
            description={project.description}
            pictureUrl={project.pictureUrl}
            code={project.codeLink}
            live={project.liveLink}
            technology={project.technology}
          />
        ))}
      </div>
    </div>
  );
};