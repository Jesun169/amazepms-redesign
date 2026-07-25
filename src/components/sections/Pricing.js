'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCheck, FiX, FiStar, FiArrowRight } from 'react-icons/fi'
import GlassCard from '@/components/common/GlassCard'
import AnimatedButton from '@/components/common/AnimatedButton'
import ScrollReveal from '@/components/common/ScrollReveal'

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(false)

    const plans = [
        {
            name: 'Starter',
            price: { monthly: 29, annual: 290 },
            description: 'Perfect for small teams getting started',
            features: [
                'Up to 10 team members',
                '5 projects',
                'Basic analytics',
                '2GB storage',
                'Email support',
                'API access',
            ],
            notIncluded: [
                'Advanced analytics',
                'Custom integrations',
                'Priority support',
            ],
            popular: false,
            icon: '🚀',
        },
        {
            name: 'Professional',
            price: { monthly: 79, annual: 790 },
            description: 'Best for growing teams',
            features: [
                'Up to 50 team members',
                'Unlimited projects',
                'Advanced analytics',
                '20GB storage',
                'Priority support',
                'API access',
                'Custom integrations',
                'Team workflows',
            ],
            notIncluded: [
                'Enterprise security',
                'Custom training',
            ],
            popular: true,
            icon: '💎',
        },
        {
            name: 'Enterprise',
            price: { monthly: 199, annual: 1990 },
            description: 'For large organizations',
            features: [
                'Unlimited team members',
                'Unlimited projects',
                'Enterprise analytics',
                'Unlimited storage',
                '24/7 support',
                'API access',
                'Custom integrations',
                'Advanced security',
                'Custom training',
                'Dedicated account manager',
            ],
            notIncluded: [],
            popular: false,
            icon: '🏢',
        },
    ]

    return (
        <section id="pricing" className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-dark-200 via-dark-100 to-dark-200" />
            <div className="absolute inset-0 bg-dot-pattern opacity-20" />

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <ScrollReveal>
                        <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
                            Pricing
                        </span>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            Choose the Perfect <br />
                            <span className="gradient-text">Plan for Your Team</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Start with a free trial and upgrade when you're ready. No hidden fees.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <span className={`text-sm transition-colors ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
                                Monthly
                            </span>
                            <button
                                onClick={() => setIsAnnual(!isAnnual)}
                                className="relative w-14 h-8 rounded-full bg-dark-300 border border-white/10 transition-colors duration-300 focus:outline-none"
                            >
                                <motion.div
                                    animate={{ x: isAnnual ? 28 : 2 }}
                                    className="absolute top-1 w-6 h-6 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 shadow-lg"
                                />
                            </button>
                            <span className={`text-sm transition-colors ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
                                Annual <span className="text-primary-400 text-xs">(Save 20%)</span>
                            </span>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} direction="up">
                            <div className={`relative ${plan.popular ? 'md:-mt-4' : ''}`}>
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                        <span className="px-4 py-1 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-semibold flex items-center gap-1">
                                            <FiStar className="w-3 h-3 fill-current" />
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <GlassCard
                                    className={`p-8 h-full ${plan.popular ? 'border-primary-500/50 shadow-neon' : ''}`}
                                    hoverEffect={false}
                                >
                                    <div className="flex flex-col h-full">
                                        <div className="text-4xl mb-2">{plan.icon}</div>
                                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                        <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                                        <div className="mb-6">
                                            <span className="text-4xl font-bold">
                                                ${isAnnual ? plan.price.annual : plan.price.monthly}
                                            </span>
                                            <span className="text-gray-400 text-sm">
                                                /{isAnnual ? 'year' : 'month'}
                                            </span>
                                            {isAnnual && (
                                                <div className="text-xs text-primary-400 mt-1">
                                                    Save ${(plan.price.monthly * 12 - plan.price.annual)} annually
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex-grow">
                                            <ul className="space-y-3 mb-6">
                                                {plan.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm group">
                                                        <FiCheck className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                                        <span className="text-gray-300">{feature}</span>
                                                    </li>
                                                ))}
                                                {plan.notIncluded.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm opacity-50">
                                                        <FiX className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                                                        <span className="text-gray-400">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <AnimatedButton
                                            variant={plan.popular ? 'gradient' : 'outline'}
                                            className="w-full mt-4 group"
                                        >
                                            Get Started
                                            <FiArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                                        </AnimatedButton>
                                    </div>
                                </GlassCard>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-sm text-gray-400">
                        All plans include a 14-day free trial. No credit card required.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Pricing