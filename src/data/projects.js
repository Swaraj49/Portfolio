export const PROJECTS_DATA = [
  {
    id: "queuewise",
    title: "QueueWise",
    subtitle: "Smart Geospatial MERN Waitlist & Real-Time Queue Orchestrator",
    tagline: "Eliminating physical queues through real-time geospatial discovery, Socket.io telemetry, and autonomous cron timeouts.",
    isFlagship: true,
    category: "Full-Stack MERN / Distributed Systems",
    accentColor: "from-cyan-500 via-blue-500 to-indigo-600",
    glowColor: "rgba(0, 240, 255, 0.4)",
    githubUrl: "https://github.com/Swaraj49/Queuewise",
    liveUrl: "https://queuewise-omega.vercel.app",
    architectureDiagramUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    techStack: [
      "React (Vite)",
      "Node.js",
      "Express.js",
      "MongoDB (2dsphere)",
      "Socket.io",
      "Tailwind CSS",
      "node-cron",
      "Recharts",
      "Cloudinary",
      "Leaflet.js",
      "JWT"
    ],
    erEntities: [
      { name: "User", fields: ["_id", "name", "email", "phone", "role (Customer/Owner)", "createdAt"] },
      { name: "Business", fields: ["_id", "ownerId", "name", "category", "location [2dsphere]", "qrCode", "maxCapacity"] },
      { name: "QueueEntry", fields: ["_id", "businessId", "userId", "ticketNo", "status (Waiting/Serving/Timeout/Done)", "priorityScore", "joinedAt"] },
      { name: "Review", fields: ["_id", "businessId", "userId", "rating (1-5)", "comment", "createdAt"] },
      { name: "Relations", fields: ["User 1:N QueueEntry", "Business 1:N QueueEntry", "User 1:N Review", "Business 1:N Review"] }
    ],
    features: [
      {
        title: "Geospatial Discovery Engine",
        desc: "MongoDB 2dsphere indexing and $near spatial queries allowing users to locate active waiting queues within customizable kilometer radiuses."
      },
      {
        title: "Real-Time Socket.io Telemetry",
        desc: "Bi-directional WebSocket connection syncing live position changes, estimated wait times, and queue advancement instantly across all client devices."
      },
      {
        title: "Priority Queue & Autonomous Timeouts",
        desc: "Integrated node-cron background workers to auto-expire no-show customers after grace periods and dynamic priority algorithm reordering."
      },
      {
        title: "QR Check-in & Owner Command Center",
        desc: "Instant camera-based QR verification for fast check-in and an administrative sidebar dashboard featuring live queue controls and Recharts throughput analytics."
      }
    ],
    architectureSummary: `QueueWise utilizes an event-driven MERN architecture. The Express API layer coordinates spatial queries using MongoDB 2dsphere indexes for instant map discovery. Socket.io maintains low-latency state synchronization across customer and business owner connections. A background node-cron service evaluates queue health every 60 seconds to purge ghost entries and maintain accurate wait times.`,
    metrics: [
      { label: "Wait Time Reduction", value: "40%" },
      { label: "Socket Sync Latency", value: "< 50ms" },
      { label: "Geospatial Lookup", value: "O(log N)" },
      { label: "ER Core Entities", value: "5 Relational Sets" }
    ]
  },
  {
    id: "prepify",
    title: "Prepify",
    subtitle: "AI-Powered Interview Strategy & Resume Generator Engine",
    tagline: "Tailor-made technical & behavioral interview roadmaps with automated ATS-compliant Puppeteer PDF rendering.",
    isFlagship: false,
    category: "Full-Stack MERN / Generative AI",
    accentColor: "from-purple-500 via-violet-600 to-indigo-600",
    glowColor: "rgba(139, 92, 246, 0.4)",
    githubUrl: "https://github.com/Swaraj49/Prepify-AI-Powered-Interview-Preparation-Platform",
    liveUrl: "https://prepify-ai-powered-interview-prepar.vercel.app/",
    techStack: [
      "React 19",
      "Vite 7",
      "Node.js",
      "Express 5",
      "Google Gemini API",
      "Zod Schemas",
      "Puppeteer (Headless)",
      "Tailwind CSS",
      "pdf-parse"
    ],
    dashboardColumns: [
      { title: "Technical Q&A", desc: "Domain-specific deep technical queries tuned to target company stack." },
      { title: "Behavioral Scenarios", desc: "STAR method interview scenarios tailored to project leadership experience." },
      { title: "Study Roadmap & Gaps", desc: "Match percentage score, identified skill gaps, and prioritized study timeline." }
    ],
    features: [
      {
        title: "Structured Gemini AI Strategy Engine",
        desc: "Leverages Node/Express 5 paired with Google Gemini 1.5 Pro and strict Zod schema validation for zero-hallucination JSON responses."
      },
      {
        title: "Resume PDF Parsing",
        desc: "Extracts key technical competencies, experience timelines, and metric achievements from raw uploaded resume PDFs."
      },
      {
        title: "Headless Puppeteer PDF Renderer",
        desc: "Converts generated HTML/Tailwind resume layouts into pixel-perfect, ATS-parseable PDF documents on serverless environments."
      },
      {
        title: "3-Column Command Dashboard",
        desc: "Interactive view featuring Technical Deep Dives, STAR Behavioral Prompts, and prioritized Skill Gap Roadmaps with match percentage scoring."
      }
    ],
    architectureSummary: `Prepify takes an arbitrary resume file, parses text payload through pdf-parse, and passes structured prompts into the Google Gemini API with Zod schema validation. The frontend builds an interactive 3-column view while headless Puppeteer renders polished PDF exports formatted cleanly for applicant tracking systems.`,
    metrics: [
      { label: "Resume Parsing Speed", value: "< 1.2s" },
      { label: "AI Response Precision", value: "100% Zod Validated" },
      { label: "ATS Pass Rating", value: "95%+" }
    ]
  },
  {
    id: "codecraft",
    title: "CodeCraft",
    subtitle: "Real-Time Collaborative Code Editor & Sandboxed Runner",
    tagline: "Multi-user code editing with operational transform state synchronization and isolated Docker container execution.",
    isFlagship: false,
    category: "Full-Stack Distributed Systems / Realtime",
    accentColor: "from-emerald-400 via-teal-500 to-cyan-600",
    glowColor: "rgba(52, 211, 153, 0.4)",
    githubUrl: "https://github.com/Swaraj49/CodeCraft",
    liveUrl: "https://code-craft-tawny-eight.vercel.app",
    techStack: [
      "React",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Redis",
      "Docker Engine",
      "Monaco Editor",
      "Tailwind CSS"
    ],
    features: [
      {
        title: "CRDT / OT Synchronized Editing",
        desc: "Low-latency multi-cursor code synchronization using Socket.io broadcast rooms and Redis pub/sub message brokers."
      },
      {
        title: "Isolated Containerized Runner",
        desc: "Executes submitted C++, Python, and JavaScript snippets within resource-capped Docker sandboxes to prevent host pollution."
      },
      {
        title: "Live Room Presence & Session Persistence",
        desc: "MongoDB persistent room state combined with Redis caching for instant document hydration when users rejoin active rooms."
      }
    ],
    architectureSummary: `CodeCraft routes active client connections via Socket.io to Node.js instances backed by a Redis pub/sub adapter. Code execution requests are dispatched asynchronously to worker threads that spawn ephemeral Docker containers with CPU/memory quotas, returning stderr/stdout back through web sockets.`,
    metrics: [
      { label: "Realtime Sync Latency", value: "< 25ms" },
      { label: "Execution Sandbox", value: "Docker Isolated" },
      { label: "Supported Languages", value: "C++, Python, JS" }
    ]
  }
];
