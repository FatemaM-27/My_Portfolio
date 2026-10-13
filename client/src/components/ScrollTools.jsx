import { useEffect, useState } from "react";

export default function ScrollTools() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.body.classList.toggle("dark-theme", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress">
        <div className="scroll-progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <button
        className={`back-to-top ${showTop ? "show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
      <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle dark mode">
        <i className={dark ? "fas fa-sun" : "fas fa-moon"}></i>
      </button>
    </>
  );
}