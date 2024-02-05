import React, { useEffect } from "react";
import "./Contact.css";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
   const [state, handleSubmit] = useForm("xzbnevgj");

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccessMessage(true);

      // Set timeout to hide success message and redirect after 2 seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
        window.location.href = "/";
      }, 2000);
    }
  }, [state.succeeded]);

  const date = new Date().getFullYear();

  return (
    <div id="contact">
      <h1>Contact</h1>
      <div className="contact-form">
        <form onSubmit={handleSubmit} >
          <input
            type="text"
            placeholder="Username"
            name="Name"
            autoComplete="off"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="Email"
            autoComplete="off"
            required
          />
          <textarea
            name="Message"
            id=""
            cols="30"
            rows="10"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      {showSuccessMessage && (
        <div className="success-overlay">
          <div className="success-message">
            <h2
              style={{
                color: "#BD35FD",
                fontFamily: "Playfair Display",
                paddingBottom: "20px",
              }}
            >
              Thank You!
            </h2>
            <p style={{ fontFamily: "Nunito", color: "#828282" }}>
              I will get back to you soon.
            </p>
          </div>
        </div>
      )}
      <div className="contact-logo">
        <a href="https://github.com/MAMAIDIVENKATESH" target="blank">
          <img src="/assets/github-port.png" alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/venkatesh-mamidi-0692b2258/"
          target="blank"
        >
          <img src="/assets/linkedin-port.png" alt="" />
        </a>
        <a href="mailto:mamidi096@gmail.com" target="blank">
          <img src="/assets/mail-port.png" alt="" />
        </a>
      </div>
      <div className="contact-footer">
        <p>mamidi096@gmail.com |</p>
        <p className="resume-link">
          Download Resume{" "}
          <a href="/assets/Venkatesh.pdf" download="Venkatesh-resume">
            click here
          </a>
        </p>
      </div>
      <p
        style={{
          marginTop: "20px",
          fontFamily: "Nunito",
          color: "#828282",
          backgroundColor: "transparent",
        }}
      >
        Venkatesh@{date}
      </p>
    </div>
  );
};

export default Contact;
