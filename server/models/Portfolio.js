import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  name: String,
  roles: [String],
  intro: String,
  objective: String,
  about: String,
  stats: [{ label: String, value: Number, suffix: String }],
  education: [{ degree: String, institution: String, year: String }],
  experience: [{ title: String, company: String, duration: String, description: String }],
  skills: [{
    category: String,
    items: [{ name: String, level: Number }]
  }],
  certifications: [{ title: String, issuer: String }],
  achievements: [{ icon: String, title: String, description: String, year: String }],
  contact: { email: String, github: String, linkedin: String }
});

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  tech: [String],
  category: [String],
  github: String,
  live: String,
  icon: String
});

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export const Portfolio = mongoose.model("Portfolio", portfolioSchema);
export const Project = mongoose.model("Project", projectSchema);
export const Message = mongoose.model("Message", messageSchema);