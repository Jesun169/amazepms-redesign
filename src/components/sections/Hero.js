'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { FiArrowRight, FiPlay, FiCheck, FiStar, FiTrendingUp } from 'react-icons/fi'
import AnimatedButton from '@/components/common/AnimatedButton'
import ParticleBackground from '@/components/common/ParticleBackground'

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const title = titleRef.current
      if (title) {
        const text = title.textContent
        title.textContent = ''
        const words = text.split(' ')

        words.forEach((word, wordIndex) => {
          const wordSpan = document.createElement('span')
          wordSpan.style.display = 'inline-block'
          wordSpan.style.marginRight = '0.3em'
          wordSpan.style.overflow = 'hidden'

          const letters = word.split('')
          letters.forEach((letter, letterIndex) => {
            const span = document.createElement('span')
            span.textContent = letter
            span.style.display = 'inline-block'
            span.style.opacity = '0'
            span.style.transform = 'translateY(50px)'
            span.style.transition = 'none'
            wordSpan.appendChild(span)

            gsap.to(span, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              delay: 0.5 + (wordIndex * 0.2) + (letterIndex * 0.03),
            })
          })

          title.appendChild(wordSpan)
        })
      }

      gsap.to('.floating-element', {
        y: 30,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.3,
      })

      gsap.fromTo('.hero-badge',
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, delay: 0.2 }
      )

      gsap.fromTo('.hero-description',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.8 }
      )

      gsap.fromTo('.hero-cta',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1 }
      )

      gsap.fromTo('.hero-trust',
        { opacity: 0 },
        { opacity: 1, duration: 0.8, delay: 1.3 }
      )

      gsap.fromTo('.hero-glow-1',
        { scale: 0.8, opacity: 0.3 },
        { scale: 1.2, opacity: 0.8, duration: 3, repeat: -1, yoyo: true, ease: 'power1.inOut' }
      )

      gsap.fromTo('.hero-glow-2',
        { scale: 0.8, opacity: 0.2 },
        { scale: 1.3, opacity: 0.7, duration: 4, repeat: -1, yoyo: true, ease: 'power1.inOut', delay: 1 }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-100 via-dark-200 to-dark-300" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-primary-500/20 blur-3xl hero-glow-1" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-secondary-500/20 blur-3xl hero-glow-2" />

      <ParticleBackground />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
            </span>
            <span className="text-sm text-primary-400 font-medium">Now available for early access</span>
          </motion.div>

          <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight text-center">
            Transform Your Project Management
          </h1>

          <p className="hero-description text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            The most intuitive and powerful project management software for modern teams.
            Plan, track, and deliver amazing work together.
          </p>

          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <AnimatedButton
              variant="gradient"
              size="lg"
              className="group px-8 py-4 text-lg"
            >
              Get Started Free
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-2">
                <FiArrowRight className="w-5 h-5 inline-block" />
              </span>
            </AnimatedButton>
            <AnimatedButton
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg"
              icon={FiPlay}
            >
              Watch Demo
            </AnimatedButton>
          </div>

          <div className="hero-trust mt-12 flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <FiCheck className="text-primary-500" />
              No credit card required
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <FiCheck className="text-primary-500" />
              14-day free trial
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <FiCheck className="text-primary-500" />
              Cancel anytime
            </div>
          </div>

          <div className="hero-trust mt-8 flex items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-xs font-bold border-2 border-dark-100">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-400">Joined by 10,000+ teams</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-400">
              <FiStar className="text-yellow-400 fill-current" />
              <FiStar className="text-yellow-400 fill-current" />
              <FiStar className="text-yellow-400 fill-current" />
              <FiStar className="text-yellow-400 fill-current" />
              <FiStar className="text-yellow-400 fill-current" />
              <span className="ml-1">4.9/5</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-400 uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-white/60"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero