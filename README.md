# 🚀 Swaraj Burud — Developer Portfolio

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=black)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-r186-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.4-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green.style=for-the-badge)](LICENSE)

> **"Building full-stack systems that don't need permission to fly."**  
> A high-performance, interactive **Zero-G Developer Portfolio** built for **Swaraj Burud** — Final-year B.E. Information Technology student at Pune Institute of Computer Technology (PICT) with a **9.48 CGPA**, Full-Stack MERN Developer, and ML Engineer.

---

## 🌟 Overview

This portfolio website is designed to provide an immersive, weightless visual experience while presenting engineering projects, technical skill benchmarks, professional experience, and academic achievements. Featuring a **3D Interactive Three.js Hero Scene**, **floating zero-gravity skill nodes**, **Recharts-powered skill radar analytics**, **modal-driven architecture breakdowns**, and **built-in accessibility (reduced motion)** support.

---

## 💻 Technical Stack

### **Frontend & Framework**
* **Library**: [React 19](https://react.dev/)
* **Build Tool & Bundler**: [Vite 8](https://vitejs.dev/)
* **Language**: JavaScript (ESNext Modules)

### **3D Graphics & Data Visualization**
* **3D Canvas**: [Three.js](https://threejs.org/) & [@react-three/fiber](https://r3f.docs.pmnd.rs/)
* **3D Helpers**: [@react-three/drei](https://github.com/pmndrs/drei)
* **Data Visualization**: [Recharts](https://recharts.org/) (Skills Radar Analytics)

### **Styling, Animations & UI Icons**
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom `@tailwindcss/vite` plugin
* **Motion & Micro-interactions**: [Framer Motion](https://www.framer.com/motion/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Delights & Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)

### **Tooling & Quality Assurance**
* **Linter**: [Oxlint](https://oxc.rs/) (High-speed JavaScript/JSX linter)

---

## ✨ Core Features & Highlights

- 🛸 **Zero-G 3D Wireframe Scene**: Interactive React Three Fiber mesh sphere with rotating particle rings, floating satellites, and smooth mouse-follow tilt physics.
- 🌌 **Floating Skill Nodes with Physics**: Interactive 2D skill chips with zero-gravity drift physics, hover glow effects, and dynamic filtering (All Skills vs Popular Skills).
- 📊 **Skills Radar Benchmark**: Visual radar chart analyzing domain competency across MERN Stack, Realtime Systems, Databases, ML & Data Analytics, DevOps, and System Design.
- 🚀 **Flagship Project Deep-Dives**: Detailed modal view for flagship applications featuring:
  - Architecture breakdown & summary
  - Entity-Relationship (ER) model breakdown
  - Key technical metrics & benchmark highlights
  - Live preview & GitHub links
- 📄 **Interactive Resume Viewer Modal**: High-definition embedded PDF resume viewer with instant download options and document controls.
- ♿ **Zero-G Reduced Motion Toggle**: Global accessibility switch in the navbar respecting `prefers-reduced-motion` to pause intense animations and 3D rotations on demand.
- ⚡ **Interactive Terminal & Direct Contact**: Live terminal emulator widget in the contact section alongside standard direct email triggers and social media channels.

---

## 🏗️ Project Structure

```
Portfolio/
├── public/                 # Public assets (resume.pdf, icons, metadata)
├── src/
│   ├── assets/             # Visual assets & images
│   ├── components/         # Reusable UI components
│   │   ├── FloatingSkillChips.jsx  # Floating Zero-G physics skill nodes
│   │   ├── Footer.jsx              # Footer links & copyright bar
│   │   ├── Navbar.jsx              # Top glassmorphic header & reduced motion toggle
│   │   ├── ProjectDetailModal.jsx  # Modal for architecture & ER breakdown
│   │   ├── ResumeViewerModal.jsx   # Embedded PDF resume modal viewer
│   │   ├── SkillsOrbitChart.jsx    # Recharts radar skill visualization
│   │   ├── SocialIcons.jsx         # Profile social media icons
│   │   ├── ThreeHeroScene.jsx      # React Three Fiber 3D interactive mesh
│   │   └── ZeroGCard.jsx           # Dynamic floating zero-G card container
│   ├── data/               # Centralized data sources
│   │   ├── experience.js           # Work & leadership timeline
│   │   ├── profile.js              # Personal bio, stats, links & education
│   │   ├── projects.js             # Detailed project specs & tech stacks
│   │   └── skills.js               # Skills matrix & radar datasets
│   ├── sections/           # Page sections
│   │   ├── AboutSection.jsx        # Bio, education, stats & skills radar
│   │   ├── ContactSection.jsx      # Interactive terminal & contact form
│   │   ├── ExperienceSection.jsx   # Timeline of internships & roles
│   │   ├── HeroSection.jsx         # 3D canvas, quick bio & CTAs
│   │   ├── ProjectsSection.jsx     # Showcase grid of flagship & full-stack apps
│   │   └── ResumeSection.jsx       # Quick preview & modal trigger for resume
│   ├── App.jsx             # Main Application Shell & state orchestration
│   ├── main.jsx            # React DOM root mounting
│   ├── index.css           # Global Tailwind CSS directives & custom keyframes
│   └── App.css             # Component layout utilities & scrollbar styles
├── index.html              # Entry HTML with modern typography fonts
├── package.json            # NPM dependencies & scripts
├── vite.config.js          # Vite configuration with Tailwind CSS plugin
└── README.md               # Documentation
```

---

## 🛠️ Featured Projects Showcase

The portfolio showcases full-stack engineering work, including:

### 1. ⚡ **QueueWise** — *Smart Geospatial MERN Waitlist & Real-Time Queue Orchestrator*
* **Tech Stack**: React, Node.js, Express, MongoDB (2dsphere), Socket.io, Tailwind CSS, node-cron, Recharts, Leaflet.js
* **Highlights**: $near spatial discovery queries, sub-50ms Socket.io telemetry updates, automated node-cron timeout purges, dynamic priority queues, and QR check-in dashboard.

### 2. 🧠 **Prepify** — *AI-Powered Interview Strategy & Resume Generator Engine*
* **Tech Stack**: React 19, Node.js, Express 5, Google Gemini 1.5 Pro API, Zod Schemas, Headless Puppeteer, Tailwind CSS
* **Highlights**: Zero-hallucination JSON output via Zod validation, resume PDF parsing, 3-column interview strategy dashboard, and headless Puppeteer ATS-parseable PDF generation.

### 3. 💻 **CodeCraft** — *Real-Time Collaborative Code Editor & Sandboxed Runner*
* **Tech Stack**: React, Node.js, Socket.io, MongoDB, Redis, Docker Engine, Monaco Editor, Tailwind CSS
* **Highlights**: Multi-cursor OT/CRDT code synchronization via Redis pub/sub, isolated Docker execution sandboxes, live presence, and execution output streaming.

---

## ⚡ Quick Start & Local Setup

### **Prerequisites**
Ensure you have the following installed on your machine:
* [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
* [npm](https://www.npmjs.com/) (v9.0.0 or higher)

### **1. Clone the Repository**
```bash
git clone https://github.com/Swaraj49/Portfolio.git
cd Portfolio
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Launch Development Server**
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the port specified in terminal output).

### **4. Build for Production**
To generate a production-ready static build in the `dist/` directory:
```bash
npm run build
```

### **5. Preview Production Build Locally**
```bash
npm run preview
```

### **6. Run Linter (Oxlint)**
```bash
npm run lint
```

---

## 📬 Contact & Developer Profiles

* **Developer**: Swaraj Burud
* **Role**: Full-Stack MERN Developer & ML Specialist
* **College**: Pune Institute of Computer Technology (PICT)
* **Email**: [swarajburud@gmail.com](mailto:swarajburud@gmail.com)
* **GitHub**: [@Swaraj49](https://github.com/Swaraj49)
* **LinkedIn**: [Swaraj Burud](https://www.linkedin.com/in/swaraj-burud-9099a2295)
* **LeetCode**: [Swaraj_249](https://leetcode.com/u/Swaraj_249)
* **GeeksforGeeks**: [swaraj7hsa](https://www.geeksforgeeks.org/profile/swaraj7hsa)

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---
<p center align="center">
  Crafted with ❤️ by <b>Swaraj Burud</b>
</p>
