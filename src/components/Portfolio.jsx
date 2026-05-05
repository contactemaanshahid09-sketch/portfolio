import React, { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "FlexiBuild – Smart Construction & Interior Design Platform",
    description:
      "Developed FlexiBuild, a construction and interior design platform where users can explore services, get design ideas, and purchase furniture seamlessly.",
    laptopImg: "/portfolio/images/project1-laptop.jpeg",
    mobileImg: "/portfolio/images/project1-mobile.jpeg",
    liveDemoLink: "https://github.com/contactemaanshahid09-sketch/android",
  },
  {
    id: 2,
    title: "PRS ShopCart – Smart Product Recommendation System",
    description:
      "React-based product recommendation system with smart suggestions, smooth shopping, and dynamic cart management powered by Redux.",
    laptopImg: "/portfolio/images/project2-laptop.jpeg",
    mobileImg: "/portfolio/images/project2-mobile.jpeg",
    liveDemoLink: "https://contactemaanshahid09-sketch.github.io/PRS-ShopCart/",
  },
  {
    id: 3,
    title: "MindDrape – Blogging Web App with Firebase",
    description:
      "Developed MindDrape, a blogging web app using Firebase and JavaScript, featuring user authentication, category-wise browsing, and a responsive UI.",
    laptopImg: "/portfolio/images/project3-laptop.png",
    mobileImg: "/portfolio/images/project3-mobile.png",
    // liveDemoLink: "https://minddrape.example.com",
  },
  {
    id: 4,
    title: "9T9 Solutions – One-Stop Digital Service Hub",
    description:
      "Developed 9T9 Solutions, a multi-service digital solutions platform offering web development, design, video editing, and e-commerce services with a responsive, user-friendly interface.",
    laptopImg: "/portfolio/images/project4-laptop.png",
    mobileImg: "/portfolio/images/project4-mobile.png",
    liveDemoLink: "https://9t9solutions.github.io/9t9solutions/",
  },
  {
    id: 5,
    title: "Interactive Scrolling Experience",
    description:
      "Created a modern website with stunning scrolling effects, delivering an immersive and visually dynamic user journey.",
    laptopImg: "/portfolio/images/project5-laptop.png",
    mobileImg: "/portfolio/images/project5-mobile.png",
    // liveDemoLink: "https://scrollingexperience.example.com",
  },
  {
    id: 6,
    title: "Unique Parallax Scrolling Website",
    description:
      "Developed a unique parallax scrolling website that blends motion and depth, offering a truly eye-catching and innovative browsing experience.",
    videoSrc: "/portfolio/videos/project6-demo.mp4",
    mobileImg: null,
    // liveDemoLink: "https://parallaxscrolling.example.com",
  },
  {
    id: 7,
    title: "GetVeriSight - AI Content Moderation Platform",
    description:
      "Built a full-stack moderation platform for text, image, and video analysis with JWT authentication, Google sign-in, MongoDB storage, and reviewer-friendly workflows.",
    laptopImg: "/portfolio/images/project7-laptop.PNG",
    mobileImg: "/portfolio/images/project7-mobile.jpeg",
    liveDemoLink: "https://get-veri-sight.vercel.app",
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



