import React from 'react';

import "./MainInfoArticle.css";

const MainInfoArticle = () => {
  return (
    <article className="MainInfoArticle__main-container">
      <h1 className="MainInfoArticle__heading">Kilka<span className="global__span-color"> słów</span> o mnie</h1>
      <p className="MainInfoArticle__text">
        Programowaniem w języku Javascript interesuję się od ponad roku i przez ten czas <span
        className="global__span-color">nieustannie poszerzam
              swoją wiedzę</span> w tym zakresie. Uważam, że to odpowiedni moment, aby podjąć staż lub pierwszą pracę
        jako
        Junior Developer, w celu dalszego dynamicznego rozwoju.
      </p>
      <p className="MainInfoArticle__text">Pisząc działający kod, <span
        className="global__span-color">odnalazłem swoją pasję</span>, co daje mi ogromną satysfakcję!
      </p> <p className="MainInfoArticle__text">Codzienne <span
      className="global__span-color">rozwiązywanie problemów</span> podczas pisania w języku Javascript,
      pozwoliło mi spojrzeć na cały proces radzenia sobie z nimi z trochę innej perspektywy. Dzięki temu, z dnia
      na dzień jestem w
      stanie pracować coraz wydajniej.
    </p>
      <p className="MainInfoArticle__text">Podczas swojej nauki, skupiłem się głównie na front-endzie. Nie ominąłem
        jednak technologii związanej z back-end - Node.js, którą wykorzystałem w kilku projektach, m.in tworząc
        RESTowe API.</p>
      <p className="MainInfoArticle__text">
        Poza programowaniem lubię prowadzić <span
        className="global__span-color">aktywny tryb życia.</span> Regularnie biegam,
        a kiedy pogoda sprzyja spędzam czas na górskich wędrówkach, wspinaczce w skałach lub
        żeglowaniu.
      </p>
    </article>
  );
};

export {MainInfoArticle};