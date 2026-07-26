'use client'

import { useState, useEffect, useRef } from 'react'

export const useIntersectionObserver = (options = {}) => {
    const [isVisible, setIsVisible] = useState(false)
    const [hasBeenVisible, setHasBeenVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true)
                setHasBeenVisible(true)
                if (options.triggerOnce) {
                    observer.unobserve(element)
                }
            } else if (!options.triggerOnce) {
                setIsVisible(false)
            }
        }, {
            threshold: options.threshold || 0.1,
            rootMargin: options.rootMargin || '0px',
        })

        observer.observe(element)

        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [options.threshold, options.rootMargin, options.triggerOnce])

    return [ref, isVisible, hasBeenVisible]
}