import React, { FC } from "react";
import logo from "../media/images/logo.svg";
import MenuIcon from "@material-ui/icons/Menu";
interface Validation {
  setOpen: (isOpen: boolean) => void;
}

const Menu: FC<Validation> = ({ setOpen }) => {
  return (
    <div id="menu" className="menu sticky">
      <div className="logo-image">
        <a href="#hero-section">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="navbar">
        <a href="#hero-section">About Me</a>
        <a href="#projects">Work</a>
        <a href="#contact-me">Contact Me</a>
      </div>
      <div className="menu-icon">
        <MenuIcon fontSize="large" onClick={() => setOpen(true)} />
      </div>
    </div>
  );
};

export default Menu;
