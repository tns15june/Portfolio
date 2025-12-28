'use client'
import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollAnimation<T extends HTMLElement>(
  options: UseScrollAnimationOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options
  const ref = useRef<T>(null)
  // Start with null to indicate "not yet determined" - prevents hydration flicker
  const [isVisible, setIsVisible] = useState<boolean | null>(null)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (!hasMounted) return

    const element = ref.current
    if (!element) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    // Check if element is already in viewport before setting up observer
    const rect = element.getBoundingClientRect()
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0

    if (isInViewport) {
      // Element is already visible, animate it immediately
      setIsVisible(true)
      if (triggerOnce) return
    } else {
      // Element is not in viewport, set to false to prepare for animation
      setIsVisible(false)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) observer.disconnect()
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce, hasMounted])

  // Return true (visible) when not yet mounted to prevent flicker during SSR/hydration
  return { ref, isVisible: isVisible === null ? true : isVisible }
}
