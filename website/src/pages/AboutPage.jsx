import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, Award, Cpu, HeartHandshake, ArrowRight, Users, Target, Globe } from 'lucide-react'
import { SectionTitle, ScanLine } from '../components'
import { useInView } from '../hooks'
import { useSEO } from '../utils/seo'
import { SEO_DATA, COMPANY } from '../data/siteData'

const AboutPage = () => {
  useSEO(SEO_DATA.about)

  return (
    <>
      <HeroSection />
      <MissionSection />
      <ValuesSection />
      <TimelineSection />
      <TeamSection />
      <JoinCTASection />
    </>
  )
}

/* Hero - Vision: Dramatic wide shot of VS Security team or HQ building */
const HeroSection = () => {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className="relative min-h-[75vh] flex items-center overflow-hidden clip-diagonal noise-overlay">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1570909776719-186852c5ea6f?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-500/80 to-navy-600/85" />
      <div className="absolute inset-0 bg-grid bg-[size:60px_60px]" />
      <ScanLine />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32"
      >
        <span className="section-label">About VS Security</span>
        <h1 className="font-syne text-5xl lg:text-7xl font-bold text-white mt-6 leading-tight">
          Where Quality<br /><span className="text-vs-yellow text-glow">Speaks</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-xl mt-6 leading-relaxed">
          Built on trust, powered by innovation. We're redefining security across Zimbabwe and beyond.
        </p>
      </motion.div>
    </section>
  )
}

/* Mission - Split layout: image + text */
/* Vision: Left image - interior of operations center or technician at work.
   Right side - company story with emphasis on growth and mission. */
const MissionSection = () => {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className="py-24 lg:py-32 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Our Mission</span>
            <h2 className="font-syne text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              Protecting Zimbabwe's <span className="text-vs-yellow">Future</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Founded with a singular vision — to make world-class security accessible to every Zimbabwean
              home and business. VS Security has grown from a passionate startup into the nation's most
              trusted security solutions provider.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              We believe that everyone deserves to feel safe. Our team of expert engineers, trained officers,
              and dedicated support staff work around the clock to ensure your peace of mind. We don't just
              install security systems — we build relationships founded on trust and excellence.
            </p>
            <p className="text-gray-400 leading-relaxed">
              With over {COMPANY.founded ? new Date().getFullYear() - COMPANY.founded : 15} years of experience and 500+ clients across Zimbabwe,
              our commitment to innovation and quality has made VS Security the preferred partner for
              individuals, businesses, and government institutions alike.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            {/* Vision: Professional security technician installing CCTV on a building,
                or a team photo of uniformed VS Security staff looking confident. */}
            <div className="rounded-3xl overflow-hidden aspect-square bg-navy-600">
              <img
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80"
                alt="VS Security team professional"
                className="w-full h-full object-cover opacity-70"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-navy-900 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1669049515462-6ab71c151720?w=400&q=80"
                alt="Security camera close-up"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-vs-yellow flex items-center justify-center shadow-lg glow-yellow">
              <div className="text-center">
                <div className="font-syne text-2xl font-bold text-navy-800">{new Date().getFullYear() - COMPANY.founded}+</div>
                <div className="text-[10px] font-bold text-navy-800/70">YEARS</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* Values - Icon cards grid */
const ValuesSection = () => {
  const [ref, inView] = useInView()
  const values = [
    { icon: Shield, title: 'Integrity', desc: 'Transparent operations and honest dealings with every client we serve. Your trust is our foundation.' },
    { icon: Award, title: 'Excellence', desc: 'Nothing but the highest standards in every installation, service call, and client interaction.' },
    { icon: Cpu, title: 'Innovation', desc: 'Continuously adopting cutting-edge technology to stay ahead of evolving security threats.' },
    { icon: HeartHandshake, title: 'Partnership', desc: 'Building lasting relationships founded on trust, respect, and mutual commitment to safety.' },
    { icon: Users, title: 'Teamwork', desc: 'Our success comes from the dedication and collaboration of every team member.' },
    { icon: Target, title: 'Precision', desc: 'Every installation is executed with meticulous attention to detail and engineering excellence.' },
    { icon: Globe, title: 'Community', desc: 'We are committed to making Zimbabwe a safer place for everyone, one client at a time.' },
    { icon: Shield, title: 'Reliability', desc: '24/7 availability and consistent service delivery you can always count on.' },
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1758599543152-a73184816eba?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy-500/[0.93]" />
      </div>
      <div className="absolute inset-0 bg-dots bg-[size:20px_20px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          label="Our Values"
          title={<>Built on <span className="text-vs-yellow">Principles</span></>}
          subtitle="The values that guide every decision and every interaction at VS Security."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center p-8 rounded-2xl bg-navy-700/50 border border-white/5 card-hover backdrop-blur-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-vs-yellow/10 flex items-center justify-center mx-auto mb-5">
                <v.icon size={26} className="text-vs-yellow" />
              </div>
              <h3 className="font-syne text-lg font-bold text-white mb-3">{v.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Timeline */
const TimelineSection = () => {
  const [ref, inView] = useInView()
  const milestones = [
    { year: '2009', title: 'Foundation', desc: 'VS Security established in Harare with a vision to revolutionize security services in Zimbabwe.' },
    { year: '2012', title: 'First Major Contract', desc: 'Secured our first enterprise-level security installation for a leading commercial complex.' },
    { year: '2015', title: '100+ Clients', desc: 'Reached our first major milestone of 100 protected clients across residential and commercial sectors.' },
    { year: '2018', title: 'Tech Revolution', desc: 'Integrated AI-powered analytics, smart surveillance, and IoT-connected security systems.' },
    { year: '2021', title: 'National Expansion', desc: 'Expanded operations to Bulawayo, Mutare, and other major cities across Zimbabwe.' },
    { year: '2024', title: '500+ Clients', desc: 'Surpassed 500 active clients, establishing VS Security as Zimbabwe\'s premier security provider.' },
  ]

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-navy-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle label="Our Journey" title={<>Milestones of <span className="text-vs-yellow">Growth</span></>} />
        <div className="relative">
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-vs-yellow/20" />
          {milestones.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative flex items-start mb-12 last:mb-0 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              <div className={`flex-1 ${i % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'} pl-16 lg:pl-0`}>
                <div className="font-mono text-vs-yellow text-sm mb-2">{item.year}</div>
                <h3 className="font-syne text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
              <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 w-5 h-5 rounded-full bg-vs-yellow border-4 border-navy-900 z-10 shadow-[0_0_10px_rgba(245,197,24,0.3)]" />
              <div className="flex-1 hidden lg:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Team - Vision: Professional headshots of leadership team against dark backgrounds */
const TeamSection = () => {
  const [ref, inView] = useInView()
  const team = [
    { name: 'Victor Sibanda', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1675383094481-3e2088da943b?w=400&q=80' },
    { name: 'Tendai Moyo', role: 'Director of Operations', img: 'https://images.unsplash.com/photo-1604783020105-a1c1a856a55d?w=400&q=80' },
    { name: 'Rudo Chigumba', role: 'Head of Technology', img: 'https://images.unsplash.com/photo-1633419798503-0b0c628f267c?w=400&q=80' },
    { name: 'Tinashe Dube', role: 'Chief Security Officer', img: 'https://images.unsplash.com/photo-1617244148472-3566e69ae9f8?w=400&q=80' },
  ]

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-navy-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle label="Leadership" title={<>Meet the <span className="text-vs-yellow">Team</span></>} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group card-hover"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-4">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="font-syne font-bold text-white text-lg">{m.name}</div>
                  <div className="text-vs-yellow text-sm">{m.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Join CTA */
const JoinCTASection = () => {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className="py-24 bg-navy-900 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="font-syne text-4xl font-bold text-white mb-4">
          Want to Join Our <span className="text-vs-yellow">Team</span>?
        </h2>
        <p className="text-gray-400 mb-8">
          We're always looking for talented individuals passionate about security and technology.
        </p>
        <Link to="/careers" className="btn-primary">
          View Open Positions <ArrowRight size={18} />
        </Link>
      </motion.div>
    </section>
  )
}

export default AboutPage
