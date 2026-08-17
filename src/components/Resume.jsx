import React, { useEffect, useState } from "react";

export default function Resume() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section id="resume" className="resume-section">
      <h2 className="section-title">Resume</h2>
      <p className="section-description">
        This section presents my resume, where you can explore my qualifications and career path.
      </p>
      <div className={`resume-content ${animate ? "animate-up" : ""}`}>
        <div className="resume-column">
          <h3 className="resume-subtitle">Work Experience</h3>
          <p className="resume-intro">
            Here’s a brief look at my professional journey and the experiences that helped me grow in the industry.
          </p>

          <ul className="timeline-list">
            <li>
              <span className="timeline-dot"></span>
              <div>
                <strong className="timeline-company">Sublime Tech</strong>
                <span className="timeline-date">2025 - 2026</span>
                <div className="timeline-title">MERN Stack Developer & AI Integration Developer</div>
                <p>
                  Worked on full-stack web applications using the MERN stack, developing
                  responsive frontend interfaces, backend APIs, database functionality,
                  and integrating AI models to enhance application features and automation.
                </p>
                <ul className="timeline-details">
                  <li>
                    MERN stack development
                  </li>
                  <li>
                    AI model integration
                  </li>
                  <li>
                    International Client Project — UPTIVITY
                    <p>
                      (Integrated WhatsApp functionality into UPTIVITY's Senserve CRM, worked on the implementation and development of the WhatsApp-related features.)
                    </p>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <span className="timeline-dot"></span>
              <div>
                <strong className="timeline-company">Corvit Learning Institute</strong>
                <span className="timeline-date">2025</span>
                <div className="timeline-title">Web Developer & UI/UX Intern</div>
                <p>
                  Enhanced my expertise in web development and UI/UX through real-world tasks and collaborative projects.
                </p>
              </div>
            </li>
            <li>
              <span className="timeline-dot"></span>
              <div>
                <strong className="timeline-company">Hashtag Softs & Institute</strong>
                <span className="timeline-date">2022 - 2023</span>
                <div className="timeline-title">Frontend Developer Intern</div>
                <ul className="timeline-details">
                  <li>
                    Gained hands-on experience by working on multiple web development projects.
                  </li>
                  <li>
                    Learning by doing through live projects.
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <span className="timeline-dot"></span>
              <div>
                <strong className="timeline-company">Personal Projects</strong>
                {/* <span className="timeline-date">2023-2018</span> */}
                <div className="timeline-title">Full-Stack Learner & Designer</div>
                <p>
                  Independently developed several projects to strengthen my skills, explore creativity, and apply innovative solutions.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="resume-column">
          <h3 className="resume-subtitle">My Education</h3>
          <p className="resume-intro">
            Here’s a quick overview of my educational background and the learning journey that shaped my skills.
          </p>

          <ul className="timeline-list">
           <li>
              <span className="timeline-dot"></span>
              <div>
                <strong className="timeline-company">Superior College for Boys, Faisalabad</strong>
                <span className="timeline-date">2021-2025</span>
                <div className="timeline-title">Bachelor of Science in Computer Science</div>
                {/* <p>Curabitur aliquam placerat nulla sit amet varius nullam tempus magna in pretium cursus.</p> */}
              </div>
            </li>
            <li>
              <span className="timeline-dot"></span>
              <div>
                <strong className="timeline-company">Punjab College for Women</strong>
                <span className="timeline-date">2018 - 2020</span>
                <div className="timeline-title">Intermediate in Computer Science</div>
                {/* <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p> */}
              </div>
            </li>
            <li>
              <span className="timeline-dot"></span>
              <div>
                <strong className="timeline-company">Bahria Foundation School Faisalabad</strong>
                <span className="timeline-date">2015-2017</span>
                <div className="timeline-title">Matriculation in Computer Science</div>
                {/* <p>Secondary alias vitae elit elit dictum rhoncus malesuada tempus.</p> */}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}



 