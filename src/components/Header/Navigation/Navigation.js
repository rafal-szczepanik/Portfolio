import React, {useEffect, useState} from 'react';
import {HamburgerBtn} from "./HamburgerBtn/HamburgerBtn";
import {NavBar} from "./NavBar/NavBar";
import {SideBar} from "./SideBar/SideBar";

export const Navigation = props => {
  const [open, setOpen] = useState(false);
  const [isMobileVersion, setIsMobileVersion] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  const openMobileMenu = () => {
    setOpen(open => !open);
  };
  const closeMobileMenu = () => {
    setOpen(false);
  };

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  useEffect(() => {
    width > 920
      ? setIsMobileVersion(false)
      : setIsMobileVersion(true);
  }, [width]);

  return (
    <>
      {isMobileVersion
        ? <SideBar
          isOpen={open}
          handleCloseMenu={closeMobileMenu}
        >
          <HamburgerBtn
            onHandleClick={openMobileMenu}
            isOpen={open}
          />
        </SideBar>
        : <NavBar/>}
    </>
  );
};