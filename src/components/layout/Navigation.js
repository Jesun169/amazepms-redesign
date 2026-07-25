'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import AnimatedButton from '@/components/common/AnimatedButton'
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
  FiUser
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
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled
            ? 'bg-dark-100/80 backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent'
          }
        `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                AmazePMS
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <FiSun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <FiMoon className="w-5 h-5 text-gray-300" />
                )}
              </button>
              <AnimatedButton variant="outline" size="sm" icon={FiUser}>
                Sign In
              </AnimatedButton>
              <AnimatedButton variant="gradient" size="sm">
                Get Started
              </AnimatedButton>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200"
              aria-label="Toggle menu"
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
          x: isMobileMenuOpen ? 0 : '100%'
        }}
        transition={{ duration: 0.3 }}
        className={`
          fixed inset-0 z-40 lg:hidden
          bg-dark-100/95 backdrop-blur-xl
          ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}
        `}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-medium text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-3 group"
            >
              <item.icon className="w-6 h-6 text-primary-500 group-hover:scale-110 transition-transform" />
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col gap-4 w-full max-w-xs mt-8">
            <AnimatedButton variant="outline" className="w-full">
              Sign In
            </AnimatedButton>
            <AnimatedButton variant="gradient" className="w-full">
              Get Started
            </AnimatedButton>
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 py-3"
            >
              {isDark ? (
                <>
                  <FiSun className="w-5 h-5" />
                  Light Mode
                </>
              ) : (
                <>
                  <FiMoon className="w-5 h-5" />
                  Dark Mode
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Navigation