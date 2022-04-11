import React from "react";
import GitHubCalendar from "react-github-calendar";

import './Github.css';

export const Github = () => {
  return (
    <div className="Github__container">
      <h1 className="Github__heading">
        Moja <strong className="global__span-color">aktywność</strong>
      </h1>
      <GitHubCalendar
        username="rafal-szczepanik"
        blockSize={15}
        blockMargin={5}
        color="#cd53ee"
        fontSize={14}
        style={{color: "white"}}
      />
    </div>
  );
};