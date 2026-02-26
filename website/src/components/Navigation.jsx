import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, Menu, ChevronDown, ArrowRight, Phone } from 'lucide-react'
import VSLogo from './VSLogo'
import { NAV_GROUPS, SEARCH_INDEX } from '../data/siteData'
import { useScrollPosition } from '../hooks'

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeDropdown, setActiveDropdown] = useState(null)
  const { scrollY, scrollDirection } = useScrollPosition()
  const navigate = useNavigate()
  const location = useLocation()
  const searchRef = useRef(null)
  const isScrolled = scrollY > 50
  const isHidden = scrollDirection === 'down' && scrollY > 400 && !menuOpen

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
    setSearchOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  // ESC to close search
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') {
        setSearchOpen(false)
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  // Focus search on open
  useEffect(() => {
    if (searchOpen && searchRef.current) {
      searchRef.current.focus()
    }
  }, [searchOpen])

  // Lock body scroll when menu/search open
  useEffect(() => {
    document.body.style.overflow = (menuOpen || searchOpen) ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen, searchOpen])

  const searchResults = searchQuery.length > 1
    ? SEARCH_INDEX.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.keywords.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 8)
    : []

  const handleSearchNavigate = (path) => {
    navigate(path)
    setSearchOpen(false)
    setSearchQuery('')
  }

  return (
    <>
      {/* ── Main Nav Bar ── */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? 'bg-navy-800/90 backdrop-blur-2xl shadow-2xl shadow-black/30 py-3'
            : 'bg-transparent py-5'
        }`}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <VSLogo />

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              <Link
                to="/"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === '/' ? 'text-vs-yellow' : 'text-gray-300 hover:text-white'
                }`}
              >
                Home
              </Link>

              {NAV_GROUPS.map((group) => (
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(group.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-all duration-300">
                    {group.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        activeDropdown === group.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {activeDropdown === group.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-navy-700/95 backdrop-blur-2xl rounded-2xl border border-white/[0.06] shadow-2xl overflow-hidden p-2"
                      >
                        {group.items.map((item) => (
                          <Link
                            key={item.label}
                            to={item.path}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm hover:bg-white/5 transition-all group"
                          >
                            <div className="w-10 h-10 rounded-xl bg-vs-yellow/10 flex items-center justify-center group-hover:bg-vs-yellow/20 transition-all flex-shrink-0">
                              <item.icon size={18} className="text-vs-yellow" />
                            </div>
                            <div>
                              <div className="text-gray-200 font-medium group-hover:text-white transition-colors">{item.label}</div>
                              <div className="text-gray-500 text-xs mt-0.5">{item.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all"
                aria-label="Search"
              >
                <Search size={18} className="text-gray-400" />
              </button>

              {/* CTA Button — only on desktop where full nav is visible */}
              <Link
                to="/contact"
                className="!hidden lg:!flex btn-primary !px-6 !py-2.5 text-sm"
              >
                Get Protected <ArrowRight size={16} />
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                <AnimatePresence mode="wait">
                  {menuOpen ? (
                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                      <X size={20} />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                      <Menu size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Menu Drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[95] bg-navy-900/[0.98] backdrop-blur-xl overflow-y-auto overscroll-contain lg:hidden"
            style={{ paddingTop: 'max(6rem, env(safe-area-inset-top, 0px) + 5rem)' }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="px-5 sm:px-6 pb-8"
              style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom, 0px) + 2rem)' }}
            >
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center min-h-[48px] px-4 py-3 text-lg font-medium text-white border-b border-white/5 hover:text-vs-yellow active:bg-white/5 transition-colors rounded-lg"
              >
                Home
              </Link>

              {NAV_GROUPS.map((group, gi) => (
                <motion.div
                  key={group.label}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + gi * 0.05 }}
                  className="border-b border-white/5"
                >
                  <div className="px-4 pt-5 pb-2 text-xs font-mono tracking-[0.2em] text-vs-yellow uppercase">
                    {group.label}
                  </div>
                  {group.items.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 min-h-[48px] text-gray-300 hover:text-white active:bg-white/5 transition-all rounded-lg"
                    >
                      <div className="w-9 h-9 rounded-lg bg-vs-yellow/10 flex items-center justify-center flex-shrink-0">
                        <item.icon size={16} className="text-vs-yellow/70" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium">{item.label}</div>
                        <div className="text-xs text-gray-500 truncate">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              ))}

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 space-y-3"
              >
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex w-full min-h-[48px] btn-primary text-center justify-center items-center"
                >
                  Get Protected <ArrowRight size={18} />
                </Link>
                <a
                  href="tel:0773486486"
                  className="flex w-full min-h-[48px] btn-secondary text-center justify-center items-center"
                >
                  <Phone size={18} /> Call 0773 486 486
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Search Overlay ── */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-navy-900/[0.98] backdrop-blur-2xl flex flex-col items-center pt-[10vh] sm:pt-[15vh] overflow-y-auto"
            onClick={(e) => { if (e.target === e.currentTarget) setSearchOpen(false) }}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="w-full max-w-2xl px-6"
            >
              <div className="relative">
                <Search size={24} className="absolute left-5 top-1/2 -translate-y-1/2 text-vs-yellow" />
                <input
                  ref={searchRef}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services, pages, information..."
                  className="w-full pl-14 pr-14 py-5 bg-white/5 rounded-2xl border border-white/10 text-xl text-white placeholder:text-gray-500 outline-none focus:border-vs-yellow/30 transition-all"
                  autoComplete="off"
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Results */}
              <AnimatePresence>
                {searchResults.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 bg-white/5 rounded-2xl border border-white/5 overflow-hidden"
                  >
                    {searchResults.map((result, i) => (
                      <motion.button
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        onClick={() => handleSearchNavigate(result.path)}
                        className="w-full flex items-center gap-4 px-5 py-4 min-h-[48px] text-left hover:bg-white/5 active:bg-white/10 transition-all border-b border-white/5 last:border-0"
                      >
                        <div className="w-10 h-10 rounded-lg bg-vs-yellow/10 flex items-center justify-center flex-shrink-0">
                          <Search size={16} className="text-vs-yellow" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-white truncate">{result.title}</div>
                          <div className="text-xs text-gray-500 capitalize">{result.path.replace('/', '') || 'Home'} page</div>
                        </div>
                        <ArrowRight size={16} className="text-gray-500 flex-shrink-0" />
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {searchQuery.length > 1 && searchResults.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-8 text-center text-gray-500"
                >
                  No results found for "{searchQuery}"
                </motion.div>
              )}

              <div className="mt-6 text-center text-gray-600 text-sm">
                Press <kbd className="px-2 py-0.5 rounded bg-white/5 text-gray-400 font-mono text-xs">ESC</kbd> to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
