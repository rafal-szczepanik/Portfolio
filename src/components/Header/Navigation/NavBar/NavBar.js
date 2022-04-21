import React, {useEffect, useState} from 'react';
import {BsGithub} from 'react-icons/bs';
import {Link} from 'react-scroll';
import {Link as RouterLink} from 'react-router-dom';
import {NavBarItems} from "../../NavBarItems/NavBarItems";
import {RedirectLink} from "../../../common/RedirectLink/RedirectLink";

import './NavBar.css';


export const NavBar = props => {
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY < 20) {
        setNavColour(false);
      } else {
        setNavColour(true);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      setNavColour(null);
    };
  }, []);
  return (
    <nav className="NavBar__nav-container">
      <ul className="NavBar__nav" style={navColour ? {
        boxShadow: "0 10px 10px 0 rgba(9, 5, 29, 0.571)",
        backgroundColor: "rgba(2,8,52,0.7)",
        backdropFilter: "blur(15px)"
      } : {backdropFilter: "none"}}>
        {
          NavBarItems.map(item => (
            <li className={item.navLinkClasses.listItem} key={item.title}>
              <Link activeClass="NavBar__link-active" to={item.url} isDynamic={true}
                    spy={true} smooth={true} offset={-80}
              >{item.title}
              </Link>
            </li>
          ))
        }
        <li className="NavBar__nav-item">
          <RouterLink to={"/resume"} className="NavBar__nav-link">Moje CV</RouterLink>
        </li>
        <li className="NavBar__nav-item-github">
          <RedirectLink
            url={"https://github.com/rafal-szczepanik/"}
            text={"Github"}
            otpionalGrafic={<BsGithub style={{fontSize: "22px", margin: "0 10px"}}/>}
          />
        </li>
      </ul>
    </nav>
  );
};