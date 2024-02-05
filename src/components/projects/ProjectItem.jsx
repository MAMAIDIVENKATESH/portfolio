// ProjectItem.jsx
import React from "react";
import "./Projects.css";

const ProjectItem = ({
  title,
  description,
  projectLink,
  codeLink,
  img,
  category,
}) => {
  return (
    <div className="item-container">
      <div className="project-details">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="project-buttons">
          <a href={projectLink} target="blank">
            View Project
          </a>
          
        </div>
      </div>
      <div className="project-image">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default ProjectItem;
