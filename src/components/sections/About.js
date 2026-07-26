'use client'

import React from 'react'
import Image from 'next/image'
import { FiTarget, FiHeart, FiZap } from 'react-icons/fi'
import GlassCard from '@/components/common/GlassCard'
import ScrollReveal from '@/components/common/ScrollReveal'

const About = () => {
    const values = [
        {
            icon: FiTarget,
            title: 'Mission-Driven',
            description:
                "We're on a mission to make property management accessible and effective for every business.",
        },
        {
            icon: FiHeart,
            title: 'User-Centric',
            description:
                "Every service we provide is designed with our clients' needs and feedback in mind.",
        },
        {
            icon: FiZap,
            title: 'Innovation First',
            description:
                'We constantly push boundaries to bring you the latest in property management technology and services.',
        },
    ]

    return (
        <section id="about" className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-dark-100 via-dark-200 to-dark-100" />
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
                    <div>
                        <ScrollReveal>
                            <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
                                About Us
                            </span>
                        </ScrollReveal>

                        <ScrollReveal delay={0.1}>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                                Building the Future of <br />
                                <span className="gradient-text">Property Management</span>
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                Amaze PMS Pvt Ltd (AMAZE) is a Property Management division of ACTION GROUP of Companies founded in the year 2001 by Mr. Subhani Abdul a veteran from the Indian Navy, a Certified Security Practitioner, and a renowned name in the Service Industry. Amaze has its Head Quarters in Cyberabad, Telangana - INDIA, providing Property Management Solutions PAN INDIA, partnering with leading clientele with 15000 + strong strength of professionals. We specialize in offering comprehensive integrated Property Management Services such as Housekeeping, MEP (Mechanical, Electrical, Plumbing), Security, Pest Control, Gardening, STP & WTP, Parking, Swimming Pool Maintenance, office support services, deep cleaning services etc all these services are inhouse.
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

                    {/* Right Column - Image */}
                    <div>
                        <ScrollReveal direction="right">
                            <div className="relative">
                                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl" />
                                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary-500/20 rounded-full blur-2xl" />

                                <GlassCard className="p-6 relative">
                                    <div className="aspect-video rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

                                        {/* ===== IMAGE DISPLAY ===== */}
                                        <div className="relative w-full h-full">
                                            <Image
                                                src="/images/banner/about1.png"
                                                alt="AmazePMS Team"
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                priority
                                                onError={(e) => {
                                                    // Fallback if image fails to load
                                                    e.target.style.display = 'none'
                                                }}
                                            />
                                            {/* Overlay for better text visibility */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-dark-100/70 via-transparent to-transparent" />
                                        </div>

                                        {/* Text overlay */}
                                        <div className="absolute bottom-6 left-6 z-10 text-left">
                                            <div className="text-4xl mb-2">🏢</div>
                                            <h3 className="text-2xl font-bold text-white">AmazePMS Team</h3>
                                            <p className="text-gray-300 text-sm">Building the future together</p>
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