import React from "react";
import "./Education.css";

const EducationItem = ({ year, degree, college, cgpa }) => {
  return (
    <div className="edu-container">
      <p className="year">{year}</p>
      <div className="college-container">
        <h2>{degree}</h2>
        <p className="clg">{college} | Osmania University</p>
        <p className="cgpa">CGPA - {cgpa}/10</p>
      </div>
    </div>
  );
};

export default EducationItem;
