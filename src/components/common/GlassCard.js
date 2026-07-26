'use client'

import { motion } from 'framer-motion'

export default function GlassCard({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  blur = 'md',
}) {
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  }

  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-2xl
        bg-white/5 border border-white/10
        ${blurClasses[blur]}
        ${hoverEffect ? 'transition-all duration-300 hover:scale-[1.02]' : ''}
        ${glow ? 'shadow-neon' : 'shadow-glass'}
        ${className}
      `}
      whileHover={
        hoverEffect
          ? {
            y: -6,
            boxShadow: '0 20px 40px rgba(0,0,0,.35)',
          }
          : undefined
      }
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}