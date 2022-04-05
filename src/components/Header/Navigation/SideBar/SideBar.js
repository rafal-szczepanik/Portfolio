import React from 'react';
import {NavBarItems} from '../../NavBarItems/NavBarItems';
import './SideBar.css';
import {Link} from 'react-scroll';

export const SideBar = props => {
  const {isOpen, handleCloseMenu} = props;

  return (
    <nav className="SideBar">
      <button>En</button>
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
      </ul>
    </nav>
  );
};