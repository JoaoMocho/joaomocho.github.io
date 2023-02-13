import React from "react";
import "./style.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Interests = () => {
  return (
    <section id="interests" className="interests">
      <h2 className="fs-800 fw-bold text-dark">interests</h2>
      <p className="interests__text fs-700">
        Hello!
        <br />
        My name is João Mocho Ferreira. I am a Portuguese{" "}
        <span className="fi fi-pt" /> Biomedical Engineer with 3+ years of
        experience in mobile and web development.
      </p>
      <div className="interests__background" />
    </section>
  );
};

export default Interests;
