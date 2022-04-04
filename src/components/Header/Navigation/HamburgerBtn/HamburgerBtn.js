import React from 'react';

import './HamburgerBtn.css';

export const HamburgerBtn = props => {
  const {isOpen, onHandleClick} = props;
  return (
    <button className="HamburgerBtn"
            onClick={onHandleClick}
    >
      <span className="HamburgerBtn__bar"
            style={isOpen ? {transform: "rotate(-45deg) translate(-10px, 10px) translateY(0)"} : null}
      />
      <span className="HamburgerBtn__bar"
            style={isOpen ? {transform: "translateY(-25px)", opacity: "0"} : null}
      />
      <span className="HamburgerBtn__bar"
            style={isOpen ? {transform: "rotate(45deg) translate(-5px, -20px) translateY(15px)"} : null}/>
      />
    </button>
  );
};
