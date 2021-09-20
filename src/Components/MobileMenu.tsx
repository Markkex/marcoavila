import React, { FC } from "react";
import logo from "../media/images/logo.svg";
import CloseIcon from "@material-ui/icons/Close";

interface Animations {
  setOpen: (isOpen: boolean) => void;
}

const MobileMenu: FC<Animations> = ({ setOpen }) => {
  const options = [
    {
      optionName: "About Me",
      ref: "#hero-section",
    },
    {
      optionName: "Work",
      ref: "#projects",
    },
    {
      optionName: "Contact Me",
      ref: "#contact-me",
    },
  ];
  return (
    <div className="mobile-menu">
      <div className="mobile-headbar">
        <div className="logo-image">
          <a href="#menu">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="menu-icon">
          <CloseIcon fontSize="large" onClick={() => setOpen(false)} />
        </div>
      </div>
      <div className="menu-options">
        {options.map((option) => (
          <div className="menu-effect">
            <a href={option.ref} onClick={() => setOpen(false)}>
              {option.optionName}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
