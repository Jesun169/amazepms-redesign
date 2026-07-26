'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'
import {
    FiChevronLeft,
    FiChevronRight,
    FiPlay,
    FiPause,
    FiFullscreen,
    FiZoomIn,
    FiHeart,
    FiShare2,
    FiDownload,
    FiInfo
} from 'react-icons/fi'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import ScrollReveal from '@/components/common/ScrollReveal'

const PremiumImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const [direction, setDirection] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const [progress, setProgress] = useState(0)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const slideInterval = useRef(null)
    const containerRef = useRef(null)
    const x = useMotionValue(0)

    const slides = [
        {
            id: 1,
            title: 'Dashboard Overview',
            subtitle: 'Complete project visibility at a glance',
            description: 'Get real-time insights into your projects with our intuitive dashboard. Track progress, manage tasks, and monitor team performance all in one place.',
            image: '/images/slider/dashboard.jpg',
            color: '#4a8cff',
            gradient: 'from-blue-600 via-blue-500 to-purple-600',
            features: ['Real-time Updates', 'Custom Widgets', 'Data Visualization', 'Team Analytics'],
            stats: { views: '12.4K', likes: '892', shares: '234' },
        },
        {
            id: 2,
            title: 'Team Collaboration',
            subtitle: 'Work together seamlessly',
            description: 'Empower your team with real-time collaboration tools. Share files, communicate instantly, and stay connected regardless of location.',
            image: '/images/slider/collaboration.jpg',
            color: '#8b5cf6',
            gradient: 'from-purple-600 via-purple-500 to-pink-600',
            features: ['Instant Messaging', 'File Sharing', 'Video Calls', 'Team Spaces'],
            stats: { views: '8.7K', likes: '654', shares: '189' },
        },
        {
            id: 3,
            title: 'Analytics & Reports',
            subtitle: 'Data-driven decisions',
            description: 'Make informed decisions with advanced analytics. Track KPIs, generate custom reports, and visualize your data with interactive charts.',
            image: '/images/slider/analytics.jpg',
            color: '#f59e0b',
            gradient: 'from-amber-600 via-amber-500 to-orange-600',
            features: ['Custom Reports', 'KPI Tracking', 'Data Export', 'Interactive Charts'],
            stats: { views: '6.2K', likes: '523', shares: '156' },
        },
        {
            id: 4,
            title: 'Task Management',
            subtitle: 'Stay organized and productive',
            description: 'Streamline your workflow with intelligent task management. Prioritize work, set deadlines, and track progress with ease.',
            image: '/images/slider/tasks.jpg',
            color: '#10b981',
            gradient: 'from-emerald-600 via-emerald-500 to-teal-600',
            features: ['Priority Sorting', 'Deadline Tracking', 'Progress Monitoring', 'Task Templates'],
            stats: { views: '9.1K', likes: '745', shares: '267' },
        },
        {
            id: 5,
            title: 'Mobile Access',
            subtitle: 'Work from anywhere',
            description: 'Access your projects anytime, anywhere with our fully responsive mobile platform. Stay productive on the go with offline mode and push notifications.',
            image: '/images/slider/mobile.jpg',
            color: '#ef4444',
            gradient: 'from-red-600 via-red-500 to-rose-600',
            features: ['Responsive Design', 'Offline Mode', 'Push Notifications', 'Mobile Sync'],
            stats: { views: '5.8K', likes: '412', shares: '98' },
        },
    ]

    useEffect(() => {
        if (isPlaying && !isHovered) {
            slideInterval.current = setInterval(() => {
                handleNext()
            }, 6000)
        }
        return () => clearInterval(slideInterval.current)
    }, [isPlaying, isHovered, currentIndex])

    useEffect(() => {
        setProgress(((currentIndex + 1) / slides.length) * 100)
    }, [currentIndex])

    const handlePrevious = () => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
    }

    const handleNext = () => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % slides.length)
    }

    const toggleAutoplay = () => {
        setIsPlaying(!isPlaying)
    }

    const goToSlide = (index) => {
        setDirection(index > currentIndex ? 1 : -1)
        setCurrentIndex(index)
    }

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen()
            setIsFullscreen(true)
        } else {
            document.exitFullscreen()
            setIsFullscreen(false)
        }
    }

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.8,
            rotateY: direction > 0 ? 45 : -45,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
            },
        },
        exit: (direction) => ({
            x: direction > 0 ? '-100%' : '100%',
            opacity: 0,
            scale: 0.8,
            rotateY: direction > 0 ? -45 : 45,
            transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
            },
        }),
    }

    return (
        <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-dark-100 via-dark-200 to-dark-100">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute inset-0 bg-dot-pattern opacity-20" />

            {/* Animated gradient orbs */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <ScrollReveal>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
                            </span>
                            Interactive Product Tour
                        </span>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            Discover the <span className="gradient-text">Power</span> of AmazePMS
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Experience our platform through an immersive visual journey
                        </p>
                    </ScrollReveal>
                </div>

                <div className="max-w-6xl mx-auto relative" ref={containerRef}>
                    <div className="relative rounded-3xl overflow-hidden glass p-3 md:p-4 border border-white/10 shadow-2xl shadow-primary-500/5">
                        {/* Main Slider */}
                        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-dark-300">
                            <AnimatePresence custom={direction} mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="absolute inset-0"
                                    style={{ perspective: '1200px' }}
                                >
                                    {/* Background gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentIndex].gradient} opacity-30`} />

                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-100 via-transparent to-dark-100/50 z-10" />

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="relative w-full h-full flex items-center justify-center p-6 md:p-12">
                                            <div className="text-center z-20 max-w-3xl">
                                                <motion.div
                                                    initial={{ scale: 0, rotate: -180, opacity: 0 }}
                                                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                                                    transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                                                    className="text-7xl md:text-8xl mb-6"
                                                >
                                                    {currentIndex === 0 && '📊'}
                                                    {currentIndex === 1 && '👥'}
                                                    {currentIndex === 2 && '📈'}
                                                    {currentIndex === 3 && '✅'}
                                                    {currentIndex === 4 && '📱'}
                                                </motion.div>

                                                <motion.div
                                                    initial={{ y: 30, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.4 }}
                                                    className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-xs text-primary-400 mb-4"
                                                >
                                                    Feature {currentIndex + 1} of {slides.length}
                                                </motion.div>

                                                <motion.h3
                                                    initial={{ y: 30, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.5 }}
                                                    className="text-3xl md:text-5xl font-bold mb-2"
                                                    style={{ color: slides[currentIndex].color }}
                                                >
                                                    {slides[currentIndex].title}
                                                </motion.h3>

                                                <motion.p
                                                    initial={{ y: 30, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.6 }}
                                                    className="text-lg md:text-xl text-gray-300 mb-4"
                                                >
                                                    {slides[currentIndex].subtitle}
                                                </motion.p>

                                                <motion.p
                                                    initial={{ y: 30, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.7 }}
                                                    className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto mb-6"
                                                >
                                                    {slides[currentIndex].description}
                                                </motion.p>

                                                <motion.div
                                                    initial={{ y: 30, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.8 }}
                                                    className="flex flex-wrap justify-center gap-2"
                                                >
                                                    {slides[currentIndex].features.map((feature, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 hover:bg-white/10 transition-colors"
                                                        >
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </motion.div>

                                                {/* Stats */}
                                                <motion.div
                                                    initial={{ y: 30, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.9 }}
                                                    className="flex justify-center gap-6 mt-6"
                                                >
                                                    {Object.entries(slides[currentIndex].stats).map(([key, value]) => (
                                                        <div key={key} className="text-center">
                                                            <div className="text-lg font-bold text-primary-400">{value}</div>
                                                            <div className="text-xs text-gray-500 capitalize">{key}</div>
                                                        </div>
                                                    ))}
                                                </motion.div>
                                            </div>

                                            {/* Floating decorative elements */}
                                            <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-primary-500/20 floating-element" />
                                            <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-secondary-500/20 floating-element" style={{ animationDelay: '1s' }} />
                                            <div className="absolute top-1/2 left-20 w-16 h-16 rounded-full bg-accent-500/20 floating-element" style={{ animationDelay: '0.5s' }} />
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Progress bar */}
                            <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/10">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>

                            {/* Top controls */}
                            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                                <button
                                    onClick={toggleFullscreen}
                                    className="p-2 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all hover:scale-110"
                                    aria-label="Fullscreen"
                                >
                                    <FiFullscreen className="w-4 h-4 text-white/70" />
                                </button>
                                <button
                                    className="p-2 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all hover:scale-110"
                                    aria-label="Info"
                                >
                                    <FiInfo className="w-4 h-4 text-white/70" />
                                </button>
                            </div>

                            {/* Slide counter */}
                            <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-lg bg-black/30 backdrop-blur-sm text-xs text-white/70">
                                {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                            </div>

                            {/* Navigation arrows */}
                            <button
                                onClick={handlePrevious}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all hover:scale-110 group"
                                aria-label="Previous slide"
                            >
                                <FaArrowLeft className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                            </button>

                            <button
                                onClick={handleNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all hover:scale-110 group"
                                aria-label="Next slide"
                            >
                                <FaArrowRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                            </button>
                        </div>

                        {/* Bottom Controls */}
                        <div className="flex items-center justify-between mt-4 px-2">
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={handlePrevious}
                                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-110"
                                    aria-label="Previous slide"
                                >
                                    <FiChevronLeft className="w-5 h-5" />
                                </button>

                                <button
                                    onClick={toggleAutoplay}
                                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-110"
                                    aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                                >
                                    {isPlaying ? (
                                        <FiPause className="w-5 h-5" />
                                    ) : (
                                        <FiPlay className="w-5 h-5" />
                                    )}
                                </button>

                                <button
                                    onClick={handleNext}
                                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-110"
                                    aria-label="Next slide"
                                >
                                    <FiChevronRight className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="flex items-center gap-2">
                                <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-110">
                                    <FiHeart className="w-4 h-4" />
                                </button>
                                <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-110">
                                    <FiShare2 className="w-4 h-4" />
                                </button>
                                <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-110">
                                    <FiDownload className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Thumbnails */}
                        <div className="flex justify-center gap-2 mt-4 overflow-x-auto pb-2">
                            {slides.map((slide, index) => (
                                <button
                                    key={slide.id}
                                    onClick={() => goToSlide(index)}
                                    className={`group relative h-14 rounded-lg overflow-hidden transition-all duration-300 flex-shrink-0 ${currentIndex === index
                                        ? 'w-20 border-2 border-primary-500 shadow-lg shadow-primary-500/25'
                                        : 'w-14 border border-white/10 hover:border-white/30'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                >
                                    <div className={`w-full h-full bg-gradient-to-br ${slide.gradient} flex items-center justify-center text-sm font-bold transition-all duration-300 ${currentIndex === index ? 'text-white' : 'text-white/50'
                                        }`}>
                                        {index + 1}
                                    </div>
                                    {currentIndex === index && (
                                        <motion.div
                                            layoutId="activeThumbnail"
                                            className="absolute inset-0 border-2 border-primary-500 rounded-lg"
                                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PremiumImageSlider