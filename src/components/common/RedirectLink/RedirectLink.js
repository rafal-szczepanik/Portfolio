import React from 'react';

import './RedirectLink.css';

export const RedirectLink = props => {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className={"RedirectLink__link"}>{props.text}{props.otpionalGrafic}</a>
  );
};