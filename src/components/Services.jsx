import React, { useEffect, useRef, useState } from "react";

const services = [
  "Responsive Website Development",
  "Custom Web Applications",
  "E-Commerce Websites",
  "AI Integration & AI-Powered Applications",
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
          <h3 className="services-large-title">AI-Powered Web Development & Intelligent Solutions.</h3>
          <p className="services-paragraph">
            I offer transform ideas into AI-powered products by integrating intelligent APIs, automation workflows, and modern web technologies into practical applications.
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
