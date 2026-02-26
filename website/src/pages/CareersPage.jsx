import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Award, Users, Zap, MapPin, Clock, ChevronDown, Send, ArrowRight, Shield, Heart, BookOpen, TrendingUp } from 'lucide-react'
import { SectionTitle, ScanLine } from '../components'
import { useInView } from '../hooks'
import { useSEO } from '../utils/seo'
import { JOBS, SEO_DATA } from '../data/siteData'

const CareersPage = () => {
  useSEO(SEO_DATA.careers)
  return (
    <>
      <HeroSection />
      <CultureSection />
      <BenefitsSection />
      <JobsSection />
      <ApplicationCTA />
    </>
  )
}

const HeroSection = () => {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className="relative min-h-[70vh] flex items-center overflow-hidden clip-diagonal-reverse noise-overlay">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1601513043334-36a0088140d4?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/90 via-navy-500/80 to-[#1a3560]/85" />
      <div className="absolute inset-0 bg-dots bg-[size:20px_20px]" />
      <ScanLine duration="4s" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32"
      >
        <span className="section-label">Join Our Team</span>
        <h1 className="font-syne text-5xl lg:text-7xl font-bold text-white mt-6 leading-tight">
          Build Your Career<br />in <span className="text-vs-yellow text-glow">Security</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-xl mt-6">
          Join Zimbabwe's leading security company and make a real difference in protecting communities.
        </p>
      </motion.div>
    </section>
  )
}

const CultureSection = () => {
  const [ref, inView] = useInView()
  const pillars = [
    { icon: Award, title: 'Growth & Learning', desc: 'Continuous professional development, certifications, and career advancement pathways for every team member.' },
    { icon: Users, title: 'Inclusive Culture', desc: 'A diverse, supportive team environment where every voice matters and contributions are recognized and valued.' },
    { icon: Zap, title: 'Cutting-Edge Tech', desc: 'Work with the latest security technologies — from AI analytics to IoT systems — and help shape the industry.' },
  ]

  return (
    <section ref={ref} className="relative py-24 bg-navy-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle label="Why VS Security" title={<>A Place Where You <span className="text-vs-yellow">Thrive</span></>} />

        {/* Culture image + cards grid */}
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="hidden lg:block lg:col-span-2 relative rounded-3xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1758873272809-7947b9a73fe5?w=800&q=80"
              alt="Colleagues collaborating on a project"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="tag-vs">
                <span>GROWING TOGETHER</span>
              </div>
            </div>
          </motion.div>

          {/* Cards column */}
          <div className="lg:col-span-3 grid gap-6">
            {pillars.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className="p-8 rounded-2xl bg-navy-500 border border-white/5 card-hover"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-vs-yellow/10 flex items-center justify-center flex-shrink-0">
                    <v.icon size={26} className="text-vs-yellow" />
                  </div>
                  <div>
                    <h3 className="font-syne text-xl font-bold text-white mb-3">{v.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const BenefitsSection = () => {
  const [ref, inView] = useInView()
  const benefits = [
    { icon: Heart, title: 'Medical Aid', desc: 'Comprehensive medical coverage for you and your family.' },
    { icon: TrendingUp, title: 'Career Growth', desc: 'Clear progression paths with regular reviews.' },
    { icon: BookOpen, title: 'Training', desc: 'Paid certifications and continuous learning.' },
    { icon: Shield, title: 'Life Insurance', desc: 'Life insurance and pension contributions.' },
  ]

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1758520144587-3ac9072573c5?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy-500/[0.93]" />
      </div>
      <div className="absolute inset-0 bg-diagonal" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle label="Benefits" title={<>What We <span className="text-vs-yellow">Offer</span></>} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-navy-700/50 border border-white/5"
            >
              <div className="w-11 h-11 rounded-xl bg-vs-yellow/10 flex items-center justify-center flex-shrink-0">
                <b.icon size={20} className="text-vs-yellow" />
              </div>
              <div>
                <h4 className="font-syne font-bold text-white mb-1">{b.title}</h4>
                <p className="text-gray-400 text-sm">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const JobsSection = () => {
  const [ref, inView] = useInView()
  const [expanded, setExpanded] = useState(null)

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-navy-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle label="Open Positions" title={<>Current <span className="text-vs-yellow">Opportunities</span></>} />
        <div className="space-y-4">
          {JOBS.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl bg-navy-700/50 border border-white/5 overflow-hidden card-hover backdrop-blur-sm"
            >
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left"
              >
                <div className="flex-1">
                  <h3 className="font-syne text-lg font-bold text-white mb-1">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3 text-sm">
                    <span className="text-vs-yellow font-medium">{job.dept}</span>
                    <span className="text-gray-600 hidden sm:inline">•</span>
                    <span className="text-gray-400 flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                    <span className="text-gray-600 hidden sm:inline">•</span>
                    <span className="text-gray-400 flex items-center gap-1"><Clock size={12} /> {job.type}</span>
                  </div>
                </div>
                <ChevronDown size={20} className={`text-gray-400 transition-transform duration-300 ml-4 flex-shrink-0 ${expanded === i ? 'rotate-180' : ''}`} />
              </button>
              {expanded === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="px-6 pb-6 border-t border-white/5 pt-4"
                >
                  <p className="text-gray-400 mb-4">{job.desc}</p>
                  {job.requirements && (
                    <div className="mb-5">
                      <h4 className="text-sm font-semibold text-white mb-2">Requirements:</h4>
                      <ul className="space-y-1.5">
                        {job.requirements.map((req, ri) => (
                          <li key={ri} className="flex items-start gap-2 text-gray-400 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-vs-yellow mt-1.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <button className="btn-primary !px-6 !py-3 text-sm">
                    Apply Now <Send size={14} />
                  </button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ApplicationCTA = () => {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className="py-20 bg-navy-900 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="max-w-3xl mx-auto px-4 text-center"
      >
        <h2 className="font-syne text-3xl font-bold text-white mb-4">
          Don't See Your <span className="text-vs-yellow">Role</span>?
        </h2>
        <p className="text-gray-400 mb-8">Send us your CV — we're always looking for exceptional talent.</p>
        <Link to="/contact" className="btn-primary">
          Send Your CV <ArrowRight size={18} />
        </Link>
      </motion.div>
    </section>
  )
}

export default CareersPage
