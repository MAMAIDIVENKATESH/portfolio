import React from "react";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav>
      <a href="">Bhanu Vamshi</a>
      <ul>
        <li>
          <a
            href="#projects"
            onClick={() => handleLinkClick("projects")}
            className={activeLink === "projects" ? "active-link" : ""}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#education"
            onClick={() => handleLinkClick("education")}
            className={activeLink === "education" ? "active-link" : ""}
          >
            Education
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={() => handleLinkClick("skills")}
            className={activeLink === "skills" ? "active-link" : ""}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => handleLinkClick("contact")}
            className={activeLink === "contact" ? "active-link" : ""}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
