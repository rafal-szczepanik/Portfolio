import React, {useState} from 'react';
import ReactCardFlip from 'react-card-flip';

import {RedirectLink} from "../../common/RedirectLink/RedirectLink";

import './Project.css';

export const Project = props => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlipClick = e => {
    e.preventDefault();
    setIsFlipped(prev => !prev);
  };
  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
      containerClassName="Project__container"
    >
      <div className="Project">
        <h2 className="Project__title">{props.title}</h2>
        <img className="Project__image" src={require(`../../../assets/images/${props.pictureUrl}.jpg`)} alt=""/>
        <div className="Project__technology-container">
          <h2 className="Project__title">Stack technologiczny</h2>
          <div className="Project__technology">
            {props.technology ? props.technology.map((item, index) => <span
              key={index}
              className="Project__technology-icon"
            >{item.icon}</span>) : null}
          </div>
        </div>
        <div className="Project__buttons-container">
          <RedirectLink
            url={props.code}
            text={'Code'}
          />
          <RedirectLink
            url={props.live}
            text={'Live'}
          />
        </div>
        <div className="Project__SeeMore-button" onClick={handleFlipClick}>
          <div className="Project__SeeMore-button-text text-capitalize"><span
            className="Project__SeeMore-button-firstline">Czytaj</span><p>Więcej!</p>
          </div>
        </div>
      </div>
      <div className="Project">
        <div className="Project__flipped-content-container">
          <div className="Project__flipped-content-desc">
            <h2 className="Project__title">{props.title}</h2>
            <p className="Project_text">
              {props.description}
            </p>
          </div>
          <div className="Project__technology">
            {props.technology ? props.technology.map((item, index) => <span
              key={index}
              className="Project__technology-icon"
            >{item.icon}<span className="Project_text">{item.name}</span></span>) : null}
          </div>
        </div>
        <div className="Project__SeeMore-button" onClick={handleFlipClick}>
          <div className="Project__SeeMore-button-text text-capitalize"><p
            className="Project__SeeMore-button-firstline">Czytaj</p><p>Więcej!</p>
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
};
