'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import AnimatedButton from '@/components/common/AnimatedButton'
import ScrollReveal from '@/components/common/ScrollReveal'

const CTA = () => {
    return (
        <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-dark-200 via-primary-500/10 to-dark-200" />
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl" />

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
                            </span>
                            <span className="text-sm text-primary-400 font-medium">Start your free trial today</span>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Ready to Transform Your <br />
                            <span className="gradient-text">Project Management?</span>
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                            Join thousands of teams already using AmazePMS to deliver amazing work. Start your 14-day free trial today.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <AnimatedButton variant="gradient" size="lg" className="group px-8 py-4 text-lg">
                                Get Started Free
                                <FiArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                            </AnimatedButton>
                            <AnimatedButton variant="outline" size="lg" className="px-8 py-4 text-lg">
                                Contact Sales
                            </AnimatedButton>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <FiCheck className="text-primary-500" />
                                No credit card required
                            </div>
                            <div className="flex items-center gap-2">
                                <FiCheck className="text-primary-500" />
                                14-day free trial
                            </div>
                            <div className="flex items-center gap-2">
                                <FiCheck className="text-primary-500" />
                                Cancel anytime
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}

export default CTA