import React, { FC, Fragment, useState } from "react";
import "./App.css";
import Contact from "./Components/Contact";
import Main from "./Components/Main";
import Menu from "./Components/Menu";
import MobileMenu from "./Components/MobileMenu";
import Projects from "./Components/Projects";

const App: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="App">
      <div className="bg"></div>

      {open && <MobileMenu setOpen={setOpen} />}
      {open === false && (
        <Fragment>
          <Menu setOpen={setOpen} />
          <Main />

          <Projects />
          <Contact />
        </Fragment>
      )}
    </div>
  );
};

export default App;
