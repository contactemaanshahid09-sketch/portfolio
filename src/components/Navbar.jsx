import { useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Emaan Shahid</div>

        {/* Hamburger for mobile */}
        <div
          className="hamburger"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </div>

        {/* Mobile menu: nav + icons */}
        <div className={`mobile-menu${isOpen ? " open" : ""}`}>
          <ul className="nav-links-mobile">
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#resume" onClick={() => setIsOpen(false)}>Resume</a></li>
            <li><a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a></li>
            <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
          <div className="social-icons-mobile">
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

        {/* Normal nav for desktop */}
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

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

