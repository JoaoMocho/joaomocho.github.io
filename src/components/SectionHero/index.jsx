import React from "react";
import profile from "../../assets/profile.png";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import "./style.css";

const Hero = () => {
  return (
    <section className="hero">
      <img alt="João Mocho Ferreira" src={profile} />

      <div className="hero__content">
        <h3 className="fs-800 fw-regular text-light">João Mocho Ferreira</h3>
        <h1 className="fs-900 fw-bold text-dark">Fullstack Developer</h1>
        <h2 className="fs-700 fw-bold text-dark">MSc Biomedical Engineering</h2>
        <div className="hero__social">
          <a href="https://www.linkedin.com/in/jo%C3%A3omochoferreira/">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://github.com/JoaoMocho">
            <img src={github} alt="GitHub" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
