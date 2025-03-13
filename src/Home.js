import React from "react";
import imgpc from "./img/computer_science.jpeg"
import imgadmin from "./img/bussinessadministration.jpeg"
import imgdata from "./img/Data_Science.jpeg"
import logo from "./img/LOGO_IAE_BLEU&DORE1 (1).jpg"
import image4 from "./img/rdd_iae_2023-15 (1).jpg";
import image3 from "./img/rentrée_2023_carrousel (1).jpg";
import image2 from "./img/com_deg1.png"
import image from "./img/orleans-campus.jpg.jpg"
import "./styles.css"; // You would need to extract the CSS into a separate file

function Home() {
  return (
    <div className="app">
      <nav>
        <div className="logo">
          <img
            src={logo}
            width="200px"
            height="100px"
            alt=""
            className="main-image"
          />
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#programs">Programs</a>
          <a href="#faculty">Faculty</a>
          <a href="#resources">Resources</a>
          <a href="#campus-life">Campus Life</a>
        </div>
        <a href="#contact" className="contact-btn">
          Contact Us
        </a>
      </nav>

      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Modern learning platform for academic excellence</h1>
            <p className="hero-text">
              UniConnect brings together innovative teaching methods,
              personalized learning paths, and a supportive community to help
              you achieve your academic and career goals. Join thousands of
              students who've transformed their educational journey with us.
            </p>

            <div className="cta-buttons">
              <button className="primary-btn">Get Started</button>
              <button className="secondary-btn">
                <div className="play-icon">▶</div>
                Watch Demo
              </button>
            </div>

            <div className="stats">
              <div className="stat-box">
                <div className="stat-title">Programs</div>
                <div className="stat-number">+150</div>
                <a href="#programs" className="stat-btn">
                  Explore
                </a>
              </div>

              <div className="stat-box">
                <div className="stat-title">Professors</div>
                <div className="stat-number">+3k</div>
                <a href="#faculty" className="stat-btn">
                  Faculty
                </a>
              </div>

              <div className="stat-box">
                <div className="stat-title">Alumni</div>
                <div className="stat-number">+250k</div>
                <a href="#" className="stat-btn">
                  Success
                </a>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="shape-1"></div>
            <div className="shape-2"></div>
            <img src={image} alt="" className="main-image" />
            <div className="dots-pattern"></div>
            <div className="shape-3"></div>
          </div>
        </div>
      </section>

      <section id="about" className="about-university">
        <div className="container">
          <h2>About Our University</h2>
          <p className="section-intro">
            Founded in 1965, UniConnect has been at the forefront of innovative
            education for over five decades, combining traditional academic
            excellence with cutting-edge technology.
          </p>

          <div className="about-content">
            <div className="about-text">
              <h3>A Legacy of Excellence</h3>
              <p>
                Our university stands as a beacon of academic excellence and
                innovation. We've built a community where critical thinking,
                creativity, and practical skills converge to prepare students
                for the complex challenges of tomorrow's world.
              </p>

              <div className="feature-list">
                <div className="feature-item">
                  <div className="feature-icon">1</div>
                  <div className="feature-text">
                    <h4>World-Class Faculty</h4>
                    <p>
                      Learn from leading experts who are actively shaping their
                      fields through groundbreaking research.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">2</div>
                  <div className="feature-text">
                    <h4>Innovative Curriculum</h4>
                    <p>
                      Our programs blend theoretical knowledge with practical
                      experience to prepare you for real-world challenges.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">3</div>
                  <div className="feature-text">
                    <h4>Global Network</h4>
                    <p>
                      Join a diverse community of scholars and professionals
                      from over 80 countries worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-image">
              <img src={image2} alt="University campus" className="about-img" />
              <div className="about-shape"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="programs">
        <div className="container">
          <h2>Our Programs</h2>
          <p className="section-intro">
            Discover a wide range of undergraduate, graduate, and professional
            programs designed to help you achieve your academic and career
            goals.
          </p>

          <div className="program-cards">
            <div className="program-card">
              <div className="program-img">
                <img src={imgpc} />
              </div>
              <div className="program-content">
                <span className="program-tag">Undergraduate</span>
                <h3 className="program-title">Computer Science</h3>
                <p className="program-description">
                  Develop strong foundations in programming, algorithms, and
                  software development with our comprehensive CS program.
                </p>
                <a href="#" className="stat-btn">
                  Learn More
                </a>
              </div>
            </div>

            <div className="program-card">
              <div className="program-img">
                <img src={imgadmin} />
              </div>
              <div className="program-content">
                <span className="program-tag">Graduate</span>
                <h3 className="program-title">Business Administration</h3>
                <p className="program-description">
                  Master the art of management, leadership and business strategy
                  through our acclaimed MBA program.
                </p>
                <a href="#" className="stat-btn">
                  Learn More
                </a>
              </div>
            </div>

            <div className="program-card">
              <div className="program-img">
                <img src={imgdata} />
              </div>
              <div className="program-content">
                <span className="program-tag">Certificate</span>
                <h3 className="program-title">Data Science</h3>
                <p className="program-description">
                  Learn to extract insights from complex datasets and drive
                  data-informed decision making.
                </p>
                <a href="#" className="stat-btn">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faculty" className="faculty">
        <div className="container">
          <h2>Meet Our Faculty</h2>
          <p className="section-intro">
            Our distinguished faculty members are leaders in their fields,
            dedicated to excellence in teaching, research, and mentoring the
            next generation of scholars.
          </p>

          <div className="faculty-cards">
            <div className="faculty-card">
              <div className="faculty-img"></div>
              <h3 className="faculty-name">Dr. Sarah Johnson</h3>
              <p className="faculty-position">Professor of Computer Science</p>
              <p className="faculty-bio">
                Dr. Johnson specializes in artificial intelligence and machine
                learning, with over 15 years of experience in both academia and
                industry.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  in
                </a>
                <a href="#" className="social-link">
                  t
                </a>
                <a href="#" className="social-link">
                  f
                </a>
              </div>
            </div>

            <div className="faculty-card">
              <div className="faculty-img"></div>
              <h3 className="faculty-name">Dr. Michael Chen</h3>
              <p className="faculty-position">Dean of Business School</p>
              <p className="faculty-bio">
                With extensive experience in corporate strategy and
                international business, Dr. Chen brings real-world insights to
                the classroom.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  in
                </a>
                <a href="#" className="social-link">
                  t
                </a>
                <a href="#" className="social-link">
                  f
                </a>
              </div>
            </div>

            <div className="faculty-card">
              <div className="faculty-img"></div>
              <h3 className="faculty-name">Dr. Emily Rodriguez</h3>
              <p className="faculty-position">Chair of Engineering</p>
              <p className="faculty-bio">
                A pioneer in sustainable engineering, Dr. Rodriguez has led
                numerous projects that combine innovation with environmental
                responsibility.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  in
                </a>
                <a href="#" className="social-link">
                  t
                </a>
                <a href="#" className="social-link">
                  f
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="resources" className="resources">
        <div className="container">
          <h2>Student Resources</h2>
          <p className="section-intro">
            We provide comprehensive support services and resources to help you
            succeed in your academic journey and prepare for your future career.
          </p>

          <div className="resources-grid">
            <div className="resource-item">
              <div className="resource-icon">📚</div>
              <h3 className="resource-title">Digital Library</h3>
              <p className="resource-description">
                Access millions of e-books, journals, and research papers
                through our extensive digital library.
              </p>
              <a href="#" className="resource-link">
                Access Library
              </a>
            </div>

            <div className="resource-item">
              <div className="resource-icon">💻</div>
              <h3 className="resource-title">Technology Labs</h3>
              <p className="resource-description">
                Work with cutting-edge technologies in our state-of-the-art
                computer labs and innovation spaces.
              </p>
              <a href="#" className="resource-link">
                View Facilities
              </a>
            </div>

            <div className="resource-item">
              <div className="resource-icon">🔍</div>
              <h3 className="resource-title">Career Services</h3>
              <p className="resource-description">
                Get personalized career counseling, resume reviews, and access
                to our exclusive job portal.
              </p>
              <a href="#" className="resource-link">
                Explore Services
              </a>
            </div>

            <div className="resource-item">
              <div className="resource-icon">🧠</div>
              <h3 className="resource-title">Academic Support</h3>
              <p className="resource-description">
                Benefit from tutoring, study groups, and academic skills
                workshops to excel in your courses.
              </p>
              <a href="#" className="resource-link">
                Get Support
              </a>
            </div>

            <div className="resource-item">
              <div className="resource-icon">🌎</div>
              <h3 className="resource-title">Study Abroad</h3>
              <p className="resource-description">
                Expand your horizons with exchange programs in partnership with
                top universities worldwide.
              </p>
              <a href="#" className="resource-link">
                Discover Programs
              </a>
            </div>

            <div className="resource-item">
              <div className="resource-icon">🏆</div>
              <h3 className="resource-title">Research Opportunities</h3>
              <p className="resource-description">
                Engage in groundbreaking research projects alongside faculty
                mentors and industry partners.
              </p>
              <a href="#" className="resource-link">
                Find Opportunities
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="campus-life" className="campus-life">
        <div className="container">
          <h2>Campus Life</h2>
          <p className="section-intro">
            Experience a vibrant campus community with diverse activities,
            clubs, and events that enrich your university experience beyond the
            classroom.
          </p>

          <div className="campus-gallery">
            <div className="gallery-item">
              <img
                src={image3}
                alt="Campus main building"
                className="gallery-img"
              />
              <div className="gallery-overlay">
                <h4>Main Campus Quad</h4>
              </div>
            </div>

            <div className="gallery-item">
              <img src={image4} alt="Student union" className="gallery-img" />
              <div className="gallery-overlay">
                <h4>Student Union</h4>
              </div>
            </div>

            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                alt="Library interior"
                className="gallery-img"
              />
              <div className="gallery-overlay">
                <h4>Modern Library</h4>
              </div>
            </div>

            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                alt="Sports event"
                className="gallery-img"
              />
              <div className="gallery-overlay">
                <h4>Athletics Center</h4>
              </div>
            </div>

            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                alt="Research lab"
                className="gallery-img"
              />
              <div className="gallery-overlay">
                <h4>Research Labs</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p className="section-intro">
            Have questions? We're here to help! Reach out to us through the form
            below or visit our campus.
          </p>

          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h4>Our Location</h4>
                  <p>123 University Avenue, Cityville, State 12345, Country</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h4>Phone Number</h4>
                  <p>Main Office: (123) 456-7890</p>
                  <p>Admissions: (123) 456-7891</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-details">
                  <h4>Email Address</h4>
                  <p>info@uniconnect.edu</p>
                  <p>admissions@uniconnect.edu</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div className="contact-details">
                  <h4>Office Hours</h4>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="form-control"
                  placeholder="What is this regarding?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  className="form-control"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button className="primary-btn" style={{ width: "100%" }}>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="footer-col">
              <div className="footer-logo">
                Uni<span>Connect</span>
              </div>
              <p className="footer-about">
                UniConnect is dedicated to providing exceptional educational
                experiences that prepare students for success in a rapidly
                changing world. Our commitment to excellence, innovation, and
                inclusivity guides everything we do.
              </p>
            </div>

            <div className="footer-col">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#programs">Programs</a>
                </li>
                <li>
                  <a href="#faculty">Faculty</a>
                </li>
                <li>
                  <a href="#resources">Resources</a>
                </li>
                <li>
                  <a href="#campus-life">Campus Life</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="footer-title">Resources</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">Academic Calendar</a>
                </li>
                <li>
                  <a href="#">Library Services</a>
                </li>
                <li>
                  <a href="#">Career Center</a>
                </li>
                <li>
                  <a href="#">Financial Aid</a>
                </li>
                <li>
                  <a href="#">Student Portal</a>
                </li>
                <li>
                  <a href="#">Campus Map</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="footer-title">Connect With Us</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">News & Events</a>
                </li>
                <li>
                  <a href="#">Alumni Network</a>
                </li>
                <li>
                  <a href="#">Giving</a>
                </li>
                <li>
                  <a href="#">Employment</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              © {new Date().getFullYear()} UniConnect. All rights reserved.
            </p>
            <div className="footer-social">
              <a href="#">f</a>
              <a href="#">t</a>
              <a href="#">in</a>
              <a href="#">ig</a>
              <a href="#">yt</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
