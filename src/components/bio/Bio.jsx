// src/components/bio/Bio.jsx

import React from "react";
import "./Bio.css";

const Bio = () => {
  return (
    <div id="bio">
      <div className="bio-content">
        <div className="bio-text">
          <h2 style={{ fontFamily: "Playfair Display" }}>
            Hello, I’m <br /> Venkatesh
          </h2>
          <p
            style={{
              fontFamily: "Nunito",
              textTransform: "uppercase",
              color: "#BD35FD",
              fontWeight: "bold",
              paddingBottom: "5px",
              backgroundColor: "transparent",
            }}
          >
            Ready to Build!
          </p>
          <p>
            Fresh out of B.Sc. land, diving into web dev! Passionate learner,
            building user-friendly interfaces. Let's code the future together!
          </p>
          <div className="bio-text-buttons">
            <a
              href="https://www.linkedin.com/in/venkatesh-mamidi-0692b2258/"
              target="blank"
            >
              Linkedin
            </a>
            <a
              href="https://drive.google.com/file/d/1rCoV6xi-Jaj-_8jczggfJhpYCakAKurS/view?usp=drive_link"
              target="blank"
            >
              Resume{" "}
            </a>
          </div>
        </div>
        <div className="bio-img">
          {/* Your profile picture goes here */}
          <img src="/assets/portfolio-bio.png" alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Bio;
