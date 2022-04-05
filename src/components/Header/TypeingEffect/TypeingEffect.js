import React from 'react';
import Typewriter from "typewriter-effect";

export const TypeingEffect = () => {
  return (
    <h2 className="Header__second-heading"><Typewriter
      options={{
        loop: true,
        deleteSpeed: 40
      }}
      onInit={(typewriter => typewriter
          .changeDelay(100)
          .pauseFor(500)
          .typeString("Nazywam się <span style='color: #cd53ee'>Rafał</span>")
          .pauseFor(2000)
          .deleteAll(40)
          .pauseFor(500)
          .typeString("Szukam stażu jako<span style='color: #cd53ee'> Front-end Developer</span>")
          .pauseFor(2000)
          .start()
      )}
    />
    </h2>
  );
};