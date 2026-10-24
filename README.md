# Premium Multi-Page Developer Portfolio

A modern, production-grade personal portfolio website for **SAJJA DILEEP** built with **React**, **Vite**, **Tailwind CSS**, **React Router DOM**, **Framer Motion**, and **Lucide React**.

## 🌟 Highlights & Features

- **Genuine Multi-Page Architecture**:
  - `/` — Clean, impactful **Home** introducing Dileep Sajja with his authentic portrait photo, headline, quick metrics, and call-to-actions. Does not dump all content onto one page.
  - `/profile` — Comprehensive **Profile** featuring full legal name, headline, summary, categorized technical skills (Languages, Frontend, Backend, Cloud & Tools), social & coding profiles (GitHub, LinkedIn, LeetCode, HackerRank, CodeChef), and interactive address privacy toggle.
  - `/projects` — Interactive **Projects Gallery** with live category filters, search bar, and custom `ProjectCard` components showcasing FLEW, HelpEZ, TicketDesk, FinEdge, Tatkal Assist, YoungStar, CartFlow, and File Encrypt with visible **Live Demo** & **GitHub** buttons plus a details modal.
  - `/certificates` — Visual **Certificates Gallery** displaying real credentials (NIT Warangal, AWS Simplilearn, HackerRank SQL) with modal lightbox previews and external verification links.
  - `/education` — **Academic Journey** timeline covering B.Tech (CVR College of Engineering, IT, 8.56 CGPA), Intermediate (Tirumala Junior College, MPC), and 10th Grade (Pragati Little Public School).
  - `/experience` — **Career Timeline** detailing roles at Independent Initiatives, Salesforce Developer Virtual Internship, IngenuITy Organizational Secretary, and Theatre Club Treasurer.
  - `/achievements` — **Honors & Competitions** covering CIG & OFC tracks, National HackFusion 1st Place (100 teams), and Ciencia 2K24 Project Expo 1st Place.
  - `/*` — Custom **404 Not Found** page with smooth return navigation to Home.
- **Aesthetics & UI/UX**:
  - Dark charcoal canvas (`#06080D`) with glassmorphic cards and electric violet & cyan accents.
  - Ambient hardware-accelerated background glows and subtle floating availability badge ("Available for New Opportunities").
  - Animated navigation indicator tracking the active page with Framer Motion.
  - Mobile responsive drawer menu with auto-close on navigation.
  - Automatic scroll restoration to top on route change.
  - Respects user's `prefers-reduced-motion` settings.
- **SEO & Performance**:
  - Route-level code splitting with `React.lazy` and `Suspense`.
  - Dynamic page titles and meta tags.
  - `vercel.json` and Netlify `_redirects` SPA rewrite configurations.

---

## 📁 Project Architecture & Folder Structure

```text
Portfolio/
├── public/
│   ├── certificates/          # Real certificate scans (NIT, AWS, SQL)
│   ├── images/                # Real profile portraits
│   ├── _redirects             # Netlify SPA rewrite rules
│   ├── favicon.svg            # Custom modern monogram favicon
│   └── resume.pdf             # Authentic Curriculum Vitae
├── src/
│   ├── assets/                # Bundled images & assets
│   ├── components/            # Reusable UI components
│   │   ├── BrandIcons.jsx     # High-fidelity SVG icons (GitHub, LinkedIn, LeetCode, etc.)
│   │   ├── CertificateCard.jsx
│   │   ├── CertificateModal.jsx
│   │   ├── EducationTimeline.jsx
│   │   ├── ExperienceCard.jsx
│   │   ├── AchievementCard.jsx
│   │   ├── FloatingElements.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── PageTransition.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── SectionHeading.jsx
│   │   └── SocialLinks.jsx
│   ├── data/                  # Centralized content data files
│   │   ├── achievements.js
│   │   ├── certificates.js
│   │   ├── education.js
│   │   ├── experience.js
│   │   ├── profile.js
│   │   └── projects.js
│   ├── layouts/
│   │   └── MainLayout.jsx     # Shared shell (Navbar, Outlet, Footer, Floating Elements)
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Profile.jsx
│   │   ├── Projects.jsx
│   │   ├── Certificates.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Achievements.jsx
│   │   └── NotFound.jsx
│   ├── routes/
│   │   └── AppRouter.jsx      # Code-split routing configuration
│   ├── App.jsx
│   ├── index.css              # Design system & glassmorphism tokens
│   └── main.jsx
├── tailwind.config.js
├── vercel.json                # Vercel SPA rewrite configuration
└── package.json
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Running Locally (Development)

```bash
npm run dev
```

Visit `http://localhost:5173/` in your browser.

### Creating Production Build

```bash
npm run build
```

The optimized static assets will be output to the `dist/` directory.

### Previewing Production Build Locally

```bash
npm run preview
```

---

## ✏️ Editing Portfolio Content

All content is managed through isolated JavaScript files in `src/data/`:

| Data File | Description |
|---|---|
| `src/data/profile.js` | Name, title, bio, address privacy toggle, skills list, coding platform URLs |
| `src/data/projects.js` | Projects catalog, categories, GitHub repos, live URLs, metrics, highlights |
| `src/data/certificates.js` | Certificates list, issuers, dates, image paths, verification URLs |
| `src/data/education.js` | B.Tech, Intermediate, 10th standard timelines, CGPA, coursework |
| `src/data/experience.js` | Career timeline, roles, employment types, responsibilities, skills |
| `src/data/achievements.js` | Competitions, CIG & OFC tracks, awards, dates, and badges |

---

## 🚀 Deployment

### Deploying to Vercel

The included `vercel.json` already contains the SPA routing configuration:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

1. Push your repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Set Framework Preset to **Vite**.
4. Click **Deploy**. Direct visits and page refreshes on all routes (`/projects`, `/profile`, etc.) will work out of the box.

### Deploying to Netlify

The included `public/_redirects` file automatically configures Netlify SPA routing:

```text
/*    /index.html   200
```
