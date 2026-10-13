import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTools from "./components/ScrollTools";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

async function getJSON(path) {
  const res = await fetch(`${API}${path}`);
  if (!res.ok) throw new Error(`${res.status} on ${API}${path}`);
  return res.json();
}

export default function App() {
  const [portfolio, setPortfolio] = useState(null);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([getJSON("/api/portfolio"), getJSON("/api/projects")])
      .then(([p, pr]) => {
        setPortfolio(p);
        setProjects(pr);
      })
      .catch((err) => setError(`Could not load data: ${err.message}`));
  }, []);

  if (error) return <p style={{ padding: 40 }}>{error}</p>;
  if (!portfolio) return <p style={{ padding: 40 }}>Loading...</p>;

  return (
    <>
      <ScrollTools />
      <Navbar name={portfolio.name} />
      <main>
        <Hero data={portfolio} />
        <About data={portfolio} />
        <Skills skills={portfolio.skills} />
        <Projects projects={projects} />
        <Contact contact={portfolio.contact} />
      </main>
      <Footer name={portfolio.name} contact={portfolio.contact} />
    </>
  );
}