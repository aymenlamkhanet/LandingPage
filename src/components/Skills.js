import React from "react";
import "./Skills.css";

// Import logos for each technology
import htmlLogo from "./logos/html5.svg";
import cssLogo from "./logos/css3.svg";
import jsLogo from "./logos/javascript.svg";
import reactLogo from "./logos/react.svg";
import ejsLogo from "./logos/ejs.svg";
import nodeLogo from "./logos/nodejs.svg";
import expressLogo from "./logos/express.svg";
import pythonLogo from "./logos/python.svg";
import phpLogo from "./logos/php.svg";
import postgresLogo from "./logos/postgresql.svg";
import mysqlLogo from "./logos/mysql.svg";
import dockerLogo from "./logos/docker.svg";
import linuxLogo from "./logos/linux.svg";
import gitLogo from "./logos/git.svg";
import bootstrapLogo from "./logos/bootstrap.svg";
import tailwindLogo from "./logos/tailwind.svg";
import figmaLogo from "./logos/figma.svg";
import jenkinsLogo from "./logos/jenkins.svg";
import gitlabLogo from "./logos/gitlab.svg";
import jestLogo from "./logos/jest.svg";
import mongoLogo from "./logos/mongo.svg";
import springLogo from "./logos/spring.svg";

const Skills = () => {
  const skills = {
    "Développement Web": [
      { name: "HTML5", logo: htmlLogo },
      { name: "CSS3", logo: cssLogo },
      { name: "JavaScript", logo: jsLogo },
      { name: "React", logo: reactLogo },
      { name: "EJS", logo: ejsLogo },
    ],
    Backend: [
      { name: "Node.js", logo: nodeLogo },
      { name: "Express.js", logo: expressLogo },
      { name: "Python", logo: pythonLogo },
      { name: "PHP", logo: phpLogo },
      { name: "SpringBoot", logo: springLogo },
    ],
    "Bases de Données": [
      { name: "PostgreSQL", logo: postgresLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongoLogo },
    ],
    DevOps: [
      { name: "Docker", logo: dockerLogo },
      { name: "Linux", logo: linuxLogo },
      { name: "Git", logo: gitLogo },
      { name: "Jenkins", logo: jenkinsLogo },
      { name: "GitlabCI/CD", logo: gitlabLogo },
      { name: "Jest", logo: jestLogo },
    ],
    "UI/UX": [
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "Tailwind", logo: tailwindLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  };

  return (
    <div className="skills-container">
      <div className="section-header">
        <h2>Compétences Techniques</h2>
        <div className="section-divider"></div>
      </div>

      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div className="skill-category" key={category}>
            <h3>{category}</h3>
            <div className="skill-items">
              {items.map((item, index) => (
                <div className="skill-item" key={index}>
                  {item.logo && (
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="skill-logo"
                    />
                  )}
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
