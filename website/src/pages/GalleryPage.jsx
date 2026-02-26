import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Camera, ZoomIn } from 'lucide-react'
import { SectionTitle, ScanLine } from '../components'
import { useInView } from '../hooks'
import { useSEO } from '../utils/seo'
import { SEO_DATA } from '../data/siteData'

const GalleryPage = () => {
  useSEO(SEO_DATA.gallery)
  return (
    <>
      <HeroSection />
      <GalleryGrid />
    </>
  )
}

const HeroSection = () => {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className="relative min-h-[60vh] flex items-center overflow-hidden clip-angular noise-overlay">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1672073311074-f60c4a5e7b92?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-500/80 to-navy-700/85" />
      <div className="absolute inset-0 bg-grid bg-[size:60px_60px]" />
      <ScanLine />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center"
      >
        <span className="section-label">Our Portfolio</span>
        <h1 className="font-syne text-5xl lg:text-7xl font-bold text-white mt-6">
          Project <span className="text-vs-yellow text-glow">Gallery</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-xl mx-auto mt-6">
          See our completed installations across Zimbabwe — quality you can see.
        </p>
      </motion.div>
    </section>
  )
}

// Vision for each image: Real project photos showing CCTV installations on buildings,
// alarm panels in control rooms, electric fencing on perimeters, access control readers,
// security officers, control room operations, wiring and cabling, monitoring screens.
const projects = [
  { id: 1, title: 'Corporate HQ CCTV', category: 'CCTV', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80', desc: '32-camera 4K surveillance system for a corporate headquarters in Harare.' },
  { id: 2, title: 'Hotel Access Control', category: 'Access Control', image: 'https://images.unsplash.com/photo-1631016042018-448c284aa279?w=800&q=80', desc: 'Biometric access control system for a 5-star hotel in Victoria Falls.' },
  { id: 3, title: 'Industrial Perimeter', category: 'Electric Fencing', image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80', desc: '2km electric fencing perimeter for a manufacturing plant in Bulawayo.' },
  { id: 4, title: 'Residential Smart Security', category: 'Wireless', image: 'https://images.unsplash.com/photo-1708807472445-d33589e6b090?w=800&q=80', desc: 'Full wireless smart home security system for a luxury estate.' },
  { id: 5, title: 'Control Room Build', category: 'Monitoring', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80', desc: 'Custom 24/7 monitoring control room for a security operations center.' },
  { id: 6, title: 'Mall Surveillance', category: 'CCTV', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', desc: '64-camera system covering a major shopping mall with AI analytics.' },
  { id: 7, title: 'School Security', category: 'Alarm', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80', desc: 'Comprehensive alarm and CCTV system for an international school.' },
  { id: 8, title: 'Warehouse Protection', category: 'Electric Fencing', image: 'https://images.unsplash.com/photo-1760921678729-9658c8b792bb?w=800&q=80', desc: 'Multi-zone electric fencing with integrated alarm for a logistics warehouse.' },
]

const GalleryGrid = () => {
  const [ref, inView] = useInView()
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const categories = ['All', ...new Set(projects.map(p => p.category))]
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                filter === cat ? 'bg-vs-yellow text-navy-800' : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid - masonry-style */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => setLightbox(project)}
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy"
                    style={{ aspectRatio: i % 3 === 0 ? '3/4' : i % 3 === 1 ? '4/3' : '1/1' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-vs-yellow text-xs font-mono">{project.category}</span>
                    <h3 className="font-syne font-bold text-white mt-1">{project.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <ZoomIn size={18} className="text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img src={lightbox.image} alt={lightbox.title} className="w-full rounded-2xl" />
              <div className="mt-4">
                <span className="text-vs-yellow text-xs font-mono">{lightbox.category}</span>
                <h3 className="font-syne text-2xl font-bold text-white mt-1">{lightbox.title}</h3>
                <p className="text-gray-400 mt-2">{lightbox.desc}</p>
              </div>
              <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default GalleryPage
