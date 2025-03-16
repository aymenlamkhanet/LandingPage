import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70, // Adjust for navbar height
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={() => scrollToSection("home")}
          >
            Home
          </a>
          <a
            href="#education"
            className={activeSection === "education" ? "active" : ""}
            onClick={() => scrollToSection("education")}
          >
            Education
          </a>
          <a
            href="#experience"
            className={activeSection === "experience" ? "active" : ""}
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </a>
          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </a>
          <a
            href="#skills"
            className={activeSection === "skills" ? "active" : ""}
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </a>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </a>
        </div>

        <div
          className={`navbar-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
