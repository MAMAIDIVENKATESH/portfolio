import React from "react";
import "./Education.css";
import EducationItem from "./EducationItem";

const Education = () => {
  const eduData = [
    {
      year: "2021-2023",
      degree: "M. Sc Computer Science",
      college: "BBCIT",
      cgpa: "7.3",
    },
    {
      year: "2018-2021",
      degree: "B. Sc Computer Science",
      college: "Prathibha Degree College",
      cgpa: "8.8",
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
