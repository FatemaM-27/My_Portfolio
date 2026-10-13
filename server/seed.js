import "dotenv/config";
import mongoose from "mongoose";
import { Portfolio, Project } from "./models/Portfolio.js";

const portfolio = {
  name: "Fatema M",
  roles: [
    "Full Stack Developer (MERN/Java)",
    "TEDx Speaker & Host",
    "BTech-IT Student",
    "AI Technology Advocate",
    "Problem Solver"
  ],
  intro:
    "I enjoy building practical software solutions and exploring technology.",
  objective:
    "To grow as a full stack developer building impactful, user-friendly web applications while exploring other technologies.",
  about:
    "I'm a motivated and detail-oriented IT undergraduate with hands-on experience in building responsive web applications using HTML, CSS, JavaScript, React, Node.js, Express and MongoDB. As a TEDx speaker and host, I combine technical expertise with effective communication skills.",
  stats: [
    { label: "Days Internship", value: 45, suffix: "" }, 
    { label: "Projects Completed", value: 5, suffix: "+" }    
  ],
  education: [
    {
      degree: "Bachelor of Technology - Information Technology",
      institution: "Mohammed Sathak AJ College of Engineering, Siruseri",
      year: "2023 - 2027 (Expected)" 
    }
  ],
  experience: [
    {
      title: "Web Development Intern",
      company: "ApexPlanet Software Pvt. Ltd.",
      duration: "45 days",
      description:
        "Worked on HTML, CSS and JavaScript, and learned to build and consume APIs."
    }
  ],
  skills: [
    { category: "Languages", items: [
      { name: "JavaScript", level: 75 },
      { name: "Python", level: 65 },
      { name: "Java", level: 85 }
    ]},
    { category: "Web Development", items: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "React", level: 75 },          
      { name: "Responsive Design", level: 88 }
    ]},
    { category: "Backend & Tools", items: [
      { name: "Node.js", level: 70 },
      { name: "Express", level: 70 },
      { name: "MongoDB", level: 75 },
      { name: "Git/GitHub", level: 85 }
    ]}
  ],
  certifications: [
    { title: "Java Full Stack Developer", issuer: "IBM" },
    { title: "Responsive Web Design", issuer: "freeCodeCamp" },      
    { title: "Data Analytics", issuer: "Infosys Springboard" }        
  ],
  achievements: [
    { icon: "🎤", title: "TEDx Speaker & Host", year: "2025",
      description: "\"How AI Could Influence Humans and Us: An Engineer's Insight\"" },
    { icon: "🏆", title: "First Prize - Paper Presentation", year: "2024",
      description: "Gender Equality research presentation" },
    { icon: "💻", title: "Coding Competition Winner", year: "2023",
      description: "Notable ranks in multiple coding competitions" },
    { icon: "🧠", title: "Aptitude Excellence", year: "2023",
      description: "Top scores in aptitude competitions" }
  ],
  contact: {
    email: "fatemavadgam5180@gmail.com",
    github: "https://github.com/FatemaM-27",
    linkedin: "https://www.linkedin.com/in/fatema-m-vadgam-658247308"
  }
};

const projects = [
  {
    title: "Internship Portal",
    description:"A full-stack portal for internship listings, registration, authentication, and role-based access.",    
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Postman"],
    category: ["web"],
    github: "https://github.com/FatemaM-27", 
  },
  {
    title: "Shopping Mall Management",
    description:"A backend project with order management APIs and database integration.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Postman"],
    category: ["web"],
    github: "https://github.com/FatemaM-27", 
  },
  {
    title: "Nykaa PowerBI Dashboard",
    description:"An interactive dashboard exploring sales, products, customer insights, and inventory.",
    tech: ["Power BI", "DAX", "Data Visualization"],
    category: ["analytics"],
    github: "https://github.com/FatemaM-27", 
  }
];

await mongoose.connect(process.env.MONGO_URI);
await Portfolio.deleteMany({});
await Project.deleteMany({});
await Portfolio.create(portfolio);
await Project.insertMany(projects);
console.log("Seeded!");
process.exit(0);