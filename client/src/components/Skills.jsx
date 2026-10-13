import { useEffect, useState } from "react";

function SkillGroup({ items }) {
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setFilled(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="skill-group active">
      {items.map((s) => (
        <div className="skill-item" key={s.name}>
          <div className="skill-info">
            <span className="skill-name">{s.name}</span>
            <span className="skill-percentage">{s.level}%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: filled ? `${s.level}%` : "0%" }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Skills({ skills = [] }) {
  const [current, setCurrent] = useState(0);
  if (!skills.length) return null;

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-content">
          <div className="skill-categories">
            {skills.map((g, i) => (
              <div
                key={g.category}
                className={`skill-category ${i === current ? "active" : ""}`}
                onClick={() => setCurrent(i)}
              >
                {g.category}
              </div>
            ))}
          </div>
          <div className="skills-display">
            <SkillGroup key={skills[current].category} items={skills[current].items} />
          </div>
        </div>
      </div>
    </section>
  );
}