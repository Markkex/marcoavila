import React, { FC } from "react";
import logo from "../media/images/logo.svg"


const Menu: FC = () => {
  return (
    <div className='menu sticky'>
      <div className='logo-image'>
        <a href='#menu'>
          <img src={logo} alt='logo' />
        </a>
      </div>
      <div className='navbar'>
        <a href='#welcome-section'>About Me</a>
        <a href='#projects'>Work</a>
        <a href='#contact-me'>Contact Me</a>
      </div>
    </div>
  );
};

export default Menu;
