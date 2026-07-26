'use client'

import React from 'react'
import { FiTarget, FiHeart, FiZap } from 'react-icons/fi'
import GlassCard from '@/components/common/GlassCard'
import ScrollReveal from '@/components/common/ScrollReveal'

const About = () => {
    const values = [
        {
            icon: FiTarget,
            title: 'Mission-Driven',
            description:
                "We're on a mission to make project management accessible and effective for every team.",
        },
        {
            icon: FiHeart,
            title: 'User-Centric',
            description:
                "Every feature we build is designed with our users' needs and feedback in mind.",
        },
        {
            icon: FiZap,
            title: 'Innovation First',
            description:
                'We constantly push boundaries to bring you the latest in project management technology.',
        },
    ]

    return (
        <section id="about" className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-dark-100 via-dark-200 to-dark-100" />
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <ScrollReveal>
                            <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
                                About Us
                            </span>
                        </ScrollReveal>

                        <ScrollReveal delay={0.1}>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                                Building the Future of <br />
                                <span className="gradient-text">Project Management</span>
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                At AmazePMS, we believe that great teams deserve great tools.
                                That's why we've built the most intuitive, powerful, and
                                collaborative project management platform on the market.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <p className="text-gray-400 leading-relaxed">
                                Founded in 2023, our team of passionate developers, designers,
                                and project management experts came together with a single
                                vision: to transform how teams work together.
                            </p>
                        </ScrollReveal>

                        <div className="mt-8 space-y-4">
                            {values.map((value, index) => (
                                <ScrollReveal key={index} delay={0.2 + index * 0.1}>
                                    <div className="flex items-start gap-4 group">
                                        <div className="p-2 rounded-lg bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors">
                                            <value.icon className="w-5 h-5 text-primary-500" />
                                        </div>

                                        <div>
                                            <h3 className="font-semibold group-hover:text-primary-400 transition-colors">
                                                {value.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>

                    <div>
                        <ScrollReveal direction="right">
                            <div className="relative">
                                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl" />
                                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary-500/20 rounded-full blur-2xl" />

                                <GlassCard className="p-6 relative">
                                    <div className="aspect-video rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

                                        <div className="text-center z-10">
                                            <div className="text-6xl mb-4">🚀</div>
                                            <h3 className="text-2xl font-bold">AmazePMS Team</h3>
                                            <p className="text-gray-400">
                                                Building the future together
                                            </p>
                                        </div>
                                    </div>
                                </GlassCard>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About