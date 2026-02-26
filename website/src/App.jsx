import React, { useEffect, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Layout Components
import { Navigation, Footer, CookieConsent, ScrollToTop, WhatsAppButton, PageTransition } from './components'

// Pages
import {
  HomePage,
  AboutPage,
  ServicesPage,
  SolutionsPage,
  CareersPage,
  ContactPage,
  GalleryPage,
  NotFoundPage
} from './pages'

// Utils
import { useScrollToTop } from './utils/seo'

/* ═══════════════════════════════════════════
   SCROLL RESTORATION WRAPPER
   ═══════════════════════════════════════════ */
const ScrollRestoration = () => {
  useScrollToTop()
  return null
}

/* ═══════════════════════════════════════════
   PAGE LOADING FALLBACK
   ═══════════════════════════════════════════ */
const PageLoader = () => (
  <div className="min-h-screen bg-navy-900 flex items-center justify-center">
    <div className="text-center">
      <div className="w-12 h-12 border-2 border-vs-yellow/20 border-t-vs-yellow rounded-full animate-spin mx-auto mb-4" />
      <p className="text-gray-500 text-sm font-mono">Loading...</p>
    </div>
  </div>
)

/* ═══════════════════════════════════════════
   LAYOUT WRAPPER
   ═══════════════════════════════════════════ */
const Layout = ({ children }) => (
  <div className="min-h-screen bg-navy-900 flex flex-col">
    <Navigation />
    <main className="flex-1">
      {children}
    </main>
    <Footer />
  </div>
)

/* ═══════════════════════════════════════════
   APP — Main Application Component
   ═══════════════════════════════════════════ */
const App = () => {
  const location = useLocation()

  return (
    <>
      <ScrollRestoration />

      <Layout>
        <AnimatePresence mode="wait">
          <Suspense fallback={<PageLoader />}>
            <Routes location={location} key={location.pathname}>
              {/* ── Main Pages ── */}
              <Route
                path="/"
                element={
                  <PageTransition>
                    <HomePage />
                  </PageTransition>
                }
              />
              <Route
                path="/about"
                element={
                  <PageTransition>
                    <AboutPage />
                  </PageTransition>
                }
              />
              <Route
                path="/services"
                element={
                  <PageTransition>
                    <ServicesPage />
                  </PageTransition>
                }
              />
              <Route
                path="/solutions"
                element={
                  <PageTransition>
                    <SolutionsPage />
                  </PageTransition>
                }
              />
              <Route
                path="/careers"
                element={
                  <PageTransition>
                    <CareersPage />
                  </PageTransition>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageTransition>
                    <ContactPage />
                  </PageTransition>
                }
              />
              <Route
                path="/gallery"
                element={
                  <PageTransition>
                    <GalleryPage />
                  </PageTransition>
                }
              />

              {/* ── 404 Catch-All ── */}
              <Route
                path="*"
                element={
                  <PageTransition>
                    <NotFoundPage />
                  </PageTransition>
                }
              />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </Layout>

      {/* Global Overlays */}
      <CookieConsent />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  )
}

export default App
