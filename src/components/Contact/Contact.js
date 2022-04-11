import React from 'react';

import './Contact.css';

export const Contact = props => {
  return (
    <div id="contact" className="Contact">
      <h1 className="Contact__heading">Jesteś zainteresowany <span className="Contact__heading-span">współpracą?</span>
      </h1>
      <h2 className="Contact__second-heading">Skontaktuj się ze mną</h2>
      {props.children}
    </div>
  );
};

