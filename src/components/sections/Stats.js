'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { FiUsers, FiClock, FiAward, FiTrendingUp } from 'react-icons/fi'
import ScrollReveal from '@/components/common/ScrollReveal'

const Stats = () => {
    const statsRef = useRef(null)

    useEffect(() => {
        const counters = document.querySelectorAll('.stat-counter')

        counters.forEach((counter) => {
            const target = parseInt(counter.dataset.target)
            const duration = 2000
            const startTime = Date.now()

            const updateCounter = () => {
                const elapsed = Date.now() - startTime
                const progress = Math.min(elapsed / duration, 1)
                const eased = 1 - Math.pow(1 - progress, 3)
                const current = Math.floor(eased * target)

                counter.textContent = current.toLocaleString()

                if (progress < 1) {
                    requestAnimationFrame(updateCounter)
                } else {
                    counter.textContent = target.toLocaleString()
                }
            }

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCounter()
                        observer.unobserve(counter)
                    }
                })
            }, { threshold: 0.5 })

            observer.observe(counter)
        })
    }, [])

    const stats = [
        {
            icon: FiUsers,
            value: 10000,
            label: 'Active Teams',
            suffix: '+',
        },
        {
            icon: FiClock,
            value: 500000,
            label: 'Hours Saved',
            suffix: '+',
        },
        {
            icon: FiAward,
            value: 99.9,
            label: 'Uptime',
            suffix: '%',
        },
        {
            icon: FiTrendingUp,
            value: 156,
            label: 'Countries',
            suffix: '+',
        },
    ]

    return (
        <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-dark-100 via-primary-500/5 to-dark-100" />
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} direction="up">
                            <div className="text-center group">
                                <div className="flex justify-center mb-4">
                                    <div className="p-4 rounded-2xl bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors duration-300">
                                        <stat.icon className="w-8 h-8 text-primary-500 group-hover:scale-110 transition-transform" />
                                    </div>
                                </div>
                                <div className="text-4xl sm:text-5xl font-bold mb-2">
                                    <span className="stat-counter gradient-text" data-target={stat.value}>
                                        0
                                    </span>
                                    {stat.suffix}
                                </div>
                                <p className="text-gray-400 text-sm">{stat.label}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats