import React from "react";
import { FaCertificate, FaCalendarAlt } from "react-icons/fa";
import "./Certifications.css";

// Import certification images
import sqlCertification from "./images/sql-certification.png";
import webDevCertification from "./images/web-dev-certification.jpeg";
import bootstrapCertification from "./images/bootstrap-certification.jpeg";
import springbootCertification from "./images/springboot-certification.jpeg";

const Certifications = () => {
  const certifications = [
    {
      title: "Spring Boot 3, Spring 6 & Hibernate for Beginners",
      issuer: "Udemy",
      year: "2025",
      image: springbootCertification,
    },
    {
      title: "Advanced SQL for Data Engineering",
      issuer: "Udemy",
      year: "2024",
      image: sqlCertification,
    },
    {
      title: "The Complete 2024 Web Development Bootcamp",
      issuer: "Udemy",
      year: "2024",
      image: webDevCertification,
    },
    {
      title: "Developing Websites with Bootstrap",
      issuer: "Coursera",
      year: "2023",
      image: bootstrapCertification,
    },
  ];

  return (
    <div className="certifications-container">
      <div className="section-header">
        <div className="header-content">
          <FaCertificate className="header-icon" />
          <h2 className="animated-title">
            Certifications
            <span className="title-underline"></span>
          </h2>
        </div>
      </div>

      <div className="certifications-grid">
        {certifications.map((certification, index) => (
          <div className="certification-card" key={index}>
            <div className="certification-image">
              <img src={certification.image} alt={certification.title} />
            </div>
            <div className="certification-content">
              <h3>{certification.title}</h3>
              <div className="certification-details">
                <p className="issuer">{certification.issuer}</p>
                <div className="duration">
                  <FaCalendarAlt className="icon" />
                  <span>{certification.year}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
