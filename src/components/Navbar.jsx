import { useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./Navbar.css"; // You should create this CSS file or add styles accordingly

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle nav menu on hamburger click
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Emaan Shahid</div>

        {/* Hamburger icon shown only on mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>

        {/* Navigation links, toggle active class */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#resume" onClick={() => setIsOpen(false)}>Resume</a></li>
          <li><a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a></li>
          <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a
            href="https://www.linkedin.com/in/emaan-mehar-b84309360"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </nav>
  );
}






// import { useState } from "react";
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// // import { FiX, FiMenu } from "react-icons/fi";
// // import "../App.css";


// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="container">
//         <div className="logo">Emaan Shahid</div>
//         <ul className="nav-links">
//             <li><a href="#home">Home</a></li>
//             <li><a href="#about">About</a></li>
//             <li><a href="#resume">Resume</a></li>
//             <li><a href="#portfolio">Portfolio</a></li>
//             <li><a href="#services">Services</a></li>
//             <li><a href="#contact">Contact</a></li>
//         </ul>

//         <div className="social-icons">
//           <a href="#"><i className="fab fa-facebook" /></a>
//           <a href="https://www.linkedin.com/in/emaan-mehar-b84309360" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" /></a>

//         </div>
//       </div>
//     </nav>
//   );
// }

