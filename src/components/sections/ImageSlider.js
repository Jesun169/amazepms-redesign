'use client'

import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiChevronLeft, FiChevronRight, FiPlay, FiPause } from 'react-icons/fi'
import ScrollReveal from '@/components/common/ScrollReveal'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const ImageSlider = () => {
    const [isPlaying, setIsPlaying] = useState(true)
    const [activeIndex, setActiveIndex] = useState(0)
    const swiperRef = useRef(null)

    const slides = [
        {
            id: 1,
            title: 'Project Dashboard',
            description: 'Get a complete overview of all your projects at a glance',
            image: '/images/slider/dashboard-1.jpg',
            gradient: 'from-blue-500/20 to-purple-500/20',
            stats: 'Real-time updates',
        },
        {
            id: 2,
            title: 'Team Collaboration',
            description: 'Work together seamlessly with real-time collaboration tools',
            image: '/images/slider/collaboration.jpg',
            gradient: 'from-green-500/20 to-blue-500/20',
            stats: '500+ teams connected',
        },
        {
            id: 3,
            title: 'Analytics Dashboard',
            description: 'Track performance and get insights with advanced analytics',
            image: '/images/slider/analytics.jpg',
            gradient: 'from-purple-500/20 to-pink-500/20',
            stats: '100+ data points',
        },
        {
            id: 4,
            title: 'Task Management',
            description: 'Organize and prioritize tasks with intelligent workflows',
            image: '/images/slider/tasks.jpg',
            gradient: 'from-orange-500/20 to-red-500/20',
            stats: '10k+ tasks completed daily',
        },
    ]

    const toggleAutoplay = () => {
        setIsPlaying(!isPlaying)
        if (swiperRef.current) {
            if (isPlaying) {
                swiperRef.current.autoplay.stop()
            } else {
                swiperRef.current.autoplay.start()
            }
        }
    }

    return (
        <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-dark-100 via-dark-200 to-dark-100">
            <div className="absolute inset-0 bg-dot-pattern opacity-20" />
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <ScrollReveal>
                        <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
                            Platform Overview
                        </span>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            See AmazePMS in <span className="gradient-text">Action</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Explore the powerful features and intuitive interface that teams love
                        </p>
                    </ScrollReveal>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    <div className="relative rounded-3xl overflow-hidden glass p-4 md:p-6 border border-white/10 shadow-2xl">
                        <Swiper
                            ref={swiperRef}
                            modules={[Autoplay, Pagination, Navigation, EffectFade]}
                            effect="fade"
                            fadeEffect={{ crossFade: true }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                                renderBullet: (index, className) => {
                                    return `<span class="${className} !w-3 !h-3 bg-white/30 hover:bg-primary-500 transition-colors"></span>`
                                },
                            }}
                            navigation={false}
                            loop={true}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                            className="relative"
                        >
                            {slides.map((slide, index) => (
                                <SwiperSlide key={slide.id}>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6 }}
                                        className="relative aspect-[16/9] rounded-2xl overflow-hidden group"
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`} />

                                        <div className="relative w-full h-full flex items-center justify-center bg-dark-300/50">
                                            {/* Placeholder for actual images */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="text-center z-10 p-8">
                                                    <div className="text-6xl mb-4 opacity-50">
                                                        {index === 0 && '📊'}
                                                        {index === 1 && '👥'}
                                                        {index === 2 && '📈'}
                                                        {index === 3 && '✅'}
                                                    </div>
                                                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                                                        {slide.title}
                                                    </h3>
                                                    <p className="text-gray-300 text-lg max-w-lg mx-auto">
                                                        {slide.description}
                                                    </p>
                                                    <div className="mt-4 inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-primary-400">
                                                        {slide.stats}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Animated floating elements */}
                                            <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-primary-500/10 floating-element" />
                                            <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-secondary-500/10 floating-element" style={{ animationDelay: '1s' }} />
                                            <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-accent-500/10 floating-element" style={{ animationDelay: '0.5s' }} />
                                        </div>

                                        {/* Slide indicator */}
                                        <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-xs text-white/70">
                                            {index + 1} / {slides.length}
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Controls */}
                        <div className="flex items-center justify-center gap-4 mt-6">
                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-110"
                                aria-label="Previous slide"
                            >
                                <FiChevronLeft className="w-5 h-5 text-white/70" />
                            </button>

                            <button
                                onClick={toggleAutoplay}
                                className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-110"
                                aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                            >
                                {isPlaying ? (
                                    <FiPause className="w-5 h-5 text-white/70" />
                                ) : (
                                    <FiPlay className="w-5 h-5 text-white/70" />
                                )}
                            </button>

                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-110"
                                aria-label="Next slide"
                            >
                                <FiChevronRight className="w-5 h-5 text-white/70" />
                            </button>
                        </div>
                    </div>

                    {/* Thumbnail indicators */}
                    <div className="flex justify-center gap-2 mt-4">
                        {slides.map((slide, index) => (
                            <button
                                key={slide.id}
                                onClick={() => swiperRef.current?.slideTo(index)}
                                className={`h-1 rounded-full transition-all duration-300 ${activeIndex === index
                                    ? 'w-8 bg-primary-500'
                                    : 'w-4 bg-white/20 hover:bg-white/40'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.3);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #4a8cff;
        }
      `}</style>
        </section>
    )
}

export default ImageSlider