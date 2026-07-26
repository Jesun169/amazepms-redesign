import { gsap } from 'gsap'

export const fadeIn = (element, duration = 0.8, delay = 0) => {
    return gsap.fromTo(element,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration, delay, ease: 'power3.out' }
    )
}

export const fadeOut = (element, duration = 0.8) => {
    return gsap.to(element, {
        opacity: 0,
        y: -30,
        duration,
        ease: 'power3.in',
    })
}

export const scaleIn = (element, duration = 0.8, delay = 0) => {
    return gsap.fromTo(element,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration, delay, ease: 'back.out(1.7)' }
    )
}

export const slideIn = (element, direction = 'left', duration = 0.8, delay = 0) => {
    const directions = {
        left: { x: -100, y: 0 },
        right: { x: 100, y: 0 },
        up: { x: 0, y: 100 },
        down: { x: 0, y: -100 },
    }

    const from = directions[direction] || directions.left

    return gsap.fromTo(element,
        { opacity: 0, ...from },
        { opacity: 1, x: 0, y: 0, duration, delay, ease: 'power3.out' }
    )
}

export const staggerChildren = (elements, animation, stagger = 0.1) => {
    return gsap.to(elements, {
        ...animation,
        stagger,
        ease: 'power3.out',
    })
}

export const createScrollTrigger = (element, animation, options = {}) => {
    return gsap.to(element, {
        ...animation,
        scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reset',
            ...options,
        },
    })
}

export const parallax = (element, speed = 0.5) => {
    return gsap.to(element, {
        y: (i, el) => -el.offsetHeight * speed,
        ease: 'none',
        scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
        },
    })
}

export const typingEffect = (element, text, duration = 2) => {
    const chars = text.split('')
    element.textContent = ''

    return gsap.to(element, {
        duration,
        ease: 'none',
        onUpdate: () => {
            const progress = element._gsap.progress()
            const index = Math.floor(progress * chars.length)
            element.textContent = chars.slice(0, index).join('')
        },
    })
}