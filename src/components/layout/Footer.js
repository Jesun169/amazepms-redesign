'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FiTwitter,
  FiGithub,
  FiLinkedin,
  FiYoutube,
  FiMail,
  FiMapPin,
  FiPhone,
  FiArrowUp
} from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Integrations', href: '#' },
      { name: 'Changelog', href: '#' },
    ],
    Company: [
      { name: 'About', href: '/about' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '/blog' },
      { name: 'Press', href: '#' },
    ],
    Resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Status', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: FiTwitter, href: '#', label: 'Twitter', color: '#1DA1F2' },
    { icon: FiGithub, href: '#', label: 'GitHub', color: '#6e5494' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn', color: '#0A66C2' },
    { icon: FiYoutube, href: '#', label: 'YouTube', color: '#FF0000' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-dark-200 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                AmazePMS
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Transform your project management with the most intuitive and powerful software for modern teams.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200 group"
                  aria-label={social.label}
                >
                  <social.icon
                    className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                    style={{ color: social.color }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4 text-lg">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm group flex items-center gap-2"
                    >
                      <span className="w-0 h-0.5 bg-primary-500 group-hover:w-3 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3 text-gray-400 group hover:text-white transition-colors">
            <FiMail className="w-5 h-5 text-primary-500 group-hover:scale-110 transition-transform" />
            <span>hello@amazepms.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400 group hover:text-white transition-colors">
            <FiPhone className="w-5 h-5 text-primary-500 group-hover:scale-110 transition-transform" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400 group hover:text-white transition-colors">
            <FiMapPin className="w-5 h-5 text-primary-500 group-hover:scale-110 transition-transform" />
            <span>San Francisco, CA</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} AmazePMS. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all"
        aria-label="Scroll to top"
      >
        <FiArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  )
}

export default Footer