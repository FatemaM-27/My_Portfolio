# Developer Portfolio — Fatema M

A personal developer portfolio designed to showcase my technical skills, projects, education, and achievements through a modern, interactive, and responsive web experience.

## ✨ Features

- **Interactive Hero Section** — Animated character, typing effect, and introduction.
- **About Me** — Professional introduction, education, and achievements.
- **Technical Skills** — Categorized skills with visual progress indicators.
- **Project Showcase** — Project cards with technology tags and filtering options.
- **Responsive Design** — Layout adapted for desktop and mobile devices.
- **Theme Toggle** — Dark theme and light theme interface.
- **Contact Section** — Email-based contact form and social links.
- **REST API Integration** — Portfolio information and projects retrieved from the backend.
- **Database Integration** — Portfolio content stored in MongoDB.

## 🛠️ Tech Stack

**Frontend**
- React
- JavaScript
- HTML5
- CSS3
- Vite

**Backend**
- Node.js
- Express.js
- REST APIs

**Database**
- MongoDB Atlas
- Mongoose

**Tools**
- Visual Studio Code
- Git and GitHub
- npm

## 📁 Project Structure

```text
Portfolio/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
├── server/
│   ├── models/
│   │   └── Portfolio.js
│   ├── server.js
│   ├── seed.js
│   ├── package.json
│   └── .env
│
├── .gitignore
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js and npm
- Git
- A MongoDB Atlas account or another configured MongoDB database

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/Developer-Portfolio.git
cd Developer-Portfolio
```

Replace `YOUR_USERNAME` with your GitHub username.

### 2. Set up the backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Replace the placeholder with your own MongoDB connection string. Keep this file private and never commit credentials to GitHub.

### 3. Seed the portfolio data

If the database has not been populated yet, run:

```bash
npm run seed
```

This inserts or updates the portfolio data using the existing seed script.

### 4. Start the backend

```bash
npm run dev
```

The API should be available at:

`http://localhost:5000`

### 5. Set up the frontend

Open a second terminal from the project root:

```bash
cd client
npm install
npm run dev
```

Open the local URL displayed by Vite, usually:

`http://localhost:5173`

Keep both the frontend and backend running while developing locally.

## 🔌 API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health` | Check backend status |
| GET | `/api/portfolio` | Retrieve portfolio information |
| GET | `/api/projects` | Retrieve project details |

## 🚀 Featured Projects

- **Internship Portal** — A web project focused on internship opportunities and user access.
- **Shopping Mall Management** — A backend development project involving order management.
- **Nykaa Power BI Dashboard** — A sales analytics dashboard with business insights and data visualizations.
- **JobTrack** — A website project focused on exploring and tracking job and internship opportunities.

Project descriptions and technology lists reflect the current implementation and can be updated as each project evolves.

## 🎯 Project Objective

The goal of this project is to develop a professional online portfolio while gaining practical experience in React development, REST API integration, backend development, database connectivity, responsive design, and version control.

## 🔮 Future Improvements

- Add a backend-powered contact form.
- Improve accessibility and keyboard navigation.
- Deploy the frontend and backend.
- Add project screenshots and live-demo links.
- Improve SEO and performance.



Built with curiosity, creativity, and code.
