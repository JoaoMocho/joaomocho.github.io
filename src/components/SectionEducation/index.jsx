import React from "react";
import "./style.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import istImg from "../../assets/ist.jpg";
import thesisImg from "../../assets/thesis_image.png";

const Education = () => {
  return (
    <section id="education" className="education">
      <h2 className="fs-850 fw-bold text-dark">Education</h2>
      <div className="education__grid">
        <div className="education__description">
          <h4 className="education_subtitle fs-800 fw-semi-bold text-light">
            MSc. Biomedical Engineering
          </h4>
          <a href="https://tecnico.ulisboa.pt/">
            <h3 className="fs-700 fw-semi-bold text-light">
              Instituto Superior Técnico - Universidade de Lisboa
            </h3>
          </a>
        </div>
        <figure>
          <img alt="Instituto Superior Técnico" src={istImg} />
          <figcaption>Image by Instituto Superior Técnico</figcaption>
        </figure>
      </div>
      <div className="experience__grid experience__grid--image-left">
        <div className="experience__description">
          <a href="https://web.ist.utl.pt/ist178750/master_thesis.html">
            <h3 className="fs-800 fw-semi-bold text-dark">Master Thesis</h3>
          </a>
          <p className="experience__text fs-600 text-dark">
            Ultrasound-CT Registration in Image-Guided Pedicle Screw Placement
          </p>
          <p className="experience__text fs-600 text-dark">
            <span className="fs-700 fw-semi-bold text-dark">
              Technologies:{" "}
            </span>
            MATLAB, Polaris Spectra, ProSound 2, Stradwin, DICOM
          </p>
        </div>
        <figure>
          <img alt="Master Thesis" src={thesisImg} styles="max-width:680px" />
          <figcaption>GUI developed during Master Thesis</figcaption>
        </figure>
      </div>
      <div className="education__background" />
    </section>
  );
};

export default Education;
