'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'

const ThemeContext = createContext(undefined)

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useLocalStorage('theme', 'dark')
    const [isDark, setIsDark] = useState(theme === 'dark')

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark)
        document.documentElement.style.colorScheme = isDark ? 'dark' : 'light'
    }, [isDark])

    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark'
        setIsDark(!isDark)
        setTheme(newTheme)
    }

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}