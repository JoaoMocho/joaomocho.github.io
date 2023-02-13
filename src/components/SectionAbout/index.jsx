import React from "react";
import "./style.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="fs-850 fw-bold text-dark">About</h2>
      <p className="about__text fs-700">
        Hello!
        <br />
        My name is João Mocho Ferreira, a Portuguese{" "}
        <span className="fi fi-pt" /> Biomedical Engineer with 3+ years of
        experience in mobile and web development, living in Paris, France{" "}
        <span className="fi fi-fr" />.
      </p>
      <p className="about__text fs-700">
        Using technology to improve life is what drives me! My personality is
        made of solidarity, problem solving and curiosity in equal measure.
      </p>
      <p className="about__text fs-700">
        As a Scout for more than 20 years, I trully believe that "the real way
        to gain happiness is to give it to others, try and leave this world a
        little better than I found it"... and I want to do it using Tech!
      </p>
      <div className="about__background" />
    </section>
  );
};

export default About;
