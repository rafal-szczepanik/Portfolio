import React from 'react';
import {IoSchool} from "react-icons/io5";
import {IoMdMedal} from "react-icons/io";
import {AiOutlineFundProjectionScreen} from "react-icons/ai";
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
              graphic={<IoMdMedal fontSize={20} style={{color: "var(--span-color)"}}/>}
            />
            <SideInfoArticle
              title={"Edukacja"}
              text={"Kursy interentowe oraz dokumentacja"}
              graphic={<IoSchool fontSize={20} style={{color: "var(--span-color)"}}/>}
            />
            <SideInfoArticle
              title={"Projekty"}
              text={"6 proketów w porfolio i koljne w trakcie pisania"}
              graphic={<AiOutlineFundProjectionScreen fontSize={20} style={{color: "var(--span-color)"}}/>}
            />
          </article>
          <article className="About__main-container">
            <h1 className="About__heading">Kilka<span className="global__span-color"> słów</span> o mnie</h1>
            <p className="About__text">
              Programowaniem w języku Javascript interesuję się od ponad roku i przez ten czas nieustannie poszerzam
              swoja wiedzę w tym zakresie. Uważam, że to odpowiedni moment, aby podjąć staż lu pierwszą pracę jako Junior Developer, w celu dalszego dynamicznego rozwoju.
            </p>
            <p className="About__text">Pisząc działający kod, odnalazłem swoją pasję, co daje mi ogromną satysfakcję!
            </p> <p className="About__text">Codzienne rozwiązywanie problemów podczas pisania w języku Javascript,
            pozwoliło mi spojrzeć na cały proces radzenia sobie z nimi z trochę innej perspektywy. Dzięki temu jestem w
            stanie pracować coraz wydajniej z dnia na dzień.
          </p>
            <p className="About__text">Podczas swojej nauki, skupiłem się głównie na front-endzie. Nie ominąłem
              jednak technologii związanej z back-end - Node.js, którą wykorzystałem w kilku projektach, m.in tworząc
              RESTowe API.</p>
            <p className="About__text">
              Poza programowaniem lubię prowadzić aktywny tryb życia. Regularnie biegam,
              a kiedy pogoda sprzyja spędzam czas na:
              górskich wędrówkach,
              wspinaczce w skałach lub
              żeglowaniu.
            </p>
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
                    className="About__one-skills-container"
                  >
                    <div className="About__skills-img-container">
                      <img src={require(`../../assets/images/${img}`)} alt={title}/>
                    </div>
                    <p>{title}</p>
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

