'use client'

import React from 'react'
import { motion } from 'framer-motion'

const SectionWrapper = ({
  children,
  className = '',
  id = '',
  background = 'dark',
  padding = 'py-24'
}) => {
  const backgrounds = {
    dark: 'bg-dark-100',
    light: 'bg-dark-200',
    gradient: 'bg-gradient-to-b from-dark-100 via-dark-200 to-dark-100',
    none: '',
  }

  return (
    <section id={id} className={`
      relative overflow-hidden
      ${backgrounds[background] || backgrounds.dark}
      ${padding}
      ${className}
    `}>
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

export default SectionWrapper