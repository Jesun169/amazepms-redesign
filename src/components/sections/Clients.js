'use client'

import React, { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
    FiSearch,
    FiFilter,
    FiGrid,
    FiList,
    FiBuilding,
    FiHome,
    FiShoppingBag,
    FiActivity,
    FiBookOpen,
    FiPackage,
    FiUsers,
    FiMapPin,
    FiArrowRight,
    FiX,
    FiCheckCircle
} from 'react-icons/fi'
import GlassCard from '@/components/common/GlassCard'
import ScrollReveal from '@/components/common/ScrollReveal'
import AnimatedButton from '@/components/common/AnimatedButton'

const Clients = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [activeCategory, setActiveCategory] = useState('all')
    const [viewMode, setViewMode] = useState('grid')
    const [selectedClient, setSelectedClient] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const categories = [
        { id: 'all', label: 'All Clients', icon: FiUsers, count: 100, color: 'from-blue-500 to-purple-500' },
        { id: 'commercial', label: 'Commercial & IT Parks', icon: FiBuilding, count: 33, color: 'from-blue-500 to-cyan-500' },
        { id: 'residential', label: 'Residential Communities', icon: FiHome, count: 25, color: 'from-green-500 to-emerald-500' },
        { id: 'malls', label: 'Malls & Retail', icon: FiShoppingBag, count: 9, color: 'from-purple-500 to-pink-500' },
        { id: 'hospitals', label: 'Hospitals & Clinics', icon: FiActivity, count: 5, color: 'from-red-500 to-rose-500' },
        { id: 'educational', label: 'Educational Institutions', icon: FiBookOpen, count: 8, color: 'from-orange-500 to-amber-500' },
        { id: 'warehouses', label: 'Warehouses', icon: FiPackage, count: 8, color: 'from-yellow-500 to-orange-500' },
        { id: 'manufacturing', label: 'Manufacturing & Pharma', icon: FiPackage, count: 12, color: 'from-teal-500 to-cyan-500' },
    ]

    const clients = {
        commercial: [
            { name: 'Sohini Tech Park', location: 'Hyderabad', type: 'IT Park' },
            { name: 'BSR Tech Park', location: 'Hyderabad', type: 'IT Park' },
            { name: 'Divyasree NSL (Orion Campus)', location: 'Hyderabad', type: 'IT Campus' },
            { name: 'Kapil Towers', location: 'Hyderabad', type: 'Commercial' },
            { name: 'Astra Towers', location: 'Hyderabad', type: 'Commercial' },
            { name: 'Lanco IT', location: 'Hyderabad', type: 'IT Park' },
            { name: 'Rajapushpa Summit', location: 'Hyderabad', type: 'Commercial' },
            { name: 'Cyperoptics', location: 'Hyderabad', type: 'IT' },
            { name: 'IVY Infotech', location: 'Hyderabad', type: 'IT' },
            { name: 'L&T Metro Stations', location: 'Hyderabad', type: 'Infrastructure' },
            { name: 'Purva Summit', location: 'Hyderabad', type: 'Commercial' },
            { name: 'Kapil Business Park', location: 'Hyderabad', type: 'Business Park' },
            { name: 'I Labs', location: 'Hyderabad', type: 'IT' },
            { name: 'Sattva Knowledge Park', location: 'Hyderabad', type: 'IT Park' },
            { name: 'Tech Mahindra', location: 'Hyderabad', type: 'IT' },
            { name: 'T Hub', location: 'Hyderabad', type: 'Innovation Hub' },
            { name: 'Tech Ridge', location: 'Hyderabad', type: 'IT' },
            { name: 'Cyber Towers', location: 'Hyderabad', type: 'Commercial' },
            { name: 'Aurobindo Galaxy', location: 'Hyderabad', type: 'Commercial' },
            { name: 'Kapil Kavuri Hub', location: 'Hyderabad', type: 'Business Hub' },
            { name: 'Sitel India Pvt Ltd', location: 'Hyderabad', type: 'IT' },
            { name: 'Jocota', location: 'Hyderabad', type: 'IT' },
            { name: 'Moschip', location: 'Hyderabad', type: 'IT' },
            { name: 'Smart Drive', location: 'Hyderabad', type: 'IT' },
            { name: 'I Sprout', location: 'Hyderabad', type: 'IT' },
        ],
        residential: [
            { name: 'Golf Edge Residences', location: 'Hyderabad', type: 'Luxury' },
            { name: 'Aparna Silver Oak', location: 'Hyderabad', type: 'Premium' },
            { name: 'Mahindra Ashvitha', location: 'Hyderabad', type: 'Premium' },
            { name: 'Golf View', location: 'Hyderabad', type: 'Luxury' },
            { name: 'Ramky Towers', location: 'Hyderabad', type: 'Premium' },
            { name: 'Rajapushpa Imperia', location: 'Hyderabad', type: 'Luxury' },
            { name: 'Lanco Hills', location: 'Hyderabad', type: 'Premium' },
            { name: 'Rajapushpa Provincia', location: 'Hyderabad', type: 'Luxury' },
            { name: 'Krinss Villas', location: 'Hyderabad', type: 'Villas' },
            { name: 'Hill County', location: 'Hyderabad', type: 'Premium' },
            { name: 'Rajapushpa Greendale', location: 'Hyderabad', type: 'Luxury' },
            { name: 'Jains Balaji', location: 'Hyderabad', type: 'Premium' },
            { name: 'Kalpatharu Residency', location: 'Hyderabad', type: 'Premium' },
            { name: 'Sri Sai Ram Towers', location: 'Hyderabad', type: 'Premium' },
            { name: 'The Botanika', location: 'Hyderabad', type: 'Luxury' },
            { name: 'My Home Mangla', location: 'Hyderabad', type: 'Premium' },
            { name: 'Rainbow Vista', location: 'Hyderabad', type: 'Luxury' },
            { name: 'North Star Villas', location: 'Hyderabad', type: 'Villas' },
            { name: 'Rajapushpa Regalia', location: 'Hyderabad', type: 'Luxury' },
            { name: 'Rajapushpa Atria', location: 'Hyderabad', type: 'Luxury' },
            { name: 'Manjeera Diamond Tower', location: 'Hyderabad', type: 'Premium' },
            { name: 'L&T Serene County', location: 'Hyderabad', type: 'Luxury' },
            { name: 'Aparna Hill Park Sarovar', location: 'Hyderabad', type: 'Premium' },
            { name: 'My Home Avatar', location: 'Hyderabad', type: 'Luxury' },
            { name: 'Rajapushpa Eterna', location: 'Hyderabad', type: 'Luxury' },
            { name: 'Hill Ridge Villas', location: 'Hyderabad', type: 'Villas' },
            { name: 'Aditya Empress', location: 'Hyderabad', type: 'Premium' },
            { name: 'Prajay Megapolis', location: 'Hyderabad', type: 'Premium' },
        ],
        malls: [
            { name: 'Nexus Mall', location: 'Hyderabad', type: 'Shopping Mall' },
            { name: 'Marina Mall', location: 'Hyderabad', type: 'Shopping Mall' },
            { name: 'Phoenix Market City', location: 'Hyderabad', type: 'Shopping Mall' },
            { name: 'GMS Mall', location: 'Hyderabad', type: 'Shopping Mall' },
            { name: 'Lulu Mall', location: 'Hyderabad', type: 'Shopping Mall' },
            { name: 'DSL Mall', location: 'Hyderabad', type: 'Shopping Mall' },
            { name: 'L&T Mall – Punjagutta', location: 'Hyderabad', type: 'Shopping Mall' },
            { name: 'Rajapushpa Provincia', location: 'Hyderabad', type: 'Retail' },
            { name: 'L&T Mall – Hitech City', location: 'Hyderabad', type: 'Shopping Mall' },
            { name: 'L&T Mall – Musarambagh', location: 'Hyderabad', type: 'Shopping Mall' },
            { name: 'Max Stores', location: 'Hyderabad', type: 'Retail' },
            { name: 'Time Zone', location: 'Hyderabad', type: 'Entertainment' },
            { name: 'Life Style', location: 'Hyderabad', type: 'Retail' },
        ],
        hospitals: [
            { name: 'Rainbow Hospitals', location: 'Hyderabad', type: 'Multi-specialty' },
            { name: 'Oliva Clinics', location: 'Hyderabad', type: 'Clinic' },
            { name: 'Star Health', location: 'Hyderabad', type: 'Healthcare' },
            { name: 'Rainbow Vista', location: 'Hyderabad', type: 'Healthcare' },
        ],
        educational: [
            { name: 'Institute of Public Enterprise', location: 'Hyderabad', type: 'University' },
            { name: 'NICMAR', location: 'Hyderabad', type: 'Institute' },
            { name: 'Nalsar', location: 'Hyderabad', type: 'University' },
            { name: 'EFL University', location: 'Hyderabad', type: 'University' },
            { name: 'Administrative Staff College of India', location: 'Hyderabad', type: 'Institute' },
            { name: 'Aga Khan Academy', location: 'Hyderabad', type: 'School' },
            { name: 'KL University', location: 'Hyderabad', type: 'University' },
            { name: 'Delhi Public School', location: 'Hyderabad', type: 'School' },
            { name: 'Mahindra and Mahindra University', location: 'Hyderabad', type: 'University' },
            { name: 'Analog IAS Academy', location: 'Hyderabad', type: 'Academy' },
        ],
        warehouses: [
            { name: 'Max', location: 'Hyderabad', type: 'Warehouse' },
            { name: 'Life Style', location: 'Hyderabad', type: 'Warehouse' },
            { name: 'RIL', location: 'Hyderabad', type: 'Warehouse' },
            { name: 'Metro', location: 'Hyderabad', type: 'Warehouse' },
            { name: 'UB Beer', location: 'Hyderabad', type: 'Warehouse' },
            { name: 'Emirates Logistics', location: 'Hyderabad', type: 'Logistics' },
            { name: 'Nippon', location: 'Hyderabad', type: 'Warehouse' },
            { name: 'ITC', location: 'Hyderabad', type: 'Warehouse' },
        ],
        manufacturing: [
            { name: 'Vidur Pharma', location: 'Hyderabad', type: 'Pharma' },
            { name: 'Srivar Pharma', location: 'Hyderabad', type: 'Pharma' },
            { name: 'MSN Pharma', location: 'Hyderabad', type: 'Pharma' },
            { name: 'Renew Power Projects', location: 'Hyderabad', type: 'Energy' },
            { name: 'Astra Microwave Products', location: 'Hyderabad', type: 'Electronics' },
            { name: 'UB Beer Ltd', location: 'Hyderabad', type: 'Beverage' },
            { name: 'BMM Ispat Ltd', location: 'Hyderabad', type: 'Steel' },
            { name: 'VRKP Steels Ltd', location: 'Hyderabad', type: 'Steel' },
            { name: 'Pokarna Ltd', location: 'Hyderabad', type: 'Manufacturing' },
            { name: 'MSPL Ltd', location: 'Hyderabad', type: 'Manufacturing' },
            { name: 'RMIL Ltd', location: 'Hyderabad', type: 'Manufacturing' },
            { name: 'Action Group', location: 'Hyderabad', type: 'Conglomerate' },
        ],
    }

    const getAllClients = () => {
        const all = []
        Object.keys(clients).forEach(category => {
            clients[category].forEach(client => {
                all.push({ ...client, category })
            })
        })
        return all
    }

    const filteredClients = useMemo(() => {
        let result = []

        if (activeCategory === 'all') {
            result = getAllClients()
        } else {
            result = clients[activeCategory] || []
        }

        if (searchTerm) {
            result = result.filter(client =>
                client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                client.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (client.type && client.type.toLowerCase().includes(searchTerm.toLowerCase()))
            )
        }

        return result
    }, [activeCategory, searchTerm])

    const getCategoryIcon = (category) => {
        const icons = {
            commercial: FiBuilding,
            residential: FiHome,
            malls: FiShoppingBag,
            hospitals: FiActivity,
            educational: FiBookOpen,
            warehouses: FiPackage,
            manufacturing: FiPackage,
        }
        return icons[category] || FiBuilding
    }

    const getCategoryColor = (category) => {
        const colors = {
            commercial: 'from-blue-500 to-cyan-500',
            residential: 'from-green-500 to-emerald-500',
            malls: 'from-purple-500 to-pink-500',
            hospitals: 'from-red-500 to-rose-500',
            educational: 'from-orange-500 to-amber-500',
            warehouses: 'from-yellow-500 to-orange-500',
            manufacturing: 'from-teal-500 to-cyan-500',
        }
        return colors[category] || 'from-primary-500 to-secondary-500'
    }

    const stats = [
        { label: 'Total Clients', value: '100+', icon: FiUsers, color: 'text-primary-500' },
        { label: 'Cities Served', value: '25+', icon: FiMapPin, color: 'text-secondary-500' },
        { label: 'Categories', value: '7', icon: FiGrid, color: 'text-green-500' },
        { label: 'Years of Service', value: '20+', icon: FiActivity, color: 'text-orange-500' },
    ]

    const openClientModal = (client) => {
        setSelectedClient(client)
        setIsModalOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const closeClientModal = () => {
        setIsModalOpen(false)
        document.body.style.overflow = 'unset'
        setTimeout(() => setSelectedClient(null), 300)
    }

    const getCategoryLabel = (categoryId) => {
        const cat = categories.find(c => c.id === categoryId)
        return cat ? cat.label : categoryId
    }

    // Animated background elements
    const floatingElements = [
        { top: '10%', left: '5%', size: 'w-64 h-64', color: 'bg-primary-500/5', delay: '0s' },
        { top: '60%', right: '5%', size: 'w-96 h-96', color: 'bg-secondary-500/5', delay: '2s' },
        { bottom: '20%', left: '20%', size: 'w-48 h-48', color: 'bg-accent-500/5', delay: '1s' },
    ]

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark-100 via-dark-200 to-dark-100" />
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />

            {/* Floating Elements */}
            {floatingElements.map((el, index) => (
                <div
                    key={index}
                    className={`absolute ${el.size} ${el.color} rounded-full blur-3xl floating-element`}
                    style={{ top: el.top, left: el.left, right: el.right, bottom: el.bottom, animationDelay: el.delay }}
                />
            ))}

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <ScrollReveal>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
                            </span>
                            Our Valued Clients
                        </span>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            Trusted by <span className="gradient-text">100+</span> Partners
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Across India, we serve diverse industries with excellence, dedication, and a commitment to quality
                        </p>
                    </ScrollReveal>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {stats.map((stat, index) => (
                        <ScrollReveal key={index} delay={0.1 * index}>
                            <motion.div
                                whileHover={{ y: -5, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <GlassCard className="p-6 text-center group">
                                    <div className={`${stat.color} mb-2 transition-all duration-300 group-hover:scale-110`}>
                                        <stat.icon className="w-8 h-8 mx-auto" />
                                    </div>
                                    <motion.div
                                        className="text-2xl font-bold text-white"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.2 + index * 0.1, type: 'spring' }}
                                    >
                                        {stat.value}
                                    </motion.div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </GlassCard>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Search & Filters */}
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full md:w-96">
                            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search clients by name, location, or type..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-dark-300/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                                >
                                    <FiX className="w-4 h-4" />
                                </button>
                            )}
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid'
                                            ? 'bg-primary-500/20 text-primary-400'
                                            : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    <FiGrid className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'list'
                                            ? 'bg-primary-500/20 text-primary-400'
                                            : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    <FiList className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {categories.map((category) => {
                            const Icon = category.icon
                            return (
                                <motion.button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeCategory === category.id
                                            ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                                            : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {category.label}
                                    <span className={`text-xs ${activeCategory === category.id ? 'text-white/80' : 'text-gray-500'
                                        }`}>
                                        ({category.count})
                                    </span>
                                </motion.button>
                            )
                        })}
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-4 text-sm text-gray-400">
                    Showing {filteredClients.length} {filteredClients.length === 1 ? 'client' : 'clients'}
                    {activeCategory !== 'all' && ` in ${getCategoryLabel(activeCategory)}`}
                    {searchTerm && ` matching "${searchTerm}"`}
                </div>

                {/* Clients Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory + searchTerm}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className={`grid ${viewMode === 'grid'
                                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
                                : 'grid-cols-1 gap-3'
                            }`}
                    >
                        {filteredClients.map((client, index) => {
                            const Icon = getCategoryIcon(client.category)
                            const categoryColor = getCategoryColor(client.category)
                            return (
                                <motion.div
                                    key={client.name + client.category}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.02 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <GlassCard
                                        className={`p-4 transition-all duration-300 cursor-pointer hover:shadow-neon ${viewMode === 'list' ? 'flex items-center gap-4' : ''
                                            }`}
                                        onClick={() => openClientModal(client)}
                                    >
                                        <div className={`${viewMode === 'list' ? 'flex items-center gap-4 w-full' : ''}`}>
                                            <div className={`p-3 rounded-xl bg-gradient-to-br ${categoryColor}/10 flex-shrink-0`}>
                                                <Icon className="w-5 h-5 text-primary-500" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-semibold text-white truncate">
                                                    {client.name}
                                                </h4>
                                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                                    <FiMapPin className="w-3 h-3 flex-shrink-0" />
                                                    <span>{client.location}</span>
                                                    {client.type && (
                                                        <>
                                                            <span className="w-1 h-1 rounded-full bg-gray-600" />
                                                            <span>{client.type}</span>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                            {viewMode === 'grid' && (
                                                <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-br ${categoryColor}/10 text-primary-400 mt-2 inline-block`}>
                                                    {categories.find(c => c.id === client.category)?.label.split('&')[0].trim()}
                                                </span>
                                            )}
                                            {viewMode === 'list' && (
                                                <FiArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                            )}
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </AnimatePresence>

                {filteredClients.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                    >
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold mb-2">No clients found</h3>
                        <p className="text-gray-400">Try adjusting your search or filter</p>
                        <button
                            onClick={() => {
                                setSearchTerm('')
                                setActiveCategory('all')
                            }}
                            className="mt-4 text-primary-400 hover:text-primary-300 transition-colors"
                        >
                            Clear all filters
                        </button>
                    </motion.div>
                )}

                {/* CTA */}
                <div className="mt-16 text-center">
                    <ScrollReveal>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <GlassCard className="p-8 max-w-3xl mx-auto relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10" />
                                <div className="relative">
                                    <h3 className="text-2xl font-bold mb-2">Become Our Partner</h3>
                                    <p className="text-gray-400 mb-6">
                                        Join our growing list of 100+ satisfied clients across India
                                    </p>
                                    <Link href="/contact">
                                        <AnimatedButton variant="gradient" className="group">
                                            Contact Us Today
                                            <FiArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                                        </AnimatedButton>
                                    </Link>
                                </div>
                            </GlassCard>
                        </motion.div>
                    </ScrollReveal>
                </div>
            </div>

            {/* Client Detail Modal */}
            <AnimatePresence>
                {isModalOpen && selectedClient && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={closeClientModal}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: 'spring', damping: 25 }}
                            className="relative max-w-md w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <GlassCard className="p-6">
                                <button
                                    onClick={closeClientModal}
                                    className="absolute top-3 right-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                                >
                                    <FiX className="w-4 h-4" />
                                </button>

                                <div className="text-center mb-4">
                                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${getCategoryColor(selectedClient.category)} flex items-center justify-center mb-3`}>
                                        {React.createElement(getCategoryIcon(selectedClient.category), { className: "w-8 h-8 text-white" })}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{selectedClient.name}</h3>
                                    <p className="text-gray-400">{selectedClient.location}</p>
                                </div>

                                <div className="space-y-3 border-t border-white/5 pt-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-400">Category</span>
                                        <span className="text-sm text-white">{getCategoryLabel(selectedClient.category)}</span>
                                    </div>
                                    {selectedClient.type && (
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-400">Type</span>
                                            <span className="text-sm text-white">{selectedClient.type}</span>
                                        </div>
                                    )}
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-400">Status</span>
                                        <span className="text-sm text-green-400 flex items-center gap-1">
                                            <FiCheckCircle className="w-3 h-3" />
                                            Active Partner
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <Link href="/contact">
                                        <AnimatedButton variant="gradient" className="w-full">
                                            Contact Client
                                        </AnimatedButton>
                                    </Link>
                                </div>
                            </GlassCard>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Clients