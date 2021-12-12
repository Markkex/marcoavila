import React, { FC, Fragment, useState } from "react";
import "./App.css";
import Contact from "./Components/Contact";
import Main from "./Components/Main";
import Menu from "./Components/Menu";
import MobileMenu from "./Components/MobileMenu";
import Projects from "./Components/Projects";
import image1 from "./media/images/rosa-fardas.png";
import image2 from "./media/images/rodolfo-costa-website.png";
import image3 from "./media/images/firegram.png";
import image4 from "./media/images/housingprocess.png";
import image5 from "./media/images/iguarias.png";

const App: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const rosaFardas: string = image1;
  const rodolfoCosta: string = image2;
  const fireGram: string = image3;
  const bmf: string = image4;
  const iguarias: string = image5;
  const projects = [
    {
      id: 1,
      name: "Iguarias da Vila",
      subName: "Restaurant",
      description1:
        "Created a landing page for a local restaurant where i used React (Typescript), EmailJs and Material-Ui.",
      description2: "Created the design and implemented SEO.",
      link1: "https://iguarias-514d2.web.app/",
      link2: "https://github.com/Markkex/iguarias",
      image: iguarias,
      option1: "Landing Page",
      option2: "Check it on Github",
    },
    {
      id: 2,
      name: "BMF",
      subName: "Housing App",
      description1:
        "Application where allows the user to create a new process related to a house and permits counting the number of days the process is active. After the process is finished you can download a document with all the finished processes.",
      description2:
        "Used React Router, React (Typescript), Material-UI and xml library to create documents.",
      link1: "https://github.com/Markkex/BMF",
      option1: "Check it on Github",
      image: bmf,
    },
    {
      id: 3,
      name: "This website",
      subName: "",
      description1:
        "Created with Typescript, React and using E-MailJS for the contact form.",
      link1: "https://github.com/Markkex/marcoavila",
      option1: "Check it on Github",
    },
    {
      id: 4,
      name: "Firegram",
      subName: "Instagram like Social App",
      description1: "User can insert pictures and see the uploaded ones.",
      link1: "https://firegram-b985e.web.app/",
      link2: "https://github.com/Markkex/Firegram",
      image: fireGram,
      option1: "Check the page",
      option2: "Check it on Github",
    },
    {
      id: 5,
      name: "Rodolfo Costa",
      subName: "Tattoo and Sculpture",
      description1:
        "Created a landing page for an artist where he can show his work.",
      description2:
        "Used Firebase hosting, Firestore as database and the user can insert photos, titles and descriptions. Also implemented SEO.",
      link1: "https://www.rodolfomcosta.pt/",
      image: rodolfoCosta,
      option1: "Landing Page",
    },
    {
      id: 6,
      name: "Rosa Fardas",
      subName: "Comércio de Vestuário, Lda",
      description1:
        "Created Landing page and E-Commerce page in Wordpress for an embroidery company in Faro.",
      description2: "Created the design and implemented SEO.",
      link1: "https://www.rosafardas.pt/",
      link2: "https://www.rosafardas.pt/loja/",
      image: rosaFardas,
      option1: "Landing Page",
      option2: "E-Commerce",
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
