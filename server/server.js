
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import {Portfolio, Project, Message} from "./models/Portfolio.js";


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Portfolio API is running" });
});

app.get("/api/portfolio", async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne();

    if (!portfolio) {
      return res.status(404).json({
        message: "Portfolio data not found. Run npm run seed first."
      });
    }

    res.json(portfolio);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch portfolio"
    });
  }
});

app.get("/api/projects", async (req, res) => {
  try {
    res.json(await Project.find());
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch projects" });
  }
});

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || name.trim().length < 2)
    return res.status(400).json({ message: "Name must be at least 2 characters." });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || ""))
    return res.status(400).json({ message: "Please enter a valid email." });
  if (!subject || !subject.trim())
    return res.status(400).json({ message: "Subject is required." });
  if (!message || message.trim().length < 10)
    return res.status(400).json({ message: "Message must be at least 10 characters." });

  try {
    await Message.create({ name, email, subject, message });
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ message: "Could not save your message." });
  }
});

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exitCode = 1;
  }
}

startServer();
