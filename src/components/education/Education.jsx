import React from "react";
import "./Education.css";
import EducationItem from "./EducationItem";

const Education = () => {
  const eduData = [
 
    {
      year: "2018-2022",
      degree: "B. Sc Computer Science",
      college: "Prathibha Degree College",
      cgpa: "8.3",
    },
  ];
  return (
    <div id="education">
      <h1>Education</h1>
      <div className="edu-map">
        {eduData.map((edu, index) => {
          return <EducationItem key={index} {...edu} />;
        })}
      </div>
    </div>
  );
};

export default Education;
