import React, { useState } from "react";
import "./style.css";
import cross from "../../assets/cross.svg";
import hamburger from "../../assets/hamburger.svg";
import logo from "../../assets/logo.svg";

const navBarSections = ["about", "experience", "education", "contacts"];

const Nav = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const toggleNavMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  return (
    <header>
      <nav className="nav">
        <img src={logo} alt="JMF" />
        <button className="nav__button" onClick={toggleNavMenu}>
          <img src={isNavMenuOpen ? cross : hamburger} alt="Hamburguer" />
        </button>
        <ul
          role="list"
          className={`${isNavMenuOpen ? "nav__list" : "nav__list closed"}`}
        >
          {navBarSections.map((section, index) => (
            <li key={`${section}-${index}`}>
              <a
                href={`#${section}`}
                className="fs-nav fw-semi-bold text-dark"
                onClick={toggleNavMenu}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
