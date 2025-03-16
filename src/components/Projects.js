"use client";

import "./Projects.css";
import project2 from "./images/project2.jpg";
import project5 from "./images/project5.png";
import project3 from "./images/project3.jpg";
import project1 from "./images/project1.png";
import project4 from "./images/project4.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useState } from "react";

const Projects = () => {
  const [active, setActive] = useState(0);

  const projects = [
    {
      title: "Système de Réservation OCP",
      tech: ["Node.js", "Express", "PostgreSQL", "EJS", "Tailwind"],
      description:
        "Application web complète de gestion de réservations avec tableau de bord administrateur",
      image: project1,
    },
    {
      title: "Potfolio",
      tech: ["ReactJs", "Css"],
      description:
        "Portfolio",
      image: project5,
    },
    {
      title: "Système de Location des Voitures",
      tech: ["SpringBoot", "ReactJs", "PostgreSQL", "Tailwind"],
      description:
        "Application web complète de gestion de réservations avec tableau de bord administrateur",
      image: project4,
    },
    {
      title: "Plateforme E-Commerce",
      tech: ["PHP", "JavaScript", "Bootstrap", "MySQL"],
      description:
        "Site de commerce électronique avec système de paiement intégré",
      image: project2,
    },
    {
      title: "Gestion de Bibliothèque",
      tech: ["Python", "Merise", "SQL"],
      description:
        "Système de gestion de bibliothèque avec modélisation de base de données",
      image: project3,
    },
  ];

  const handleNext = () => {
    setActive((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="projects-container">
      <div className="section-header">
        <h2>Projets Réalisés</h2>
        <div className="section-divider"></div>
      </div>

      <div className="projects-carousel">
        <div className="carousel-inner">
          <AnimatePresence mode="wait">
            {projects.map(
              (project, index) =>
                active === index && (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.3 }}
                    className="project-card"
                  >
                    <div className="image-container">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                      />
                      <div className="project-overlay">
                        <div className="project-overlay-content">
                          <div className="tech-stack">
                            {project.tech.map((tech, i) => (
                              <span key={i} className="tech-tag">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="project-info">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>

        <div className="navigation-arrows">
          <button
            className="arrow-button"
            onClick={handlePrev}
            aria-label="Projet précédent"
          >
            <IconArrowLeft className="arrow-icon" />
          </button>
          <button
            className="arrow-button"
            onClick={handleNext}
            aria-label="Projet suivant"
          >
            <IconArrowRight className="arrow-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
