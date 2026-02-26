import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Updates document head meta tags for SEO
 */
export function useSEO({ title, description, keywords }) {
  const location = useLocation()

  useEffect(() => {
    // Title
    if (title) document.title = title

    // Description
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc && description) metaDesc.setAttribute('content', description)

    // Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords && keywords) metaKeywords.setAttribute('content', keywords)

    // Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle && title) ogTitle.setAttribute('content', title)

    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc && description) ogDesc.setAttribute('content', description)

    // Canonical
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', `https://vssecurity.co.zw${location.pathname}`)

  }, [title, description, keywords, location.pathname])
}

/**
 * Scroll to top on route change
 */
export function useScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
}
