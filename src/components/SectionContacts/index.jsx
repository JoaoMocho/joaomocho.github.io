import React from "react";
import "./style.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";

const Contacts = () => {
  return (
    <section id="contacts" className="contacts">
      <div className="contacts__grid">
        <p className="contacts__text fs-700 text-light">j12mocho@gmail.com</p>
        <div className="contacts__social">
          <a href="https://www.linkedin.com/in/jo%C3%A3omochoferreira/">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://github.com/JoaoMocho">
            <img src={github} alt="GitHub" />
          </a>
        </div>
      </div>
      <div className="contacts__background" />
    </section>
  );
};

export default Contacts;
