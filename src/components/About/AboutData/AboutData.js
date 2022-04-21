import React from "react";
import {IoMdMedal} from "react-icons/io";
import {IoSchool} from "react-icons/io5";
import {AiOutlineFundProjectionScreen} from "react-icons/ai";

export const AboutData = {
  secondSection: [
    {
      title: "Doświadczenie",
      text: "Doświadczenie półkomercyjne przy projekcie strony firmowej",
      graphic: <IoMdMedal fontSize={20} style={{color: "var(--span-color)"}}/>
    },
    {
      title: "Edukacja",
      text: "Kursy interentowe oraz dokumentacja",
      graphic: <IoSchool fontSize={20} style={{color: "var(--span-color)"}}/>
    },
    {
      title: "Projekty",
      text: "6 projektów w porfolio i kolejne w trakcie pisania",
      graphic: <AiOutlineFundProjectionScreen fontSize={20} style={{color: "var(--span-color)"}}/>
    },
  ],
  thirdSection: {
    heading: {
      text: "Poznane",
      span: "technologie",
    },
    skills: [
      {
        title: "HTML 5",
        img: "file-type-html.226x256.png"
      },
      {
        title: "CSS",
        img: "css3.226x256.png"
      },
      {
        title: "Sass",
        img: "sass-original.256x192.png"
      },
      {
        title: "Javascript",
        img: "javascript-js.256x256.png"
      },
      {
        title: "Typescript",
        img: "typescript-icon.256x256.png"
      },
      {
        title: "React",
        img: "react.256x228.png"
      },
      {
        title: "React Router",
        img: "react-router.256x140.png"
      },
      {
        title: "Node.js",
        img: "file-type-node.227x256.png"
      },
      {
        title: "Express.js",
        img: "express-original.256x149.png"
      },
      {
        title: "MySQL",
        img: "mysql.256x252.png"
      },
    ]
  }
};
