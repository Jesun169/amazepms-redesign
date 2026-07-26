export const animationConfig = {
    default: {
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
    },
    hero: {
        title: {
            duration: 1.2,
            delay: 0.3,
            ease: 'power4.out',
        },
        subtitle: {
            duration: 0.8,
            delay: 0.5,
            ease: 'power3.out',
        },
        cta: {
            duration: 0.8,
            delay: 0.8,
            ease: 'power3.out',
        },
    },
    features: {
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
    },
    pricing: {
        stagger: 0.15,
        duration: 0.8,
        ease: 'back.out(1.7)',
    },
    testimonials: {
        duration: 0.6,
        ease: 'power3.out',
    },
    scroll: {
        trigger: 'top 85%',
        toggleActions: 'play none none reset',
    },
    micro: {
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 },
        },
        tap: {
            scale: 0.95,
            transition: { duration: 0.1 },
        },
    },
}