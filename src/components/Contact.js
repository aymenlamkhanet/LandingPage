import React, { useState } from "react";
import "./Contact.css";
import github from "./logos/github.svg";
import linkedin from "./logos/linkedin.svg";
import instagram from "./logos/instagram.svg";
import gmail from "./logos/gmail.svg";
import phone from "./logos/phone.svg";
import location from "./logos/location.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: false });

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: true, error: false });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <div className="contact-container" id="contact">
      <div className="section-header">
        <h2>Get In Touch</h2>
        <div className="section-divider"></div>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">
              <img src={gmail} alt="email" className="social-logo" />
            </div>
            <div className="contact-detail">
              <h3>Email</h3>
              <p>aymen.lamkhanet.07@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <img src={phone} alt="phone" className="social-logo" />
            </div>
            <div className="contact-detail">
              <h3>Phone</h3>
              <p>+212 701-813582</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <img src={location} alt="location" className="social-logo" />
            </div>
            <div className="contact-detail">
              <h3>Location</h3>
              <p>Khouribga, Morocco</p>
            </div>
          </div>

          <div className="contact-socials">
            <h3>Connect With Me</h3>
            <div className="social-icons">
              <a
                href="https://github.com/aymenlamkhanet"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <img src={github} alt="GitHub" className="social-logo" />
              </a>
              <a
                href="https://www.linkedin.com/in/aymen-lamkhanet-06724029b/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <img src={linkedin} alt="LinkedIn" className="social-logo" />
              </a>
              <a
                href="https://www.instagram.com/aymen_lamkhanet/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <img src={instagram} alt="Instagram" className="social-logo" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-wrap">
          {formStatus.submitted ? (
            <div className="form-success">
              <div className="success-icon">✓</div>
              <h3>Message Sent Successfully!</h3>
              <p>
                Thank you for reaching out. I'll get back to you as soon as
                possible.
              </p>
              <button
                onClick={() =>
                  setFormStatus({
                    submitting: false,
                    submitted: false,
                    error: false,
                  })
                }
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Send Me A Message</h3>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
