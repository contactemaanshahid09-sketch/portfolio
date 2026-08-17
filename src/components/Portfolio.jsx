import React, { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    displayOrder: 3,
    title: "FlexiBuild – Smart Construction & Interior Design Platform",
    description:
      "Developed FlexiBuild, a construction and interior design platform where users can explore services, get design ideas, and purchase furniture seamlessly.",
    laptopImg: "/images/project1-laptop.jpeg",
    mobileImg: "/images/project1-mobile.jpeg",
    liveDemoLink: "https://github.com/contactemaanshahid09-sketch/android",
  },
  {
    id: 2,
    displayOrder: 7,
    title: "PRS ShopCart – Smart Product Recommendation System",
    description:
      "React-based product recommendation system with smart suggestions, smooth shopping, and dynamic cart management powered by Redux.",
    laptopImg: "/images/project2-laptop.jpeg",
    mobileImg: "/images/project2-mobile.jpeg",
    liveDemoLink: "https://contactemaanshahid09-sketch.github.io/PRS-ShopCart/",
  },
  {
    id: 3,
    displayOrder: 5,
    title: "MindDrape – Blogging Web App with Firebase",
    description:
      "Developed MindDrape, a blogging web app using Firebase and JavaScript, featuring user authentication, category-wise browsing, and a responsive UI.",
    laptopImg: "/images/project3-laptop.png",
    mobileImg: "/images/project3-mobile.png",
    // liveDemoLink: "https://minddrape.example.com",
  },
  {
    id: 4,
    displayOrder: 6,
    title: "9T9 Solutions – One-Stop Digital Service Hub",
    description:
      "Developed 9T9 Solutions, a multi-service digital solutions platform offering web development, design, video editing, and e-commerce services with a responsive, user-friendly interface.",
    laptopImg: "/images/project4-laptop.png",
    mobileImg: "/images/project4-mobile.png",
    liveDemoLink: "https://9t9solutions.github.io/9t9solutions/",
  },
  {
    id: 5,
    displayOrder: 8,
    title: "Interactive Scrolling Experience",
    description:
      "Created a modern website with stunning scrolling effects, delivering an immersive and visually dynamic user journey.",
    laptopImg: "/images/project5-laptop.png",
    mobileImg: "/images/project5-mobile.png",
    // liveDemoLink: "https://scrollingexperience.example.com",
  },
  {
    id: 6,
    displayOrder: 4,
    title: "Unique Parallax Scrolling Website",
    description:
      "Developed a unique parallax scrolling website that blends motion and depth, offering a truly eye-catching and innovative browsing experience.",
    videoSrc: "/videos/project6-demo.mp4",
    mobileImg: null,
    // liveDemoLink: "https://parallaxscrolling.example.com",
  },
  {
    id: 7,
    displayOrder: 1,
    title: "GetVeriSight - AI Content Moderation Platform",
    description:
      "Built a full-stack moderation platform for text, image, and video analysis with JWT authentication, Google sign-in, MongoDB storage, and reviewer-friendly workflows.",
    laptopImg: "/images/project7-laptop.PNG",
    mobileImg: "/images/project7-mobile.jpeg",
    liveDemoLink: "https://get-veri-sight-portfolio.vercel.app/",
  },
  {
    id: 8,
    displayOrder: 2,
    title: "Propel.ai - AI Proposal Generator",
    description:
      "Built a full-stack AI proposal generator that turns project briefs, documents, and voice notes into polished business proposals with authentication, MongoDB storage, and automated contact handling.",
    videoSrc: "/videos/project8-demo.mp4",
    mobileImg: "/images/project8-mobile.jpeg",
    liveDemoLink: "https://proposal-phi-red.vercel.app/",   
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
        {[...projects].sort((a, b) => {
          if (a.displayOrder && b.displayOrder) {
            return a.displayOrder - b.displayOrder;
          }

          if (a.displayOrder) return 1;
          if (b.displayOrder) return -1;

          return b.id - a.id;
        }).map(
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



