import React from "react";
import { FC } from "react";

export interface Project {
  id: number;
  name: string;
  subName?: string;
  description1: string;
  description2?: string;
  link1: string;
  link2?: string;
  image?: string;
  option1: string;
  option2?: string;
}

export interface Data {
  data: Project;
}

const Projects: FC<Data> = ({ data }) => {
  return (
    <div className='project'>
      <div className='project-description'>
        <h2>
          {data.name} <br />
          {data.subName && <p>{data.subName}</p>}
        </h2>
        <div className='project-text'>
          <br />
          <p>{data.description1}</p>
          <br />
          <p>{data.description2}</p>
          <br />
        </div>
        <div className='project-tile contact'>
          {data.link1 && (
            <a
              className='underline'
              target='_blank noreferrer'
              href={data.link1}
            >
              {data.option1}
            </a>
          )}
          {data.link2 && (
            <a
              className='underline'
              target='_blank noreferrer'
              href={data.link2}
            >
              {data.option2}
            </a>
          )}
        </div>
      </div>
      {data.image && (
        <div className='image-container'>
          <img className='project-img' src={data.image} alt={data.name} />
        </div>
      )}
    </div>
  );
};

export default Projects;
