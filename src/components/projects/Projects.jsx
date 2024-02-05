import React from "react";
import "./Projects.css";
import ProjectItem from "./ProjectItem.jsx";
import { useState } from "react";

const Projects = () => {
  const projectData = [
    {
      category: "web-apps",
      title: "Linkedin Mini",
      description:
        "React.js & Firebase power a social platform with Google auth, dynamic posts, & innovative content filtering.",
      projectLink: "https://linkedin-clone-7296d.web.app/",
      codeLink: "https://github.com/BhanuVamshi02/linkedin-clone",
      img: "/assets/linkedin-pic.png",
    },
    {
      category: "web-apps",

      title: "Shop Now",
      description:
        "A seamless React.js shopping experience.  Intuitive UI, responsive design, Context API's efficient state management & dynamic data powered by RESTful APIs",
      projectLink: "https://shopnow-new.vercel.app/",
      codeLink: "https://github.com/BhanuVamshi02/Shopnow-new",
      img: "/assets/shopnow-pic.png",
    },
    {
      category: "web-apps",

      title: "ManageNow",
      description:
        "Dynamic Data Hub: React.js & Context API power personalized access, efficient retrieval, and secure auth with Firebase.",
      projectLink: "https://manage-now.vercel.app/",
      codeLink: "https://github.com/BhanuVamshi02/manage-now",
      img: "/assets/managenow-pic.png",
    },
    {
      category: "web-designs",

      title: "Jujutsu Kaisen",
      description:
        "Crafted an immersive IMDb home page concept for Jujutsu Kaisen anime using Figma, featuring striking visuals",
      projectLink:
        "https://www.figma.com/file/4XYEbjwHFm8NLTgeY6gzhf/imdb-page?type=design&node-id=4%3A5&mode=design&t=RMX6Uc62GNfQ0X8c-1",
      img: "/assets/jujutsu-pic.png",
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
            backgroundColor: selectedCategory === "All" ? "#FDC435" : "",
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
        <button
          onClick={() => handleCategoryClick("web-designs")}
          style={{
            backgroundColor:
              selectedCategory === "web-designs" ? "#FDC435" : "",
            border: selectedCategory === "web-designs" ? "none" : "",
          }}
        >
          Web Designs
        </button>
      </div>
      {getFilteredProjects().map((project, index) => (
        <ProjectItem key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
