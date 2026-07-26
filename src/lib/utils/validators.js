export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
}

export const validatePhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    return re.test(phone)
}

export const validateUrl = (url) => {
    try {
        new URL(url)
        return true
    } catch {
        return false
    }
}

export const validatePassword = (password) => {
    const requirements = {
        minLength: password.length >= 8,
        hasUpperCase: /[A-Z]/.test(password),
        hasLowerCase: /[a-z]/.test(password),
        hasNumber: /[0-9]/.test(password),
        hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    }

    return {
        isValid: Object.values(requirements).every(Boolean),
        requirements,
    }
}

export const validateForm = (data, rules) => {
    const errors = {}

    Object.keys(rules).forEach(field => {
        const value = data[field]
        const rule = rules[field]

        if (rule.required && !value) {
            errors[field] = `${field} is required`
        }

        if (rule.email && !validateEmail(value)) {
            errors[field] = 'Invalid email address'
        }

        if (rule.minLength && value.length < rule.minLength) {
            errors[field] = `Minimum length is ${rule.minLength}`
        }

        if (rule.maxLength && value.length > rule.maxLength) {
            errors[field] = `Maximum length is ${rule.maxLength}`
        }

        if (rule.pattern && !rule.pattern.test(value)) {
            errors[field] = 'Invalid format'
        }
    })

    return errors
}