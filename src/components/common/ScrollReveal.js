'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  className = '',
  triggerOnce = true,
}) => {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const directions = {
      up: { y: 100, x: 0 },
      down: { y: -100, x: 0 },
      left: { y: 0, x: 100 },
      right: { y: 0, x: -100 },
      none: { y: 0, x: 0 },
    }

    const from = directions[direction] || directions.up

    const animation = gsap.fromTo(
      element,
      {
        opacity: 0,
        x: from.x,
        y: from.y,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: triggerOnce
            ? 'play none none none'
            : 'play none none reset',
        },
      }
    )

    return () => {
      animation.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [direction, delay, duration, triggerOnce])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

export default ScrollReveal