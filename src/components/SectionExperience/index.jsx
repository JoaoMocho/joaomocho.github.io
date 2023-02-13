import React from "react";
import "./style.css";
import kinetikosLogo from "../../assets/kinetikos-health.svg";
import witLogo from "../../assets/wit.svg";
import mKinetikosImg from "../../assets/mkinetikos.png";
import kinetikosPlatformImg from "../../assets/kinetikos-platform.png";
import procare4lifeImg from "../../assets/procare4life.svg";
import appletvImg from "../../assets/apple-tv.png";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2 className="fs-850 fw-bold text-dark">Experience</h2>
      <a href="https://www.kinetikoshealth.com">
        <h3 className="experience__subtitle fs-800 fw-bold text-light">
          Kinetikos Health <br />
          <span className="experience__years fs-700 fw-semi-bold">
            nov 2019 - may 2022
          </span>
        </h3>
      </a>
      <div className="experience__grid experience__grid--image-left">
        <figure>
          <img alt="Kinetikos Health logo" src={kinetikosLogo} />
        </figure>
        <div className="experience__description">
          <p className="fs-700 text-light">
            Kinetikos Health is a digital health company revolutionising the
            standard of care for people with Movement Disorders.
          </p>
        </div>
      </div>
      <p className="experience__projects fs-600 text-light">
        At Kinetikos Health, I contributed mainly to three projects:
      </p>
      <div className="experience__grid experience__grid--image-left">
        <div className="experience__description">
          <a href="https://www.kinetikoshealth.com/mkinetikos/">
            <h3 className="fs-800 fw-semi-bold text-dark">mKinetikos</h3>
          </a>
          <span className="fs-600 fw-bold text-dark">
            (Medical Device certified)
          </span>
          <p className="experience__text fs-600 text-dark">
            Mobile app for monitoring Parkinson's Disease patients. <br />
            - Implemented new features and design (Sensor data accquisition,
            Prescription, Events, Chat, Friends, and more). <br />
            - Managed the app's deploy. <br />- Implemented the API for the new
            features.
          </p>
          <p className="experience__text fs-600 text-dark">
            <span className="fs-700 fw-semi-bold text-dark">
              Technologies:{" "}
            </span>
            React-Native (Javascript), Android (Java), iOS (Swift), Django
            (Python), PostgreSQL, Google Play, App Store, Figma, Git, GitHub,
            Asana
          </p>
        </div>
        <figure>
          <img alt="mKinetikos" src={mKinetikosImg} />
          <figcaption>mKinetikos' image by Kinetikos Health</figcaption>
        </figure>
      </div>
      <div className="experience__grid">
        <div className="experience__description">
          <a href="https://www.kinetikoshealth.com/kinetikos/">
            <h3 className="fs-800 fw-semi-bold text-dark">Kinetikos</h3>
          </a>
          <span className="fs-600 fw-bold text-dark">
            (Medical Device certified)
          </span>
          <p className="experience__text fs-600 text-dark">
            Web platform that allow clinicians to monitor their patients PD
            condition. <br />
            - Refactored the platform front-end, implementing new design.
            <br />
            - Refactored the platform back-end, create an API to serve the new
            front-end.
            <br />- Implemented Unit testing for the API.
          </p>
          <p className="experience__text fs-600 text-dark">
            <span className="fs-700 fw-semi-bold text-dark">
              Technologies:{" "}
            </span>
            ReactJs (Javascript), HTML, CSS/SCSS, Django (Python), PostgreSQL,
            Figma, Git, GitHub, Asana
          </p>
        </div>
        <figure>
          <img alt="Kinetikos Platform" src={kinetikosPlatformImg} />
          <figcaption>Kinetikos' image by Kinetikos Health</figcaption>
        </figure>
      </div>
      <div className="experience__grid experience__grid--image-left">
        <div className="experience__description">
          <a href="https://procare4life.eu/">
            <h3 className="fs-800 fw-semi-bold text-dark">
              PROCare4Life - H2020
            </h3>
          </a>
          <p className="experience__text fs-600 text-dark">
            European project coordinated by Kinetikos Health. My task was to
            develop a mobile app for monitoring elderly people. <br />
            - Created the app from zero. <br />- Implemented all its features
            and design (Sensor data accquisition, Prescription, Surveys,
            Recommendations, Chat, Settings, and more). <br /> - Managed the
            app's deploy. <br />- Created a Fitbit app to acquire sensor data
            and interface with the mobile app. <br />- Developed a microservice
            to save app data in AWS
          </p>
          <p className="experience__text fs-600 text-dark">
            <span className="fs-700 fw-semi-bold text-dark">
              Technologies:{" "}
            </span>
            React-Native (Javascript), Android (Java), Django (Python), MongoDB,
            Fitbit, Google Play, AWS S3, AWS Lambdas, Figma, Git, GitHub, Asana
          </p>
        </div>
        <figure>
          <img
            alt="PROCare4Life"
            src={procare4lifeImg}
            style={{ maxWidth: "680px" }}
          />
          <figcaption>PROCare4Life's image by PROCare4Life</figcaption>
        </figure>
      </div>
      <a href="https://www.wit-software.com/">
        <h3 className="experience__subtitle fs-800 fw-bold text-light">
          WIT-Software <br />
          <span className="experience__years fs-700 fw-semi-bold">
            jun 2022 - current
          </span>
        </h3>
      </a>
      <div className="experience__grid">
        <figure>
          <img
            alt="WIT-Software logo"
            src={witLogo}
            style={{ maxWidth: "680px" }}
          />
        </figure>
        <div className="experience__description">
          <p className="experience__text fs-700 text-light">
            WIT is a software company that creates products and develops
            projects for the Telecom industry.
          </p>
        </div>
      </div>
      <p className="experience__projects fs-600 text-light">
        Currently working on:
      </p>
      <div className="experience__grid experience__grid--image-left">
        <div className="experience__description">
          <h3 className="fs-800 fw-semi-bold text-dark">App TV - tvOS</h3>
          <p className="experience__text fs-600 text-dark">
            Major Telecom TV app for Apple TV devices, made with React-Native.
            <br />- Implemented new features and design <br /> - Bugfixing.{" "}
            <br /> [This app is not yet in production]
          </p>
          <p className="experience__text fs-600 text-dark">
            <span className="fs-700 fw-semi-bold text-dark">
              Technologies:{" "}
            </span>
            React-Native (Typescript), iOS (Swift), Figma, Git, GitLab, Redmine,
            Confluence
          </p>
        </div>
        <figure>
          <img alt="Apple TV" src={appletvImg} styles="max-width:680px" />
          <figcaption>Apple TV's image by Apple</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Experience;
