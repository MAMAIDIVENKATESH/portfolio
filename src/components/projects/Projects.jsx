import React from "react";
import "./Projects.css";
import ProjectItem from "./ProjectItem.jsx";
import { useState } from "react";

const Projects = () => {
  const projectData = [
    {
      category: "web-apps",
      title: "TeeRex",
      description:
        "Developed a dynamic React.js E-commerce Platform with efficient state management using React Context API. Implemented React Router for seamless navigation and streamlined 'Add to Cart' interaction for a smooth pre-checkout experience.",
      projectLink: "https://tee-rex-store-eight.vercel.app/",
      codeLink: "",
      img: "/assets/teeRex home.png",
    },
    {
      category: "web-apps",

      title: "Tasty kitchen",
      description: "Developed a Swiggy/Zomato-like Food Ordering System with React Router for diverse routing and React Slick for horizontal image scrolling. Ensured secure user authentication, persistent login state, and RestAPI integration for restaurant details and sorting.",
      projectLink: "https://venkytastyfood.ccbp.tech/",
      codeLink: "",
      img: "/assets/tasty-kitchen home.png",
    },

    
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const getFilteredProjects = () => {
    return selectedCategory === "All"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className="category-buttons">
        <button
          onClick={() => handleCategoryClick("All")}
          style={{
            backgroundColor: selectedCategory === "All" ? "#BD35FD" : "",
            border: selectedCategory === "All" ? "none" : "",
          }}
        >
          All
        </button>
        <button
          onClick={() => handleCategoryClick("web-apps")}
          style={{
            backgroundColor: selectedCategory === "web-apps" ? "#FDC435" : "",
            border: selectedCategory === "web-apps" ? "none" : "",
          }}
        >
          Web Apps
        </button>
        
      </div>
      {getFilteredProjects().map((project, index) => (
        <ProjectItem key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
