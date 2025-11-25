import React, { useEffect, useState } from "react";

export default function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="hero">
      <div className={`hero-content ${animate ? "animate-up" : ""}`}>
        <h1>User-Friendly. Impactful. Memorable.</h1>
        <p>
          Specialized in creating responsive web solutions
          with a strong focus on UI/UX
        </p>
        <div className="hero-buttons">
          <a href="#portfolio" className="btn-primary">View my work</a>
          <a href="#contact" className="btn-secondary">Let's connect</a>
        </div>
      </div>
      <div className={`hero-image ${animate ? "animate-up-delay" : ""}`}>
        <img src="/portfolio/images/hero-image.jpeg" alt="Hero" />
      </div>
    </section>
  );
}
