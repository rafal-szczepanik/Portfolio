import {
  SiContentful,
  SiCss3,
  SiExpress,
  SiGatsby,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiReact,
  SiReactrouter,
  SiTypescript
} from "react-icons/si";
import {FaSass} from "react-icons/fa";
import React from "react";
import {ImHtmlFive} from "react-icons/im";

export const ProjectItems = [
  {
    title: 'Portfolio',
    description: "Porfolio - aplikacja React typu Single Page Application. Miejsce w którym na bierząco dokumentuję swoje postępy w programowaniu, przez dodawanie swoich projektów w formie zewnętrznego linku do kodu oraz wersji Live. Na stronie oprócz moich projektów, znajdziesz również moje CV i formularz kontaktowy, co ułatwi nawiązanie współpracy.",
    codeLink: "https://github.com/rafal-szczepanik/Portfolio",
    liveLink: "https://rafal-szczepanik.github.io/Portfolio/",
    pictureUrl: "portfolio",
    technology: [
      {icon: <SiReact/>, name: "React"},
      {icon: <SiReactrouter/>, name: "React Router"},
      {icon: <SiCss3/>, name: "CSS"}
    ]
  },
  {
    title: 'Wegańskie przepisy',
    description: "Strona z wegańskimi przepisami (w trakcie rozwoju). Zainspirowany wegańską dietą, oraz korzystając ze zdjęć znajomych, napisałem aplikację gdzie w łatwy sposób możesz znaleźć przepis z produktów pochodzenia roślinnego. Dzięki wykorzystaniu frameworku Gatsby, strona działa w zoptymalizowany sposób, a przy pomocy technologi Headles CMS - Contentful, można w łatwy sposób zarządzać treścią, dodając lub edytując przepisy.",
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
    title: 'PerfectTree - strona firmowa',
    description: "Od tego projektu zaczęła się moja prawdziwa przygoda z front-endem. Wcześniej zajmowałem się alpinistyczną wycinką drzew i niezbędne było poszerzenie grona potencjalnych klientów. Wtedy zdecydowałem się na napisanie mojej pierwszej strony internetowej. Byłem w szoku jakie możliwości w połącznieu z HTML i CSS daje język programowania Javascript. Ponadto zrozumiałem jak potężnym narzędziem są strony internetowe, generujące nowych klientów.",
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
    title: 'ToDo Lista',
    description: "Jeden z moich pierwszych projektów, który towarzyszy mi od początku mojej przygody z Javascript. Rozpoczęty od prostej aplikacji, z czasem rozwijanej i refaktoryzowanej, aż do osiagnięcia obecnego kształtu. Aktualnie ToDo Lista korzysta z relacyjnej bazy danych MySQL, oraz back-endu napisanego w Express.js + Typescript. W planach mam dalszy rozwój tej aplikacji i przepisanie jej na React z wykorzystaniem Typescript po stronie front-endu.",
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
    description: "Chcesz spróbować szczęścia w grze typu Lotto? Ten projekt właśnie do tego został stworzony. Wybierz 6 liczb z 49 i zobacz jaki będzie rezultat. Masz nieograniczoną liczbę podejść. Do napisania tego programu wykorzystałem podstawowy zestaw narzędzi Front-end Developera, czyli HTML, CSS i Javascript.",
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
    description: "Projekt inspirowany grą z lat dzieciństwa. Nic tak nie uczy i nie utrwala wiedzy jak praca nad grą. Do napisania jej, wykorzystałem HTML, CSS oraz Javascript. Gra nie jest przystosowana do smartfonów, dlatego niestety nie zagrasz w nią na swoim telefonie. Natomiast nic nie stoi na przeszkodzie w spróbowaniu swoich sił z 'AI' korzystajać z przeglądarki na komputerze stacjonarnym.",
    codeLink: "https://github.com/rafal-szczepanik/pong-game",
    liveLink: "https://rafal-szczepanik.github.io/pong-game/",
    pictureUrl: "ponggame2",
    technology: [
      {icon: <ImHtmlFive/>, name: "HTML"},
      {icon: <SiCss3/>, name: "CSS"},
      {icon: <SiJavascript/>, name: "Javascript"}]
  }];
