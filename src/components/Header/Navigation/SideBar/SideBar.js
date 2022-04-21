import React from 'react';
import {Link} from 'react-scroll';
import {Link as RouterLink} from "react-router-dom";
import {BsGithub} from "react-icons/bs";
import {RedirectLink} from "../../../common/RedirectLink/RedirectLink";
import {NavBarItems} from '../../NavBarItems/NavBarItems';

import './SideBar.css';

export const SideBar = props => {
  const {isOpen, handleCloseMenu} = props;

  return (
    <nav className="SideBar">
      {props.children}
      <ul
        className={
          isOpen ? "SideBar__nav active" : "SideBar__nav"
        }
      >{
        NavBarItems.map(item => (
          <li className={item.sideLinkClasses.listItem} key={item.title}>
            <Link
              to={item.url} isDynamic={true}
              spy={true} smooth={true} offset={-80}
              className={item.sideLinkClasses.listLink}
              onClick={handleCloseMenu}
            >
              {item.title}
            </Link>
          </li>
        ))
      }
        <li className="SideBar__nav-item">
          <RouterLink to={"/resume"} className="SideBar__link">Moje CV</RouterLink>
        </li>
        <li className="SideBar__link-container">
          <RedirectLink
            url={"https://github.com/rafal-szczepanik/"}
            text={"Find me on"}
            otpionalGrafic={<BsGithub style={{fontSize: "22px", margin: "0 10px"}}/>}
          />
        </li>
      </ul>
    </nav>
  );
};