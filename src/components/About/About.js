import React from 'react';
import {AboutData} from "./AboutData/AboutData";
import {SideInfo} from "./SideInfo/SideInfo";
import {MainInfoArticle} from "./MainInfoArticle/MainInfoArticle";
import {SkillsInfoArticle} from "./SkillsInfoArticle/SkillsInfoArticle";
import {SideInfoArticle} from "./SideInfoArticle/SideInfoArticle";
import {Github} from "./GitHub/Github";

import './About.css';

export const About = () => {
  const {secondSection, thirdSection} = AboutData;
  return (
    <section id="about" className="About">
      <div className="About__about-wrapper">
        <SideInfoArticle>
          {secondSection.map(({title, text, graphic}, index) => (
            <SideInfo
              key={index}
              title={title}
              text={text}
              graphic={graphic}
            />
          ))}
        </SideInfoArticle>
        <MainInfoArticle/>
      </div>
      <div className="About__skills-wrapper">
        <SkillsInfoArticle sectionData={thirdSection}>
          <Github/>
        </SkillsInfoArticle>
      </div>
    </section>
  );
};

