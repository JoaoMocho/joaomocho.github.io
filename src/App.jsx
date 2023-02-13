import React from "react";
import Nav from "./components/Nav";
import About from "./components/SectionAbout";
import Contacts from "./components/SectionContacts";
import Education from "./components/SectionEducation";
import Experience from "./components/SectionExperience";
import Hero from "./components/SectionHero";

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="main__container">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Contacts />
      </main>
    </div>
  );
}

export default App;
