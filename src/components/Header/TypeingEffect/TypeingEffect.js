import React from 'react';
import Typewriter from "typewriter-effect";

export const TypeingEffect = () => {
  return (
    <h2 className="Header__second-heading"><Typewriter
      options={{loop: true}}
      onInit={(typewriter => typewriter
          .changeDelay(50)
          .typeString("NAZYWAM SIĘ <span style='color: #cd53ee'>RAFAŁ</span>")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Szukam stażu jako<span style='color: #cd53ee'> Front-end Developer</span>")
          .pauseFor(1000)
          .start()
      )}
    />
    </h2>
  );
};