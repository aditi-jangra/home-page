import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/contact-us">Contact Us</a>
        </div>
        <div className="social-icons">
          <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqljfmzfeKLqLfqcbwUH-Ura6lAh9W_1CkPA&s" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://cdn3.iconfinder.com/data/icons/basicolor-reading-writing/24/077_twitter-512.png" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://thumbs.dreamstime.com/b/instagram-icon-logo-isolated-white-background-editable-eps-vector-illustration-152396331.jpg" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
