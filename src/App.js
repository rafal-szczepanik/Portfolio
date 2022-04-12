import React, {useEffect, useState} from 'react';
import {Routes, Route} from "react-router-dom";
import {Layout} from "./components/Layout/Layout";
import {Header} from "./components/Header/Header";
import {Projects} from "./components/Projects/Projects";
import {Footer} from "./components/Footer/Footer";
import {Navigation} from "./components/Header/Navigation/Navigation";
import {LoadingPage} from "./components/common/LoadingPage/LoadingPage";
import {About} from "./components/About/About";
import {Resume} from "./components/Resume/Resume";
import {Contact} from "./components/Contact/Contact";

import './App.css';
import {ContactForm} from "./components/Contact/ContactForm/ContactForm";

export const App = () => {
  const [loading, setLoading] = useState(true);

  const header = (
    <Header>
      <Navigation/>
    </Header>
  );
  const content = (
    <>
      <About/>
      <Projects/>
    </>
  );
  const contact = <Contact>
    <ContactForm/>
  </Contact>;
  const footer = <Footer>Rafał Szczepanik</Footer>;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <LoadingPage/>;
  }


  return (
    <div className="App__background">
      <Routes>
        <Route path="/" element={<Layout
          header={header}
          content={content}
          contact={contact}
          footer={footer}
        />}/>
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
    </div>
  );
};