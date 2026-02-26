import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, Facebook, Twitter, Linkedin, Instagram, CheckCircle, ArrowRight } from 'lucide-react'
import { toast, Toaster } from 'sonner'
import { SectionTitle, ScanLine } from '../components'
import { useInView } from '../hooks'
import { useSEO } from '../utils/seo'
import { SERVICES, SEO_DATA, COMPANY } from '../data/siteData'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

/* Fix Leaflet default marker icon path issue with bundlers */
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

const ContactPage = () => {
  useSEO(SEO_DATA.contact)
  return (
    <>
      <Toaster position="bottom-right" theme="dark" richColors />
      <HeroSection />
      <ContactFormSection />
      <MapSection />
      <FAQSection />
    </>
  )
}

const HeroSection = () => {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className="relative min-h-[60vh] flex items-center overflow-hidden noise-overlay">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1647866427893-0057366e91b7?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-500/80 to-navy-900/90" />
      <div className="absolute inset-0 bg-grid bg-[size:60px_60px]" />
      <ScanLine duration="6s" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center"
      >
        <span className="section-label">Get In Touch</span>
        <h1 className="font-syne text-5xl lg:text-7xl font-bold text-white mt-6">
          Let's <span className="text-vs-yellow text-glow">Protect</span> You
        </h1>
        <p className="text-gray-400 text-xl max-w-xl mx-auto mt-6">
          Ready to secure your property? Get a free comprehensive assessment today.
        </p>
      </motion.div>
    </section>
  )
}

const ContactFormSection = () => {
  const [ref, inView] = useInView()
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      toast.success('Request sent successfully! We\'ll be in touch within 24 hours.', { duration: 5000 })
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      setLoading(false)
    }, 1500)
  }

  const update = (field, value) => setFormData(prev => ({ ...prev, [field]: value }))

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="lg:col-span-2"
          >
            <h2 className="font-syne text-3xl font-bold text-white mb-8">
              Contact <span className="text-vs-yellow">Information</span>
            </h2>
            <div className="space-y-5">
              {[
                { icon: Phone, label: 'Call Us', value: COMPANY.phone, href: `tel:${COMPANY.phoneIntl}` },
                { icon: Mail, label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
                { icon: MapPin, label: 'Head Office', value: COMPANY.address },
                { icon: Clock, label: 'Working Hours', value: COMPANY.hours },
              ].map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  {c.href ? (
                    <a href={c.href} className="flex items-start gap-4 group p-4 rounded-xl hover:bg-white/5 transition-all">
                      <div className="w-12 h-12 rounded-xl bg-vs-yellow/10 flex items-center justify-center flex-shrink-0 group-hover:bg-vs-yellow/20 transition-all">
                        <c.icon size={20} className="text-vs-yellow" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">{c.label}</div>
                        <div className="text-white font-medium">{c.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 p-4">
                      <div className="w-12 h-12 rounded-xl bg-vs-yellow/10 flex items-center justify-center flex-shrink-0">
                        <c.icon size={20} className="text-vs-yellow" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">{c.label}</div>
                        <div className="text-white font-medium">{c.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex gap-3 px-4">
              {[
                { Icon: Facebook, href: COMPANY.social.facebook },
                { Icon: Twitter, href: COMPANY.social.twitter },
                { Icon: Linkedin, href: COMPANY.social.linkedin },
                { Icon: Instagram, href: COMPANY.social.instagram },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center hover:bg-vs-yellow/10 hover:text-vs-yellow transition-all text-gray-400"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* Emergency Notice */}
            <div className="mt-8 mx-4 p-5 rounded-2xl bg-red-500/10 border border-red-500/20">
              <div className="text-sm font-semibold text-red-400 mb-1">Emergency Line</div>
              <p className="text-gray-400 text-sm mb-2">For security emergencies outside business hours:</p>
              <a href={`tel:${COMPANY.phoneIntl}`} className="text-white font-bold text-lg hover:text-vs-yellow transition-colors">
                {COMPANY.phone}
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="p-8 lg:p-10 rounded-3xl bg-navy-500 border border-white/5 gradient-border">
              <h3 className="font-syne text-2xl font-bold text-white mb-2">Request a Free Assessment</h3>
              <p className="text-gray-400 text-sm mb-8">Fill in the form and our team will reach out within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-gray-400 mb-2 block font-medium">Full Name *</label>
                    <input required value={formData.name} onChange={e => update('name', e.target.value)} className="input-vs" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 mb-2 block font-medium">Email Address *</label>
                    <input required type="email" value={formData.email} onChange={e => update('email', e.target.value)} className="input-vs" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-gray-400 mb-2 block font-medium">Phone Number</label>
                    <input value={formData.phone} onChange={e => update('phone', e.target.value)} className="input-vs" placeholder="+263 773 486 486" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 mb-2 block font-medium">Service Required</label>
                    <select value={formData.service} onChange={e => update('service', e.target.value)} className="input-vs appearance-none cursor-pointer">
                      <option value="" className="bg-navy-500">Select a service</option>
                      {SERVICES.map(s => <option key={s.id} value={s.id} className="bg-navy-500">{s.title}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-2 block font-medium">Tell Us About Your Security Needs</label>
                  <textarea rows={5} value={formData.message} onChange={e => update('message', e.target.value)} className="input-vs resize-none" placeholder="Describe your property, concerns, and what you're looking for..." />
                </div>
                <button type="submit" disabled={loading}
                  className={`btn-primary w-full justify-center ${loading ? 'opacity-70 cursor-wait' : ''}`}>
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                      Sending...
                    </span>
                  ) : (
                    <>Send Request <Send size={18} /></>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* Interactive Leaflet Map — VS Security Harare Office */
const HARARE_CENTER = [-17.8252, 31.0335]

const MapSection = () => {
  const [mapReady, setMapReady] = useState(false)

  useEffect(() => {
    setMapReady(true)
  }, [])

  return (
    <section className="relative h-[400px] sm:h-[450px] lg:h-[500px] bg-navy-600">
      {/* Top gradient overlay for smooth transition */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-navy-900 to-transparent z-10 pointer-events-none" />
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-navy-900 to-transparent z-10 pointer-events-none" />

      {mapReady && (
        <MapContainer
          center={HARARE_CENTER}
          zoom={14}
          scrollWheelZoom={false}
          className="w-full h-full z-0"
          style={{ background: '#091731' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          <Marker position={HARARE_CENTER}>
            <Popup>
              <div className="text-center p-1">
                <strong className="block text-sm font-bold">VS Security</strong>
                <span className="text-xs text-gray-600">Harare, Zimbabwe</span>
                <br />
                <span className="text-xs text-gray-600">0773 486 486</span>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      )}

      {/* Floating info card */}
      <div className="absolute bottom-8 left-4 sm:left-8 z-20 p-4 sm:p-5 rounded-2xl bg-navy-800/90 backdrop-blur-xl border border-white/10 shadow-2xl max-w-xs">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-vs-yellow/10 flex items-center justify-center flex-shrink-0">
            <MapPin size={18} className="text-vs-yellow" />
          </div>
          <div>
            <div className="font-syne font-bold text-white text-sm">VS Security HQ</div>
            <div className="text-gray-400 text-xs">Harare, Zimbabwe</div>
          </div>
        </div>
        <a
          href="https://maps.google.com/?q=-17.8252,31.0335"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-vs-yellow text-xs font-medium mt-2 hover:underline"
        >
          Get Directions <ArrowRight size={12} />
        </a>
      </div>
    </section>
  )
}

/* FAQ */
const FAQSection = () => {
  const [ref, inView] = useInView()
  const [openFaq, setOpenFaq] = useState(null)
  const faqs = [
    { q: 'How quickly can you install a security system?', a: 'Most residential installations are completed within 1-2 days. Commercial projects typically take 3-7 days depending on scope. We always provide a timeline during the assessment phase.' },
    { q: 'Do you offer maintenance and support?', a: 'Yes! All our installations come with a 12-month warranty and ongoing support. We also offer annual maintenance contracts to keep your systems running optimally.' },
    { q: 'Can I monitor my system remotely?', a: 'Absolutely. All our CCTV and alarm systems come with mobile app integration, allowing you to monitor your property in real-time from anywhere in the world.' },
    { q: 'What areas do you serve?', a: 'We currently serve all major cities in Zimbabwe including Harare, Bulawayo, Mutare, Gweru, and Masvingo. Contact us to check availability in your area.' },
    { q: 'Is the security assessment really free?', a: 'Yes, our initial security assessment is completely free and comes with no obligations. Our experts will evaluate your property and provide tailored recommendations.' },
  ]

  return (
    <section ref={ref} className="py-24 bg-navy-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle label="FAQ" title={<>Common <span className="text-vs-yellow">Questions</span></>} />
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl bg-navy-500/50 border border-white/5 overflow-hidden"
            >
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-5 flex items-center justify-between text-left">
                <span className="font-medium text-white pr-4">{faq.q}</span>
                <CheckCircle size={18} className={`flex-shrink-0 transition-colors ${openFaq === i ? 'text-vs-yellow' : 'text-gray-600'}`} />
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 border-t border-white/5 pt-3">
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactPage
