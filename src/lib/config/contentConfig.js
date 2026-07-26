export const contentConfig = {
    // ===== HERO SECTION =====
    hero: {
        badge: 'Now available for early access',
        title: 'Transform Your Project Management',
        subtitle: 'The most intuitive and powerful project management software for modern teams. Plan, track, and deliver amazing work together.',
        ctaPrimary: 'Get Started Free',
        ctaSecondary: 'Watch Demo',
        trust: [
            'No credit card required',
            '14-day free trial',
            'Cancel anytime'
        ]
    },

    // ===== FEATURES SECTION =====
    features: {
        badge: 'Features',
        title: 'Everything You Need to Manage Projects',
        subtitle: 'Powerful features designed to help your team work more efficiently and deliver better results.',
        items: [
            {
                title: 'Project Planning',
                description: 'Create and manage projects with ease using our intuitive planning tools.',
                icon: 'FiLayers'
            },
            {
                title: 'Team Collaboration',
                description: 'Bring your team together with real-time collaboration features.',
                icon: 'FiUsers'
            },
            {
                title: 'Time Tracking',
                description: 'Track time spent on tasks and projects with precision.',
                icon: 'FiClock'
            },
            {
                title: 'Analytics & Reports',
                description: 'Get insights into your team\'s performance with detailed analytics.',
                icon: 'FiBarChart2'
            },
            {
                title: 'Enterprise Security',
                description: 'Keep your data safe with enterprise-grade security features.',
                icon: 'FiShield'
            },
            {
                title: 'Team Communication',
                description: 'Built-in messaging and comments for seamless communication.',
                icon: 'FiMessageSquare'
            }
        ]
    },

    // ===== STATS SECTION =====
    stats: {
        items: [
            { value: 10000, label: 'Active Teams', suffix: '+' },
            { value: 500000, label: 'Hours Saved', suffix: '+' },
            { value: 99.9, label: 'Uptime', suffix: '%' },
            { value: 156, label: 'Countries', suffix: '+' }
        ]
    },

    // ===== PRICING SECTION =====
    pricing: {
        badge: 'Pricing',
        title: 'Choose the Perfect Plan for Your Team',
        subtitle: 'Start with a free trial and upgrade when you\'re ready. No hidden fees.',
        plans: [
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
                    'API access'
                ],
                popular: false
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
                    'Team workflows'
                ],
                popular: true
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
                    'Dedicated account manager'
                ],
                popular: false
            }
        ]
    },

    // ===== TESTIMONIALS =====
    testimonials: {
        badge: 'Testimonials',
        title: 'What Our Users Say',
        subtitle: 'Join thousands of satisfied teams who have transformed their workflow with AmazePMS.',
        items: [
            {
                name: 'Sarah Johnson',
                role: 'CEO, TechStart',
                content: 'AmazePMS has completely transformed how our team works. The intuitive interface and powerful features have increased our productivity by 40%.',
                rating: 5
            },
            {
                name: 'Michael Chen',
                role: 'Project Manager, InnovateCorp',
                content: 'The best project management tool we\'ve ever used. The analytics and reporting features give us insights we never had before.',
                rating: 5
            },
            {
                name: 'Emily Rodriguez',
                role: 'Product Lead, DesignStudio',
                content: 'Collaboration has never been easier. Our distributed team feels connected and productive with AmazePMS.',
                rating: 5
            }
        ]
    },

    // ===== ABOUT SECTION =====
    about: {
        badge: 'About Us',
        title: 'Building the Future of Project Management',
        description: 'At AmazePMS, we believe that great teams deserve great tools. That\'s why we\'ve built the most intuitive, powerful, and collaborative project management platform on the market.',
        additionalDescription: 'Founded in 2023, our team of passionate developers, designers, and project management experts came together with a single vision: to transform how teams work together.',
        values: [
            {
                title: 'Mission-Driven',
                description: 'We\'re on a mission to make project management accessible and effective for every team.',
                icon: 'FiTarget'
            },
            {
                title: 'User-Centric',
                description: 'Every feature we build is designed with our users\' needs and feedback in mind.',
                icon: 'FiHeart'
            },
            {
                title: 'Innovation First',
                description: 'We constantly push boundaries to bring you the latest in project management technology.',
                icon: 'FiLightbulb'
            }
        ]
    },

    // ===== CTA SECTION =====
    cta: {
        badge: 'Start your free trial today',
        title: 'Ready to Transform Your Project Management?',
        subtitle: 'Join thousands of teams already using AmazePMS to deliver amazing work. Start your 14-day free trial today.',
        ctaPrimary: 'Get Started Free',
        ctaSecondary: 'Contact Sales',
        trust: [
            'No credit card required',
            '14-day free trial',
            'Cancel anytime'
        ]
    },

    // ===== CONTACT SECTION =====
    contact: {
        badge: 'Contact Us',
        title: 'Get in Touch',
        subtitle: 'Have questions? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
        info: [
            {
                label: 'Email',
                value: 'hello@amazepms.com',
                icon: 'FiMail'
            },
            {
                label: 'Phone',
                value: '+1 (555) 123-4567',
                icon: 'FiPhone'
            },
            {
                label: 'Location',
                value: 'San Francisco, CA',
                icon: 'FiMapPin'
            }
        ],
        hours: {
            title: 'Office Hours',
            schedule: [
                'Monday - Friday: 9:00 AM - 6:00 PM',
                'Saturday: 10:00 AM - 4:00 PM',
                'Sunday: Closed'
            ]
        }
    },

    // ===== FOOTER =====
    footer: {
        description: 'Transform your project management with the most intuitive and powerful software for modern teams.',
        links: {
            product: [
                { name: 'Features', href: '/features' },
                { name: 'Pricing', href: '/pricing' },
                { name: 'Integrations', href: '#' },
                { name: 'Changelog', href: '#' }
            ],
            company: [
                { name: 'About', href: '/about' },
                { name: 'Careers', href: '#' },
                { name: 'Blog', href: '/blog' },
                { name: 'Press', href: '#' }
            ],
            resources: [
                { name: 'Documentation', href: '#' },
                { name: 'Help Center', href: '#' },
                { name: 'Community', href: '#' },
                { name: 'Status', href: '#' }
            ],
            legal: [
                { name: 'Privacy Policy', href: '#' },
                { name: 'Terms of Service', href: '#' },
                { name: 'Security', href: '#' },
                { name: 'Cookie Policy', href: '#' }
            ]
        },
        social: [
            { name: 'Twitter', href: '#', icon: 'FiTwitter' },
            { name: 'GitHub', href: '#', icon: 'FiGithub' },
            { name: 'LinkedIn', href: '#', icon: 'FiLinkedin' },
            { name: 'YouTube', href: '#', icon: 'FiYoutube' }
        ]
    }
}