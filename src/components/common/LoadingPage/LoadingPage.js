import React from 'react';
import './LoadingPage.css';
import {RingLoader} from "react-spinners";

export const LoadingPage = () => {
  return (<div className="Spinner">
    <RingLoader size={150} color="#cd53ee"/>
  </div>);
};
