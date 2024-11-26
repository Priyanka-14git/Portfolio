import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
     <footer className="footer">
      <div className="footer-container">
        {/* Contact Information Section */}
        <div className="contact-info">
          <h2>Contact Me</h2>
          <p>If you'd like to connect or need more information, feel free to reach out!</p>
          <div className="contact-details">
            <a href="mailto:your-email@example.com">Email Me</a>
            <a href="tel:+1234567890">Call Me</a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="social-links">
          <h3>Find Me On</h3>
          <div className="social-icons">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
    </section>
  );
};

export default Contact;


