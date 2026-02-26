# VS Security Website - Design Memory

## Project Stack
- React 19 + Vite 7 + Tailwind CSS v4 + Framer Motion + React Router v7
- Source: `website/src/`, pages in `website/src/pages/`, components in `website/src/components/`
- Data: `website/src/data/siteData.js` (SERVICES, JOBS, TESTIMONIALS, NAV_GROUPS, etc.)

## Brand & Design Tokens
- Primary: navy (#0B1D3A range) from `--color-navy-50` to `--color-navy-950`
- Accent: yellow `--color-vs-yellow: #F5C518`, glow: `#FFD93D`, dark: `#D4A710`
- Fonts: `font-syne` (headings), `font-outfit` (body), `font-mono` (JetBrains Mono)
- Theme defined in `website/src/styles/index.css` using `@theme` block

## Component Patterns
- Custom CSS classes: `btn-primary`, `btn-secondary`, `card-service`, `card-hover`, `gradient-border`, `section-label`, `tag-vs`, `input-vs`
- Background patterns: `bg-grid`, `bg-dots`, `bg-diagonal`, `noise-overlay`
- Animations: `animate-float`, `animate-marquee`, `animate-scan-line`
- `SectionTitle` component for consistent section headers
- `ScanLine` component for animated overlay effects
- Custom hooks: `useInView`, `useCounter`, `useScrollPosition`, `useTypewriter`

## Unsplash Images Used (DO NOT REUSE these photo IDs)
Existing: 1486406146926, 1544197150, 1555848962, 1557597774, 1558002038, 1564013799919, 1604783020105, 1617244148472, 1621905252507, 1631016042018, 1633419798503, 1669049515462, 1675383094481, 1708807472445, 1760921678729, 1768837093480
Added: 1580678248677, 1570909776719, 1549109926, 1635554940866, 1601513043334, 1647866427893, 1672073311074, 1614508569207, 1758599543152, 1758873272809, 1758520144587, 1599361102574

## Key Components Added
- `WhatsAppButton` in `UI.jsx` - fixed bottom-left, WhatsApp green (#25D366)
- Leaflet map in `ContactPage.jsx` - dark Carto tiles, centered on Harare [-17.8252, 31.0335]
- All heroes now have blended background photos with 80-90% opacity navy overlays

## Responsive Design Notes
- Mobile touch targets: minimum 44px (w-11 h-11 or min-h-[48px])
- Safe area handling: `env(safe-area-inset-*)` for notched phones
- Mobile nav drawer: full viewport, `overscroll-contain`, rounded-lg link targets
