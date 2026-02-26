import React, { useState, useEffect, useRef, useCallback } from 'react'

/* ═══════════════════════════════════════════
   useInView — Intersection Observer Hook
   ═══════════════════════════════════════════ */
export function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (!options.repeat) observer.unobserve(el)
        } else if (options.repeat) {
          setIsInView(false)
        }
      },
      {
        threshold: options.threshold || 0.15,
        rootMargin: options.rootMargin || '0px',
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin, options.repeat])

  return [ref, isInView]
}

/* ═══════════════════════════════════════════
   useCounter — Animated Number Counter
   ═══════════════════════════════════════════ */
export function useCounter(end, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    let startTime = null
    let animFrame = null

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setCount(Math.floor(eased * end))
      if (progress < 1) {
        animFrame = requestAnimationFrame(step)
      }
    }

    animFrame = requestAnimationFrame(step)
    return () => {
      if (animFrame) cancelAnimationFrame(animFrame)
    }
  }, [shouldStart, end, duration])

  return count
}

/* ═══════════════════════════════════════════
   useScrollPosition — Track Scroll Position
   ═══════════════════════════════════════════ */
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState('up')
  const lastScrollRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      setScrollDirection(currentScroll > lastScrollRef.current ? 'down' : 'up')
      lastScrollRef.current = currentScroll
      setScrollY(currentScroll)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { scrollY, scrollDirection }
}

/* ═══════════════════════════════════════════
   useMediaQuery — Responsive Breakpoints
   ═══════════════════════════════════════════ */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    setMatches(media.matches)

    const listener = (e) => setMatches(e.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [query])

  return matches
}

/* ═══════════════════════════════════════════
   useTypewriter — Typewriter Text Effect
   ═══════════════════════════════════════════ */
export function useTypewriter(texts, speed = 80, pause = 2000) {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.slice(0, displayText.length + 1))
        if (displayText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), pause)
        }
      } else {
        setDisplayText(currentText.slice(0, displayText.length - 1))
        if (displayText.length === 0) {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? speed / 2 : speed)

    return () => clearTimeout(timer)
  }, [displayText, textIndex, isDeleting, texts, speed, pause])

  return displayText
}

/* ═══════════════════════════════════════════
   useParallax — Parallax Scroll Effect
   ═══════════════════════════════════════════ */
export function useParallax(speed = 0.5) {
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const scrolled = window.innerHeight - rect.top
      setOffset(scrolled * speed)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return [ref, offset]
}

/* ═══════════════════════════════════════════
   useMousePosition — Track Mouse for Effects
   ═══════════════════════════════════════════ */
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handler = (e) => setPosition({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handler, { passive: true })
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return position
}
