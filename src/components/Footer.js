import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Aymen Lamkhanet</h3>
          <p>Software Engineer</p>
        </div>

        <div className="footer-links">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("home")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("skills")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </a>
        </div>

        <div className="footer-social">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a href="mailto:your.email@example.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Aymen Lamkhanet. All Rights Reserved.</p>
        <button className="scroll-to-top" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
