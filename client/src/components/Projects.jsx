import { useState } from "react";

const FILTERS = [
  ["all", "All Projects"],
  ["web", "Web Development"],
  ["analytics", "Analytics"],
];

export default function Projects({ projects = [] }) {
  const [filter, setFilter] = useState("all");
  const shown = projects.filter(
    (p) => filter === "all" || (p.category || []).includes(filter)
  );

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className="project-filters">
          {FILTERS.map(([value, label]) => (
            <button
              key={value}
              className={`filter-btn ${filter === value ? "active" : ""}`}
              onClick={() => setFilter(value)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {shown.map((p) => (
            <div className="project-card" key={p._id}>
              <div className="project-image">
                <div className="project-placeholder">
                  <i
                    className={
                      p.icon ||
                      ((p.category || []).includes("analytics") ? "fas fa-chart-pie" : "fas fa-code")
                    }
                  ></i>
                </div>
                {(p.github || p.live) && (
                  <div className="project-overlay">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="project-link" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="project-link" aria-label="Live demo">
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    )}
                  </div>
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-description">{p.description}</p>
                <div className="project-tech">
                  {(p.tech || []).map((t) => (
                    <span className="tech-tag" key={t}>{t}</span>
                  ))}
                </div>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "var(--primary-color)", fontWeight: 600, textDecoration: "none" }}
                  >
                    <i className="fab fa-github"></i> View on GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}