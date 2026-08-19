import React, { useEffect, useState } from "react";

export default function About() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section id="about" className="about-section">
     

      <div className={`about-content-center ${animate ? "animate-up" : ""}`}>
        <small className="label">About Me</small>
        <h3>AI Integration Developer & Web Developer</h3>
        <p>
          As an AI Integration & Web Developer, I love building solutions that are not only intelligent but also highly functional.
        </p>
        <p>
          <b>My goal is to create seamless experiences for users everywhere</b>
        </p>

        <div className="details-card">
          <div>
            <p><strong>Name</strong> Emaan Shahid</p>
            <p><strong>Age</strong> 24 Years</p>
            <p><strong>Occupation</strong> AI Integration Developer & Web Developer</p>
          </div>
          <div>
            <p><strong>Phone</strong> +92 321 1393517</p>
            <p><strong>Email</strong> contact.emaanshahid09@gmail.com</p>
            <p><strong>Nationality</strong> Pakistani </p>
          </div>
        </div>

        <div className="signature">
          <p><em>Emaan Shahid  </em> AI Integration & Web Developer</p>
        </div>
      </div>
    </section>
  );
}



