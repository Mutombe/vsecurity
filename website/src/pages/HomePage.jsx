import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Shield, Camera, Lock, ShieldCheck, ArrowRight, Phone,
  CheckCircle, Star, Eye, Users, Award, Activity, Play,
  ChevronRight, ChevronLeft
} from 'lucide-react'
import { SectionTitle, SecurityShieldGraphic, RadarGraphic, CircuitBG, FloatingShapes, ScanLine } from '../components'
import { useInView, useCounter, useTypewriter } from '../hooks'
import { useSEO } from '../utils/seo'
import { SERVICES, TESTIMONIALS, STATS, SEO_DATA } from '../data/siteData'

const HomePage = () => {
  useSEO(SEO_DATA.home)

  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <StatsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <IndustriesSection />
      <CTASection />
    </>
  )
}

/* ═══════════════════════════════════════════
   HERO — Full-screen immersive hero
   Vision: Dark navy gradient background with circuit board patterns,
   a floating security shield graphic on the right, and bold typography.
   Background could feature a subtly animated surveillance-themed overlay.
   ═══════════════════════════════════════════ */
const HeroSection = () => {
  const [ref, inView] = useInView()
  const typedText = useTypewriter(
    ['Protection.', 'Security.', 'Peace of Mind.', 'Confidence.'],
    70, 2500
  )

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden noise-overlay">
      {/* Background layers */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1580678248677-720b056eb5cd?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-500/80 to-navy-600/85" />
      <div className="absolute inset-0 bg-grid bg-[size:60px_60px]" />
      <CircuitBG />
      <ScanLine />
      <FloatingShapes />

      {/* Subtle radial glow behind content */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-vs-yellow/[0.02] blur-[150px] pointer-events-none" />

      {/* Radar in background (desktop) */}
      <div className="absolute right-[-5%] top-[10%] opacity-20 hidden lg:block pointer-events-none">
        <RadarGraphic size={500} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status badge */}
            <div className="tag-vs mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vs-yellow opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-vs-yellow" />
              </span>
              <span>ALWAYS VIGILANT • 24/7 MONITORING</span>
            </div>

            {/* Main heading */}
            <h1 className="font-syne text-hero font-bold leading-[1.05] mb-6">
              <span className="text-white">Total</span>
              <br />
              <span className="text-vs-yellow text-glow inline-block min-h-[1.2em]">
                {typedText}<span className="animate-pulse text-vs-yellow/60">|</span>
              </span>
            </h1>

            <p className="text-gray-400 text-lg lg:text-xl max-w-lg mb-10 leading-relaxed">
              Your assets are important — make sure they're protected with Zimbabwe's most
              trusted security solutions. We integrate the latest technologies for complete,
              uncompromising protection.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="btn-primary glow-yellow">
                Explore Solutions <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-secondary">
                <Phone size={18} /> Contact Us
              </Link>
            </div>

            {/* Mini stats */}
            <div className="flex items-center gap-6 sm:gap-8 mt-12 pt-8 border-t border-white/5">
              {[
                { val: '500+', label: 'Clients Protected' },
                { val: '15+', label: 'Years Experience' },
                { val: '99.9%', label: 'Uptime Rate' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="font-syne text-xl sm:text-2xl font-bold text-vs-yellow">{s.val}</div>
                  <div className="text-[11px] sm:text-xs text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Shield graphic (desktop) */}
          {/* Vision: Large animated shield with floating icon bubbles around it,
              representing different security services. Connection lines link them together
              like a security network. */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <SecurityShieldGraphic size={350} className="animate-float" />

              {/* Orbiting service icons */}
              {[
                { Icon: Camera, color: 'yellow', pos: '-top-4 -right-4', delay: '1s' },
                { Icon: Lock, color: 'blue', pos: 'top-1/3 -left-10', delay: '2s' },
                { Icon: ShieldCheck, color: 'green', pos: '-bottom-2 right-8', delay: '3s' },
                { Icon: Eye, color: 'purple', pos: 'top-[15%] right-[-8%]', delay: '4s' },
              ].map(({ Icon, color, pos, delay }, i) => (
                <div
                  key={i}
                  className={`absolute ${pos} w-14 h-14 rounded-2xl border flex items-center justify-center animate-float`}
                  style={{
                    animationDelay: delay,
                    backgroundColor: color === 'yellow' ? 'rgba(245,197,24,0.1)' :
                                     color === 'blue' ? 'rgba(59,130,246,0.1)' :
                                     color === 'green' ? 'rgba(34,197,94,0.1)' :
                                     'rgba(168,85,247,0.1)',
                    borderColor: color === 'yellow' ? 'rgba(245,197,24,0.2)' :
                                 color === 'blue' ? 'rgba(59,130,246,0.2)' :
                                 color === 'green' ? 'rgba(34,197,94,0.2)' :
                                 'rgba(168,85,247,0.2)',
                  }}
                >
                  <Icon size={22} style={{
                    color: color === 'yellow' ? '#F5C518' :
                           color === 'blue' ? '#3B82F6' :
                           color === 'green' ? '#22C55E' :
                           '#A855F7'
                  }} />
                </div>
              ))}

              {/* Connection lines SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 480">
                <line x1="330" y1="50" x2="260" y2="100" stroke="rgba(245,197,24,0.12)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="30" y1="160" x2="100" y2="180" stroke="rgba(59,130,246,0.12)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="320" y1="400" x2="260" y2="350" stroke="rgba(34,197,94,0.12)" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent pointer-events-none" />
    </section>
  )
}

/* ═══════════════════════════════════════════
   MARQUEE — Infinite scrolling text strip
   ═══════════════════════════════════════════ */
const MarqueeSection = () => (
  <section className="py-6 bg-navy-900 border-y border-white/5 overflow-hidden">
    <div className="flex whitespace-nowrap animate-marquee">
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex items-center gap-12 mr-12">
          {['TOTAL PROTECTION', 'TOTAL SECURITY', 'TOTAL PEACE OF MIND', '24/7 MONITORING', 'SMART SURVEILLANCE', 'TRUSTED PARTNER', 'WHERE QUALITY SPEAKS'].map((t, j) => (
            <span key={j} className="flex items-center gap-4">
              <span className="font-syne text-lg sm:text-xl font-bold text-white/[0.07] tracking-wider">{t}</span>
              <Shield size={14} className="text-vs-yellow/20" />
            </span>
          ))}
        </div>
      ))}
    </div>
  </section>
)

/* ═══════════════════════════════════════════
   SERVICES — Premium card grid with blended images
   Each card features a top image that fades seamlessly into the content
   area via a strong gradient. Icons sit cleanly within the content zone.
   ═══════════════════════════════════════════ */
const ServicesSection = () => {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-navy-900 bg-diagonal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Our Solutions"
          title={<>Comprehensive Security <span className="text-vs-yellow">Ecosystem</span></>}
          subtitle="From surveillance cameras to armed response — we deliver end-to-end security solutions tailored to protect what matters most."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to="/services" className="group relative block rounded-2xl overflow-hidden border border-white/[0.06] h-full bg-navy-700/40 backdrop-blur-sm card-hover">
                {/* Image section with generous gradient fade */}
                <div className="relative h-52 sm:h-48 overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Multi-layer gradient for a smooth, deep fade into card body */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071228] via-[#071228]/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#071228] to-transparent" />
                </div>

                {/* Content section */}
                <div className="relative p-6 pt-2 -mt-6">
                  {/* Icon + Title row */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-vs-yellow/10 border border-vs-yellow/20 flex items-center justify-center flex-shrink-0 group-hover:bg-vs-yellow/20 group-hover:border-vs-yellow/30 transition-all duration-300">
                      <svc.icon size={18} className="text-vs-yellow" />
                    </div>
                    <h3 className="font-syne text-lg font-bold text-white group-hover:text-vs-yellow transition-colors duration-300 leading-tight">
                      {svc.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{svc.desc}</p>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {svc.features.slice(0, 3).map((f, j) => (
                      <span key={j} className="text-[11px] text-gray-500 bg-white/[0.04] border border-white/[0.06] rounded-md px-2 py-0.5">
                        {f}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-2 text-vs-yellow text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    Learn more <ArrowRight size={14} />
                  </span>
                </div>

                {/* Subtle top-edge glow on hover */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-vs-yellow/0 to-transparent group-hover:via-vs-yellow/20 transition-all duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   STATS — Animated counters section
   Vision: Full-width dark gradient with connected-dot pattern in background,
   large animated numbers with icons and supporting labels.
   ═══════════════════════════════════════════ */
const StatsSection = () => {
  const [ref, inView] = useInView()
  const counters = STATS.map(s => useCounter(s.value, 2000, inView))

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-r from-navy-500 via-navy-400 to-navy-500 overflow-hidden">
      <div className="absolute inset-0 bg-dots bg-[size:20px_20px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {STATS.map((s, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-vs-yellow/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-vs-yellow/20 transition-all duration-500">
                <s.icon size={28} className="text-vs-yellow" />
              </div>
              <div className="font-syne text-4xl lg:text-5xl font-bold text-white">
                {counters[i]}<span className="text-vs-yellow">{s.suffix}</span>
              </div>
              <div className="text-gray-400 text-sm mt-2">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   WHY US — Split layout with image + features
   Vision: Left side shows a modern security control room with monitors,
   operators, blue ambient lighting. Right side has compelling copy with
   animated checkmark features list.
   ═══════════════════════════════════════════ */
const WhyUsSection = () => {
  const [ref, inView] = useInView()

  const features = [
    'Advanced AI-powered threat detection',
    'Rapid response teams across all major cities',
    'Custom security architecture for every client',
    'Real-time mobile monitoring & alerts',
    'ISO certified installation standards',
    'Dedicated account managers',
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-navy-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          {/* Vision: Security control room with multiple monitors displaying live feeds,
              an operator at a workstation, professional blue-tinted ambient lighting,
              modern equipment and clean workspace. */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80"
                alt="VS Security control room monitoring center"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent" />
              <ScanLine duration="4s" />

              {/* Overlay stats card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-2xl bg-navy-500/90 backdrop-blur-xl border border-white/10">
                <div className="flex items-center justify-between gap-4">
                  {[
                    { label: 'Systems Active', value: '2,847', color: 'text-green-400' },
                    { label: 'Threats Blocked', value: '12.4K', color: 'text-vs-yellow' },
                    { label: 'Response Time', value: '<3min', color: 'text-blue-400' },
                  ].map((stat, i) => (
                    <div key={i} className={i > 0 ? 'hidden sm:block' : ''}>
                      <div className="text-[10px] sm:text-xs text-gray-400 mb-1">{stat.label}</div>
                      <div className={`font-syne text-lg sm:text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative corner element */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-vs-yellow/20 rounded-tl-lg" />
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-vs-yellow/20 rounded-br-lg" />
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">Why Choose Us</span>
            <h2 className="font-syne text-section font-bold text-white mt-4 mb-6 leading-tight">
              Security That <span className="text-vs-yellow">Never Sleeps</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              At VS Security, we don't just install systems — we build protective ecosystems.
              Our integrated approach combines cutting-edge technology with human expertise
              to deliver security that adapts to every threat.
            </p>

            <div className="space-y-4">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-vs-yellow/10 flex items-center justify-center flex-shrink-0 group-hover:bg-vs-yellow/20 transition-all">
                    <CheckCircle size={14} className="text-vs-yellow" />
                  </div>
                  <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>

            <Link to="/about" className="btn-primary mt-10">
              Discover Our Story <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   TESTIMONIALS — Carousel with large quote card
   Vision: Dark section with subtle shield watermark in background.
   Large testimonial card with quote marks, star ratings, and
   smooth slide transitions between testimonials.
   ═══════════════════════════════════════════ */
const TestimonialsSection = () => {
  const [ref, inView] = useInView()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % TESTIMONIALS.length), 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-navy-500 overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-[size:60px_60px] opacity-50" />
      {/* Large shield watermark */}
      <div className="absolute right-[5%] top-[10%] opacity-[0.02] pointer-events-none">
        <SecurityShieldGraphic size={600} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          label="Testimonials"
          title={<>What Our Clients <span className="text-vs-yellow">Say</span></>}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="relative bg-navy-700/50 rounded-3xl p-8 lg:p-12 border border-white/5 backdrop-blur-sm">
            {/* Quote icon */}
            <svg className="absolute top-6 left-8 opacity-[0.06]" width="60" height="60" viewBox="0 0 24 24" fill="#F5C518">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-vs-yellow fill-vs-yellow" />
                ))}
              </div>

              {/* Quote text */}
              <div className="min-h-[120px]">
                <motion.p
                  key={current}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-xl lg:text-2xl text-gray-200 leading-relaxed font-light italic"
                >
                  "{TESTIMONIALS[current].text}"
                </motion.p>
              </div>

              {/* Attribution + controls */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
                <motion.div key={`name-${current}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="font-syne font-bold text-white text-lg">{TESTIMONIALS[current].name}</div>
                  <div className="text-gray-400 text-sm">{TESTIMONIALS[current].role}</div>
                </motion.div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setCurrent(p => p === 0 ? TESTIMONIALS.length - 1 : p - 1)}
                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => setCurrent(p => (p + 1) % TESTIMONIALS.length)}
                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* Dots */}
              <div className="flex gap-2 mt-6 justify-center">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      i === current ? 'bg-vs-yellow w-8' : 'bg-white/20 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   INDUSTRIES — Sectors we serve
   Vision: Grid of industry cards with background images and overlay text.
   Each card shows a different sector (Residential, Commercial, Industrial, Government).
   ═══════════════════════════════════════════ */
const IndustriesSection = () => {
  const [ref, inView] = useInView()

  const industries = [
    {
      title: 'Residential',
      desc: 'Smart home security systems protecting families and properties with seamless automation.',
      // Vision: Modern house exterior at twilight with warm interior lights, security camera visible
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80',
    },
    {
      title: 'Commercial',
      desc: 'Enterprise-grade protection for offices, retail spaces, and commercial complexes.',
      // Vision: Modern glass office building entrance, clean and professional
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    },
    {
      title: 'Industrial',
      desc: 'Robust security solutions for warehouses, factories, and critical infrastructure.',
      // Vision: Industrial facility/warehouse with security infrastructure visible
      image: 'https://images.unsplash.com/photo-1760921678729-9658c8b792bb?w=600&q=80',
    },
    {
      title: 'Government',
      desc: 'High-security solutions meeting the most demanding government standards.',
      // Vision: Government/institutional building, imposing and secure
      image: 'https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=600&q=80',
    },
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-navy-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Industries"
          title={<>Protecting Every <span className="text-vs-yellow">Sector</span></>}
          subtitle="Tailored security solutions for every environment and industry."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <Link to="/solutions" className="group block relative rounded-2xl overflow-hidden aspect-[3/4] card-hover">
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-syne text-xl font-bold text-white mb-2">{ind.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {ind.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   CTA — Bold call-to-action section
   Vision: Vibrant yellow gradient background with dark text. Dramatic
   and urgent. Background has subtle diagonal line patterns.
   ═══════════════════════════════════════════ */
const CTASection = () => {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-vs-yellow via-yellow-500 to-amber-500" />
      <div className="absolute inset-0 bg-diagonal opacity-20" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
      >
        <Shield size={48} className="text-navy-800 mx-auto mb-6 opacity-30" />
        <h2 className="font-syne text-4xl lg:text-6xl font-bold text-navy-800 mb-6">
          Ready to Secure<br />Your World?
        </h2>
        <p className="text-navy-800/70 text-lg max-w-2xl mx-auto mb-10">
          Don't leave your safety to chance. Get a free security assessment from our experts
          and discover how VS Security can protect what matters most.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="btn-vs px-10 py-4 rounded-xl bg-navy-800 text-vs-yellow font-bold text-lg flex items-center gap-3 shadow-2xl hover:shadow-navy-800/40">
            Get Free Assessment <ArrowRight size={20} />
          </Link>
          <a href="tel:0773486486" className="btn-vs px-10 py-4 rounded-xl bg-transparent text-navy-800 border-2 border-navy-800 font-bold text-lg flex items-center gap-3">
            <Phone size={20} /> 0773 486 486
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default HomePage
