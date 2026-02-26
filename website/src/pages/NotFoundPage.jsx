import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, ArrowRight, Home } from 'lucide-react'
import { ScanLine } from '../components'

const NotFoundPage = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-500 to-navy-800" />
      <div className="absolute inset-0 bg-grid bg-[size:60px_60px]" />
      <ScanLine duration="4s" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        {/* Large 404 */}
        <div className="relative inline-block mb-8">
          <span className="font-syne text-[150px] sm:text-[200px] lg:text-[250px] font-bold text-white/[0.03] leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <Shield size={80} className="text-vs-yellow/20" />
          </div>
        </div>

        <h1 className="font-syne text-4xl lg:text-5xl font-bold text-white mb-4">
          Area <span className="text-vs-yellow">Restricted</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-md mx-auto mb-10">
          The page you're looking for doesn't exist or has been moved to a secured location.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/" className="btn-primary">
            <Home size={18} /> Return Home
          </Link>
          <Link to="/contact" className="btn-secondary">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

export default NotFoundPage
