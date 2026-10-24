export const projectCategories = [
  "All",
  "Full-Stack",
  "Frontend / Web App",
  "Mobile & Civic Tech",
  "Systems / Tools"
];

export const projectsData = [
  {
    id: "flew",
    title: "FLEW — Cat-Themed Dessert Shop",
    category: "Frontend / Web App",
    shortDescription: "An enchanting, boutique cat-themed dessert shop web application with delightful interactive catalog, playful micro-animations, and fluid cart flows.",
    fullDescription: "FLEW is a creative commercial web application designed to bring joyful brand personality to artisanal dessert ordering. Built with TypeScript and React, the interface showcases animated product cards, interactive flavor customizers, responsive design, and smooth cart management with Framer Motion transitions.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    featured: true,
    liveUrl: "https://flew-gow.vercel.app",
    githubUrl: "https://github.com/DILEEPSAJJA/FLEW",
    image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80",
    metrics: "100% Lighthouse Performance, Sub-second navigation",
    highlights: [
      "Custom playful illustrations and animated brand identity",
      "Dynamic product filtering and responsive modal view",
      "Cart persistence and checkout interaction state",
      "Mobile-first fluid layouts with glassmorphic elements"
    ]
  },
  {
    id: "helpez",
    title: "HelpEZ — Disaster Management Crowdsourcing",
    category: "Mobile & Civic Tech",
    shortDescription: "Award-winning emergency assistance application with AI incident classification, GPS mapping, family safety spaces, and offline Zigbee support.",
    fullDescription: "Designed to enhance community resilience during natural disasters and emergencies. HelpEZ enables citizens to report incidents in seconds, request rescue resources, and locate relief centers. Features rapid geotagging, AI-driven priority triage, and offline communication support via Zigbee mesh.",
    tags: ["React Native (Expo)", "Firebase", "Google Maps API", "React", "Tailwind CSS"],
    featured: true,
    liveUrl: "https://helpez.vercel.app",
    githubUrl: "https://github.com/DILEEPSAJJA/helpEZ",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    metrics: "Reduced incident reporting time by 40% | 1st Place Ciencia2K24",
    highlights: [
      "Won 1st place in Project Expo at Ciencia2K24 among 50+ projects",
      "GPS-enabled emergency routing with Google Maps integration",
      "AI-driven incident classification for accelerated first-responder dispatch",
      "Family safety tracking circles and offline mesh emergency pinging"
    ]
  },
  {
    id: "ticketdesk",
    title: "TicketDesk — Full-Stack Ticket Management",
    category: "Full-Stack",
    shortDescription: "Enterprise-grade issue tracking and ticket resolution platform with role-based permissions, ticket lifecycles, and real-time activity audit trails.",
    fullDescription: "TicketDesk is built for IT teams and customer support organizations to streamline incident reporting, triaging, and resolution. Includes multi-tenant workspace architecture, role-based access control (Admin, Agent, Customer), dynamic SLA timers, and automated priority queues.",
    tags: ["Java", "Spring Boot", "React", "MySQL", "Tailwind CSS", "REST API"],
    featured: true,
    liveUrl: null, // Deployed on enterprise intranet
    githubUrl: "https://github.com/DILEEPSAJJA/TicketDesk",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    metrics: "Role-based access control with comprehensive audit logging",
    highlights: [
      "Modular Spring Boot REST backend with secure token authentication",
      "Kanban board & table views for interactive ticket lifecycle management",
      "Automated notifications and status transitions",
      "Optimized SQL schemas for fast filtering over large ticket sets"
    ]
  },
  {
    id: "finedge",
    title: "FinEdge — Enterprise Expense Management",
    category: "Full-Stack",
    shortDescription: "Modern corporate expense management application with multi-tier approval workflows, spending categorization, and visual financial analytics.",
    fullDescription: "FinEdge simplifies enterprise expenditure tracking by digitizing receipt ingestion, expense approvals, department budgets, and reimbursement cycles. Provides intuitive visual dashboards to help finance managers identify anomalies and track department budgets in real time.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Chart.js"],
    featured: false,
    liveUrl: null,
    githubUrl: "https://github.com/DILEEPSAJJA",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    metrics: "End-to-end receipt audit trail and approval pipeline",
    highlights: [
      "Custom chart visualizations for budget breakdowns and expense trends",
      "Multi-level approval chains (Manager, Department Head, Finance)",
      "CSV & PDF export capabilities for audit compliance",
      "Secure authentication with granular permission layers"
    ]
  },
  {
    id: "tatkal-assist",
    title: "Tatkal Assist — Browser Booking Extension",
    category: "Systems / Tools",
    shortDescription: "Cross-browser automation extension and booking simulator crafted to streamline high-concurrency ticket reservations with smart DOM autofill.",
    fullDescription: "Built to solve high-pressure, time-sensitive booking operations. Tatkal Assist securely holds pre-filled traveller credentials in local browser storage and uses MutationObserver-based DOM injection to populate forms instantaneously upon portal opening, saving critical seconds during peak rush windows.",
    tags: ["JavaScript (ES6+)", "Browser Extension API", "Chrome Manifest V3", "DOM Automation"],
    featured: false,
    liveUrl: null,
    githubUrl: "https://github.com/DILEEPSAJJA",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    metrics: "Saved ~15-20 seconds during high-concurrency booking rushes",
    highlights: [
      "Manifest V3 compliant extension with sandboxed execution",
      "High-speed DOM detection with zero layout thrashing",
      "Encrypted local credential store with immediate autofill hooks",
      "Booking simulator mode for testing and practicing timing without real transactions"
    ]
  },
  {
    id: "youngstar",
    title: "YoungStar — Real-Time Messaging & Calling",
    category: "Full-Stack",
    shortDescription: "Interactive communication platform supporting real-time messaging, dynamic chat rooms, and peer video calling with 99.9% uptime for 500+ users.",
    fullDescription: "YoungStar bridges the gap between collaborative workspaces and casual hangouts. It provides instant messaging channels, real-time message indicators, multimedia sharing, and audio/video calling using WebSockets and WebRTC.",
    tags: ["React", "Firebase", "WebSockets", "WebRTC", "Tailwind CSS"],
    featured: false,
    liveUrl: "https://youngstar.vercel.app/",
    githubUrl: "https://github.com/DILEEPSAJJA/YoungStar",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    metrics: "99.9% Uptime with 500+ active users",
    highlights: [
      "Real-time bidirectional message sync with Firebase and WebSockets",
      "One-on-one and group communication spaces",
      "Presence detection, typing status, and message read receipts",
      "Sleek dark theme interface optimized for all device sizes"
    ]
  },
  {
    id: "cartflow",
    title: "CartFlow — Modern E-Commerce Platform",
    category: "Full-Stack",
    shortDescription: "Full-featured online shopping platform with dynamic inventory filtering, real-time cart state, and smooth checkout experience.",
    fullDescription: "CartFlow demonstrates end-to-end e-commerce capabilities including catalog pagination, category multi-filtering, debounced search, persistent shopping bag state, and simulated payment gateways.",
    tags: ["React", "Java", "Tailwind CSS", "REST API", "Vercel"],
    featured: false,
    liveUrl: "https://cart-flow-six.vercel.app",
    githubUrl: "https://github.com/DILEEPSAJJA/CartFlow",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
    metrics: "Sub-100ms client-side cart updates & search response",
    highlights: [
      "Interactive cart with quantity adjustments and instant total tallying",
      "Category and price range faceted filters",
      "Clean responsive product cards with hover previews",
      "RESTful API data consumption with graceful error boundaries"
    ]
  },
  {
    id: "file-encrypt",
    title: "File Encrypt — Secure End-to-End Cryptography",
    category: "Systems / Tools",
    shortDescription: "Cryptographic utility application offering client-side AES-GCM file encryption and decryption paired with a high-performance Go backend.",
    fullDescription: "A security-first web application enabling users to protect confidential files before transferring them. Uses Web Cryptography API for client-side cryptographic hashing and encryption, ensuring unencrypted data never touches external network buffers.",
    tags: ["Go (Golang)", "Web Crypto API", "HTML5", "Vercel"],
    featured: false,
    liveUrl: "https://file-encrypt-frontend.vercel.app/",
    githubUrl: "https://github.com/DILEEPSAJJA/File_Encrypt",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    metrics: "Zero-knowledge client-side encryption in browser memory",
    highlights: [
      "Client-side AES-GCM 256-bit encryption before upload",
      "Go microservice backend for secure temporary storage and key generation",
      "Drag-and-drop file interface with real-time hash calculation",
      "Lightweight footprint with zero external runtime dependencies"
    ]
  }
];
