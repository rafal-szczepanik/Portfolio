import React, {useEffect, useState} from 'react';
import {NavBarItems} from '../NavBarItems/NavBarItems';
import './SideBar.css';
import {HamburgerBtn} from "../HamburgerBtn/HamburgerBtn";
import {NavBar} from "../NavBar/NavBar";

export const SideBar = props => {

  const [open, setOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(true);
  const [width, setWidth] = React.useState(window.innerWidth);

  const openMobileMenu = () => {
    setOpen(prev => !prev);
  };

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  useEffect(() => {
    width > 920
      ? setIsMobile(false)
      : setIsMobile(true);
  }, [width]);

  return (
    isMobile ? <div>
      <HamburgerBtn
        onHandleClick={openMobileMenu}
        open={open}
      />
      {<ul
        className="SideBar__nav"
        style={open ? {top: "-100%", opacity: "0", transition: '.6s'} : {top: "0", opacity: "1", transition: '.6s'}}
      >{
        NavBarItems.map(item => (
          <li className={item.itemClass} key={item.title}>
            <a className={item.linkClass} href={item.url}>{item.title}
            </a>
          </li>
        ))
      }
      </ul>}
    </div>
      : <NavBar/>
  );
};