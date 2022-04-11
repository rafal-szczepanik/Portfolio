import React, {useEffect, useState} from 'react';

import "./ContactForm.css";

const ContactForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const validationRules = {
    name: val => val.length > 2,
    email: val => val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    message: val => !!val
  };

  const validate = () => {
    let errors = {};
    let hasErrors = false;
    for (let key of Object.keys(inputs)) {
      errors[key] = !validationRules[key](inputs[key]);
      hasErrors |= errors[key];
    }
    setFieldErrors(prev => ({...prev, ...errors}));
    return !hasErrors;
  };

  const renderFieldError = field => {
    if (fieldErrors[field]) {
      return <p className="errorMsg">Please enter a valid {field}.</p>;
    }
  };

  const handleOnChange = e => {
    e.persist();
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setFieldErrors({});
      setInputs({
        name: "",
        email: "",
        message: ""
      });
    }
    setServerState({
      submitting: false,
      status: {ok, msg}
    });
    if (ok) {
      setInputs({
        name: "",
        email: "",
        message: ""
      });
    }
  };
  const handleOnSubmit = async e => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    try {
      setServerState({submitting: true});
      await fetch("https://formspree.io/f/xpzbjggb", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs)
      });
      await handleServerResponse(true, "Dziękuję za wiadomość!");
    } catch (e) {
      handleServerResponse(false, e.message);
    }
  };
  useEffect(() => {
    if (Object.keys(fieldErrors).length > 0) {
      validate();
    }
  }, [inputs]);
  return (
    <div className="ContactForm__container">
      <form onSubmit={handleOnSubmit} action="https://formspree.io/f/xpzbjggb"
            method="POST">
        <label>
          <p className="ContactForm__text">Twoje imię</p>
          <input
            placeholder="Imię"
            name="name"
            type="text"
            onChange={handleOnChange}
            value={inputs.name}
            className={fieldErrors.name ? "error" : ""}
          />
          {renderFieldError("name")}
        </label>
        <label>
          <p className="ContactForm__text">Twój e-mail</p>
          <input placeholder="Email"
                 name="email"
                 type="email"
                 onChange={handleOnChange}
                 value={inputs.email}
                 className={fieldErrors.email ? "error" : ""}
          />
          {renderFieldError("email")}
        </label>
        <label>
          <p className="ContactForm__text">Twoja wiadomość</p>
        </label>
        <textarea
          placeholder="Wiadomość..."
          name="message"
          cols="30" rows="10"
          onChange={handleOnChange}
          value={inputs.message}
          className={fieldErrors.message ? "error" : ""}
        />
        {renderFieldError("message")}
        <button type="submit" disabled={serverState.submitting}>Wyślij</button>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : "msgOk"}>
            {serverState.status.msg}
          </p>
        )}
      </form>
    </div>
  );
};

export {ContactForm};