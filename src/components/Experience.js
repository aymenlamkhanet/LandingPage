import React from "react";
import { FiBriefcase, FiCalendar } from "react-icons/fi";
import "./Experience.css";

// Import des logos
import nodejsLogo from "./logos/nodejs.svg";
import expressjsLogo from "./logos/express.svg";
import ejsLogo from "./logos/ejs.svg";
import postgresqlLogo from "./logos/postgresql.svg";
import bootstrapLogo from "./logos/bootstrap.svg";
import tailwindLogo from "./logos/tailwind.svg";
import javascriptlogo from "./logos/javascript.svg";
import ocplogo from "./logos/ocp.png"

const Experience = () => (
  <div className="experience-container" id="experience">
    <div className="section-header">
      <div className="header-content">
        <FiBriefcase className="header-icon" />
        <h2 className="animated-title">
          Expérience Professionnelle
          <span className="title-underline"></span>
        </h2>
      </div>
    </div>

    <div className="experience-grid">
      <div className="experience-card">
        <div className="experience-header">
          <div className="company-meta">
            <div className="company-icon">
              <img
                src={ocplogo}
                alt="Node.js logo"
                className="company-tech-logo"
              />
            </div>
            <div className="company-info">
              <h3>OCP</h3>
              <p className="position">Développeur Full-Stack</p>
              <div className="duration">
                <FiCalendar className="icon" />
                <span>2024</span>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-content">
          <div className="achievements">
            <h4>Principales Réalisations</h4>
            <div className="achievement-item">
              <img
                src={javascriptlogo}
                alt="EJS logo"
                className="achievement-icon"
              />
              <p>
                Application web de réservation de terrains avec tableau de bord
                temps réel
              </p>
            </div>
            <div className="achievement-item">
              <img
                src={postgresqlLogo}
                alt="PostgreSQL logo"
                className="achievement-icon"
              />
              <p>Système de gestion centralisé avec modélisation UML</p>
            </div>
            <div className="achievement-item">
              <img
                src={bootstrapLogo}
                alt="Bootstrap logo"
                className="achievement-icon"
              />
              <p>Interfaces responsive utilisant Bootstrap/Tailwind</p>
            </div>
          </div>

          <div className="tech-stack">
            <h4>Technologies Utilisées</h4>
            <div className="tech-grid">
              <a
                href="https://nodejs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-item"
              >
                <img src={nodejsLogo} alt="Node.js" className="tech-logo" />
                <span>Node.js</span>
              </a>
              <a
                href="https://expressjs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-item"
              >
                <img
                  src={expressjsLogo}
                  alt="Express.js"
                  className="tech-logo"
                />
                <span>Express.js</span>
              </a>
              <a
                href="https://ejs.co"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-item"
              >
                <img src={ejsLogo} alt="EJS" className="tech-logo" />
                <span>EJS</span>
              </a>
              <a
                href="https://www.postgresql.org"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-item"
              >
                <img
                  src={postgresqlLogo}
                  alt="PostgreSQL"
                  className="tech-logo"
                />
                <span>PostgreSQL</span>
              </a>
              <a
                href="https://getbootstrap.com"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-item"
              >
                <img
                  src={bootstrapLogo}
                  alt="Bootstrap"
                  className="tech-logo"
                />
                <span>Bootstrap</span>
              </a>
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-item"
              >
                <img
                  src={tailwindLogo}
                  alt="Tailwind CSS"
                  className="tech-logo"
                />
                <span>Tailwind</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Experience;
