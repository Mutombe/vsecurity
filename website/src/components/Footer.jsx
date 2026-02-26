import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react'
import VSLogo from './VSLogo'
import { SERVICES, COMPANY } from '../data/siteData'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      {/* Newsletter CTA Strip */}
      <div className="relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-syne text-2xl font-bold text-white">Stay Protected, Stay Informed</h3>
              <p className="text-gray-500 mt-1">Get security tips and updates delivered to your inbox.</p>
            </div>
            <div className="flex w-full lg:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-72 input-vs"
              />
              <button className="btn-primary !px-6 whitespace-nowrap">
                Subscribe <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <VSLogo />
            <p className="text-gray-500 text-sm mt-5 leading-relaxed max-w-sm">
              Zimbabwe's premier security solutions provider. Protecting homes, businesses,
              and communities with world-class technology and dedicated personnel since {COMPANY.founded}.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { Icon: Facebook, href: COMPANY.social.facebook },
                { Icon: Twitter, href: COMPANY.social.twitter },
                { Icon: Linkedin, href: COMPANY.social.linkedin },
                { Icon: Instagram, href: COMPANY.social.instagram },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center
                           hover:bg-vs-yellow/10 hover:text-vs-yellow transition-all text-gray-500"
                  aria-label={`Follow us on social media`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-syne font-bold text-white mb-5 text-sm tracking-wide uppercase">Solutions</h4>
            <div className="space-y-3">
              {SERVICES.map((s) => (
                <Link
                  key={s.id}
                  to="/services"
                  className="block text-gray-500 hover:text-vs-yellow text-sm transition-colors duration-300"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-syne font-bold text-white mb-5 text-sm tracking-wide uppercase">Company</h4>
            <div className="space-y-3">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Careers', path: '/careers' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-gray-500 hover:text-vs-yellow text-sm transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-syne font-bold text-white mb-5 text-sm tracking-wide uppercase">Contact</h4>
            <div className="space-y-3.5 text-sm text-gray-500">
              <a href={`tel:${COMPANY.phoneIntl}`} className="flex items-center gap-2.5 hover:text-vs-yellow transition-colors">
                <Phone size={14} className="text-vs-yellow flex-shrink-0" /> {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2.5 hover:text-vs-yellow transition-colors">
                <Mail size={14} className="text-vs-yellow flex-shrink-0" /> {COMPANY.email}
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-vs-yellow flex-shrink-0 mt-0.5" /> {COMPANY.address}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {currentYear} VS Security. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 text-xs text-gray-600">
            <button className="hover:text-vs-yellow transition-colors">Privacy Policy</button>
            <button className="hover:text-vs-yellow transition-colors">Terms of Service</button>
            <button className="hover:text-vs-yellow transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
