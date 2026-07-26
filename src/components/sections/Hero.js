'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import {
  FiArrowRight,
  FiPlay,
  FiCheck,
  FiStar,
  FiTrendingUp,
  FiUsers,
  FiBarChart2,
  FiLayers,
} from 'react-icons/fi'

import AnimatedButton from '@/components/common/AnimatedButton'
import ParticleBackground from '@/components/common/ParticleBackground'

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Title Animation
      const title = titleRef.current

      if (title) {
        const text = title.textContent
        title.textContent = ''

        text.split(' ').forEach((word, wordIndex) => {
          const wordSpan = document.createElement('span')

          wordSpan.style.display = 'inline-block'
          wordSpan.style.marginRight = '0.3em'
          wordSpan.style.overflow = 'hidden'

          word.split('').forEach((letter, letterIndex) => {
            const span = document.createElement('span')

            span.textContent = letter
            span.style.display = 'inline-block'
            span.style.opacity = 0
            span.style.transform = 'translateY(70px)'

            wordSpan.appendChild(span)

            gsap.to(span, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power4.out',
              delay:
                0.5 +
                wordIndex * 0.18 +
                letterIndex * 0.03,
            })
          })

          title.appendChild(wordSpan)
        })
      }

      // Floating Cards
      gsap.to('.floating-card', {
        y: 18,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.3,
      })

      // Hero Badge
      gsap.fromTo(
        '.hero-badge',
        {
          opacity: 0,
          y: 20,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
        }
      )

      // Description
      gsap.fromTo(
        '.hero-description',
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.6,
        }
      )

      // Buttons
      gsap.fromTo(
        '.hero-buttons',
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.8,
        }
      )

      // Stats
      gsap.fromTo(
        '.hero-stats',
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 1,
        }
      )

      // Trusted
      gsap.fromTo(
        '.hero-trusted',
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.8,
          delay: 1.2,
        }
      )

      // Background Glow
      gsap.to('.hero-glow', {
        scale: 1.25,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })

    }, heroRef)

    return () => ctx.revert()

  }, [])
  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden flex items-center justify-center pt-36 pb-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black" />

      <ParticleBackground />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Glow */}
      <div className="hero-glow absolute -top-44 left-1/2 -translate-x-1/2 w-[750px] h-[750px] rounded-full bg-primary-500/20 blur-[180px]" />

      {/* Floating Card Left */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="floating-card hidden xl:flex absolute left-12 top-44 z-20
        rounded-3xl bg-white/5 border border-white/10
        backdrop-blur-2xl px-6 py-5 shadow-2xl"
      >
        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            <FiTrendingUp className="text-white text-2xl" />
          </div>

          <div>
            <h3 className="font-bold text-xl text-white">
              +24%
            </h3>

            <p className="text-sm text-gray-400">
              Productivity Boost
            </p>
          </div>

        </div>
      </motion.div>

      {/* Floating Card Right */}
      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="floating-card hidden xl:flex absolute right-12 top-60 z-20
        rounded-3xl bg-white/5 border border-white/10
        backdrop-blur-2xl px-6 py-5 shadow-2xl"
      >
        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
            <FiUsers className="text-white text-2xl" />
          </div>

          <div>

            <h3 className="font-bold text-xl text-white">
              10K+
            </h3>

            <p className="text-sm text-gray-400">
              Happy Teams
            </p>

          </div>

        </div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-6">

        <div className="max-w-5xl mx-auto text-center">

          {/* Badge */}

          <motion.div
            className="hero-badge inline-flex items-center gap-3
            rounded-full border border-primary-500/30
            bg-primary-500/10 backdrop-blur-xl
            px-6 py-3 mb-8"
          >

            <span className="relative flex h-3 w-3">

              <span className="absolute inline-flex h-full w-full rounded-full bg-primary-400 animate-ping"></span>

              <span className="relative h-3 w-3 rounded-full bg-primary-500"></span>

            </span>

            <span className="text-primary-300 font-medium">
              Trusted by 10,000+ Teams Worldwide
            </span>

          </motion.div>

          {/* Title */}

          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl xl:text-8xl font-black leading-[1.05]"
          >
            Build Amazing
            <br />

            <span className="bg-gradient-to-r from-primary-400 via-cyan-300 to-secondary-400 bg-clip-text text-transparent">
              Projects Faster
            </span>

          </h1>

          {/* Description */}

          <p className="hero-description mt-8 max-w-3xl mx-auto text-lg md:text-2xl leading-relaxed text-gray-300">

            One platform for planning, collaboration,
            reporting and team productivity.

            Manage everything beautifully with
            lightning-fast performance.

          </p>

          {/* Buttons */}

          <div className="hero-buttons mt-12 flex flex-col sm:flex-row justify-center gap-5">

            <AnimatedButton
              variant="gradient"
              size="lg"
              icon={FiArrowRight}
              iconPosition="right"
              className="shadow-2xl shadow-primary-500/40"
            >
              Start Free Trial
            </AnimatedButton>

            <AnimatedButton
              variant="outline"
              size="lg"
              icon={FiPlay}
              className="border-white/20 bg-white/5 backdrop-blur-xl"
            >
              Watch Demo
            </AnimatedButton>

          </div>
          {/* Premium Stats */}

          <div className="hero-stats mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">

            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/20">
                <FiUsers className="text-3xl text-blue-400" />
              </div>

              <h3 className="text-5xl font-black">10K+</h3>

              <p className="mt-2 text-gray-400">
                Teams Worldwide
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/20">
                <FiTrendingUp className="text-3xl text-green-400" />
              </div>

              <h3 className="text-5xl font-black">
                +24%
              </h3>

              <p className="mt-2 text-gray-400">
                Productivity Increase
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/20">
                <FiStar className="text-3xl text-yellow-400 fill-current" />
              </div>

              <h3 className="text-5xl font-black">
                4.9★
              </h3>

              <p className="mt-2 text-gray-400">
                Customer Rating
              </p>
            </motion.div>

          </div>

          {/* Trust Badges */}

          <div className="hero-trusted mt-20 flex flex-wrap items-center justify-center gap-8">

            <div className="flex items-center gap-2 text-gray-400">
              <FiCheck className="text-green-400" />
              No credit card requiredd
            </div>

            <div className="flex items-center gap-2 text-gray-400">
              <FiCheck className="text-green-400" />
              14-day free trial
            </div>

            <div className="flex items-center gap-2 text-gray-400">
              <FiCheck className="text-green-400" />
              Cancel anytime
            </div>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <div className="absolute  bottom-5 left-1/2 z-20 -translate-x-1/2">

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="flex flex-col items-center"
        >

          <span className="mb-3 text-xs uppercase tracking-[0.35em] text-gray-500">
            Scroll
          </span>

          <div className="flex h-12 w-7 justify-center rounded-full border border-white/20 p-2">

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="h-3 w-1.5 rounded-full bg-primary-400"
            />

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Hero