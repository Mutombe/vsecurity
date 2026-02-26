import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks'

const SectionTitle = ({ label, title, subtitle, light = false, center = true, className = '' }) => {
  const [ref, inView] = useInView()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`${center ? 'text-center' : ''} mb-16 ${className}`}
    >
      {label && (
        <span className="section-label">{label}</span>
      )}
      <h2 className={`font-syne text-section font-bold mt-4 leading-tight ${light ? 'text-gray-900' : 'text-white'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-lg max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''} ${light ? 'text-gray-600' : 'text-gray-400'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default SectionTitle
