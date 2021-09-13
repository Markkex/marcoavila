import React, { FC, Fragment, useState } from "react";
import "./App.css";
import Contact from "./Components/Contact";
import Main from "./Components/Main";
import Menu from "./Components/Menu";
import MobileMenu from "./Components/MobileMenu";
import Work from "./Components/Work";

const App: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className='App'>
      <div className='bg'></div>

      {open && <MobileMenu setOpen={setOpen}/>}
      {open === false && (
        <Fragment>
          <Menu setOpen={setOpen} />
          <Main />
          <Work />
          <Contact />
        </Fragment>
      )}
    </div>
  );
};

export default App;
