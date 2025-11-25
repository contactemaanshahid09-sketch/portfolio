import React, { useEffect, useRef, useState } from "react";

const services = [
  "Responsive Website Development",
  "Custom Web Applications",
  "E-Commerce Websites",
  "Modern Website & App UI Design",
  "User-Friendly Wireframes & Prototypes",
];

export default function Services() {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-idx"));
            setVisibleIndexes((prev) =>
              prev.includes(idx) ? prev : [...prev, idx]
            );
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const cards = containerRef.current.querySelectorAll(".service-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services-section">
      <h2 className="section-title">Services</h2>
      <p className="section-description">
        Providing cutting-edge web development solutions tailored to your needs.
      </p>
      <div className="services-content">
        <div className="services-left">
          <h3 className="services-large-title">Creative Web Development & UI/UX Solutions.</h3>
          <p className="services-paragraph">
            I offer a wide range of services to help bring your digital projects
            to life with professional quality and user-oriented design.
          </p>
        </div>
        <div className="services-right" ref={containerRef}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${
                visibleIndexes.includes(index) ? "visible" : ""
              }`}
              data-idx={index}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
