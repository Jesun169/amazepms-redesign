'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'
import GlassCard from '@/components/common/GlassCard'
import AnimatedButton from '@/components/common/AnimatedButton'
import ScrollReveal from '@/components/common/ScrollReveal'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [status, setStatus] = useState('idle')

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('loading')

        try {
            const response = await fetch('https://formspree.io/f/your-form-id', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', message: '' })
                setTimeout(() => setStatus('idle'), 3000)
            } else {
                setStatus('error')
            }
        } catch (error) {
            setStatus('error')
        }
    }

    const contactInfo = [
        {
            icon: FiMail,
            label: 'Email',
            value: 'Info@amazepms.com',
            href: 'mailto:Info@amazepms.com',
        },
        {
            icon: FiPhone,
            label: 'Phone',
            value: '+91 9100694137',
            href: 'tel:+91 9100694137',
        },
        {
            icon: FiMapPin,
            label: 'Location',
            value: '4th floor, High Mark Chambers, Khajaguda X road, Cyberabad, Hyderabad-500008',
            href: '#',
        },
    ]

    return (
        <section id="contact" className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-dark-100 via-dark-200 to-dark-100" />
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <ScrollReveal>
                        <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
                            Contact Us
                        </span>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            Get in <span className="gradient-text">Touch</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="lg:col-span-2">
                        <ScrollReveal direction="up">
                            <GlassCard className="p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-dark-200 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-dark-200 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 bg-dark-200 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                                            placeholder="Your message..."
                                        />
                                    </div>

                                    <AnimatedButton
                                        type="submit"
                                        variant="gradient"
                                        className="w-full"
                                        isLoading={status === 'loading'}
                                        icon={FiSend}
                                    >
                                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                                    </AnimatedButton>

                                    {status === 'success' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-center"
                                        >
                                            ✓ Message sent successfully!
                                        </motion.div>
                                    )}

                                    {status === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-center"
                                        >
                                            ✗ Failed to send message. Please try again.
                                        </motion.div>
                                    )}
                                </form>
                            </GlassCard>
                        </ScrollReveal>
                    </div>

                    <div>
                        <ScrollReveal direction="up" delay={0.2}>
                            <GlassCard className="p-8 h-full">
                                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    {contactInfo.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.href}
                                            className="flex items-start gap-4 group hover:scale-105 transition-transform"
                                        >
                                            <div className="p-3 rounded-xl bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors">
                                                <item.icon className="w-5 h-5 text-primary-500" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-400">{item.label}</p>
                                                <p className="text-white group-hover:text-primary-400 transition-colors">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </a>
                                    ))}
                                </div>

                                <div className="mt-8 pt-8 border-t border-white/5">
                                    <h4 className="text-sm font-semibold text-gray-400 mb-4">Office Hours</h4>
                                    <div className="space-y-2 text-sm">
                                        <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                        <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                                        <p className="text-gray-300">Sunday: Closed</p>
                                    </div>
                                </div>
                            </GlassCard>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact