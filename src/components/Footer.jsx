import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
            <div className="social-icons">
          <a href="#"><i className="fab fa-facebook" /></a>
          <a href="https://www.linkedin.com/in/emaan-mehar-b84309360" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" /></a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
