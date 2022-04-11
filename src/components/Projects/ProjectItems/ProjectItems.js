import {
  SiBootstrap,
  SiContentful,
  SiCss3,
  SiExpress, SiFirebase,
  SiGatsby,
  SiJavascript, SiMysql,
  SiNodedotjs,
  SiReact,
  SiReactrouter, SiTypescript
} from "react-icons/si";
import {FaSass} from "react-icons/fa";
import React from "react";
import {ImHtmlFive} from "react-icons/im";

export const ProjectItems = [
  {
    title: 'PerfectTree - strona firmowa',
    description: "Od tego projektu zaczęła się moja prawdziwa przygoda z front-endem." +
      " Wcześniej zajmowałem się alpinistyczną wycinką drzew i niezbędne było poszerzenie grona potencjalnych klientów. " +
      "Wtedy zdecydowałem się na napisanie mojej pierwszej strony internetowej. Byłem w szoku jakie możliwości w połącznieu z HTML i CSS daje" +
      " język programowania Javascript. Ponadto zrozumiałem jak potężnym narzędziem są strony internetowe," +
      "generujące nowych kleintów.",
    codeLink: "https://github.com/rafal-szczepanik/PerfectTree-website",
    liveLink: "https://rafal-szczepanik.github.io/PerfectTree-website",
    pictureUrl: "perfecttree2",
    technology: [
      {icon: <ImHtmlFive/>, name: "HTML"},
      {icon: <SiCss3/>, name: "CSS"},
      {icon: <FaSass/>, name: "Sass"},
      {icon: <SiJavascript/>, name: "Javascript"}]
  },
  {
    title: 'Wegańskie przepisy',
    description: "Strona firmowa " +
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab " +
      "commodi consectetur ex ipsa voluptatum! Beatae cum distinctio " +
      "minus mollitia nesciunt?    Lorem ipsum dolor sit" +
      " amet, consectetur adipisicing elit. Ab commodi consectetur ex ipsa voluptatum!" +
      " Beatae cum  distinctio minus mollitia nesciunt?    Lorem ipsum dolor sit amet, " +
      "consectetur adipisicing elit. Ab commodi consectetur ex ipsa voluptatum! Beatae " +
      "cum  distinctio minus mollitia nesciunt?",
    codeLink: "https://github.com/rafal-szczepanik/vegan-recipies-blog",
    liveLink: "https://weganskie-przepisy.netlify.app/",
    pictureUrl: "wegeprzepisy2",
    technology: [
      {icon: <SiReact/>, name: "React"},
      {icon: <SiReactrouter/>, name: "React Router"},
      {icon: <SiCss3/>, name: "CSS"},
      {icon: <SiGatsby/>, name: "Gatsby"},
      {icon: <SiContentful/>, name: "Contentful"}]
  },
  {
    title: 'Strona z Noclegami',
    description: "Strona firmowa " +
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab " +
      "commodi consectetur ex ipsa voluptatum! Beatae cum distinctio " +
      "minus mollitia nesciunt?    Lorem ipsum dolor sit" +
      " amet, consectetur adipisicing elit. Ab commodi consectetur ex ipsa voluptatum!" +
      " Beatae cum  distinctio minus mollitia nesciunt?    Lorem ipsum dolor sit amet, " +
      "consectetur adipisicing elit. Ab commodi consectetur ex ipsa voluptatum! Beatae " +
      "cum  distinctio minus mollitia nesciunt?",
    codeLink: "https://github.com/rafal-szczepanik/PerfectTree-website",
    liveLink: "https://rafal-szczepanik.github.io/PerfectTree-website",
    pictureUrl: "perfecttree2",
    technology: [
      {icon: <SiReact/>, name: "HTML"},
      {icon: <SiReactrouter/>, name: "React"},
      {icon: <SiCss3/>, name: "React Router"},
      {icon: <SiBootstrap/>, name: "Bootstrap"},
      {icon: <SiFirebase/>, name: "Firebase"}]
  },
  {
    title: 'ToDo Lista',
    description: "Strona firmowa " +
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab " +
      "commodi consectetur ex ipsa voluptatum! Beatae cum distinctio " +
      "minus mollitia nesciunt?    Lorem ipsum dolor sit" +
      " amet, consectetur adipisicing elit. Ab commodi consectetur ex ipsa voluptatum!" +
      " Beatae cum  distinctio minus mollitia nesciunt?    Lorem ipsum dolor sit amet, " +
      "consectetur adipisicing elit. Ab commodi consectetur ex ipsa voluptatum! Beatae " +
      "cum  distinctio minus mollitia nesciunt?",
    codeLink: "https://github.com/rafal-szczepanik/Todo-list-with-TypeScript-MySQL",
    liveLink: "https://expresstodolist.rafalszczepan.repl.co/",
    pictureUrl: "todolist2",
    technology: [
      {icon: <ImHtmlFive/>, name: "HTML"},
      {icon: <SiCss3/>, name: "CSS"},
      {icon: <SiTypescript/>, name: "Typescript"},
      {icon: <SiNodedotjs/>, name: "Node"},
      {icon: <SiExpress/>, name: "Express"},
      {icon: <SiMysql/>, name: "MySQL"}],
  },
  {
    title: 'Symulator Lotto',
    description: "Strona firmowa " +
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab " +
      "commodi consectetur ex ipsa voluptatum! Beatae cum distinctio " +
      "minus mollitia nesciunt?    Lorem ipsum dolor sit" +
      " amet, consectetur adipisicing elit. Ab commodi consectetur ex ipsa voluptatum!" +
      " Beatae cum  distinctio minus mollitia nesciunt?    Lorem ipsum dolor sit amet, " +
      "consectetur adipisicing elit. Ab commodi consectetur ex ipsa voluptatum! Beatae " +
      "cum  distinctio minus mollitia nesciunt?",
    codeLink: "https://github.com/rafal-szczepanik/lottery-game-v2",
    liveLink: "https://rafal-szczepanik.github.io/lottery-machine/",
    pictureUrl: "lotterymachine2",
    technology: [
      {icon: <ImHtmlFive/>, name: "HTML"},
      {icon: <SiCss3/>, name: "CSS"},
      {icon: <SiJavascript/>, name: "Javascript"}]
  },
  {
    title: 'Gra Pong',
    description: "Strona firmowa " +
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab " +
      "commodi consectetur ex ipsa voluptatum! Beatae cum distinctio " +
      "minus mollitia nesciunt?    Lorem ipsum dolor sit" +
      " amet, consectetur adipisicing elit. Ab commodi consectetur ex ipsa voluptatum!" +
      " Beatae cum  distinctio minus mollitia nesciunt?    Lorem ipsum dolor sit amet, " +
      "consectetur adipisicing elit. Ab commodi consectetur ex ipsa voluptatum! Beatae " +
      "cum  distinctio minus mollitia nesciunt?",
    codeLink: "https://github.com/rafal-szczepanik/pong-game",
    liveLink: "https://rafal-szczepanik.github.io/pong-game/",
    pictureUrl: "ponggame2",
    technology: [
      {icon: <ImHtmlFive/>, name: "HTML"},
      {icon: <SiCss3/>, name: "CSS"},
      {icon: <SiJavascript/>, name: "Javascript"}]
  }];
