import React, {useState} from 'react';

import './HamburgerBtn.css';

export const HamburgerBtn = props => {


  return (
    <button className="HamburgerBtn"
            onClick={props.onHandleClick}
    >
      <span className="HamburgerBtn__bar"
            style={props.open ? null : {transform: "rotate(-45deg) translate(-15px, 15px) translateY(0)"}}
      />
      <span className="HamburgerBtn__bar"
            style={props.open ? null : {transform: "translateY(-25px)", opacity: "0"}}
      />
      <span className="HamburgerBtn__bar"
            style={props.open ? null : {transform: "rotate(45deg) translate(0, -15px) translateY(15px)"}}/>
      />
    </button>
  );
};
