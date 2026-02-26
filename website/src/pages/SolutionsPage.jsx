import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home, Building, Factory, Landmark, ArrowRight, CheckCircle,
  Camera, Bell, Wifi, Fingerprint, Zap, Users, Shield, Phone
} from 'lucide-react'
import { SectionTitle, ScanLine, CircuitBG } from '../components'
import { useInView } from '../hooks'
import { useSEO } from '../utils/seo'
import { SEO_DATA } from '../data/siteData'

const SolutionsPage = () => {
  useSEO(SEO_DATA.solutions)
  return (
    <>
      <HeroSection />
      <IndustrySelector />
      <TrustSection />
      <SolutionsCTA />
    </>
  )
}

const HeroSection = () => {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className="relative min-h-[70vh] flex items-center overflow-hidden clip-wave noise-overlay">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1635554940866-c3b4a67f0633?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-tl from-navy-900/90 via-navy-500/80 to-navy-700/85" />
      <div className="absolute inset-0 bg-dots bg-[size:20px_20px]" />
      <CircuitBG />
      <ScanLine duration="5s" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32"
      >
        <span className="section-label">Industry Solutions</span>
        <h1 className="font-syne text-5xl lg:text-7xl font-bold text-white mt-6 leading-tight">
          Tailored <span className="text-vs-yellow text-glow">Protection</span><br />
          for Every Sector
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mt-6">
          Every industry faces unique security challenges. We design bespoke solutions
          that address your sector's specific vulnerabilities and compliance requirements.
        </p>
      </motion.div>
    </section>
  )
}

const industries = [
  {
    id: 'residential',
    icon: Home,
    title: 'Residential Security',
    tagline: 'Protecting Families & Homes',
    desc: 'Your home should be your sanctuary. Our residential security systems provide comprehensive protection for your family, property, and peace of mind — from smart cameras to 24/7 alarm monitoring.',
    // Vision: Beautiful modern home at twilight with warm lights, subtle security camera visible on eave
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    solutions: [
      { icon: Camera, name: 'Home CCTV Systems', desc: 'HD cameras with mobile viewing, night vision, and smart alerts.' },
      { icon: Bell, name: 'Smart Alarm Systems', desc: 'Wireless alarms with app control, panic buttons, and 24/7 monitoring.' },
      { icon: Wifi, name: 'Smart Home Integration', desc: 'Connect your security with smart locks, lights, and automation.' },
      { icon: Zap, name: 'Perimeter Protection', desc: 'Electric fencing and motion sensors for complete boundary security.' },
    ],
    features: ['Mobile app monitoring', 'Instant push notifications', 'Neighbourhood watch integration', 'Pet-friendly sensors', 'Panic button support', 'Insurance-approved systems'],
  },
  {
    id: 'commercial',
    icon: Building,
    title: 'Commercial Security',
    tagline: 'Safeguarding Business Assets',
    desc: 'Protect your business, employees, and customers with enterprise-grade security. From retail shops to corporate headquarters, we design systems that deter crime and provide actionable intelligence.',
    // Vision: Modern glass office building entrance, clean corporate environment
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    solutions: [
      { icon: Camera, name: 'Enterprise CCTV', desc: 'Multi-site surveillance with centralized management and AI analytics.' },
      { icon: Fingerprint, name: 'Access Control', desc: 'Biometric and card-based systems with visitor management.' },
      { icon: Bell, name: 'Intrusion Detection', desc: 'Sophisticated alarm systems with zone-based monitoring.' },
      { icon: Users, name: 'Security Guards', desc: 'Trained officers for reception, patrol, and emergency response.' },
    ],
    features: ['Multi-location management', 'Employee access tracking', 'Visitor logs & analytics', 'Loss prevention systems', 'After-hours monitoring', 'Compliance reporting'],
  },
  {
    id: 'industrial',
    icon: Factory,
    title: 'Industrial Security',
    tagline: 'Protecting Critical Infrastructure',
    desc: 'Warehouses, factories, and critical infrastructure demand robust, resilient security. Our industrial solutions withstand harsh environments while providing comprehensive perimeter and interior protection.',
    // Vision: Large industrial warehouse/factory with security infrastructure visible
    image: 'https://images.unsplash.com/photo-1760921678729-9658c8b792bb?w=800&q=80',
    solutions: [
      { icon: Zap, name: 'Perimeter Fencing', desc: 'High-voltage electric fencing with zone-based breach detection.' },
      { icon: Camera, name: 'Industrial CCTV', desc: 'Ruggedized cameras rated for dust, moisture, and extreme temperatures.' },
      { icon: Fingerprint, name: 'Restricted Area Access', desc: 'Multi-factor authentication for sensitive zones and clean rooms.' },
      { icon: Bell, name: 'Fire & Safety Alarms', desc: 'Integrated fire detection with security system coordination.' },
    ],
    features: ['Explosion-proof cameras', 'Solar-powered options', 'Long-range detection', 'Vehicle tracking', 'Cargo monitoring', 'HSE compliance'],
  },
  {
    id: 'government',
    icon: Landmark,
    title: 'Government & Institutional',
    tagline: 'Securing Public Trust',
    desc: 'Government buildings, embassies, schools, and hospitals require the highest levels of security clearance and compliance. Our institutional solutions meet and exceed the most demanding standards.',
    // Vision: Imposing government or institutional building with security measures
    image: 'https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=800&q=80',
    solutions: [
      { icon: Camera, name: 'City Surveillance', desc: 'Networked camera systems for public spaces and critical infrastructure.' },
      { icon: Fingerprint, name: 'Secure Access', desc: 'Military-grade access control with multi-factor biometric verification.' },
      { icon: Users, name: 'Manned Security', desc: 'Vetted officers with government clearance and specialized training.' },
      { icon: Shield, name: 'Threat Assessment', desc: 'Comprehensive vulnerability assessments and risk mitigation planning.' },
    ],
    features: ['Government compliance', 'Encrypted communications', 'Anti-terrorism protocols', 'VIP protection', 'Crisis management', 'Audit trail logging'],
  },
]

const IndustrySelector = () => {
  const [ref, inView] = useInView()
  const [active, setActive] = useState(0)
  const current = industries[active]

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Select Your Sector"
          title={<>Security Built for <span className="text-vs-yellow">Your World</span></>}
        />

        {/* Industry Tabs */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {industries.map((ind, i) => (
            <motion.button
              key={ind.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActive(i)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl text-sm font-medium transition-all duration-300 ${
                active === i
                  ? 'bg-vs-yellow text-navy-800 shadow-lg glow-yellow'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <ind.icon size={20} />
              <div className="text-left">
                <div className="font-semibold">{ind.title.split(' ')[0]}</div>
                <div className={`text-xs ${active === i ? 'text-navy-800/60' : 'text-gray-500'}`}>
                  {ind.tagline}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Hero image + text */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative rounded-3xl overflow-hidden aspect-[16/10] bg-navy-600">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover opacity-70"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-transparent" />
                <ScanLine duration="4s" />
                <div className="absolute bottom-6 left-6">
                  <div className="tag-vs">
                    <current.icon size={14} className="text-vs-yellow" />
                    <span>{current.tagline}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-syne text-3xl lg:text-4xl font-bold text-white mb-4">
                  {current.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg mb-8">
                  {current.desc}
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {current.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-vs-yellow flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary">
                  Get a {current.title.split(' ')[0]} Quote <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Solution cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {current.solutions.map((sol, i) => (
                <motion.div
                  key={sol.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-navy-700/50 border border-white/5 card-hover backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-vs-yellow/10 flex items-center justify-center mb-4">
                    <sol.icon size={22} className="text-vs-yellow" />
                  </div>
                  <h4 className="font-syne font-bold text-white mb-2">{sol.name}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{sol.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

const TrustSection = () => {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1599361102574-5b935cf5a9c7?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy-500/[0.92]" />
      </div>
      <div className="absolute inset-0 bg-diagonal" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center"
        >
          <span className="section-label">Trusted Across Industries</span>
          <h2 className="font-syne text-4xl lg:text-5xl font-bold text-white mt-4 mb-12">
            Trusted by <span className="text-vs-yellow">500+</span> Clients Nationwide
          </h2>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '200+', label: 'Residential Clients' },
              { value: '180+', label: 'Commercial Clients' },
              { value: '80+', label: 'Industrial Sites' },
              { value: '40+', label: 'Government Contracts' },
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-navy-700/50 border border-white/5">
                <div className="font-syne text-3xl font-bold text-vs-yellow">{stat.value}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const SolutionsCTA = () => {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-vs-yellow via-yellow-500 to-amber-500" />
      <div className="absolute inset-0 bg-diagonal opacity-20" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
      >
        <h2 className="font-syne text-4xl lg:text-5xl font-bold text-navy-800 mb-6">
          Every Business Deserves<br />World-Class Security
        </h2>
        <p className="text-navy-800/70 text-lg max-w-2xl mx-auto mb-10">
          Let our industry specialists design a security solution tailored to your exact requirements.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="btn-vs px-10 py-4 rounded-xl bg-navy-800 text-vs-yellow font-bold text-lg flex items-center gap-3 shadow-2xl">
            Request Industry Assessment <ArrowRight size={20} />
          </Link>
          <a href="tel:0773486486" className="btn-vs px-10 py-4 rounded-xl bg-transparent text-navy-800 border-2 border-navy-800 font-bold text-lg flex items-center gap-3">
            <Phone size={20} /> 0773 486 486
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default SolutionsPage
