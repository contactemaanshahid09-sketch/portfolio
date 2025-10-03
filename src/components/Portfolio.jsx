import React, { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "FlexiBuild – Smart Construction & Interior Design Platform",
    description:
      "Developed FlexiBuild, a construction and interior design platform where users can explore services, get design ideas, and purchase furniture seamlessly.",
    laptopImg: "/images/project1-laptop.jpeg",
    mobileImg: "/images/project1-mobile.jpeg",
    liveDemoLink: "https://github.com/contactemaanshahid09-sketch/android",
  },
  {
    id: 2,
    title: "MindDrape – Blogging Web App with Firebase",
    description:
      "Developed MindDrape, a blogging web app using Firebase and JavaScript, featuring user authentication, category-wise browsing, and a responsive UI.",
    laptopImg: "/images/project2-laptop.png",
    mobileImg: "/images/project2-mobile.png",
    // liveDemoLink: "https://minddrape.example.com",
  },
  {
    id: 3,
    title: "9T9 Solutions – One-Stop Digital Service Hub",
    description:
      "Developed 9T9 Solutions, a multi-service digital solutions platform offering web development, design, video editing, and e-commerce services with a responsive, user-friendly interface.",
    laptopImg: "/images/project3-laptop.png",
    mobileImg: "/images/project3-mobile.png",
    liveDemoLink: "https://9t9solutions.github.io/9t9solutions/",
  },
  {
    id: 4,
    title: "Interactive Scrolling Experience",
    description:
      "Created a modern website with stunning scrolling effects, delivering an immersive and visually dynamic user journey.",
    laptopImg: "/images/project4-laptop.png",
    mobileImg: "/images/project4-mobile.png",
    // liveDemoLink: "https://scrollingexperience.example.com",
  },
  {
    id: 5,
    title: "Unique Parallax Scrolling Website",
    description:
      "Developed a unique parallax scrolling website that blends motion and depth, offering a truly eye-catching and innovative browsing experience.",
    videoSrc: "/videos/project5-demo.mp4",
    mobileImg: null,
    // liveDemoLink: "https://parallaxscrolling.example.com",
  },
];

export default function Portfolio() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="section-title">Portfolio</h2>
      <p className="section-description">
        Some of my projects showcasing development and design work.
      </p>
      <div className={`portfolio-grid ${animate ? "animate-up" : ""}`}>
        {projects.map(
          ({
            id,
            title,
            description,
            laptopImg,
            mobileImg,
            videoSrc,
            liveDemoLink,
          }) => (
            <div key={id} className="project-card">
              <div className="project-images">
                {videoSrc ? (
                  <a
                    href={liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} live demo`}
                  >
                    <video
                      src={videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="laptop-img"
                    />
                  </a>
                ) : (
                  <a
                    href={liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} live demo`}
                  >
                    <img
                      src={laptopImg}
                      alt={`${title} Laptop View`}
                      className="laptop-img"
                    />
                  </a>
                )}
                {mobileImg && (
                  <a
                    href={liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} live demo`}
                  >
                    <img
                      src={mobileImg}
                      alt={`${title} Mobile View`}
                      className="mobile-img"
                    />
                  </a>
                )}
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
}











// {videoSrc ? (
//   <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
//     <video
//       src={videoSrc}
//       autoPlay
//       loop
//       muted
//       playsInline
//       className="laptop-img"
//     />
//   </a>
// ) : (
//   <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
//     <img
//       src={laptopImg}
//       alt={`${title} Laptop View`}
//       className="laptop-img"
//     />
//   </a>
// )}

// {mobileImg && (
//   <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
//     <img
//       src={mobileImg}
//       alt={`${title} Mobile View`}
//       className="mobile-img"
//     />
//   </a>
// )}
