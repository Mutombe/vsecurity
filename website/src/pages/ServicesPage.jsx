import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle, Target, Layers, Cpu, Eye, Phone } from 'lucide-react'
import { SectionTitle, CircuitBG, ScanLine } from '../components'
import { useInView } from '../hooks'
import { useSEO } from '../utils/seo'
import { SERVICES, SEO_DATA } from '../data/siteData'

const ServicesPage = () => {
  useSEO(SEO_DATA.services)
  return (
    <>
      <HeroSection />
      <ServiceExplorer />
      <ProcessSection />
      <ServicesCTA />
    </>
  )
}

const HeroSection = () => {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className="relative min-h-[70vh] flex items-center overflow-hidden noise-overlay">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1549109926-58f039549485?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-bl from-navy-500/90 via-navy-900/85 to-navy-600/90" />
      <div className="absolute inset-0 bg-diagonal" />
      <CircuitBG />
      <ScanLine duration="5s" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24"
      >
        <span className="section-label">Our Solutions</span>
        <h1 className="font-syne text-5xl lg:text-7xl font-bold text-white mt-6 leading-tight">
          Security <span className="text-vs-yellow">Solutions</span><br />
          Engineered for <span className="text-vs-yellow">Excellence</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mt-6">
          From residential to enterprise — comprehensive protection systems designed,
          installed, and monitored by Zimbabwe's security leaders.
        </p>
      </motion.div>
    </section>
  )
}

/* Interactive tabbed service explorer */
const ServiceExplorer = () => {
  const [ref, inView] = useInView()
  const [active, setActive] = useState(0)

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Service Categories"
          title={<>Choose Your <span className="text-vs-yellow">Protection</span></>}
        />

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {SERVICES.map((svc, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                active === i
                  ? 'bg-vs-yellow text-navy-800 shadow-lg glow-yellow'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <svc.icon size={16} />
              <span className="hidden sm:inline">{svc.title}</span>
              <span className="sm:hidden">{svc.shortTitle}</span>
            </motion.button>
          ))}
        </div>

        {/* Detail View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Image */}
            {/* Vision: Each service gets a unique image showing that specific security
                solution in action — cameras being installed, alarm panels, wireless equipment,
                biometric scanners, electric fences, security guards on patrol */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-navy-600">
              <img
                src={SERVICES[active].image}
                alt={SERVICES[active].title}
                className="w-full h-full object-cover opacity-60"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-transparent" />
              <ScanLine duration="3s" />
              <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-vs-yellow/10 border border-vs-yellow/20">
                <span className="font-mono text-xs text-vs-yellow">
                  {String(active + 1).padStart(2, '0')} / {String(SERVICES.length).padStart(2, '0')}
                </span>
              </div>
              {/* Stat overlay */}
              <div className="absolute bottom-6 left-6 flex gap-4">
                {Object.entries(SERVICES[active].stats).map(([key, val], i) => (
                  <div key={i} className="px-4 py-2 rounded-xl bg-navy-800/80 backdrop-blur-sm border border-white/10">
                    <div className="text-xs text-gray-400 capitalize">{key}</div>
                    <div className="font-syne font-bold text-vs-yellow">{val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="w-16 h-16 rounded-2xl bg-vs-yellow/10 flex items-center justify-center mb-6">
                {(() => { const Icon = SERVICES[active].icon; return <Icon size={32} className="text-vs-yellow" /> })()}
              </div>
              <h3 className="font-syne text-3xl lg:text-4xl font-bold text-white mb-4">
                {SERVICES[active].title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                {SERVICES[active].longDesc}
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {SERVICES[active].features.map((f, i) => (
                  <motion.div
                    key={f}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-2 p-3 rounded-xl bg-white/5"
                  >
                    <CheckCircle size={14} className="text-vs-yellow flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{f}</span>
                  </motion.div>
                ))}
              </div>
              <Link to="/contact" className="btn-primary">
                Request This Service <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

/* Process Steps */
const ProcessSection = () => {
  const [ref, inView] = useInView()
  const steps = [
    { step: '01', icon: Target, title: 'Assessment', desc: 'Comprehensive site evaluation to identify vulnerabilities and security requirements.' },
    { step: '02', icon: Layers, title: 'Design', desc: 'Custom security architecture tailored to your specific needs and budget.' },
    { step: '03', icon: Cpu, title: 'Installation', desc: 'Professional installation by certified technicians with minimal disruption.' },
    { step: '04', icon: Eye, title: 'Monitoring', desc: '24/7 active monitoring with instant alerts and rapid response coordination.' },
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1614508569207-3295ac89d75f?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy-500/[0.92]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          label="Our Process"
          title={<>How We <span className="text-vs-yellow">Work</span></>}
          subtitle="From consultation to installation — a seamless journey to your security."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12 }}
              className="relative text-center p-8 rounded-2xl bg-navy-700/50 border border-white/5 backdrop-blur-sm"
            >
              <div className="font-mono text-5xl font-bold text-vs-yellow/10 mb-4">{p.step}</div>
              <div className="w-14 h-14 rounded-2xl bg-vs-yellow/10 flex items-center justify-center mx-auto mb-4">
                <p.icon size={24} className="text-vs-yellow" />
              </div>
              <h3 className="font-syne text-lg font-bold text-white mb-3">{p.title}</h3>
              <p className="text-gray-400 text-sm">{p.desc}</p>
              {i < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 text-vs-yellow/30 z-10">
                  <ArrowRight size={20} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ServicesCTA = () => {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className="py-24 bg-navy-900 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="max-w-3xl mx-auto px-4 sm:px-6 text-center"
      >
        <h2 className="font-syne text-4xl font-bold text-white mb-4">
          Not Sure What You <span className="text-vs-yellow">Need</span>?
        </h2>
        <p className="text-gray-400 mb-8">Our experts will assess your property and recommend the perfect security solution.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="btn-primary">Get Free Assessment <ArrowRight size={18} /></Link>
          <a href="tel:0773486486" className="btn-secondary"><Phone size={18} /> 0773 486 486</a>
        </div>
      </motion.div>
    </section>
  )
}

export default ServicesPage
