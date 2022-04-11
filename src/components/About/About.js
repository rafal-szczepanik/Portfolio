import React from 'react';
import {IoSchool} from "react-icons/io5";
import {IoMdMedal} from "react-icons/io";
import {Github} from "./GitHub/Github";
import {SideInfoArticle} from "./SideInfoArticle/SideInfoArticle";
import {AboutData} from "./AboutData/AboutData";

import './About.css';

export const About = () => {
  return (
    <>
      <section id="about" className="About">
        <div className="About__about-wrapper">
          <article className="About__side-container">
            <SideInfoArticle
              title={"Doświadczenie"}
              text={"Doświadczenie półkomercyjne przy projekcie strony firmowej"}
              graphic={<IoMdMedal fontSize={20} style={{color: "white"}}/>}
            />
            <SideInfoArticle
              title={"Edukacja"}
              text={"Kursy interentowe oraz dokumentacja"}
              graphic={<IoSchool style={{color: "white"}}/>}
            />
            <SideInfoArticle
              title={"Projekty"}
              text={""}
              graphic={<IoSchool fontSize={20} style={{color: "white"}}/>}
            />
          </article>
          <article className="About__main-container">
            <h1 className="About__heading">Pozwól, że <span className="global__span-color">się</span> przedstawię</h1>
            <br/>
            <p className="About__text">
              I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
            </p><br/>
            <p className="About__text"> I am fluent in classics like C++, Javascript and Python.
            </p> <br/>
            <p className="About__text">My field of Interest's are building new Web Technologies and Products and also in
              areas
              related to Deep Learning
              and Natural Launguage Processing.</p> <br/>
            <p className="About__text">
              Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript
              Library
              and Frameworks like React.js and Next.js</p>
          </article>
        </div>
        <div className="About__skills-wrapper">
          <article className="About__skills-article">
            <h1 className="About__skills-heading">Poznane <span className="global__span-color">technologie</span></h1>
            <div className="About__skills-img-wrapper">
              {
                AboutData.thirdSection.map(({title, img}) => (
                  <div
                    key={img}
                    style={{display: "flex", flexDirection: "column", padding: "10px 5px", alignItems: "center"}}
                  >
                    <div className="About__skills-img-container">
                      <img src={require(`../../assets/images/${img}`)} alt={title}/>
                    </div>
                    <p style={{color: "white", textAlign: "center", padding: "5px"}}>{title}</p>
                  </div>
                ))
              }
            </div>
            <Github/>
          </article>
        </div>
      </section>
    </>);
};

