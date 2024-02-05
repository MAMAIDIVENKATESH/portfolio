// components/Skills.js

import React from "react";
import SkillItem from "./SkillItem"; // Assuming you'll create a separate component for each skill
import "./Skills.css";
const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React Js",
    "Node Js",
    "Express Js",
    "Python",
    "SQL",
    "SDLC",
  ];
  return (
    <div id="skills">
      <h1>Skills</h1>
      <div className="map-skills">
        {skills.map((skill, index) => {
          return <SkillItem key={index} data={skill} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
