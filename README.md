# Animated Web Design — Personal Portfolio

A modern, animated personal portfolio website showcasing my experience, projects, and skills as a Data Scientist / AI-ML Engineer.

## ✨ Features

- Smooth scroll-triggered reveal animations powered by **Framer Motion**
- Fully responsive layout for desktop and mobile
- Sections: About, Experience, Projects, GitHub Projects, and Skills — all data-driven from a single JSON file for easy editing
- Dark, modern aesthetic built with **Tailwind CSS**

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS, Framer Motion, shadcn/ui
- **Backend (optional/local dev):** Express, Drizzle ORM, PostgreSQL
- **Deployment:** Vercel (static build)

## 📁 Project Structure

```
client/src/
  components/   # UI sections (Hero, About, Experience, Projects, Skills, etc.)
  data/         # portfolio.json — all resume/project content lives here
  pages/        # Route-level pages
server/         # Express API + DB layer (used for local full-stack dev only)
script/         # Build scripts, including automated GitHub project sync
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```
Visit `http://localhost:5000`.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🔄 Auto-updating GitHub Projects

The "Some Things I've Built" section pulls from `client/src/data/portfolio.json`, which is refreshed automatically once a day via a GitHub Action (`.github/workflows/update-github-projects.yml`) that fetches the latest public repos from my GitHub account. It can also be triggered manually:

```bash
npm run update:github
```

## 🌐 Deployment

Deployed on [Vercel](https://vercel.com) as a static build (`vercel.json` configures the build to run `vite build` and serve `dist/public`).
