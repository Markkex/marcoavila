import React from "react";
import { FC } from "react";

import rosafardasurl from "../media/images/rosa-fardas.png";

const Project: FC = () => {
  return (
    <div className="projects">
      <h1 className="header-font-style">Work</h1>

      <div className="project">
        <div className="project-description">
          <h2>
            Rosa Fardas <br />
            Comércio de Vestuário, Lda
          </h2>

          <div className="project-text">
            <br />
            <p>
              Created Landing page and E-Commerce page in Wordpress for an
              embroidery company in Faro.
            </p>
            <br />
            <p>Created the design and implemented SEO.</p>
            <br />
          </div>
          <div className="project-tile contact">
            <a
              className="underline"
              target="_blank noreferrer"
              href="https://www.rosafardas.pt/"
            >
              Landing Page
            </a>
            <a
              className="underline"
              target="_blank noreferrer"
              href="https://www.rosafardas.pt/loja/"
            >
              E-Commerce
            </a>
          </div>
        </div>
        <div className="image-container">
          <img
            className="project-img"
            src={rosafardasurl}
            alt="rosa-fardas-development"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
