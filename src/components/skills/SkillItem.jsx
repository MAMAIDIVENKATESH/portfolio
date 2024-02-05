import React from "react";
import "./Skills.css";

const SkillItem = ({ data }) => {
  return (
    <div className="skill-container">
      <p>{data}</p>
    </div>
  );
};

export default SkillItem;
