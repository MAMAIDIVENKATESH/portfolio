// src/App.jsx

import React from "react";
import Navbar from "./components/common/Navbar";
import Bio from "./components/bio/Bio";
import Projects from "./components/projects/Projects";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Bio />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
