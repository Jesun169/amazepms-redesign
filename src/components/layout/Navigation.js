'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import {
  FiMenu,
  FiX,
  FiMoon,
  FiSun,
  FiHome,
  FiLayers,
  FiCreditCard,
  FiUsers,
  FiMail,
  FiUser,
  FiArrowRight,
} from 'react-icons/fi'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const { isDark, toggleTheme } = useTheme()

  const navItems = [
    { name: 'Home', href: '/', icon: FiHome },
    { name: 'Features', href: '/features', icon: FiLayers },
    { name: 'Pricing', href: '/pricing', icon: FiCreditCard },
    { name: 'About', href: '/about', icon: FiUsers },
    { name: 'Contact', href: '/contact', icon: FiMail },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? 'bg-black/40 backdrop-blur-2xl border-b border-white/10 shadow-2xl'
            : 'bg-transparent'
          }`}
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-500/5 via-transparent to-secondary-500/5 blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">

            <Link
              href="/"
              className="flex items-center gap-3 group"
            >
              <div
                className="
                relative
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-primary-500
                via-secondary-500
                to-purple-600
                shadow-xl
                shadow-primary-500/30
                transition-all
                duration-500
                group-hover:rotate-6
                group-hover:scale-110
              "
              >
                <span className="text-xl font-extrabold text-white">
                  A
                </span>

                <div className="absolute -inset-1 rounded-2xl bg-primary-500/20 blur-xl opacity-0 transition group-hover:opacity-100" />
              </div>

              <div className="leading-tight">
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-300 bg-clip-text text-transparent">
                  AmazePMS
                </h1>

                <p className="text-[11px] uppercase tracking-[3px] text-gray-400">
                  Project Management
                </p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                  relative
                  text-gray-300
                  font-medium
                  tracking-wide
                  transition-all
                  duration-300
                  hover:text-white
                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:h-[2px]
                  after:w-0
                  after:bg-gradient-to-r
                  after:from-primary-500
                  after:to-secondary-500
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">

              <button
                onClick={toggleTheme}
                className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/5
                transition-all
                duration-300
                hover:border-primary-500/40
                hover:bg-primary-500/10
                hover:rotate-180
              "
              >
                {isDark ? (
                  <FiSun className="text-yellow-400 w-5 h-5" />
                ) : (
                  <FiMoon className="text-white w-5 h-5" />
                )}
              </button>

              <Link
                href="/login"
                className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-5
                py-2.5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-primary-500/40
                hover:bg-white/10
              "
              >
                <FiUser className="text-primary-400" />
                <span>Sign In</span>
              </Link>

              <Link
                href="/register"
                className="
                group
                relative
                overflow-hidden
                rounded-xl
                bg-gradient-to-r
                from-primary-500
                via-secondary-500
                to-primary-500
                bg-[length:200%]
                px-6
                py-2.5
                font-semibold
                text-white
                shadow-xl
                shadow-primary-500/30
                transition-all
                duration-500
                hover:scale-105
                hover:bg-right
              "
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <FiArrowRight className="transition group-hover:translate-x-1" />
                </span>

                <span className="absolute inset-0 translate-y-full bg-white/20 transition duration-500 group-hover:translate-y-0" />
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="
              lg:hidden
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/5
            "
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : '100%',
        }}
        transition={{ duration: 0.35 }}
        className={`
          fixed inset-0 z-40 lg:hidden
          bg-gradient-to-br
          from-dark-100
          via-dark-200
          to-black
          backdrop-blur-3xl
          ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}
        `}
      >
        <div className="flex flex-col justify-center items-center h-full px-8">

          <div className="w-full max-w-sm space-y-4">

            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : 50,
                }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.08,
                }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    px-5
                    py-4
                    text-lg
                    font-medium
                    text-gray-300
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-primary-500/40
                    hover:bg-primary-500/10
                    hover:text-white
                  "
                >
                  <item.icon
                    className="
                      h-6
                      w-6
                      text-primary-400
                      transition-transform
                      duration-300
                      group-hover:scale-110
                      group-hover:rotate-6
                    "
                  />
                  {item.name}
                </Link>
              </motion.div>
            ))}

            <div className="pt-8 space-y-4">

              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  py-3
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:border-primary-500/40
                  hover:bg-white/10
                "
              >
                <FiUser className="h-5 w-5 text-primary-400" />
                Sign In
              </Link>

              <Link
                href="/register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-primary-500
                  via-secondary-500
                  to-primary-500
                  bg-[length:200%]
                  py-3
                  font-semibold
                  text-white
                  shadow-xl
                  shadow-primary-500/30
                  transition-all
                  duration-500
                  hover:scale-[1.02]
                  hover:bg-right
                "
              >
                Get Started
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <button
                onClick={toggleTheme}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  py-3
                  text-gray-300
                  transition-all
                  duration-300
                  hover:border-primary-500/40
                  hover:bg-primary-500/10
                  hover:text-white
                "
              >
                {isDark ? (
                  <>
                    <FiSun className="h-5 w-5 text-yellow-400" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <FiMoon className="h-5 w-5 text-blue-300" />
                    Dark Mode
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Navigation