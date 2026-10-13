import { useEffect, useRef, useState } from "react";

function Reveal({ children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in ${visible ? "visible" : ""}`}>
      {children}
    </div>
  );
}

export default function About({ data }) {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p className="about-intro">{data.about}</p>

          <div className="about-details">
            <div className="detail-group">
              <h3>Career Objective</h3>
              <div className="education-item">
                <p>{data.objective}</p>
              </div>
            </div>

            <div className="detail-group">
              <h3>Education</h3>
              <div className="stack">
                {(data.education || []).map((e) => (
                  <div className="education-item" key={e.degree}>
                    <h4>{e.degree}</h4>
                    <p>{e.institution}</p>
                    <span className="year">{e.year}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-group">
              <h3>Experience</h3>
              <div className="stack">
                {(data.experience || []).map((x) => (
                  <div className="education-item" key={x.title}>
                    <h4>{x.title}</h4>
                    <p>{x.company}</p>
                    <p>{x.description}</p>
                    <span className="year">{x.duration}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-group">
              <h3>Certifications</h3>
              <div className="stack">
                {(data.certifications || []).map((c) => (
                  <div className="education-item" key={c.title}>
                    <h4>{c.title}</h4>
                    <p>{c.issuer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-group">
              <h3>Achievements</h3>
              <div className="timeline">
                {(data.achievements || []).map((a) => (
                  <Reveal key={a.title}>
                    <div className="timeline-item">
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <h4>{a.icon} {a.title} · {a.year}</h4>
                        <p>{a.description}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}