# VS Security Website - Design Memory

## Project Overview
- Dark-themed security company website (VS Security, Zimbabwe)
- Stack: React + Vite + Tailwind CSS + Framer Motion + React Router
- Entry: `src/pages/HomePage.jsx` contains all homepage sections as separate components

## Color Tokens (defined in `src/styles/index.css` as CSS variables)
- navy-500: #0B1D3A (mid background)
- navy-600: #091731
- navy-700: #071228 (card backgrounds)
- navy-800: #060F1F
- navy-900: #040A15 (primary dark background)
- navy-950: #02050A
- vs-yellow: #F5C518 (brand accent)

## Key Patterns
- Cards use `bg-navy-700/30` or `bg-navy-700/40` with `backdrop-blur-sm` over navy-900 sections
- `card-hover` class: translateY(-6px) on hover (defined in index.css)
- `gradient-border` class: pseudo-element gradient border effect (index.css)
- Font: `font-syne` for headings, system default for body
- Animations: Framer Motion `useInView` hook for scroll-triggered reveals
- Section pattern: `py-24 lg:py-32` vertical padding

## Component Library
- `SectionTitle` - reusable section header with label, title, subtitle
- `SecurityShieldGraphic`, `RadarGraphic`, `CircuitBG`, `FloatingShapes`, `ScanLine` - decorative components
- Custom hooks: `useInView`, `useCounter`, `useTypewriter`

## Data
- Services data in `src/data/siteData.js` - each has: id, icon (lucide-react), title, shortTitle, desc, longDesc, features[], image (Unsplash), stats
- Also: TESTIMONIALS, STATS, JOBS, SEO_DATA

## Design Decisions Log
- Service cards: Icon placed inline with title (not overlapping image edge) to avoid clipping
- Image-to-content gradient uses navy-700 hex (#071228) to match card bg-navy-700/40 composite
- Feature tags (3 max) shown as subtle pills for visual richness
