import React from "react";
import { FC } from "react";

export interface Project {
  id: number;
  name: string;
  subName: string;
  description1: string;
  description2: string;
  link1: string;
  link2: string;
  image: string;
}

export interface Data {
  data: Project;
}

const Projects: FC<Data> = ({ data }) => {
  return (
    <div className="project">
      <div className="project-description">
        <h2>
          {data.name} <br />
          {data.subName}
        </h2>

        <div className="project-text">
          <br />
          <p>{data.description1}</p>
          <br />
          <p>{data.description2}</p>
          <br />
        </div>
        <div className="project-tile contact">
          <a className="underline" target="_blank noreferrer" href={data.link1}>
            Landing Page
          </a>
          <a className="underline" target="_blank noreferrer" href={data.link2}>
            E-Commerce
          </a>
        </div>
      </div>
      <div className="image-container">
        <img className="project-img" src={data.image} alt="rosa-fardas" />
      </div>
    </div>
  );
};

export default Projects;
