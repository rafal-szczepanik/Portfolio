import React from 'react';
import {useWebsiteTitle} from "../hooks/useWebsiteTitle";

export const Layout = props => {
  useWebsiteTitle('Strona Główna');

  return (
    <>
      <div>{props.main}</div>
      <div>{props.header}</div>
      <div>{props.content}</div>
      <div>{props.contact}</div>
      <div>{props.footer}</div>
    </>
  );
};
