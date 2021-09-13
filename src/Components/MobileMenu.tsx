import React, { FC } from "react";
import image from "../media/images/rosa-fardas.png";

interface Animations {
    setOpen: (isOpen: boolean) => void;
}

const MobileMenu: FC<Animations> = ({setOpen}) => {
  return (
    <div className='mobileMenu'>
      
      <button onClick={() =>setOpen(false)}>Close</button>
    </div>
  );
};

export default MobileMenu;
