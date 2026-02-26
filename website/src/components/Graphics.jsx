import React from 'react'

/* ═══════════════════════════════════════════
   Security Shield Graphic
   ═══════════════════════════════════════════ */
export const SecurityShieldGraphic = ({ size = 200, className = '' }) => (
  <svg width={size} height={size * 1.2} viewBox="0 0 200 240" className={className}>
    <defs>
      <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5C518" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#F5C518" stopOpacity="0.15" />
      </linearGradient>
      <linearGradient id="innerGlow" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#F5C518" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#F5C518" stopOpacity="0.02" />
      </linearGradient>
    </defs>
    {/* Outer Shield */}
    <path d="M100 10 L185 50 L185 140 Q185 200 100 230 Q15 200 15 140 L15 50 Z"
      fill="none" stroke="url(#shieldGrad)" strokeWidth="2" />
    {/* Inner Shield */}
    <path d="M100 30 L170 62 L170 135 Q170 185 100 210 Q30 185 30 135 L30 62 Z"
      fill="url(#innerGlow)" stroke="rgba(245,197,24,0.12)" strokeWidth="1" />
    {/* Radar circles */}
    <circle cx="100" cy="120" r="50" fill="none" stroke="rgba(245,197,24,0.08)" strokeWidth="0.5" strokeDasharray="3 3" />
    <circle cx="100" cy="120" r="35" fill="none" stroke="rgba(245,197,24,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <circle cx="100" cy="120" r="20" fill="none" stroke="rgba(245,197,24,0.3)" strokeWidth="1" />
    {/* Center dot */}
    <circle cx="100" cy="120" r="4" fill="#F5C518" />
    <circle cx="100" cy="120" r="8" fill="none" stroke="#F5C518" strokeWidth="0.5" opacity="0.5" />
    {/* Cross hairs */}
    <line x1="100" y1="80" x2="100" y2="70" stroke="rgba(245,197,24,0.3)" strokeWidth="1" />
    <line x1="100" y1="160" x2="100" y2="170" stroke="rgba(245,197,24,0.3)" strokeWidth="1" />
    <line x1="60" y1="120" x2="50" y2="120" stroke="rgba(245,197,24,0.3)" strokeWidth="1" />
    <line x1="140" y1="120" x2="150" y2="120" stroke="rgba(245,197,24,0.3)" strokeWidth="1" />
    {/* Corner decorations */}
    <path d="M40 55 L40 50 L50 50" fill="none" stroke="rgba(245,197,24,0.2)" strokeWidth="1" />
    <path d="M160 55 L160 50 L150 50" fill="none" stroke="rgba(245,197,24,0.2)" strokeWidth="1" />
  </svg>
)

/* ═══════════════════════════════════════════
   Radar Graphic
   ═══════════════════════════════════════════ */
export const RadarGraphic = ({ size = 300, className = '' }) => (
  <div className={`relative ${className}`} style={{ width: size, height: size }}>
    <svg width={size} height={size} viewBox="0 0 300 300">
      <circle cx="150" cy="150" r="140" fill="none" stroke="rgba(245,197,24,0.05)" strokeWidth="1" />
      <circle cx="150" cy="150" r="110" fill="none" stroke="rgba(245,197,24,0.06)" strokeWidth="1" />
      <circle cx="150" cy="150" r="80" fill="none" stroke="rgba(245,197,24,0.08)" strokeWidth="1" />
      <circle cx="150" cy="150" r="50" fill="none" stroke="rgba(245,197,24,0.1)" strokeWidth="1" />
      <circle cx="150" cy="150" r="20" fill="none" stroke="rgba(245,197,24,0.15)" strokeWidth="1" />
      <line x1="150" y1="10" x2="150" y2="290" stroke="rgba(245,197,24,0.04)" strokeWidth="0.5" />
      <line x1="10" y1="150" x2="290" y2="150" stroke="rgba(245,197,24,0.04)" strokeWidth="0.5" />
      <line x1="45" y1="45" x2="255" y2="255" stroke="rgba(245,197,24,0.03)" strokeWidth="0.5" />
      <line x1="255" y1="45" x2="45" y2="255" stroke="rgba(245,197,24,0.03)" strokeWidth="0.5" />
    </svg>
    {/* Sweep line */}
    <div
      className="absolute inset-0 animate-radar-sweep"
      style={{
        background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(245,197,24,0.1) 30deg, transparent 60deg)',
      }}
    />
    {/* Blips */}
    <div className="absolute w-1.5 h-1.5 rounded-full bg-vs-yellow shadow-[0_0_10px_#F5C518]" style={{ top: '30%', left: '65%' }} />
    <div className="absolute w-1 h-1 rounded-full bg-vs-yellow/60 shadow-[0_0_8px_#F5C518]" style={{ top: '55%', left: '35%' }} />
    <div className="absolute w-1 h-1 rounded-full bg-vs-yellow/40 shadow-[0_0_6px_#F5C518]" style={{ top: '70%', left: '60%' }} />
  </div>
)

/* ═══════════════════════════════════════════
   Circuit Board Background
   ═══════════════════════════════════════════ */
export const CircuitBG = ({ className = '' }) => (
  <svg className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} viewBox="0 0 1200 800" preserveAspectRatio="none">
    <defs>
      <linearGradient id="circGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F5C518" stopOpacity="0.06" />
        <stop offset="100%" stopColor="#F5C518" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="circGrad2" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#F5C518" stopOpacity="0.04" />
        <stop offset="100%" stopColor="#F5C518" stopOpacity="0" />
      </linearGradient>
    </defs>
    {/* Vertical circuit lines */}
    {[0, 150, 300, 450, 600, 750, 900, 1050, 1200].map((x, i) => (
      <path key={`v${i}`}
        d={`M${x} 0 L${x} ${150 + (i % 3) * 80} L${x + 60} ${150 + (i % 3) * 80} L${x + 60} 800`}
        fill="none" stroke="url(#circGrad1)" strokeWidth="0.8" opacity={0.3 + (i % 4) * 0.08} />
    ))}
    {/* Horizontal lines */}
    {[0, 200, 400, 600, 800].map((y, i) => (
      <path key={`h${i}`}
        d={`M0 ${y} L${300 + i * 100} ${y} L${300 + i * 100} ${y + 40} L1200 ${y + 40}`}
        fill="none" stroke="url(#circGrad2)" strokeWidth="0.6" opacity={0.2 + (i % 3) * 0.05} />
    ))}
    {/* Junction dots */}
    {[
      [150, 150], [300, 310], [450, 230], [600, 390], [750, 150],
      [900, 470], [1050, 310], [200, 600], [500, 560], [800, 640]
    ].map(([x, y], i) => (
      <circle key={`d${i}`} cx={x} cy={y} r="2.5" fill="rgba(245,197,24,0.08)" />
    ))}
  </svg>
)

/* ═══════════════════════════════════════════
   Floating Geometric Shapes
   ═══════════════════════════════════════════ */
export const FloatingShapes = () => (
  <>
    <div className="absolute top-[20%] left-[8%] w-20 h-20 border border-vs-yellow/10 rounded-lg rotate-45 animate-float" />
    <div className="absolute bottom-[25%] left-[15%] w-12 h-12 border border-vs-yellow/5 rounded-full animate-float-delayed" />
    <div className="absolute top-[60%] right-[12%] w-16 h-16 border border-vs-yellow/[0.08] rotate-12 animate-float-slow" />
    <div className="absolute top-[15%] right-[20%] w-8 h-8 border border-vs-yellow/[0.06] rounded-sm rotate-[30deg] animate-float" style={{ animationDelay: '1s' }} />
    <div className="absolute bottom-[35%] right-[8%] w-6 h-6 bg-vs-yellow/[0.04] rounded-full animate-float-delayed" />
  </>
)

/* ═══════════════════════════════════════════
   Scan Line Overlay
   ═══════════════════════════════════════════ */
export const ScanLine = ({ duration = '3s' }) => (
  <div
    className="absolute left-0 w-full h-[2px] animate-scan-line pointer-events-none z-[5]"
    style={{
      background: 'linear-gradient(90deg, transparent, rgba(245,197,24,0.4), transparent)',
      animationDuration: duration,
    }}
  />
)
