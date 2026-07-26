'use client'

import { useState, useEffect } from 'react'

export const useScroll = () => {
    const [scrollY, setScrollY] = useState(0)
    const [scrollX, setScrollX] = useState(0)
    const [scrollDirection, setScrollDirection] = useState('up')
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            const currentScrollX = window.scrollX

            setScrollY(currentScrollY)
            setScrollX(currentScrollX)

            if (currentScrollY > lastScrollY) {
                setScrollDirection('down')
            } else if (currentScrollY < lastScrollY) {
                setScrollDirection('up')
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    return { scrollY, scrollX, scrollDirection }
}