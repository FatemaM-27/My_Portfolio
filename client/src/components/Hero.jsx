import { useEffect, useState } from "react";

function useTyping(words) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const word = words[i % words.length];
    let delay = deleting ? 50 : 100;
    if (!deleting && text === word) delay = 2000;

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setI(i + 1);
      } else {
        setText(word.substring(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return text;
}

function Counter({ value, suffix }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let cur = 0;
    const step = Math.max(1, Math.ceil(value / 50));
    const id = setInterval(() => {
      cur += step;
      if (cur >= value) {
        cur = value;
        clearInterval(id);
      }
      setN(cur);
    }, 30);
    return () => clearInterval(id);
  }, [value]);
  return <>{n}{suffix}</>;
}

export default function Hero({ data }) {
  const typed = useTyping(data.roles || []);

  useEffect(() => {
    const onMove = (e) => {
      if (window.innerWidth <= 768) return;
      document.querySelectorAll(".pupil").forEach((p) => {
        const r = p.parentElement.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        const angle = Math.atan2(dy, dx);
        const dist = Math.min(3, Math.hypot(dx, dy) / 20);
        p.style.transform = `translate(calc(-50% + ${Math.cos(angle) * dist}px), calc(-50% + ${Math.sin(angle) * dist}px))`;
      });
    };
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="gradient-text">{data.name}</span>
          </h1>
          <p className="hero-subtitle">
            <span className="typing-text">{typed}</span>
            <span className="cursor">|</span>
          </p>
          <div className="hero-description">
            <p>{data.intro}</p>
            <p>{data.objective}</p>
          </div>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <i className="fas fa-rocket"></i> View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              <i className="fas fa-envelope"></i> Get In Touch
            </a>
          </div>
          <div className="live-stats">
            {(data.stats || []).map((s) => (
              <div className="stat-item" key={s.label}>
                <div className="stat-number">
                  <Counter value={s.value} suffix={s.suffix || ""} />
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="character-container">
            <div className="character">
              <div className="head">
                <div className="face">
                  <div className="eyes">
                    <div className="eye left-eye"><div className="pupil"></div></div>
                    <div className="eye right-eye"><div className="pupil"></div></div>
                  </div>
                  <div className="nose"></div>
                  <div className="mouth"></div>
                </div>
                <div className="hair"></div>
              </div>
              <div className="body">
                <div className="torso"></div>
                <div className="arms">
                  <div className="arm left-arm"></div>
                  <div className="arm right-arm"></div>
                </div>
                <div className="legs">
                  <div className="leg left-leg"></div>
                  <div className="leg right-leg"></div>
                </div>
              </div>
            </div>
            <div className="floating-elements">
              {["💻", "🎤", "⚡", "🚀"].map((emoji, i) => (
                <div className="floating-item" key={emoji} style={{ "--delay": `${i}s` }}>
                  {emoji}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}