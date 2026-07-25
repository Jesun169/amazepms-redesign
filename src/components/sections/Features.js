'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  FiLayers,
  FiUsers,
  FiClock,
  FiBarChart2,
  FiShield,
  FiMessageSquare,
  FiZap,
  FiGlobe,
  FiTrendingUp,
  FiLock,
  FiCloud,
  FiDatabase,
  FiCode
} from 'react-icons/fi'
import GlassCard from '@/components/common/GlassCard'
import ScrollReveal from '@/components/common/ScrollReveal'

const Features = () => {
  const features = [
    {
      icon: FiLayers,
      title: 'Project Planning',
      description: 'Create and manage projects with ease using our intuitive planning tools and Gantt charts.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiUsers,
      title: 'Team Collaboration',
      description: 'Bring your team together with real-time collaboration, comments, and @mentions.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FiClock,
      title: 'Time Tracking',
      description: 'Track time spent on tasks and projects with precision using our built-in timer.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FiBarChart2,
      title: 'Analytics & Reports',
      description: 'Get deep insights into your team\'s performance with detailed analytics and custom reports.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: FiShield,
      title: 'Enterprise Security',
      description: 'Keep your data safe with enterprise-grade security, encryption, and compliance features.',
      color: 'from-red-500 to-rose-500',
    },
    {
      icon: FiMessageSquare,
      title: 'Team Communication',
      description: 'Built-in messaging and comments for seamless communication across your organization.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: FiZap,
      title: 'Automation Workflows',
      description: 'Automate repetitive tasks with powerful workflow automations and custom triggers.',
      color: 'from-yellow-500 to-amber-500',
    },
    {
      icon: FiGlobe,
      title: 'Multi-platform Access',
      description: 'Access your projects from anywhere, on any device with our responsive web platform.',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: FiTrendingUp,
      title: 'Growth Insights',
      description: 'Track your team\'s growth and productivity with advanced analytics and KPIs.',
      color: 'from-lime-500 to-green-500',
    },
    {
      icon: FiLock,
      title: 'Data Privacy',
      description: 'Your data is yours. We ensure complete privacy and data protection compliance.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: FiCloud,
      title: 'Cloud Sync',
      description: 'Never lose your work with automatic cloud sync and backup features.',
      color: 'from-sky-500 to-indigo-500',
    },
    {
      icon: FiDatabase,
      title: 'Data Export',
      description: 'Export your data anytime in multiple formats for complete flexibility.',
      color: 'from-violet-500 to-purple-500',
    },
  ]

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-100 via-dark-200 to-dark-100" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
              Features
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to <br />
              <span className="gradient-text">Manage Projects</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Powerful features designed to help your team work more efficiently and deliver better results.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.05} direction={index % 2 === 0 ? 'up' : 'down'}>
              <div className="group h-full">
                <GlassCard className="p-6 h-full hover:shadow-neon transition-all duration-300 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  <div className="flex flex-col items-start relative z-10">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color}/10 group-hover:bg-gradient-to-br ${feature.color}/20 transition-all duration-300 mb-4 group-hover:scale-110`}>
                      <feature.icon className="w-6 h-6 text-primary-500 group-hover:text-primary-400 transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </GlassCard>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features