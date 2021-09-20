import React, { FC, Fragment, useState } from "react";
import "./App.css";
import Contact from "./Components/Contact";
import Main from "./Components/Main";
import Menu from "./Components/Menu";
import MobileMenu from "./Components/MobileMenu";
import Projects from "./Components/Projects";
import image1 from "./media/images/rosa-fardas.png";

const App: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const rosaFardas: string = image1;
  const projects = [
    {
      id: 1,
      name: "Rosa Fardas",
      subName: "Comércio de Vestuário, Lda",
      description1:
        "Created Landing page and E-Commerce page in Wordpress for an embroidery company in Faro.",
      description2: "Created the design and implemented SEO.",
      link1: "https://www.rosafardas.pt/",
      link2: "https://www.rosafardas.pt/loja/",
      image: rosaFardas,
    },
    {
      id: 2,
      name: "Rosa Fardas",
      subName: "Comércio de Vestuário, Lda",
      description1:
        "Created Landing page and E-Commerce page in Wordpress for an embroidery company in Faro.",
      description2: "Created the design and implemented SEO.",
      link1: "https://www.rosafardas.pt/",
      link2: "https://www.rosafardas.pt/loja/",
      image: "require('../media/images/rosa-fardas.png')",
    },
  ];
  return (
    <div className="App">
      <div className="bg"></div>

      {open && <MobileMenu setOpen={setOpen} />}
      {open === false && (
        <Fragment>
          <Menu setOpen={setOpen} />
          <Main />
          <div id="projects" className="projects">
            <h1 className="header-font-style">Projects</h1>

            {projects.map((project) => (
              <Projects data={project} />
            ))}
          </div>
          <Contact />
        </Fragment>
      )}
    </div>
  );
};

export default App;
