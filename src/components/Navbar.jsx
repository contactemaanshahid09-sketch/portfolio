import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { FiX, FiMenu } from "react-icons/fi";
// import "../App.css";


export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Emaan Shahid</div>
        <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook" /></a>
          <a href="https://www.linkedin.com/in/emaan-mehar-b84309360" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" /></a>

        </div>
      </div>
    </nav>
  );
}

