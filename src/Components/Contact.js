// components/Contact.js
import React from 'react';
import './Contact.css';
import githubLogo from './githubLogo.png'; // Import your GitHub logo
import linkedinLogo from './linkedinLogo.png'; // Import your LinkedIn logo
// Import other logos as needed

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <div className="social-links">
        <a href="https://github.com/aakankshatech" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/aakanksha-singh-8388b8249/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
        {/* Add other social media links and logos here */}
      </div>
    </section>
  );
};

export default Contact;
