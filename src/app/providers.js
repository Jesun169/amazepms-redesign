'use client'

import { ThemeProvider } from '@/context/ThemeContext'
import { Analytics } from '@vercel/analytics/react'

export function Providers({ children }) {
  return (
    <ThemeProvider>
      {children}
      <Analytics />
    </ThemeProvider>
  )
}