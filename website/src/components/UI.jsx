import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X, ArrowUp, Shield, FileText } from 'lucide-react'
import { useScrollPosition } from '../hooks'

/* ═══════════════════════════════════════════
   Cookie Consent Banner
   ═══════════════════════════════════════════ */
export const CookieConsent = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('vs-cookies-accepted')
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('vs-cookies-accepted', 'true')
    setVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('vs-cookies-accepted', 'declined')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[90] p-4"
        >
          <div className="max-w-4xl mx-auto bg-navy-500/95 backdrop-blur-2xl rounded-2xl border border-white/10 p-6 shadow-2xl shadow-black/40">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-vs-yellow/10 flex items-center justify-center flex-shrink-0">
                <Cookie size={24} className="text-vs-yellow" />
              </div>
              <div className="flex-1">
                <h4 className="font-syne font-bold text-white text-sm mb-1">Cookie Preferences</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
                  By clicking "Accept All", you consent to our use of cookies.
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0 w-full sm:w-auto">
                <button
                  onClick={handleDecline}
                  className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-white/5 text-gray-400 text-sm hover:bg-white/10 transition-all font-medium"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 sm:flex-initial btn-vs px-5 py-2.5 rounded-xl bg-vs-yellow text-navy-800 font-bold text-sm"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ═══════════════════════════════════════════
   Policy Modal (Privacy, Terms, Cookies)
   ═══════════════════════════════════════════ */
export const PolicyModal = ({ isOpen, onClose, type = 'privacy' }) => {
  const titles = {
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    cookies: 'Cookie Policy',
  }

  const icons = {
    privacy: Shield,
    terms: FileText,
    cookies: Cookie,
  }

  const content = {
    privacy: [
      { heading: 'Information We Collect', text: 'We collect information you provide directly to us, such as when you request a security assessment, contact us, or apply for a position. This includes your name, email address, phone number, and any other information you choose to provide.' },
      { heading: 'How We Use Your Information', text: 'We use the information we collect to provide, maintain, and improve our security services, to communicate with you about services, and to respond to your inquiries. We may also use the information for safety and security purposes.' },
      { heading: 'Information Sharing', text: 'We do not sell, trade, or rent your personal information to third parties. We may share information with our service partners solely for the purpose of delivering security services to you.' },
      { heading: 'Data Security', text: 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.' },
      { heading: 'Your Rights', text: 'You have the right to access, correct, or delete your personal information. You may also object to processing or request data portability. Contact us at info@vssecurity.co.zw to exercise these rights.' },
    ],
    terms: [
      { heading: 'Acceptance of Terms', text: 'By accessing and using the VS Security website and services, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our services.' },
      { heading: 'Services Description', text: 'VS Security provides security solutions including but not limited to CCTV installation, alarm monitoring, wireless systems, access control, electric fencing, and security personnel services.' },
      { heading: 'Client Obligations', text: 'Clients agree to provide accurate information, maintain reasonable security practices, and comply with all applicable laws. Clients are responsible for ensuring that their use of our systems complies with local regulations.' },
      { heading: 'Limitation of Liability', text: 'VS Security shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the fees paid for the relevant service period.' },
      { heading: 'Governing Law', text: 'These terms shall be governed by and construed in accordance with the laws of Zimbabwe. Any disputes shall be subject to the exclusive jurisdiction of the courts of Zimbabwe.' },
    ],
    cookies: [
      { heading: 'What Are Cookies', text: 'Cookies are small text files placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.' },
      { heading: 'Essential Cookies', text: 'These cookies are necessary for the website to function properly. They enable basic features like page navigation, secure area access, and form submissions. The website cannot function without these cookies.' },
      { heading: 'Analytics Cookies', text: 'We use analytics cookies to understand how visitors interact with our website. This information helps us improve our site and services. All data is collected anonymously.' },
      { heading: 'Marketing Cookies', text: 'These cookies may be set through our site by advertising partners. They are used to build a profile of your interests and show you relevant advertisements on other sites.' },
      { heading: 'Managing Cookies', text: 'You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website. You can also adjust your preferences through our cookie consent banner.' },
    ],
  }

  const Icon = icons[type]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-full max-w-2xl max-h-[80vh] bg-navy-600 rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-vs-yellow/10 flex items-center justify-center">
                  <Icon size={20} className="text-vs-yellow" />
                </div>
                <h3 className="font-syne text-xl font-bold text-white">{titles[type]}</h3>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all"
              >
                <X size={16} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-80px)] no-scrollbar">
              <p className="text-gray-400 text-sm mb-6">
                Last updated: January 2025. This {titles[type].toLowerCase()} governs your use of VS Security services.
              </p>
              {content[type].map((section, i) => (
                <div key={i} className="mb-6 last:mb-0">
                  <h4 className="font-syne font-bold text-white mb-2">{section.heading}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{section.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ═══════════════════════════════════════════
   Scroll To Top Button
   ═══════════════════════════════════════════ */
export const ScrollToTop = () => {
  const { scrollY } = useScrollPosition()
  const visible = scrollY > 500

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-[80] w-12 h-12 rounded-xl bg-vs-yellow text-navy-800
                     flex items-center justify-center shadow-lg hover:scale-110 transition-transform
                     glow-yellow"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

/* ═══════════════════════════════════════════
   Floating WhatsApp Button
   ═══════════════════════════════════════════ */
export const WhatsAppButton = () => {
  const { scrollY } = useScrollPosition()
  const visible = scrollY > 300

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="https://wa.me/263773486486"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 left-6 z-[80] w-14 h-14 rounded-full bg-[#25D366] text-white
                     flex items-center justify-center shadow-lg shadow-[#25D366]/30
                     hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow min-w-[44px] min-h-[44px]"
          aria-label="Chat on WhatsApp"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  )
}

/* ═══════════════════════════════════════════
   Page Loader / Transition
   ═══════════════════════════════════════════ */
export const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
)
