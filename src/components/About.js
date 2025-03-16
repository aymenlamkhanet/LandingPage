// components/About.js
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="section-header">
        <h2>About Me</h2>
        <div className="section-divider"></div>
      </div>

      <div className="about-content">
        <div className="about-image">
          <div className="about-image-container">
            {/* Replace with your actual image */}
            <div className="about-img-placeholder"></div>
          </div>
        </div>

        <div className="about-text">
          <p className="about-intro">
            Hello! I'm a passionate web developer with a focus on creating
            intuitive and dynamic user experiences. With a background in
            computer science and years of industry experience, I bring a unique
            perspective to every project.
          </p>

          <div className="about-details">
            <div className="about-detail-item">
              <h3>My Journey</h3>
              <p>
                My journey into web development began during my university years
                when I built my first website. Since then, I've worked with
                various technologies and frameworks, constantly learning and
                evolving my skills to stay current with industry trends.
              </p>
            </div>

            <div className="about-detail-item">
              <h3>My Philosophy</h3>
              <p>
                I believe that great design is both functional and beautiful. My
                approach combines technical expertise with creativity to build
                solutions that not only work flawlessly but also engage users on
                a deeper level.
              </p>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">30+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
        </div>
      </div>

      <div className="experience-timeline">
        <h3>Experience Timeline</h3>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Senior Frontend Developer</h4>
              <h5>Company Name (2022 - Present)</h5>
              <p>
                Leading the development of responsive web applications using
                React.js
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Web Developer</h4>
              <h5>Previous Company (2020 - 2022)</h5>
              <p>Developed and maintained client websites and applications</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Freelance Developer</h4>
              <h5>(2018 - 2020)</h5>
              <p>
                Worked with clients across various industries to build custom
                web solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
