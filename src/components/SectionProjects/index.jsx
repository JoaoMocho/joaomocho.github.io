import React from "react";
import "./style.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="fs-850 fw-bold text-dark">Projects</h2>
      <div className="projects__grid">
        <img />
        <div className="projects__description">
          <h3 className="fs-800 fw-semi-bold text-dark">
            Image Moderation Service
          </h3>
          <p className="projects__text fs-700">
            A web service to moderate images.
          </p>
        </div>
      </div>
      <div className="projects__background" />
    </section>
  );
};

export default Projects;
