'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    FiChevronLeft,
    FiChevronRight,
    FiStar,
    FiMessageSquare,
} from 'react-icons/fi'
import GlassCard from '@/components/common/GlassCard'
import ScrollReveal from '@/components/common/ScrollReveal'

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'CEO, TechStart',
            content:
                'AmazePMS has completely transformed how our team works. The intuitive interface and powerful features have increased our productivity by 40%.',
            rating: 5,
            avatar: 'SJ',
            company: 'TechStart',
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Project Manager, InnovateCorp',
            content:
                "The best project management tool we've ever used. The analytics and reporting features give us insights we never had before.",
            rating: 5,
            avatar: 'MC',
            company: 'InnovateCorp',
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            role: 'Product Lead, DesignStudio',
            content:
                'Collaboration has never been easier. Our distributed team feels connected and productive with AmazePMS.',
            rating: 5,
            avatar: 'ER',
            company: 'DesignStudio',
        },
        {
            id: 4,
            name: 'David Kim',
            role: 'CTO, CloudSync',
            content:
                'The security features and enterprise-grade reliability make this the perfect choice for our organization.',
            rating: 4,
            avatar: 'DK',
            company: 'CloudSync',
        },
    ]

    useEffect(() => {
        let interval

        if (isAutoPlaying) {
            interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % testimonials.length)
            }, 5000)
        }

        return () => clearInterval(interval)
    }, [isAutoPlaying, testimonials.length])

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
        setIsAutoPlaying(false)
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        setIsAutoPlaying(false)
    }

    const handleDotClick = (index) => {
        setCurrentIndex(index)
        setIsAutoPlaying(false)
    }

    return (
        <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-dark-200 via-dark-100 to-dark-200" />
            <div className="absolute inset-0 bg-dot-pattern opacity-20" />

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <ScrollReveal>
                        <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
                            Testimonials
                        </span>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            What Our <span className="gradient-text">Users Say</span>
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Join thousands of satisfied teams who have transformed their
                            workflow with AmazePMS.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                            >
                                <GlassCard className="p-8 md:p-12 relative">
                                    <div className="absolute top-8 right-8 text-6xl text-primary-500/10">
                                        <FiMessageSquare />
                                    </div>

                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-xl">
                                            {testimonials[currentIndex].avatar}
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-lg">
                                                {testimonials[currentIndex].name}
                                            </h3>

                                            <p className="text-sm text-gray-400">
                                                {testimonials[currentIndex].role}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <FiStar
                                                key={i}
                                                className={`w-5 h-5 ${i < testimonials[currentIndex].rating
                                                    ? 'text-yellow-400 fill-current'
                                                    : 'text-gray-600'
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                                        "{testimonials[currentIndex].content}"
                                    </p>

                                    <div className="mt-4 text-sm text-primary-400">
                                        {testimonials[currentIndex].company}
                                    </div>
                                </GlassCard>
                            </motion.div>
                        </AnimatePresence>

                        <button
                            onClick={handlePrevious}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 p-2 rounded-full bg-dark-200 border border-white/10 hover:bg-dark-300 transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <FiChevronLeft className="w-5 h-5" />
                        </button>

                        <button
                            onClick={handleNext}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 p-2 rounded-full bg-dark-200 border border-white/10 hover:bg-dark-300 transition-colors"
                            aria-label="Next testimonial"
                        >
                            <FiChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'w-8 bg-primary-500'
                                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials